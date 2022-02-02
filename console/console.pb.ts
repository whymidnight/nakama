/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufEmpty from "../build/grpc-gateway-v2.3.0/third_party/googleapis/google/protobuf/empty.pb"
import * as GoogleProtobufTimestamp from "../build/grpc-gateway-v2.3.0/third_party/googleapis/google/protobuf/timestamp.pb"
import * as GoogleProtobufWrappers from "../build/grpc-gateway-v2.3.0/third_party/googleapis/google/protobuf/wrappers.pb"
import * as NakamaApiApi from "../vendor/github.com/heroiclabs/nakama-common/api/api.pb"
import * as NakamaRealtimeRealtime from "../vendor/github.com/heroiclabs/nakama-common/rtapi/realtime.pb"
import * as fm from "./fetch.pb"

export enum UserRole {
  USER_ROLE_UNKNOWN = "USER_ROLE_UNKNOWN",
  USER_ROLE_ADMIN = "USER_ROLE_ADMIN",
  USER_ROLE_DEVELOPER = "USER_ROLE_DEVELOPER",
  USER_ROLE_MAINTAINER = "USER_ROLE_MAINTAINER",
  USER_ROLE_READONLY = "USER_ROLE_READONLY",
}

export enum StatusHealth {
  STATUS_HEALTH_OK = "STATUS_HEALTH_OK",
  STATUS_HEALTH_ERROR = "STATUS_HEALTH_ERROR",
  STATUS_HEALTH_CONNECTING = "STATUS_HEALTH_CONNECTING",
  STATUS_HEALTH_DISCONNECTING = "STATUS_HEALTH_DISCONNECTING",
}

export type ApiEndpointDescriptor = {
  method?: string
  body_template?: string
}

export type Account = {
  account?: NakamaApiApi.Account
  disable_time?: GoogleProtobufTimestamp.Timestamp
}

export type AccountDeleteRequest = {
  id?: string
  record_deletion?: GoogleProtobufWrappers.BoolValue
}

export type AccountExport = {
  account?: NakamaApiApi.Account
  objects?: NakamaApiApi.StorageObject[]
  friends?: NakamaApiApi.Friend[]
  groups?: NakamaApiApi.Group[]
  messages?: NakamaApiApi.ChannelMessage[]
  leaderboard_records?: NakamaApiApi.LeaderboardRecord[]
  notifications?: NakamaApiApi.Notification[]
  wallet_ledgers?: WalletLedger[]
}

export type AccountId = {
  id?: string
}

export type AccountList = {
  users?: NakamaApiApi.User[]
  total_count?: number
  next_cursor?: string
}

export type GroupId = {
  id?: string
}

export type GroupList = {
  groups?: NakamaApiApi.Group[]
  total_count?: number
  next_cursor?: string
}

export type GroupExport = {
  group?: NakamaApiApi.Group
  members?: NakamaApiApi.GroupUserListGroupUser[]
}

export type AddUserRequest = {
  username?: string
  password?: string
  email?: string
  role?: UserRole
  newsletter_subscription?: boolean
}

export type ApiEndpointList = {
  endpoints?: ApiEndpointDescriptor[]
  rpc_endpoints?: ApiEndpointDescriptor[]
}

export type AuthenticateRequest = {
  username?: string
  password?: string
}

export type CallApiEndpointRequest = {
  method?: string
  body?: string
  user_id?: string
}

export type CallApiEndpointResponse = {
  body?: string
  error_message?: string
}

export type ConfigWarning = {
  field?: string
  message?: string
}

export type Config = {
  config?: string
  warnings?: ConfigWarning[]
  server_version?: string
}

export type ConsoleSession = {
  token?: string
}

export type DeleteFriendRequest = {
  id?: string
  friend_id?: string
}

export type DeleteGroupRequest = {
  id?: string
}

export type DeleteGroupUserRequest = {
  id?: string
  group_id?: string
}

export type UpdateGroupUserStateRequest = {
  id?: string
  group_id?: string
}

export type DeleteLeaderboardRecordRequest = {
  id?: string
  owner_id?: string
}

export type DeleteStorageObjectRequest = {
  collection?: string
  key?: string
  user_id?: string
  version?: string
}

export type DeleteWalletLedgerRequest = {
  id?: string
  wallet_id?: string
}

