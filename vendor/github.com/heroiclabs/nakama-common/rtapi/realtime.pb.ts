/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufTimestamp from "../../../../../build/grpc-gateway-v2.3.0/third_party/googleapis/google/protobuf/timestamp.pb"
import * as GoogleProtobufWrappers from "../../../../../build/grpc-gateway-v2.3.0/third_party/googleapis/google/protobuf/wrappers.pb"
import * as NakamaApiApi from "../../../../../vendor/github.com/heroiclabs/nakama-common/api/api.pb"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);

export enum ChannelJoinType {
  TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
  ROOM = "ROOM",
  DIRECT_MESSAGE = "DIRECT_MESSAGE",
  GROUP = "GROUP",
}

export enum ErrorCode {
  RUNTIME_EXCEPTION = "RUNTIME_EXCEPTION",
  UNRECOGNIZED_PAYLOAD = "UNRECOGNIZED_PAYLOAD",
  MISSING_PAYLOAD = "MISSING_PAYLOAD",
  BAD_INPUT = "BAD_INPUT",
  MATCH_NOT_FOUND = "MATCH_NOT_FOUND",
  MATCH_JOIN_REJECTED = "MATCH_JOIN_REJECTED",
  RUNTIME_FUNCTION_NOT_FOUND = "RUNTIME_FUNCTION_NOT_FOUND",
  RUNTIME_FUNCTION_EXCEPTION = "RUNTIME_FUNCTION_EXCEPTION",
}


type BaseEnvelope = {
  cid?: string
}

export type Envelope = BaseEnvelope
  & OneOf<{ channel: Channel; channel_join: ChannelJoin; channel_leave: ChannelLeave; channel_message: NakamaApiApi.ChannelMessage; channel_message_ack: ChannelMessageAck; channel_message_send: ChannelMessageSend; channel_message_update: ChannelMessageUpdate; channel_message_remove: ChannelMessageRemove; channel_presence_event: ChannelPresenceEvent; error: Error; match: Match; match_create: MatchCreate; match_data: MatchData; match_data_send: MatchDataSend; match_join: MatchJoin; match_leave: MatchLeave; match_presence_event: MatchPresenceEvent; matchmaker_add: MatchmakerAdd; matchmaker_matched: MatchmakerMatched; matchmaker_remove: MatchmakerRemove; matchmaker_ticket: MatchmakerTicket; notifications: Notifications; rpc: NakamaApiApi.Rpc; status: Status; status_follow: StatusFollow; status_presence_event: StatusPresenceEvent; status_unfollow: StatusUnfollow; status_update: StatusUpdate; stream_data: StreamData; stream_presence_event: StreamPresenceEvent; ping: Ping; pong: Pong; party: Party; party_create: PartyCreate; party_join: PartyJoin; party_leave: PartyLeave; party_promote: PartyPromote; party_leader: PartyLeader; party_accept: PartyAccept; party_remove: PartyRemove; party_close: PartyClose; party_join_request_list: PartyJoinRequestList; party_join_request: PartyJoinRequest; party_matchmaker_add: PartyMatchmakerAdd; party_matchmaker_remove: PartyMatchmakerRemove; party_matchmaker_ticket: PartyMatchmakerTicket; party_data: PartyData; party_data_send: PartyDataSend; party_presence_event: PartyPresenceEvent }>

export type Channel = {
  id?: string
  presences?: UserPresence[]
  self?: UserPresence
  room_name?: string
  group_id?: string
  user_id_one?: string
  user_id_two?: string
}

export type ChannelJoin = {
  target?: string
  type?: number
  persistence?: GoogleProtobufWrappers.BoolValue
  hidden?: GoogleProtobufWrappers.BoolValue
}

export type ChannelLeave = {
  channel_id?: string
}

export type ChannelMessageAck = {
  channel_id?: string
  message_id?: string
  code?: GoogleProtobufWrappers.Int32Value
  username?: string
  create_time?: GoogleProtobufTimestamp.Timestamp
  update_time?: GoogleProtobufTimestamp.Timestamp
  persistent?: GoogleProtobufWrappers.BoolValue
  room_name?: string
  group_id?: string
  user_id_one?: string
  user_id_two?: string
}

export type ChannelMessageSend = {
  channel_id?: string
  content?: string
}

export type ChannelMessageUpdate = {
  channel_id?: string
  message_id?: string
  content?: string
}

export type ChannelMessageRemove = {
  channel_id?: string
  message_id?: string
}

export type ChannelPresenceEvent = {
  channel_id?: string
  joins?: UserPresence[]
  leaves?: UserPresence[]
  room_name?: string
  group_id?: string
  user_id_one?: string
  user_id_two?: string
}

