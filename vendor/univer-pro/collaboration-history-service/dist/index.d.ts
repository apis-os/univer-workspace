import { IChangeset, IUser, UniverType } from "@univerjs/protocol";
import { CollabContext, CustomData, Disposable, ILogger, IUniverCollabService } from "@univerjs-pro/collaboration-service";

//#region src/types.d.ts
type HistoryOrigin = 0 | 1 | 2;
interface GetHistoryListInput {
  readonly unitID: string;
  readonly length: number;
  readonly lastLabel?: string;
  readonly origin?: HistoryOrigin;
  readonly userIDs?: readonly string[];
}
interface ListHistoryCreatorsInput {
  readonly unitID: string;
}
interface GetHistoryChangesetsInput {
  readonly unitID: string;
  readonly startRevision: number;
  readonly endRevision: number;
}
interface IndexUnitCreatedInput {
  readonly unitID: string;
  readonly type: UniverType;
  readonly createdAt: number;
}
interface IndexChangesetInput {
  readonly changeset: IChangeset;
  readonly committedAt: number;
}
interface HistoryData {
  readonly userID: string;
  readonly unitID: string;
  readonly command: readonly string[];
  readonly createTime: string;
  readonly recoverTime: string;
  readonly startRevision: number;
  readonly endRevision: number;
  readonly additionalFields?: string;
  readonly origin?: HistoryOrigin;
  readonly startRevCreateTime: number;
  readonly endRevCreateTime: number;
  readonly userIDs: readonly string[];
}
interface GetHistoryListResult {
  readonly hasMore: boolean;
  readonly lastLabel: string;
  readonly entities: {
    readonly datas: Readonly<Record<string, HistoryData>>;
    readonly users: Readonly<Record<string, IUser>>;
  };
  readonly historyIds: readonly string[];
}
interface HistoryCreator {
  readonly userID: string;
  readonly name: string;
  readonly avatar: string;
  readonly origins: readonly HistoryOrigin[];
}
interface ListHistoryCreatorsResult {
  readonly creators: readonly HistoryCreator[];
}
interface GetHistoryChangesetsResult {
  readonly changesets: readonly IChangeset[];
  readonly users: Readonly<Record<string, IUser>>;
}
type IndexHistoryResult = {
  readonly status: "indexed";
  readonly revision: number;
} | {
  readonly status: "already-indexed";
  readonly revision: number;
};
interface GetHistoryListRequest extends GetHistoryListInput {}
interface ListHistoryCreatorsRequest extends ListHistoryCreatorsInput {}
interface GetHistoryChangesetsRequest extends GetHistoryChangesetsInput {}
interface IndexUnitCreatedRequest extends IndexUnitCreatedInput {}
interface IndexChangesetRequest extends IndexChangesetInput {}
type HistoryRequest = GetHistoryListRequest | ListHistoryCreatorsRequest | GetHistoryChangesetsRequest | IndexUnitCreatedRequest | IndexChangesetRequest;
interface HistoryUserProviderContext {
  readonly userID: string;
  readonly customData: CustomData;
  readonly request: HistoryRequest;
}
interface IHistoryUserProvider {
  getUsers(userIDs: readonly string[], context: HistoryUserProviderContext): Promise<readonly IUser[]>;
}
//#endregion
//#region src/database-adapter.d.ts
interface HistoryRevision {
  readonly unitID: string;
  readonly type: UniverType;
  readonly revision: number;
  readonly userID: string;
  readonly commands: readonly string[];
  readonly committedAt: number;
  readonly additionalFields?: string;
  readonly origin: HistoryOrigin;
  readonly historyRevision: number;
  readonly forceNextHistory: boolean;
  readonly restoredRevision?: number;
}
interface HistoryIndexState {
  readonly unitID: string;
  readonly type: UniverType;
  readonly latestRevision: number;
  readonly currentHistoryRevision: number;
  readonly currentHistoryCreatedAt: number;
  readonly forceNextHistory: boolean;
}
interface HistoryRecord {
  readonly historyId: string;
  readonly unitID: string;
  readonly type: UniverType;
  readonly startRevision: number;
  readonly endRevision: number;
  readonly userID: string;
  readonly userIDs: readonly string[];
  readonly commands: readonly string[];
  readonly createdAt: number;
  readonly startRevisionCreatedAt: number;
  readonly endRevisionCreatedAt: number;
  readonly additionalFields?: string;
  readonly origin: HistoryOrigin;
  readonly restoredRevision?: number;
}
interface ListHistoryRecordsOptions {
  readonly length: number;
  readonly beforeRevision?: number;
  readonly origin?: HistoryOrigin;
  readonly userIDs?: readonly string[];
}
interface ListHistoryRecordsResult {
  readonly records: readonly HistoryRecord[];
  readonly hasMore: boolean;
}
interface HistoryCreatorIndex {
  readonly userID: string;
  readonly origins: readonly HistoryOrigin[];
}
type AppendHistoryRevisionResult = {
  readonly status: "appended";
} | {
  readonly status: "already-indexed";
} | {
  readonly status: "revision-conflict";
  readonly actualLatestRevision: number;
};
interface IHistoryDatabaseAdapter {
  getIndexState(unitID: string): Promise<HistoryIndexState | null>;
  getRevision(unitID: string, revision: number): Promise<HistoryRevision | null>;
  appendRevision(entry: HistoryRevision, options: {
    readonly expectedLatestRevision: number;
  }): Promise<AppendHistoryRevisionResult>;
  listRecords(unitID: string, options: ListHistoryRecordsOptions): Promise<ListHistoryRecordsResult>;
  listCreators(unitID: string): Promise<readonly HistoryCreatorIndex[]>;
  dispose?(): Promise<void>;
}
declare function buildHistoryRecords(entries: readonly HistoryRevision[]): readonly HistoryRecord[];
declare function selectHistoryRecords(records: readonly HistoryRecord[], options: ListHistoryRecordsOptions): ListHistoryRecordsResult;
//#endregion
//#region src/memory-history-database-adapter.d.ts
declare class MemoryHistoryDatabaseAdapter implements IHistoryDatabaseAdapter {
  private readonly _entries;
  private _disposed;
  getIndexState(unitID: string): Promise<HistoryIndexState | null>;
  getRevision(unitID: string, revision: number): Promise<HistoryRevision | null>;
  appendRevision(entry: HistoryRevision, options: {
    readonly expectedLatestRevision: number;
  }): Promise<AppendHistoryRevisionResult>;
  listRecords(unitID: string, options: ListHistoryRecordsOptions): Promise<ListHistoryRecordsResult>;
  listCreators(unitID: string): Promise<readonly HistoryCreatorIndex[]>;
  dispose(): Promise<void>;
  private _assertOpen;
}
//#endregion
//#region src/policy.d.ts
interface HistoryPolicyInput {
  readonly state: HistoryIndexState | null;
  readonly unitID: string;
  readonly type: UniverType;
  readonly revision: number;
  readonly committedAt: number;
  readonly changeset?: IChangeset;
}
interface HistoryPolicyDecision {
  readonly startsNewHistory: boolean;
  readonly forceNextHistory: boolean;
}
interface IHistoryPolicy {
  evaluate(input: HistoryPolicyInput): HistoryPolicyDecision;
}
interface DefaultHistoryPolicyOptions {
  readonly timeIntervalMs?: number;
  readonly singleHistoryMutationIds?: ReadonlySet<string>;
}
declare class DefaultHistoryPolicy implements IHistoryPolicy {
  private readonly _timeIntervalMs;
  private readonly _singleHistoryMutationIds;
  constructor(options?: DefaultHistoryPolicyOptions);
  evaluate(input: HistoryPolicyInput): HistoryPolicyDecision;
}
//#endregion
//#region src/middleware.d.ts
type HistoryMiddlewareAction = "getHistoryList" | "listHistoryCreators" | "getHistoryChangesets" | "indexUnitCreated" | "indexChangeset";
type HistoryMiddlewareNext = () => Promise<void>;
type HistoryMiddleware<TContext> = (context: TContext, next: HistoryMiddlewareNext) => void | Promise<void>;
interface BaseHistoryMiddlewareContext {
  readonly userID: string;
  readonly customData: CustomData;
}
interface GetHistoryListMiddlewareContext extends BaseHistoryMiddlewareContext {
  readonly request: GetHistoryListRequest;
}
interface ListHistoryCreatorsMiddlewareContext extends BaseHistoryMiddlewareContext {
  readonly request: ListHistoryCreatorsRequest;
}
interface GetHistoryChangesetsMiddlewareContext extends BaseHistoryMiddlewareContext {
  readonly request: GetHistoryChangesetsRequest;
}
interface IndexUnitCreatedMiddlewareContext extends BaseHistoryMiddlewareContext {
  readonly request: IndexUnitCreatedRequest;
}
interface IndexChangesetMiddlewareContext extends BaseHistoryMiddlewareContext {
  readonly request: IndexChangesetRequest;
}
interface HistoryMiddlewareMap {
  readonly getHistoryList: HistoryMiddleware<GetHistoryListMiddlewareContext>;
  readonly listHistoryCreators: HistoryMiddleware<ListHistoryCreatorsMiddlewareContext>;
  readonly getHistoryChangesets: HistoryMiddleware<GetHistoryChangesetsMiddlewareContext>;
  readonly indexUnitCreated: HistoryMiddleware<IndexUnitCreatedMiddlewareContext>;
  readonly indexChangeset: HistoryMiddleware<IndexChangesetMiddlewareContext>;
}
//#endregion
//#region src/service.d.ts
interface UniverHistoryServiceOptions {
  readonly collabService: IUniverCollabService;
  readonly dbAdapter?: IHistoryDatabaseAdapter;
  readonly policy?: IHistoryPolicy;
  readonly userProvider?: IHistoryUserProvider;
  readonly logger?: ILogger;
  readonly maxIndexRetries?: number;
}
interface IUniverHistoryService {
  use<K extends HistoryMiddlewareAction>(action: K, middleware: HistoryMiddlewareMap[K]): Disposable;
  getHistoryList(input: GetHistoryListInput, context: CollabContext): Promise<GetHistoryListResult>;
  listHistoryCreators(input: ListHistoryCreatorsInput, context: CollabContext): Promise<ListHistoryCreatorsResult>;
  getHistoryChangesets(input: GetHistoryChangesetsInput, context: CollabContext): Promise<GetHistoryChangesetsResult>;
  indexUnitCreated(input: IndexUnitCreatedInput, context: CollabContext): Promise<IndexHistoryResult>;
  indexChangeset(input: IndexChangesetInput, context: CollabContext): Promise<IndexHistoryResult>;
  attach(collabService?: IUniverCollabService): Disposable;
  dispose(): Promise<void>;
}
declare class UniverHistoryService implements IUniverHistoryService {
  private readonly _collabService;
  private readonly _dbAdapter;
  private readonly _ownsDbAdapter;
  private readonly _policy;
  private readonly _userProvider;
  private readonly _logger;
  private readonly _maxIndexRetries;
  private readonly _middleware;
  private readonly _attachments;
  private readonly _calls;
  private readonly _indexQueues;
  private _state;
  constructor(options: UniverHistoryServiceOptions);
  use<K extends HistoryMiddlewareAction>(action: K, middleware: HistoryMiddlewareMap[K]): Disposable;
  getHistoryList(input: GetHistoryListInput, context: CollabContext): Promise<GetHistoryListResult>;
  listHistoryCreators(input: ListHistoryCreatorsInput, context: CollabContext): Promise<ListHistoryCreatorsResult>;
  getHistoryChangesets(input: GetHistoryChangesetsInput, context: CollabContext): Promise<GetHistoryChangesetsResult>;
  indexUnitCreated(input: IndexUnitCreatedInput, context: CollabContext): Promise<IndexHistoryResult>;
  indexChangeset(input: IndexChangesetInput, context: CollabContext): Promise<IndexHistoryResult>;
  attach(collabService?: IUniverCollabService): Disposable;
  dispose(): Promise<void>;
  private _executeIndexUnitCreated;
  private _executeIndexChangeset;
  private _appendWithRetry;
  private _historyData;
  private _resolveUsers;
  private _enqueue;
  private _call;
  private _databaseCall;
  private _assertRunning;
  private _logError;
}
//#endregion
export { type AppendHistoryRevisionResult, type BaseHistoryMiddlewareContext, DefaultHistoryPolicy, type DefaultHistoryPolicyOptions, type GetHistoryChangesetsInput, type GetHistoryChangesetsMiddlewareContext, type GetHistoryChangesetsRequest, type GetHistoryChangesetsResult, type GetHistoryListInput, type GetHistoryListMiddlewareContext, type GetHistoryListRequest, type GetHistoryListResult, type HistoryCreator, type HistoryCreatorIndex, type HistoryData, type HistoryIndexState, type HistoryMiddleware, type HistoryMiddlewareAction, type HistoryMiddlewareMap, type HistoryMiddlewareNext, type HistoryOrigin, type HistoryPolicyDecision, type HistoryPolicyInput, type HistoryRecord, type HistoryRequest, type HistoryRevision, type HistoryUserProviderContext, type IHistoryDatabaseAdapter, type IHistoryPolicy, type IHistoryUserProvider, type IUniverHistoryService, type IndexChangesetInput, type IndexChangesetMiddlewareContext, type IndexChangesetRequest, type IndexHistoryResult, type IndexUnitCreatedInput, type IndexUnitCreatedMiddlewareContext, type IndexUnitCreatedRequest, type ListHistoryCreatorsInput, type ListHistoryCreatorsMiddlewareContext, type ListHistoryCreatorsRequest, type ListHistoryCreatorsResult, type ListHistoryRecordsOptions, type ListHistoryRecordsResult, MemoryHistoryDatabaseAdapter, UniverHistoryService, type UniverHistoryServiceOptions, buildHistoryRecords, selectHistoryRecords };