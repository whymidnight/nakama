/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufTimestamp from "../../../../../build/grpc-gateway-v2.3.0/third_party/googleapis/google/protobuf/timestamp.pb"
import * as GoogleProtobufWrappers from "../../../../../build/grpc-gateway-v2.3.0/third_party/googleapis/google/protobuf/wrappers.pb"

export enum Operator {
  NO_OVERRIDE = "NO_OVERRIDE",
  BEST = "BEST",
  SET = "SET",
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

export enum FriendState {
  FRIEND = "FRIEND",
  INVITE_SENT = "INVITE_SENT",
  INVITE_RECEIVED = "INVITE_RECEIVED",
  BLOCKED = "BLOCKED",
}

export enum GroupUserListGroupUserState {
  SUPERADMIN = "SUPERADMIN",
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  JOIN_REQUEST = "JOIN_REQUEST",
}

export enum UserGroupListUserGroupState {
  SUPERADMIN = "SUPERADMIN",
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
  JOIN_REQUEST = "JOIN_REQUEST",
}

export enum ValidatedPurchaseStore {
  APPLE_APP_STORE = "APPLE_APP_STORE",
  GOOGLE_PLAY_STORE = "GOOGLE_PLAY_STORE",
  HUAWEI_APP_GALLERY = "HUAWEI_APP_GALLERY",
}

export enum ValidatedPurchaseEnvironment {
  UNKNOWN = "UNKNOWN",
  SANDBOX = "SANDBOX",
  PRODUCTION = "PRODUCTION",
}

export type Account = {
  user?: User
  wallet?: string
  email?: string
  devices?: AccountDevice[]
  custom_id?: string
  verify_time?: GoogleProtobufTimestamp.Timestamp
  disable_time?: GoogleProtobufTimestamp.Timestamp
}

export type AccountRefresh = {
  token?: string
  vars?: {[key: string]: string}
}

export type AccountApple = {
  token?: string
  vars?: {[key: string]: string}
}

export type AccountCustom = {
  id?: string
  vars?: {[key: string]: string}
}

export type AccountDevice = {
  id?: string
  vars?: {[key: string]: string}
}

export type AccountEmail = {
  email?: string
  password?: string
  vars?: {[key: string]: string}
}

export type AccountFacebook = {
  token?: string
  vars?: {[key: string]: string}
}

export type AccountFacebookInstantGame = {
  signed_player_info?: string
  vars?: {[key: string]: string}
}

export type AccountGameCenter = {
  player_id?: string
  bundle_id?: string
  timestamp_seconds?: string
  salt?: string
  signature?: string
  public_key_url?: string
  vars?: {[key: string]: string}
}

export type AccountGoogle = {
  token?: string
  vars?: {[key: string]: string}
}

export type AccountSteam = {
  token?: string
  vars?: {[key: string]: string}
}

export type AddFriendsRequest = {
  ids?: string[]
  usernames?: string[]
}

export type AddGroupUsersRequest = {
  group_id?: string
  user_ids?: string[]
}

export type SessionRefreshRequest = {
  token?: string
  vars?: {[key: string]: string}
}

export type SessionLogoutRequest = {
  token?: string
  refresh_token?: string
}

export type AuthenticateAppleRequest = {
  account?: AccountApple
  create?: GoogleProtobufWrappers.BoolValue
  username?: string
}

export type AuthenticateCustomRequest = {
  account?: AccountCustom
  create?: GoogleProtobufWrappers.BoolValue
  username?: string
}

export type AuthenticateDeviceRequest = {
  account?: AccountDevice
  create?: GoogleProtobufWrappers.BoolValue
  username?: string
}

export type AuthenticateEmailRequest = {
  account?: AccountEmail
  create?: GoogleProtobufWrappers.BoolValue
  username?: string
}

export type AuthenticateFacebookRequest = {
  account?: AccountFacebook
  create?: GoogleProtobufWrappers.BoolValue
  username?: string
  sync?: GoogleProtobufWrappers.BoolValue
}

export type AuthenticateFacebookInstantGameRequest = {
  account?: AccountFacebookInstantGame
  create?: GoogleProtobufWrappers.BoolValue
  username?: string
}

export type AuthenticateGameCenterRequest = {
  account?: AccountGameCenter
  create?: GoogleProtobufWrappers.BoolValue
  username?: string
}

export type AuthenticateGoogleRequest = {
  account?: AccountGoogle
  create?: GoogleProtobufWrappers.BoolValue
  username?: string
}

export type AuthenticateSteamRequest = {
  account?: AccountSteam
  create?: GoogleProtobufWrappers.BoolValue
  username?: string
  sync?: GoogleProtobufWrappers.BoolValue
}

export type BanGroupUsersRequest = {
  group_id?: string
  user_ids?: string[]
}

export type BlockFriendsRequest = {
  ids?: string[]
  usernames?: string[]
}

export type ChannelMessage = {
  channel_id?: string
  message_id?: string
  code?: GoogleProtobufWrappers.Int32Value
  sender_id?: string
  username?: string
  content?: string
  create_time?: GoogleProtobufTimestamp.Timestamp
  update_time?: GoogleProtobufTimestamp.Timestamp
  persistent?: GoogleProtobufWrappers.BoolValue
  room_name?: string
  group_id?: string
  user_id_one?: string
  user_id_two?: string
}

export type ChannelMessageList = {
  messages?: ChannelMessage[]
  next_cursor?: string
  prev_cursor?: string
  cacheable_cursor?: string
}

export type CreateGroupRequest = {
  name?: string
  description?: string
  lang_tag?: string
  avatar_url?: string
  open?: boolean
  max_count?: number
}

export type DeleteFriendsRequest = {
  ids?: string[]
  usernames?: string[]
}

export type DeleteGroupRequest = {
  group_id?: string
}

export type DeleteLeaderboardRecordRequest = {
  leaderboard_id?: string
}

export type DeleteNotificationsRequest = {
  ids?: string[]
}

export type DeleteStorageObjectId = {
  collection?: string
  key?: string
  version?: string
}

export type DeleteStorageObjectsRequest = {
  object_ids?: DeleteStorageObjectId[]
}

export type Event = {
  name?: string
  properties?: {[key: string]: string}
  timestamp?: GoogleProtobufTimestamp.Timestamp
  external?: boolean
}

export type Friend = {
  user?: User
  state?: GoogleProtobufWrappers.Int32Value
  update_time?: GoogleProtobufTimestamp.Timestamp
}

export type FriendList = {
  friends?: Friend[]
  cursor?: string
}

export type GetUsersRequest = {
  ids?: string[]
  usernames?: string[]
  facebook_ids?: string[]
}

export type Group = {
  id?: string
  creator_id?: string
  name?: string
  description?: string
  lang_tag?: string
  metadata?: string
  avatar_url?: string
  open?: GoogleProtobufWrappers.BoolValue
  edge_count?: number
  max_count?: number
  create_time?: GoogleProtobufTimestamp.Timestamp
  update_time?: GoogleProtobufTimestamp.Timestamp
}

export type GroupList = {
  groups?: Group[]
  cursor?: string
}

export type GroupUserListGroupUser = {
  user?: User
  state?: GoogleProtobufWrappers.Int32Value
}

export type GroupUserList = {
  group_users?: GroupUserListGroupUser[]
  cursor?: string
}

export type ImportFacebookFriendsRequest = {
  account?: AccountFacebook
  reset?: GoogleProtobufWrappers.BoolValue
}

export type ImportSteamFriendsRequest = {
  account?: AccountSteam
  reset?: GoogleProtobufWrappers.BoolValue
}

export type JoinGroupRequest = {
  group_id?: string
}

export type JoinTournamentRequest = {
  tournament_id?: string
}

export type KickGroupUsersRequest = {
  group_id?: string
  user_ids?: string[]
}

export type Leaderboard = {
  id?: string
  sort_order?: number
  operator?: Operator
  prev_reset?: number
  next_reset?: number
  metadata?: string
  create_time?: GoogleProtobufTimestamp.Timestamp
  authoritative?: boolean
}

export type LeaderboardList = {
  leaderboards?: Leaderboard[]
  cursor?: string
}

export type LeaderboardRecord = {
  leaderboard_id?: string
  owner_id?: string
  username?: GoogleProtobufWrappers.StringValue
  score?: string
  subscore?: string
  num_score?: number
  metadata?: string
  create_time?: GoogleProtobufTimestamp.Timestamp
  update_time?: GoogleProtobufTimestamp.Timestamp
  expiry_time?: GoogleProtobufTimestamp.Timestamp
  rank?: string
  max_num_score?: number
}

export type LeaderboardRecordList = {
  records?: LeaderboardRecord[]
  owner_records?: LeaderboardRecord[]
  next_cursor?: string
  prev_cursor?: string
}

export type LeaveGroupRequest = {
  group_id?: string
}

export type LinkFacebookRequest = {
  account?: AccountFacebook
  sync?: GoogleProtobufWrappers.BoolValue
}

export type LinkSteamRequest = {
  account?: AccountSteam
  sync?: GoogleProtobufWrappers.BoolValue
}

export type ListChannelMessagesRequest = {
  channel_id?: string
  limit?: GoogleProtobufWrappers.Int32Value
  forward?: GoogleProtobufWrappers.BoolValue
  cursor?: string
}

export type ListFriendsRequest = {
  limit?: GoogleProtobufWrappers.Int32Value
  state?: GoogleProtobufWrappers.Int32Value
  cursor?: string
}

export type ListGroupsRequest = {
  name?: string
  cursor?: string
  limit?: GoogleProtobufWrappers.Int32Value
  lang_tag?: string
  members?: GoogleProtobufWrappers.Int32Value
  open?: GoogleProtobufWrappers.BoolValue
}

export type ListGroupUsersRequest = {
  group_id?: string
  limit?: GoogleProtobufWrappers.Int32Value
  state?: GoogleProtobufWrappers.Int32Value
  cursor?: string
}

export type ListLeaderboardRecordsAroundOwnerRequest = {
  leaderboard_id?: string
  limit?: GoogleProtobufWrappers.UInt32Value
  owner_id?: string
  expiry?: GoogleProtobufWrappers.Int64Value
}

export type ListLeaderboardRecordsRequest = {
  leaderboard_id?: string
  owner_ids?: string[]
  limit?: GoogleProtobufWrappers.Int32Value
  cursor?: string
  expiry?: GoogleProtobufWrappers.Int64Value
}

export type ListMatchesRequest = {
  limit?: GoogleProtobufWrappers.Int32Value
  authoritative?: GoogleProtobufWrappers.BoolValue
  label?: GoogleProtobufWrappers.StringValue
  min_size?: GoogleProtobufWrappers.Int32Value
  max_size?: GoogleProtobufWrappers.Int32Value
  query?: GoogleProtobufWrappers.StringValue
}

export type ListNotificationsRequest = {
  limit?: GoogleProtobufWrappers.Int32Value
  cacheable_cursor?: string
}

export type ListStorageObjectsRequest = {
  user_id?: string
  collection?: string
  limit?: GoogleProtobufWrappers.Int32Value
  cursor?: string
}

export type ListTournamentRecordsAroundOwnerRequest = {
  tournament_id?: string
  limit?: GoogleProtobufWrappers.UInt32Value
  owner_id?: string
  expiry?: GoogleProtobufWrappers.Int64Value
}

export type ListTournamentRecordsRequest = {
  tournament_id?: string
  owner_ids?: string[]
  limit?: GoogleProtobufWrappers.Int32Value
  cursor?: string
  expiry?: GoogleProtobufWrappers.Int64Value
}

export type ListTournamentsRequest = {
  category_start?: GoogleProtobufWrappers.UInt32Value
  category_end?: GoogleProtobufWrappers.UInt32Value
  start_time?: GoogleProtobufWrappers.UInt32Value
  end_time?: GoogleProtobufWrappers.UInt32Value
  limit?: GoogleProtobufWrappers.Int32Value
  cursor?: string
}

export type ListUserGroupsRequest = {
  user_id?: string
  limit?: GoogleProtobufWrappers.Int32Value
  state?: GoogleProtobufWrappers.Int32Value
  cursor?: string
}

export type Match = {
  match_id?: string
  authoritative?: boolean
  label?: GoogleProtobufWrappers.StringValue
  size?: number
  tick_rate?: number
  handler_name?: string
}

export type MatchList = {
  matches?: Match[]
}

export type Notification = {
  id?: string
  subject?: string
  content?: string
  code?: number
  sender_id?: string
  create_time?: GoogleProtobufTimestamp.Timestamp
  persistent?: boolean
}

export type NotificationList = {
  notifications?: Notification[]
  cacheable_cursor?: string
}

export type PromoteGroupUsersRequest = {
  group_id?: string
  user_ids?: string[]
}

export type DemoteGroupUsersRequest = {
  group_id?: string
  user_ids?: string[]
}

export type ReadStorageObjectId = {
  collection?: string
  key?: string
  user_id?: string
}

export type ReadStorageObjectsRequest = {
  object_ids?: ReadStorageObjectId[]
}

export type Rpc = {
  id?: string
  payload?: string
  http_key?: string
}

export type Session = {
  created?: boolean
  token?: string
  refresh_token?: string
}

export type StorageObject = {
  collection?: string
  key?: string
  user_id?: string
  value?: string
  version?: string
  permission_read?: number
  permission_write?: number
  create_time?: GoogleProtobufTimestamp.Timestamp
  update_time?: GoogleProtobufTimestamp.Timestamp
}

export type StorageObjectAck = {
  collection?: string
  key?: string
  version?: string
  user_id?: string
}

export type StorageObjectAcks = {
  acks?: StorageObjectAck[]
}

export type StorageObjects = {
  objects?: StorageObject[]
}

export type StorageObjectList = {
  objects?: StorageObject[]
  cursor?: string
}

export type Tournament = {
  id?: string
  title?: string
  description?: string
  category?: number
  sort_order?: number
  size?: number
  max_size?: number
  max_num_score?: number
  can_enter?: boolean
  end_active?: number
  next_reset?: number
  metadata?: string
  create_time?: GoogleProtobufTimestamp.Timestamp
  start_time?: GoogleProtobufTimestamp.Timestamp
  end_time?: GoogleProtobufTimestamp.Timestamp
  duration?: number
  start_active?: number
  prev_reset?: number
  operator?: Operator
}

export type TournamentList = {
  tournaments?: Tournament[]
  cursor?: string
}

export type TournamentRecordList = {
  records?: LeaderboardRecord[]
  owner_records?: LeaderboardRecord[]
  next_cursor?: string
  prev_cursor?: string
}

export type UpdateAccountRequest = {
  username?: GoogleProtobufWrappers.StringValue
  display_name?: GoogleProtobufWrappers.StringValue
  avatar_url?: GoogleProtobufWrappers.StringValue
  lang_tag?: GoogleProtobufWrappers.StringValue
  location?: GoogleProtobufWrappers.StringValue
  timezone?: GoogleProtobufWrappers.StringValue
}

export type UpdateGroupRequest = {
  group_id?: string
  name?: GoogleProtobufWrappers.StringValue
  description?: GoogleProtobufWrappers.StringValue
  lang_tag?: GoogleProtobufWrappers.StringValue
  avatar_url?: GoogleProtobufWrappers.StringValue
  open?: GoogleProtobufWrappers.BoolValue
}

export type User = {
  id?: string
  username?: string
  display_name?: string
  avatar_url?: string
  lang_tag?: string
  location?: string
  timezone?: string
  metadata?: string
  facebook_id?: string
  google_id?: string
  gamecenter_id?: string
  steam_id?: string
  online?: boolean
  edge_count?: number
  create_time?: GoogleProtobufTimestamp.Timestamp
  update_time?: GoogleProtobufTimestamp.Timestamp
  facebook_instant_game_id?: string
  apple_id?: string
}

export type UserGroupListUserGroup = {
  group?: Group
  state?: GoogleProtobufWrappers.Int32Value
}

export type UserGroupList = {
  user_groups?: UserGroupListUserGroup[]
  cursor?: string
}

export type Users = {
  users?: User[]
}

export type ValidatePurchaseAppleRequest = {
  receipt?: string
}

export type ValidatePurchaseGoogleRequest = {
  purchase?: string
}

export type ValidatePurchaseHuaweiRequest = {
  purchase?: string
  signature?: string
}

export type ValidatedPurchase = {
  product_id?: string
  transaction_id?: string
  store?: ValidatedPurchaseStore
  purchase_time?: GoogleProtobufTimestamp.Timestamp
  create_time?: GoogleProtobufTimestamp.Timestamp
  update_time?: GoogleProtobufTimestamp.Timestamp
  provider_response?: string
  environment?: ValidatedPurchaseEnvironment
  seen_before?: boolean
}

export type ValidatePurchaseResponse = {
  validated_purchases?: ValidatedPurchase[]
}

export type PurchaseList = {
  validated_purchases?: ValidatedPurchase[]
  cursor?: string
  prev_cursor?: string
}

export type WriteLeaderboardRecordRequestLeaderboardRecordWrite = {
  score?: string
  subscore?: string
  metadata?: string
  operator?: Operator
}

export type WriteLeaderboardRecordRequest = {
  leaderboard_id?: string
  record?: WriteLeaderboardRecordRequestLeaderboardRecordWrite
}

export type WriteStorageObject = {
  collection?: string
  key?: string
  value?: string
  version?: string
  permission_read?: GoogleProtobufWrappers.Int32Value
  permission_write?: GoogleProtobufWrappers.Int32Value
}

export type WriteStorageObjectsRequest = {
  objects?: WriteStorageObject[]
}

export type WriteTournamentRecordRequestTournamentRecordWrite = {
  score?: string
  subscore?: string
  metadata?: string
  operator?: Operator
}

export type WriteTournamentRecordRequest = {
  tournament_id?: string
  record?: WriteTournamentRecordRequestTournamentRecordWrite
}