export type Leaderboard = {
  id?: string
  title?: string
  description?: string
  category?: number
  sort_order?: number
  size?: number
  max_size?: number
  max_num_score?: number
  operator?: number
  end_active?: number
  reset_schedule?: string
  metadata?: string
  create_time?: GoogleProtobufTimestamp.Timestamp
  start_time?: GoogleProtobufTimestamp.Timestamp
  end_time?: GoogleProtobufTimestamp.Timestamp
  duration?: number
  start_active?: number
  join_required?: boolean
  authoritative?: boolean
  tournament?: boolean
}

export type LeaderboardList = {
  leaderboards?: Leaderboard[]
}

export type LeaderboardRequest = {
  id?: string
}

export type ListAccountsRequest = {
  filter?: string
  tombstones?: boolean
  cursor?: string
}

export type ListGroupsRequest = {
  filter?: string
  cursor?: string
}

export type ListPurchasesRequest = {
  user_id?: string
  limit?: number
  cursor?: string
}

export type ListStorageRequest = {
  user_id?: string
  key?: string
  collection?: string
  cursor?: string
}

export type MatchState = {
  presences?: NakamaRealtimeRealtime.UserPresence[]
  tick?: string
  state?: string
}

export type MatchStateRequest = {
  id?: string
}

export type StorageList = {
  objects?: NakamaApiApi.StorageObject[]
  total_count?: number
  next_cursor?: string
}

export type StorageCollectionsList = {
  collections?: string[]
}

export type UnlinkDeviceRequest = {
  id?: string
  device_id?: string
}

export type UpdateAccountRequest = {
  id?: string
  username?: GoogleProtobufWrappers.StringValue
  display_name?: GoogleProtobufWrappers.StringValue
  metadata?: GoogleProtobufWrappers.StringValue
  avatar_url?: GoogleProtobufWrappers.StringValue
  lang_tag?: GoogleProtobufWrappers.StringValue
  location?: GoogleProtobufWrappers.StringValue
  timezone?: GoogleProtobufWrappers.StringValue
  custom_id?: GoogleProtobufWrappers.StringValue
  email?: GoogleProtobufWrappers.StringValue
  password?: GoogleProtobufWrappers.StringValue
  device_ids?: {[key: string]: string}
  wallet?: GoogleProtobufWrappers.StringValue
}

export type UpdateGroupRequest = {
  id?: string
  name?: GoogleProtobufWrappers.StringValue
  description?: GoogleProtobufWrappers.StringValue
  lang_tag?: GoogleProtobufWrappers.StringValue
  metadata?: GoogleProtobufWrappers.StringValue
  avatar_url?: GoogleProtobufWrappers.StringValue
  open?: GoogleProtobufWrappers.BoolValue
  max_count?: GoogleProtobufWrappers.Int32Value
}

export type Username = {
  username?: string
}

export type UserListUser = {
  username?: string
  email?: string
  role?: UserRole
}

export type UserList = {
  users?: UserListUser[]
}

export type StatusListStatus = {
  name?: string
  health?: StatusHealth
  session_count?: number
  presence_count?: number
  match_count?: number
  goroutine_count?: number
  avg_latency_ms?: number
  avg_rate_sec?: number
  avg_input_kbs?: number
  avg_output_kbs?: number
}

export type StatusList = {
  nodes?: StatusListStatus[]
  timestamp?: GoogleProtobufTimestamp.Timestamp
}

export type RuntimeInfoModuleInfo = {
  path?: string
  mod_time?: GoogleProtobufTimestamp.Timestamp
}

export type RuntimeInfo = {
  lua_rpc_functions?: string[]
  go_rpc_functions?: string[]
  js_rpc_functions?: string[]
  go_modules?: RuntimeInfoModuleInfo[]
  lua_modules?: RuntimeInfoModuleInfo[]
  js_modules?: RuntimeInfoModuleInfo[]
}

export type WalletLedger = {
  id?: string
  user_id?: string
  changeset?: string
  metadata?: string
  create_time?: GoogleProtobufTimestamp.Timestamp
  update_time?: GoogleProtobufTimestamp.Timestamp
}

export type WalletLedgerList = {
  items?: WalletLedger[]
  next_cursor?: string
  prev_cursor?: string
}