export type Error = {
  code?: number
  message?: string
  context?: {[key: string]: string}
}

export type Match = {
  match_id?: string
  authoritative?: boolean
  label?: GoogleProtobufWrappers.StringValue
  size?: number
  presences?: UserPresence[]
  self?: UserPresence
}

export type MatchCreate = {
  name?: string
}

export type MatchData = {
  match_id?: string
  presence?: UserPresence
  op_code?: string
  data?: Uint8Array
  reliable?: boolean
}

export type MatchDataSend = {
  match_id?: string
  op_code?: string
  data?: Uint8Array
  presences?: UserPresence[]
  reliable?: boolean
}


type BaseMatchJoin = {
  metadata?: {[key: string]: string}
}

export type MatchJoin = BaseMatchJoin
  & OneOf<{ match_id: string; token: string }>

export type MatchLeave = {
  match_id?: string
}

export type MatchPresenceEvent = {
  match_id?: string
  joins?: UserPresence[]
  leaves?: UserPresence[]
}

export type MatchmakerAdd = {
  min_count?: number
  max_count?: number
  query?: string
  string_properties?: {[key: string]: string}
  numeric_properties?: {[key: string]: number}
}

export type MatchmakerMatchedMatchmakerUser = {
  presence?: UserPresence
  party_id?: string
  string_properties?: {[key: string]: string}
  numeric_properties?: {[key: string]: number}
}


type BaseMatchmakerMatched = {
  ticket?: string
  users?: MatchmakerMatchedMatchmakerUser[]
  self?: MatchmakerMatchedMatchmakerUser
}

export type MatchmakerMatched = BaseMatchmakerMatched
  & OneOf<{ match_id: string; token: string }>

export type MatchmakerRemove = {
  ticket?: string
}

export type MatchmakerTicket = {
  ticket?: string
}

export type Notifications = {
  notifications?: NakamaApiApi.Notification[]
}

export type Party = {
  party_id?: string
  open?: boolean
  max_size?: number
  self?: UserPresence
  leader?: UserPresence
  presences?: UserPresence[]
}

export type PartyCreate = {
  open?: boolean
  max_size?: number
}

export type PartyJoin = {
  party_id?: string
}

export type PartyLeave = {
  party_id?: string
}

export type PartyPromote = {
  party_id?: string
  presence?: UserPresence
}

export type PartyLeader = {
  party_id?: string
  presence?: UserPresence
}

export type PartyAccept = {
  party_id?: string
  presence?: UserPresence
}

export type PartyRemove = {
  party_id?: string
  presence?: UserPresence
}

export type PartyClose = {
  party_id?: string
}

export type PartyJoinRequestList = {
  party_id?: string
}

export type PartyJoinRequest = {
  party_id?: string
  presences?: UserPresence[]
}

export type PartyMatchmakerAdd = {
  party_id?: string
  min_count?: number
  max_count?: number
  query?: string
  string_properties?: {[key: string]: string}
  numeric_properties?: {[key: string]: number}
}

export type PartyMatchmakerRemove = {
  party_id?: string
  ticket?: string
}

export type PartyMatchmakerTicket = {
  party_id?: string
  ticket?: string
}

export type PartyData = {
  party_id?: string
  presence?: UserPresence
  op_code?: string
  data?: Uint8Array
}

export type PartyDataSend = {
  party_id?: string
  op_code?: string
  data?: Uint8Array
}

export type PartyPresenceEvent = {
  party_id?: string
  joins?: UserPresence[]
  leaves?: UserPresence[]
}

export type Ping = {
}

export type Pong = {
}

export type Status = {
  presences?: UserPresence[]
}

export type StatusFollow = {
  user_ids?: string[]
  usernames?: string[]
}

export type StatusPresenceEvent = {
  joins?: UserPresence[]
  leaves?: UserPresence[]
}

export type StatusUnfollow = {
  user_ids?: string[]
}

export type StatusUpdate = {
  status?: GoogleProtobufWrappers.StringValue
}

export type Stream = {
  mode?: number
  subject?: string
  subcontext?: string
  label?: string
}

export type StreamData = {
  stream?: Stream
  sender?: UserPresence
  data?: string
  reliable?: boolean
}

export type StreamPresenceEvent = {
  stream?: Stream
  joins?: UserPresence[]
  leaves?: UserPresence[]
}

export type UserPresence = {
  user_id?: string
  session_id?: string
  username?: string
  persistence?: boolean
  status?: GoogleProtobufWrappers.StringValue
}