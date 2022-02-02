import {Injectable, Optional} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {from, Observable} from "rxjs";
import {Subscribable} from "rxjs/src/internal/types";

const DEFAULT_HOST = 'http://127.0.0.1:7120';
const DEFAULT_TIMEOUT_MS = 5000;

let httpClient: HttpClient

export class ConfigParams {
  host: string
  timeoutMs: number
}

export interface InitReq extends RequestInit {
  pathPrefix: string
  input: any
  // deleteParams: Map<string, string>
}

@Injectable({providedIn: 'root'})
export class AngularWrapper {
  private readonly config;
  constructor(private http: HttpClient, @Optional() config: ConfigParams) {
    const defaultConfig: ConfigParams = {
      host: DEFAULT_HOST,
      timeoutMs: DEFAULT_TIMEOUT_MS,
    };
    this.config = config || defaultConfig;
    httpClient = http;
  }

  // need the input obj to reach fetchReq, so we wrap the function and pass the obj through init
  fetch<I,O>(apiFn: (obj: I, init: InitReq) => Subscribable<O>, obj: I): Observable<O> {
    return from(apiFn(obj, {pathPrefix: this.config.host, input: obj}))
  }
}

export function fetchReq<I, O>(path: string, init?: InitReq): Subscribable<O> {
  const {pathPrefix, input, ...req} = init || {}
  const url = pathPrefix ? `${pathPrefix}${path}` : path

  switch (init.method) {
    case "GET":
      return httpClient.get<O>(url)
    case "POST":
      return httpClient.post<O>(url, init.body)
    case "DELETE":
      return httpClient.delete(url)
  }
}


type Primitive = string | boolean | number;
type RequestPayload = Record<string, unknown>;
type FlattenedRequestPayload = Record<string, Primitive | Array<Primitive>>;

/**
 * Checks if given value is a plain object
 * Logic copied and adapted from below source:
 * https://github.com/char0n/ramda-adjunct/blob/master/src/isPlainObj.js
 * @param  {unknown} value
 * @return {boolean}
 */
function isPlainObject(value: unknown): boolean {
  const isObject =
    Object.prototype.toString.call(value).slice(8, -1) === "Object";
  const isObjLike = value !== null && isObject;

  if (!isObjLike || !isObject) {
    return false;
  }

  const proto = Object.getPrototypeOf(value);

  const hasObjectConstructor =
    typeof proto === "object" &&
    proto.constructor === Object.prototype.constructor;

  return hasObjectConstructor;
}

/**
 * Checks if given value is of a primitive type
 * @param  {unknown} value
 * @return {boolean}
 */
function isPrimitive(value: unknown): boolean {
  return ["string", "number", "boolean"].some(t => typeof value === t);
}

/**
 * Checks if given primitive is zero-value
 * @param  {Primitive} value
 * @return {boolean}
 */
function isZeroValuePrimitive(value: Primitive): boolean {
  return value === false || value === 0 || value === "";
}

/**
 * Flattens a deeply nested request payload and returns an object
 * with only primitive values and non-empty array of primitive values
 * as per https://github.com/googleapis/googleapis/blob/master/google/api/http.proto
 * @param  {RequestPayload} requestPayload
 * @param  {String} path
 * @return {FlattenedRequestPayload>}
 */
function flattenRequestPayload<T extends RequestPayload>(
  requestPayload: T,
  path: string = ""
): FlattenedRequestPayload {
  return Object.keys(requestPayload).reduce(
    (acc: T, key: string): T => {
      const value = requestPayload[key];
      const newPath = path ? [path, key].join(".") : key;

      const isNonEmptyPrimitiveArray =
        Array.isArray(value) &&
        value.every(v => isPrimitive(v)) &&
        value.length > 0;

      const isNonZeroValuePrimitive =
        isPrimitive(value) && !isZeroValuePrimitive(value as Primitive);

      let objectToMerge = {};

      if (isPlainObject(value)) {
        objectToMerge = flattenRequestPayload(value as RequestPayload, newPath);
      } else if (isNonZeroValuePrimitive || isNonEmptyPrimitiveArray) {
        objectToMerge = { [newPath]: value };
      }

      return { ...acc, ...objectToMerge };
    },
    {} as T
  ) as FlattenedRequestPayload;
}

/**
 * Renders a deeply nested request payload into a string of URL search
 * parameters by first flattening the request payload and then removing keys
 * which are already present in the URL path.
 * @param  {RequestPayload} requestPayload
 * @param  {string[]} urlPathParams
 * @return {string}
 */
export function renderURLSearchParams<T extends RequestPayload>(
  requestPayload: T,
  urlPathParams: string[] = []
): string {
  const flattenedRequestPayload = flattenRequestPayload(requestPayload);

  const urlSearchParams = Object.keys(flattenedRequestPayload).reduce(
    (acc: string[][], key: string): string[][] => {
      // key should not be present in the url path as a parameter
      const value = flattenedRequestPayload[key];
      if (urlPathParams.find(f => f === key)) {
        return acc;
      }
      return Array.isArray(value)
        ? [...acc, ...value.map(m => [key, m.toString()])]
        : (acc = [...acc, [key, value.toString()]]);
    },
    [] as string[][]
  );

  return new URLSearchParams(urlSearchParams).toString();
}