export type WriteStorageObjectRequest = {
  collection?: string
  key?: string
  user_id?: string
  value?: string
  version?: string
  permission_read?: GoogleProtobufWrappers.Int32Value
  permission_write?: GoogleProtobufWrappers.Int32Value
}

export type GetWalletLedgerRequest = {
  account_id?: string
  limit?: number
  cursor?: string
}

export class Console {
  static Authenticate(req: AuthenticateRequest, initReq?: fm.InitReq): Promise<ConsoleSession> {
    return fm.fetchReq<AuthenticateRequest, ConsoleSession>(`/v2/console/authenticate`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static AddUser(req: AddUserRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AddUserRequest, GoogleProtobufEmpty.Empty>(`/v2/console/user`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static BanAccount(req: AccountId, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountId, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/ban`, {...initReq, method: "POST"})
  }
  static CallApiEndpoint(req: CallApiEndpointRequest, initReq?: fm.InitReq): Promise<CallApiEndpointResponse> {
    return fm.fetchReq<CallApiEndpointRequest, CallApiEndpointResponse>(`/v2/console/api/endpoints/${req["method"]}`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static CallRpcEndpoint(req: CallApiEndpointRequest, initReq?: fm.InitReq): Promise<CallApiEndpointResponse> {
    return fm.fetchReq<CallApiEndpointRequest, CallApiEndpointResponse>(`/v2/console/api/endpoints/rpc/${req["method"]}`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static DeleteAllData(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, GoogleProtobufEmpty.Empty>(`/v2/console`, {...initReq, method: "DELETE"})
  }
  static DeleteAccount(req: AccountDeleteRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountDeleteRequest, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}`, {...initReq, method: "DELETE"})
  }
  static DeleteFriend(req: DeleteFriendRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<DeleteFriendRequest, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/friend/${req["friend_id"]}`, {...initReq, method: "DELETE"})
  }
  static DeleteGroup(req: DeleteGroupRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<DeleteGroupRequest, GoogleProtobufEmpty.Empty>(`/v2/console/group/${req["id"]}`, {...initReq, method: "DELETE"})
  }
  static DeleteGroupUser(req: DeleteGroupUserRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<DeleteGroupUserRequest, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/group/${req["group_id"]}`, {...initReq, method: "DELETE"})
  }
  static DeleteStorage(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, GoogleProtobufEmpty.Empty>(`/v2/console/storage`, {...initReq, method: "DELETE"})
  }
  static DeleteStorageObject(req: DeleteStorageObjectRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<DeleteStorageObjectRequest, GoogleProtobufEmpty.Empty>(`/v2/console/storage/${req["collection"]}/${req["key"]}/${req["user_id"]}`, {...initReq, method: "DELETE"})
  }
  static DeleteAccounts(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, GoogleProtobufEmpty.Empty>(`/v2/console/account`, {...initReq, method: "DELETE"})
  }
  static DeleteLeaderboard(req: LeaderboardRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<LeaderboardRequest, GoogleProtobufEmpty.Empty>(`/v2/console/leaderboard/${req["id"]}`, {...initReq, method: "DELETE"})
  }
  static DeleteLeaderboardRecord(req: DeleteLeaderboardRecordRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<DeleteLeaderboardRecordRequest, GoogleProtobufEmpty.Empty>(`/v2/console/leaderboard/${req["id"]}/owner/${req["owner_id"]}`, {...initReq, method: "DELETE"})
  }
  static DeleteUser(req: Username, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<Username, GoogleProtobufEmpty.Empty>(`/v2/console/user`, {...initReq, method: "DELETE"})
  }
  static DeleteWalletLedger(req: DeleteWalletLedgerRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<DeleteWalletLedgerRequest, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/wallet/${req["wallet_id"]}`, {...initReq, method: "DELETE"})
  }
  static DemoteGroupMember(req: UpdateGroupUserStateRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<UpdateGroupUserStateRequest, GoogleProtobufEmpty.Empty>(`/v2/console/group/${req["group_id"]}/account/${req["id"]}/demote`, {...initReq, method: "POST"})
  }
  static ExportAccount(req: AccountId, initReq?: fm.InitReq): Promise<AccountExport> {
    return fm.fetchReq<AccountId, AccountExport>(`/v2/console/account/${req["id"]}/export?${fm.renderURLSearchParams(req, ["id"])}`, {...initReq, method: "GET"})
  }
  static ExportGroup(req: GroupId, initReq?: fm.InitReq): Promise<GroupExport> {
    return fm.fetchReq<GroupId, GroupExport>(`/v2/console/group/${req["id"]}/export?${fm.renderURLSearchParams(req, ["id"])}`, {...initReq, method: "GET"})
  }
  static GetAccount(req: AccountId, initReq?: fm.InitReq): Promise<Account> {
    return fm.fetchReq<AccountId, Account>(`/v2/console/account/${req["id"]}?${fm.renderURLSearchParams(req, ["id"])}`, {...initReq, method: "GET"})
  }
  static GetConfig(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<Config> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, Config>(`/v2/console/config?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static GetFriends(req: AccountId, initReq?: fm.InitReq): Promise<NakamaApiApi.FriendList> {
    return fm.fetchReq<AccountId, NakamaApiApi.FriendList>(`/v2/console/account/${req["id"]}/friend?${fm.renderURLSearchParams(req, ["id"])}`, {...initReq, method: "GET"})
  }
  static GetGroup(req: GroupId, initReq?: fm.InitReq): Promise<NakamaApiApi.Group> {
    return fm.fetchReq<GroupId, NakamaApiApi.Group>(`/v2/console/group/${req["id"]}?${fm.renderURLSearchParams(req, ["id"])}`, {...initReq, method: "GET"})
  }
  static GetMembers(req: GroupId, initReq?: fm.InitReq): Promise<NakamaApiApi.GroupUserList> {
    return fm.fetchReq<GroupId, NakamaApiApi.GroupUserList>(`/v2/console/group/${req["id"]}/member?${fm.renderURLSearchParams(req, ["id"])}`, {...initReq, method: "GET"})
  }
  static GetGroups(req: AccountId, initReq?: fm.InitReq): Promise<NakamaApiApi.UserGroupList> {
    return fm.fetchReq<AccountId, NakamaApiApi.UserGroupList>(`/v2/console/account/${req["id"]}/group?${fm.renderURLSearchParams(req, ["id"])}`, {...initReq, method: "GET"})
  }
  static GetLeaderboard(req: LeaderboardRequest, initReq?: fm.InitReq): Promise<Leaderboard> {
    return fm.fetchReq<LeaderboardRequest, Leaderboard>(`/v2/console/leaderboard/${req["id"]}?${fm.renderURLSearchParams(req, ["id"])}`, {...initReq, method: "GET"})
  }
  static GetMatchState(req: MatchStateRequest, initReq?: fm.InitReq): Promise<MatchState> {
    return fm.fetchReq<MatchStateRequest, MatchState>(`/v2/console/match/${req["id"]}/state?${fm.renderURLSearchParams(req, ["id"])}`, {...initReq, method: "GET"})
  }
  static GetRuntime(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<RuntimeInfo> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, RuntimeInfo>(`/v2/console/runtime?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static GetStatus(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<StatusList> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, StatusList>(`/v2/console/status?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static GetStorage(req: NakamaApiApi.ReadStorageObjectId, initReq?: fm.InitReq): Promise<NakamaApiApi.StorageObject> {
    return fm.fetchReq<NakamaApiApi.ReadStorageObjectId, NakamaApiApi.StorageObject>(`/v2/console/storage/${req["collection"]}/${req["key"]}/${req["user_id"]}?${fm.renderURLSearchParams(req, ["collection", "key", "user_id"])}`, {...initReq, method: "GET"})
  }
  static GetWalletLedger(req: GetWalletLedgerRequest, initReq?: fm.InitReq): Promise<WalletLedgerList> {
    return fm.fetchReq<GetWalletLedgerRequest, WalletLedgerList>(`/v2/console/account/${req["account_id"]}/wallet?${fm.renderURLSearchParams(req, ["account_id"])}`, {...initReq, method: "GET"})
  }
  static ListApiEndpoints(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<ApiEndpointList> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, ApiEndpointList>(`/v2/console/api/endpoints?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListLeaderboardRecords(req: NakamaApiApi.ListLeaderboardRecordsRequest, initReq?: fm.InitReq): Promise<NakamaApiApi.LeaderboardRecordList> {
    return fm.fetchReq<NakamaApiApi.ListLeaderboardRecordsRequest, NakamaApiApi.LeaderboardRecordList>(`/v2/console/leaderboard/${req["leaderboard_id"]}/records?${fm.renderURLSearchParams(req, ["leaderboard_id"])}`, {...initReq, method: "GET"})
  }
  static ListLeaderboards(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<LeaderboardList> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, LeaderboardList>(`/v2/console/leaderboard?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListStorage(req: ListStorageRequest, initReq?: fm.InitReq): Promise<StorageList> {
    return fm.fetchReq<ListStorageRequest, StorageList>(`/v2/console/storage?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListStorageCollections(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<StorageCollectionsList> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, StorageCollectionsList>(`/v2/console/storage/collections?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListAccounts(req: ListAccountsRequest, initReq?: fm.InitReq): Promise<AccountList> {
    return fm.fetchReq<ListAccountsRequest, AccountList>(`/v2/console/account?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListGroups(req: ListGroupsRequest, initReq?: fm.InitReq): Promise<GroupList> {
    return fm.fetchReq<ListGroupsRequest, GroupList>(`/v2/console/group?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListMatches(req: NakamaApiApi.ListMatchesRequest, initReq?: fm.InitReq): Promise<NakamaApiApi.MatchList> {
    return fm.fetchReq<NakamaApiApi.ListMatchesRequest, NakamaApiApi.MatchList>(`/v2/console/match?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListPurchases(req: ListPurchasesRequest, initReq?: fm.InitReq): Promise<NakamaApiApi.PurchaseList> {
    return fm.fetchReq<ListPurchasesRequest, NakamaApiApi.PurchaseList>(`/v2/console/purchase?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static ListUsers(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<UserList> {
    return fm.fetchReq<GoogleProtobufEmpty.Empty, UserList>(`/v2/console/user?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static PromoteGroupMember(req: UpdateGroupUserStateRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<UpdateGroupUserStateRequest, GoogleProtobufEmpty.Empty>(`/v2/console/group/${req["group_id"]}/account/${req["id"]}/promote`, {...initReq, method: "POST"})
  }
  static UnbanAccount(req: AccountId, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountId, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/unban`, {...initReq, method: "POST"})
  }
  static UnlinkCustom(req: AccountId, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountId, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/unlink/custom`, {...initReq, method: "POST"})
  }
  static UnlinkDevice(req: UnlinkDeviceRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<UnlinkDeviceRequest, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/unlink/device`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static UnlinkEmail(req: AccountId, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountId, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/unlink/email`, {...initReq, method: "POST"})
  }
  static UnlinkApple(req: AccountId, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountId, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/unlink/apple`, {...initReq, method: "POST"})
  }
  static UnlinkFacebook(req: AccountId, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountId, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/unlink/facebook`, {...initReq, method: "POST"})
  }
  static UnlinkFacebookInstantGame(req: AccountId, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountId, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/unlink/facebookinstantgame`, {...initReq, method: "POST"})
  }
  static UnlinkGameCenter(req: AccountId, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountId, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/unlink/gamecenter`, {...initReq, method: "POST"})
  }
  static UnlinkGoogle(req: AccountId, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountId, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/unlink/google`, {...initReq, method: "POST"})
  }
  static UnlinkSteam(req: AccountId, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<AccountId, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}/unlink/steam`, {...initReq, method: "POST"})
  }
  static UpdateAccount(req: UpdateAccountRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<UpdateAccountRequest, GoogleProtobufEmpty.Empty>(`/v2/console/account/${req["id"]}`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static UpdateGroup(req: UpdateGroupRequest, initReq?: fm.InitReq): Promise<GoogleProtobufEmpty.Empty> {
    return fm.fetchReq<UpdateGroupRequest, GoogleProtobufEmpty.Empty>(`/v2/console/group/${req["id"]}`, {...initReq, method: "POST", body: JSON.stringify(req)})
  }
  static WriteStorageObject(req: WriteStorageObjectRequest, initReq?: fm.InitReq): Promise<NakamaApiApi.StorageObjectAck> {
    return fm.fetchReq<WriteStorageObjectRequest, NakamaApiApi.StorageObjectAck>(`/v2/console/storage/${req["collection"]}/${req["key"]}/${req["user_id"]}`, {...initReq, method: "PUT", body: JSON.stringify(req)})
  }
}