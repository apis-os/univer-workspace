import { ChangesetRange, CollabContext, CollabMemberContext, CreateUnitFromDataInput, CreateUnitFromSnapshotInput, CreateUnitRequest, CustomData, Disposable, GetChangesetsRequest, GetChangesetsResult, GetSheetBlockRequest, GetSheetBlockResult, GetUnitLoadDataRequest, IDatabaseAdapter, ILogger, IMetrics, IUniverCollabService, JsonObject, Middleware, MiddlewareNext, PermissionRequirement, SaveSnapshotInput, SubmitChangesetRequest, SubmitChangesetResult, UnitLoadData } from "@univerjs-pro/collaboration-service";
import { IChangeset, ISheetBlock, ISnapshot, UniverType } from "@univerjs/protocol";

//#region src/model/types.d.ts
type WorktreeStatus = "draft" | "ready" | "merging" | "merged" | "discarded";
type WorktreeUnitSource = "trunk" | "worktree";
interface WorktreeMergeError {
  readonly code: string;
  readonly message: string;
  readonly retryable: boolean;
}
type WorktreeUnitMergeResult = {
  readonly status: "merged";
  readonly trunkRevision: number;
} | {
  readonly status: "unchanged";
} | {
  readonly status: "removed";
} | {
  readonly status: "conflict";
  readonly error: WorktreeMergeError;
} | {
  readonly status: "failed";
  readonly error: WorktreeMergeError;
};
interface WorktreeRecord {
  readonly worktreeID: string;
  readonly sid: string;
  readonly status: WorktreeStatus;
}
interface WorktreeUnitRecord {
  readonly worktreeID: string;
  readonly unitID: string;
  readonly type: UniverType;
  readonly source: WorktreeUnitSource;
  readonly baselineTrunkRevision?: number;
  readonly removed?: boolean;
  readonly draftHeadRevision: number;
  readonly readyDraftHeadRevision?: number;
  readonly mergeResult?: WorktreeUnitMergeResult;
}
interface WorktreeAggregateRecord {
  readonly worktree: WorktreeRecord;
  readonly units: readonly WorktreeUnitRecord[];
}
interface WorktreeData {
  readonly worktreeID: string;
  readonly status: WorktreeStatus;
  readonly units: readonly WorktreeUnitData[];
}
interface WorktreeUnitData {
  readonly unitID: string;
  readonly type: UniverType;
  readonly source: WorktreeUnitSource;
  readonly baselineTrunkRevision?: number;
  readonly removed?: boolean;
  readonly draftHeadRevision: number;
  readonly readyDraftHeadRevision?: number;
  readonly mergeResult?: WorktreeUnitMergeResult;
}
//#endregion
//#region src/database/adapter.d.ts
interface WorktreeDatabaseContext<TRequest extends object = object> {
  readonly userID: string;
  readonly customData: CustomData;
  readonly request: TRequest;
}
interface WorktreeMemberDatabaseContext<TRequest extends object = object> extends WorktreeDatabaseContext<TRequest> {
  readonly memberID: string;
}
interface WorktreeRevisionRange {
  readonly from: number;
  readonly to: number;
}
interface CreateWorktreeDatabaseInput {
  readonly record: WorktreeRecord;
  readonly units: readonly WorktreeUnitRecord[];
}
type CreateWorktreeDatabaseResult = {
  readonly status: "created";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "already-exists";
  readonly aggregate: WorktreeAggregateRecord;
};
interface AddWorktreeUnitDatabaseInput {
  readonly unit: WorktreeUnitRecord;
}
type AddWorktreeUnitDatabaseResult = {
  readonly status: "added" | "already-exists";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "status-mismatch";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "not-found";
};
interface WorktreeUnitSeed {
  readonly snapshot: ISnapshot;
  readonly sheetBlocks?: readonly ISheetBlock[];
}
interface WorktreeUnitMergeArtifact {
  readonly readyDraftHeadRevision: number;
  readonly unit: WorktreeUnitSeed;
}
interface SaveWorktreeUnitMergeArtifactInput {
  readonly worktreeID: string;
  readonly unitID: string;
  readonly artifact: WorktreeUnitMergeArtifact;
}
type SaveWorktreeUnitMergeArtifactResult = {
  readonly status: "saved" | "already-saved";
  readonly artifact: WorktreeUnitMergeArtifact;
} | {
  readonly status: "stale-merge" | "not-found";
};
interface CreateWorktreeUnitDatabaseInput {
  readonly unit: WorktreeUnitRecord;
  readonly seed: WorktreeUnitSeed;
}
type CreateWorktreeUnitDatabaseResult = {
  readonly status: "created" | "already-created";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "unit-exists" | "status-mismatch";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "not-found";
};
interface CommitWorktreeChangesetInput {
  readonly worktreeID: string;
  readonly changeset: IChangeset;
}
type CommitWorktreeChangesetResult = {
  readonly status: "committed";
  readonly changeset: IChangeset;
  readonly headRevision: number;
} | {
  readonly status: "revision-mismatch";
  readonly actualHeadRevision: number;
} | {
  readonly status: "not-editable";
  readonly worktreeStatus: WorktreeStatus;
} | {
  readonly status: "unit-frozen" | "not-found";
};
type WorktreeTransitionResult = {
  readonly status: "transitioned";
  readonly previousStatus: WorktreeStatus;
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "already-in-target";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "status-mismatch";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "not-found";
};
type StartMergeResult = {
  readonly status: "started" | "resumed" | "already-merged";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "status-mismatch";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "not-found";
};
interface RecordUnitMergeResultInput {
  readonly worktreeID: string;
  readonly unitID: string;
  readonly readyDraftHeadRevision: number;
  readonly mergeResult: WorktreeUnitMergeResult;
}
type RecordUnitMergeResultResult = {
  readonly status: "recorded" | "already-recorded";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "stale-merge" | "not-found";
};
interface SetWorktreeUnitRemovedDatabaseInput {
  readonly worktreeID: string;
  readonly unitID: string;
  readonly removed: boolean;
}
type SetWorktreeUnitRemovedResult = {
  readonly status: "updated" | "unchanged" | "not-editable";
  readonly aggregate: WorktreeAggregateRecord;
} | {
  readonly status: "not-found";
};
interface IWorktreeDatabaseAdapter {
  setUnitRemoved(context: WorktreeDatabaseContext, input: SetWorktreeUnitRemovedDatabaseInput): Promise<SetWorktreeUnitRemovedResult>;
  getWorktree(context: WorktreeDatabaseContext, worktreeID: string): Promise<WorktreeAggregateRecord | null>;
  getWorktreeUnit(context: WorktreeDatabaseContext, worktreeID: string, unitID: string): Promise<WorktreeUnitRecord | null>;
  getDraftChangesets(context: WorktreeDatabaseContext, worktreeID: string, unitID: string, range: WorktreeRevisionRange): Promise<ChangesetRange>;
  getUnitSeed(context: WorktreeDatabaseContext, worktreeID: string, unitID: string): Promise<WorktreeUnitSeed | null>;
  getUnitMergeArtifact(context: WorktreeDatabaseContext, worktreeID: string, unitID: string): Promise<WorktreeUnitMergeArtifact | null>;
  createWorktree(context: WorktreeDatabaseContext, input: CreateWorktreeDatabaseInput): Promise<CreateWorktreeDatabaseResult>;
  addUnit(context: WorktreeDatabaseContext, input: AddWorktreeUnitDatabaseInput): Promise<AddWorktreeUnitDatabaseResult>;
  createUnit(context: WorktreeDatabaseContext, input: CreateWorktreeUnitDatabaseInput): Promise<CreateWorktreeUnitDatabaseResult>;
  saveUnitMergeArtifact(context: WorktreeDatabaseContext, input: SaveWorktreeUnitMergeArtifactInput): Promise<SaveWorktreeUnitMergeArtifactResult>;
  commitDraftChangeset(context: WorktreeDatabaseContext, input: CommitWorktreeChangesetInput): Promise<CommitWorktreeChangesetResult>;
  markReady(context: WorktreeDatabaseContext, worktreeID: string): Promise<WorktreeTransitionResult>;
  reopenWorktree(context: WorktreeDatabaseContext, worktreeID: string): Promise<WorktreeTransitionResult>;
  discardWorktree(context: WorktreeDatabaseContext, worktreeID: string): Promise<WorktreeTransitionResult>;
  startOrResumeMerge(context: WorktreeDatabaseContext, worktreeID: string): Promise<StartMergeResult>;
  recordUnitMergeResult(context: WorktreeDatabaseContext, input: RecordUnitMergeResultInput): Promise<RecordUnitMergeResultResult>;
  finishMerge(context: WorktreeDatabaseContext, worktreeID: string): Promise<WorktreeTransitionResult>;
  dispose?(): Promise<void>;
}
//#endregion
//#region src/errors/worktree-error.d.ts
type WorktreeErrorCode = "WORKTREE_NOT_FOUND" | "WORKTREE_ALREADY_EXISTS" | "WORKTREE_UNIT_NOT_FOUND" | "WORKTREE_NOT_EDITABLE" | "WORKTREE_STATUS_MISMATCH" | "WORKTREE_UNIT_FROZEN" | "WORKTREE_STALE_MERGE";
declare class WorktreeError extends Error {
  readonly code: WorktreeErrorCode;
  readonly retryable: boolean;
  readonly details?: Readonly<JsonObject>;
  constructor(code: WorktreeErrorCode, message: string, options?: {
    readonly retryable?: boolean;
    readonly details?: Readonly<JsonObject>;
    readonly cause?: unknown;
  });
}
//#endregion
//#region src/request/request.d.ts
interface BaseWorktreeRequest {
  readonly worktreeID: string;
}
interface CreateWorktreeRequest extends BaseWorktreeRequest {
  readonly units: readonly string[];
}
interface GetWorktreeRequest extends BaseWorktreeRequest {}
interface AddWorktreeUnitRequest extends BaseWorktreeRequest {
  readonly unitID: string;
}
interface CreateWorktreeUnitRequest extends CreateUnitRequest, BaseWorktreeRequest {}
interface MarkWorktreeReadyRequest extends BaseWorktreeRequest {}
interface ReopenWorktreeRequest extends BaseWorktreeRequest {}
interface DiscardWorktreeRequest extends BaseWorktreeRequest {}
interface MergeWorktreeRequest extends BaseWorktreeRequest {}
interface EvaluateWorktreeUnitMergeRequest extends BaseWorktreeRequest {
  readonly unitID: string;
}
interface GetWorktreeUnitLoadDataRequest extends GetUnitLoadDataRequest, BaseWorktreeRequest {}
interface GetWorktreeChangesetsRequest extends GetChangesetsRequest, BaseWorktreeRequest {}
interface GetWorktreeSheetBlockRequest extends GetSheetBlockRequest, BaseWorktreeRequest {}
type ReadWorktreeUnitDataRequest = EvaluateWorktreeUnitMergeRequest | GetWorktreeUnitLoadDataRequest | GetWorktreeChangesetsRequest | GetWorktreeSheetBlockRequest;
interface SubmitWorktreeChangesetRequest extends SubmitChangesetRequest, BaseWorktreeRequest {}
type WorktreeRequest = CreateWorktreeRequest | GetWorktreeRequest | SetWorktreeUnitRemovedRequest | AddWorktreeUnitRequest | CreateWorktreeUnitRequest | MarkWorktreeReadyRequest | ReopenWorktreeRequest | DiscardWorktreeRequest | MergeWorktreeRequest | ReadWorktreeUnitDataRequest | SubmitWorktreeChangesetRequest;
interface SetWorktreeUnitRemovedRequest extends BaseWorktreeRequest {
  readonly unitID: string;
  readonly removed: boolean;
}
//#endregion
//#region src/middleware/middleware.d.ts
type WorktreeMiddlewareAction = "readWorktreeData" | "createWorktree" | "setWorktreeUnitRemoved" | "addWorktreeUnit" | "createWorktreeUnit" | "markWorktreeReady" | "reopenWorktree" | "discardWorktree" | "mergeWorktree" | "readUnitData" | "submitChangeset" | "applyChangeset" | "commitChangeset";
type WorktreeMiddlewareNext = MiddlewareNext;
type WorktreeMiddleware<TContext> = Middleware<TContext>;
interface BaseWorktreeMiddlewareContext {
  readonly userID: string;
  readonly customData: CustomData;
}
interface MemberWorktreeMiddlewareContext extends BaseWorktreeMiddlewareContext {
  readonly memberID: string;
}
interface ReadWorktreeDataMiddlewareContext extends BaseWorktreeMiddlewareContext {
  readonly request: GetWorktreeRequest;
}
interface CreateWorktreeMiddlewareContext extends BaseWorktreeMiddlewareContext {
  readonly request: CreateWorktreeRequest;
}
interface AddWorktreeUnitMiddlewareContext extends BaseWorktreeMiddlewareContext {
  readonly request: AddWorktreeUnitRequest;
}
interface CreateWorktreeUnitMiddlewareContext extends BaseWorktreeMiddlewareContext {
  readonly request: CreateWorktreeUnitRequest;
}
interface MarkWorktreeReadyMiddlewareContext extends BaseWorktreeMiddlewareContext {
  readonly request: MarkWorktreeReadyRequest;
}
interface ReopenWorktreeMiddlewareContext extends BaseWorktreeMiddlewareContext {
  readonly request: ReopenWorktreeRequest;
}
interface DiscardWorktreeMiddlewareContext extends BaseWorktreeMiddlewareContext {
  readonly request: DiscardWorktreeRequest;
}
interface MergeWorktreeMiddlewareContext extends MemberWorktreeMiddlewareContext {
  readonly request: MergeWorktreeRequest;
}
interface ReadWorktreeUnitDataMiddlewareContext extends BaseWorktreeMiddlewareContext {
  readonly request: ReadWorktreeUnitDataRequest;
}
interface SubmitWorktreeChangesetMiddlewareContext extends MemberWorktreeMiddlewareContext {
  readonly request: SubmitWorktreeChangesetRequest;
}
interface ApplyWorktreeChangesetMiddlewareContext extends MemberWorktreeMiddlewareContext {
  readonly request: SubmitWorktreeChangesetRequest;
  readonly attempt: number;
  readonly currentRevision: number;
  readonly changeset: Readonly<IChangeset>;
  readonly permissionRequirements: readonly PermissionRequirement[];
}
interface CommitWorktreeChangesetMiddlewareContext extends MemberWorktreeMiddlewareContext {
  readonly request: SubmitWorktreeChangesetRequest;
  readonly attempt: number;
  readonly expectedHeadRevision: number;
  readonly changeset: Readonly<IChangeset>;
}
interface WorktreeMiddlewareMap {
  readonly setWorktreeUnitRemoved: Middleware<SetWorktreeUnitRemovedMiddlewareContext>;
  readonly readWorktreeData: Middleware<ReadWorktreeDataMiddlewareContext>;
  readonly createWorktree: Middleware<CreateWorktreeMiddlewareContext>;
  readonly addWorktreeUnit: Middleware<AddWorktreeUnitMiddlewareContext>;
  readonly createWorktreeUnit: Middleware<CreateWorktreeUnitMiddlewareContext>;
  readonly markWorktreeReady: Middleware<MarkWorktreeReadyMiddlewareContext>;
  readonly reopenWorktree: Middleware<ReopenWorktreeMiddlewareContext>;
  readonly discardWorktree: Middleware<DiscardWorktreeMiddlewareContext>;
  readonly mergeWorktree: Middleware<MergeWorktreeMiddlewareContext>;
  readonly readUnitData: Middleware<ReadWorktreeUnitDataMiddlewareContext>;
  readonly submitChangeset: Middleware<SubmitWorktreeChangesetMiddlewareContext>;
  readonly applyChangeset: Middleware<ApplyWorktreeChangesetMiddlewareContext>;
  readonly commitChangeset: Middleware<CommitWorktreeChangesetMiddlewareContext>;
}
interface SetWorktreeUnitRemovedMiddlewareContext extends BaseWorktreeMiddlewareContext {
  readonly request: SetWorktreeUnitRemovedRequest;
}
//#endregion
//#region src/service/events.d.ts
interface BaseWorktreeEvent {
  readonly userID: string;
  readonly customData: CustomData;
  readonly worktree: WorktreeData;
  readonly occurredAt: number;
}
interface WorktreeCreatedEvent extends BaseWorktreeEvent {
  readonly request: CreateWorktreeRequest;
}
interface WorktreeUnitAddedEvent extends BaseWorktreeEvent {
  readonly request: AddWorktreeUnitRequest;
  readonly unit: WorktreeUnitData;
}
interface WorktreeUnitCreatedEvent extends BaseWorktreeEvent {
  readonly request: CreateWorktreeUnitRequest;
  readonly unit: WorktreeUnitData;
}
interface WorktreeStatusChangedEvent extends BaseWorktreeEvent {
  readonly request: MarkWorktreeReadyRequest | ReopenWorktreeRequest | DiscardWorktreeRequest | MergeWorktreeRequest;
  readonly previousStatus: WorktreeStatus;
  readonly status: WorktreeStatus;
}
interface WorktreeUnitMergeResultRecordedEvent extends BaseWorktreeEvent {
  readonly request: MergeWorktreeRequest;
  readonly unit: WorktreeUnitData;
}
interface WorktreeChangesetCommittedEvent {
  readonly userID: string;
  readonly memberID: string;
  readonly customData: CustomData;
  readonly request: SubmitWorktreeChangesetRequest;
  readonly changeset: IChangeset;
  readonly permissionRequirements: readonly PermissionRequirement[];
  readonly committedAt: number;
}
interface WorktreeServiceEventMap {
  readonly worktreeUnitRemovalChanged: WorktreeUnitRemovalChangedEvent;
  readonly worktreeCreated: WorktreeCreatedEvent;
  readonly worktreeUnitAdded: WorktreeUnitAddedEvent;
  readonly worktreeUnitCreated: WorktreeUnitCreatedEvent;
  readonly worktreeStatusChanged: WorktreeStatusChangedEvent;
  readonly worktreeUnitMergeResultRecorded: WorktreeUnitMergeResultRecordedEvent;
  readonly changesetCommitted: WorktreeChangesetCommittedEvent;
}
interface WorktreeUnitRemovalChangedEvent extends BaseWorktreeEvent {
  readonly request: SetWorktreeUnitRemovedRequest;
  readonly unit: WorktreeUnitData;
}
//#endregion
//#region src/operations/operations.d.ts
interface WorktreeResult {
  readonly worktree: WorktreeData;
}
interface CreateWorktreeInput {
  readonly worktreeID: string;
  readonly units?: readonly string[];
}
interface GetWorktreeInput {
  readonly worktreeID: string;
}
interface AddWorktreeUnitInput {
  readonly worktreeID: string;
  readonly unitID: string;
}
type CreateWorktreeUnitFromSnapshotInput = CreateUnitFromSnapshotInput & {
  readonly worktreeID: string;
};
type CreateWorktreeUnitFromDataInput = CreateUnitFromDataInput & {
  readonly worktreeID: string;
};
interface MarkWorktreeReadyInput {
  readonly worktreeID: string;
}
interface ReopenWorktreeInput {
  readonly worktreeID: string;
}
interface DiscardWorktreeInput {
  readonly worktreeID: string;
}
interface MergeWorktreeInput {
  readonly worktreeID: string;
}
interface EvaluateWorktreeUnitMergeInput {
  readonly worktreeID: string;
  readonly unitID: string;
}
type WorktreeUnitMergeEvaluation = {
  readonly status: "not-behind";
  readonly worktreeID: string;
  readonly unitID: string;
} | {
  readonly status: "preview";
  readonly worktreeID: string;
  readonly unitID: string;
  readonly preview: SaveSnapshotInput;
} | {
  readonly status: "conflict";
  readonly worktreeID: string;
  readonly unitID: string;
  readonly error: WorktreeMergeError;
} | {
  readonly status: "already-merged";
  readonly worktreeID: string;
  readonly unitID: string;
  readonly mergeResult: {
    readonly status: "merged";
    readonly trunkRevision: number;
  } | {
    readonly status: "unchanged";
  };
} | {
  readonly status: "not-applicable";
  readonly worktreeID: string;
  readonly unitID: string;
  readonly reason: "worktree-created-unit" | "removed-unit";
};
interface GetWorktreeUnitLoadDataInput {
  readonly worktreeID: string;
  readonly unitID: string;
  readonly type: UniverType;
  readonly revision: number;
}
interface GetWorktreeChangesetsInput {
  readonly worktreeID: string;
  readonly unitID: string;
  readonly type: UniverType;
  readonly from: number;
  readonly to: number;
}
interface GetWorktreeSheetBlockInput {
  readonly worktreeID: string;
  readonly unitID: string;
  readonly type: UniverType;
  readonly blockID: string;
}
interface SubmitWorktreeChangesetInput {
  readonly worktreeID: string;
  readonly changeset: IChangeset;
}
type GetWorktreeChangesetsResult = GetChangesetsResult;
type GetWorktreeSheetBlockResult = GetSheetBlockResult;
type SubmitWorktreeChangesetResult = SubmitChangesetResult;
interface SetWorktreeUnitRemovedInput {
  readonly worktreeID: string;
  readonly unitID: string;
  readonly removed: boolean;
}
//#endregion
//#region src/service/service.d.ts
interface UniverCollabWorktreeServiceOptions {
  readonly trunk: {
    readonly service: IUniverCollabService;
    readonly dbAdapter: IDatabaseAdapter;
  };
  readonly dbAdapter: IWorktreeDatabaseAdapter;
  readonly runtime?: {
    readonly maxLoadedUnits?: number;
    readonly idleTimeoutMs?: number;
  };
  readonly submitChangeset?: {
    readonly maxRevisionRetries?: number;
  };
  readonly logger?: ILogger;
  readonly metrics?: IMetrics;
}
interface IUniverCollabWorktreeService {
  setUnitRemoved(input: SetWorktreeUnitRemovedInput, context: CollabContext): Promise<WorktreeResult>;
  use<K extends WorktreeMiddlewareAction>(action: K, middleware: WorktreeMiddlewareMap[K]): Disposable;
  createWorktree(input: CreateWorktreeInput, context: CollabContext): Promise<WorktreeResult>;
  getWorktree(input: GetWorktreeInput, context: CollabContext): Promise<WorktreeResult>;
  addUnit(input: AddWorktreeUnitInput, context: CollabContext): Promise<WorktreeResult>;
  createUnitFromSnapshot(input: CreateWorktreeUnitFromSnapshotInput, context: CollabContext): Promise<WorktreeResult>;
  createUnitFromData(input: CreateWorktreeUnitFromDataInput, context: CollabContext): Promise<WorktreeResult>;
  markReady(input: MarkWorktreeReadyInput, context: CollabContext): Promise<WorktreeResult>;
  reopenWorktree(input: ReopenWorktreeInput, context: CollabContext): Promise<WorktreeResult>;
  discardWorktree(input: DiscardWorktreeInput, context: CollabContext): Promise<WorktreeResult>;
  mergeWorktree(input: MergeWorktreeInput, context: CollabMemberContext): Promise<WorktreeResult>;
  evaluateWorktreeUnitMerge(input: EvaluateWorktreeUnitMergeInput, context: CollabContext): Promise<WorktreeUnitMergeEvaluation>;
  getUnitLoadData(input: GetWorktreeUnitLoadDataInput, context: CollabContext): Promise<UnitLoadData>;
  getChangesets(input: GetWorktreeChangesetsInput, context: CollabContext): Promise<GetWorktreeChangesetsResult>;
  getSheetBlock(input: GetWorktreeSheetBlockInput, context: CollabContext): Promise<GetWorktreeSheetBlockResult>;
  submitChangeset(input: SubmitWorktreeChangesetInput, context: CollabMemberContext): Promise<SubmitWorktreeChangesetResult>;
  on<K extends keyof WorktreeServiceEventMap>(event: K, listener: (event: WorktreeServiceEventMap[K]) => void | Promise<void>): Disposable;
  dispose(): Promise<void>;
}
declare class UniverCollabWorktreeService implements IUniverCollabWorktreeService {
  private readonly _trunkService;
  private readonly _trunkDbAdapter;
  private readonly _dbAdapter;
  private readonly _middleware;
  private readonly _events;
  private readonly _lifecycle;
  private readonly _logger;
  private readonly _metrics;
  private readonly _runtimeOptions;
  private readonly _maxRevisionRetries;
  private readonly _draftServices;
  constructor(options: UniverCollabWorktreeServiceOptions);
  use<K extends WorktreeMiddlewareAction>(action: K, middleware: WorktreeMiddlewareMap[K]): Disposable;
  on<K extends keyof WorktreeServiceEventMap>(event: K, listener: (event: WorktreeServiceEventMap[K]) => void | Promise<void>): Disposable;
  createWorktree(input: CreateWorktreeInput, context: CollabContext): Promise<WorktreeResult>;
  getWorktree(input: GetWorktreeInput, context: CollabContext): Promise<WorktreeResult>;
  addUnit(input: AddWorktreeUnitInput, context: CollabContext): Promise<WorktreeResult>;
  setUnitRemoved(input: SetWorktreeUnitRemovedInput, context: CollabContext): Promise<WorktreeResult>;
  createUnitFromSnapshot(input: CreateWorktreeUnitFromSnapshotInput, context: CollabContext): Promise<WorktreeResult>;
  createUnitFromData(input: CreateWorktreeUnitFromDataInput, context: CollabContext): Promise<WorktreeResult>;
  markReady(input: MarkWorktreeReadyInput, context: CollabContext): Promise<WorktreeResult>;
  reopenWorktree(input: ReopenWorktreeInput, context: CollabContext): Promise<WorktreeResult>;
  discardWorktree(input: DiscardWorktreeInput, context: CollabContext): Promise<WorktreeResult>;
  mergeWorktree(input: MergeWorktreeInput, context: CollabMemberContext): Promise<WorktreeResult>;
  evaluateWorktreeUnitMerge(input: EvaluateWorktreeUnitMergeInput, context: CollabContext): Promise<WorktreeUnitMergeEvaluation>;
  getUnitLoadData(input: GetWorktreeUnitLoadDataInput, context: CollabContext): Promise<UnitLoadData>;
  getChangesets(input: GetWorktreeChangesetsInput, context: CollabContext): Promise<GetWorktreeChangesetsResult>;
  getSheetBlock(input: GetWorktreeSheetBlockInput, context: CollabContext): Promise<GetWorktreeSheetBlockResult>;
  submitChangeset(input: SubmitWorktreeChangesetInput, context: CollabMemberContext): Promise<SubmitWorktreeChangesetResult>;
  dispose(): Promise<void>;
  private _draftService;
  private _mergeUnit;
  private _mergeCreatedUnit;
  private _matchesCreatedTrunkUnit;
  private _requireWorktreeAggregate;
  private _transition;
  private _requireTrunkUnit;
  private _database;
  private _call;
  private _assertRunning;
}
//#endregion
export { type AddWorktreeUnitDatabaseInput, type AddWorktreeUnitDatabaseResult, type AddWorktreeUnitInput, type AddWorktreeUnitMiddlewareContext, type AddWorktreeUnitRequest, type ApplyWorktreeChangesetMiddlewareContext, type BaseWorktreeMiddlewareContext, type BaseWorktreeRequest, type CommitWorktreeChangesetInput, type CommitWorktreeChangesetMiddlewareContext, type CommitWorktreeChangesetResult, type CreateWorktreeDatabaseInput, type CreateWorktreeDatabaseResult, type CreateWorktreeInput, type CreateWorktreeMiddlewareContext, type CreateWorktreeRequest, type CreateWorktreeUnitDatabaseInput, type CreateWorktreeUnitDatabaseResult, type CreateWorktreeUnitFromDataInput, type CreateWorktreeUnitFromSnapshotInput, type CreateWorktreeUnitMiddlewareContext, type CreateWorktreeUnitRequest, type DiscardWorktreeInput, type DiscardWorktreeMiddlewareContext, type DiscardWorktreeRequest, type EvaluateWorktreeUnitMergeInput, type EvaluateWorktreeUnitMergeRequest, type GetWorktreeChangesetsInput, type GetWorktreeChangesetsRequest, type GetWorktreeChangesetsResult, type GetWorktreeInput, type GetWorktreeRequest, type GetWorktreeSheetBlockInput, type GetWorktreeSheetBlockRequest, type GetWorktreeSheetBlockResult, type GetWorktreeUnitLoadDataInput, type GetWorktreeUnitLoadDataRequest, type IUniverCollabWorktreeService, type IWorktreeDatabaseAdapter, type MarkWorktreeReadyInput, type MarkWorktreeReadyMiddlewareContext, type MarkWorktreeReadyRequest, type MemberWorktreeMiddlewareContext, type MergeWorktreeInput, type MergeWorktreeMiddlewareContext, type MergeWorktreeRequest, type ReadWorktreeDataMiddlewareContext, type ReadWorktreeUnitDataMiddlewareContext, type ReadWorktreeUnitDataRequest, type RecordUnitMergeResultInput, type RecordUnitMergeResultResult, type ReopenWorktreeInput, type ReopenWorktreeMiddlewareContext, type ReopenWorktreeRequest, type SaveWorktreeUnitMergeArtifactInput, type SaveWorktreeUnitMergeArtifactResult, type SetWorktreeUnitRemovedDatabaseInput, type SetWorktreeUnitRemovedInput, type SetWorktreeUnitRemovedMiddlewareContext, type SetWorktreeUnitRemovedRequest, type SetWorktreeUnitRemovedResult, type StartMergeResult, type SubmitWorktreeChangesetInput, type SubmitWorktreeChangesetMiddlewareContext, type SubmitWorktreeChangesetRequest, type SubmitWorktreeChangesetResult, UniverCollabWorktreeService, type UniverCollabWorktreeServiceOptions, type WorktreeAggregateRecord, type WorktreeChangesetCommittedEvent, type WorktreeCreatedEvent, type WorktreeData, type WorktreeDatabaseContext, WorktreeError, type WorktreeErrorCode, type WorktreeMemberDatabaseContext, type WorktreeMergeError, type WorktreeMiddleware, type WorktreeMiddlewareAction, type WorktreeMiddlewareMap, type WorktreeMiddlewareNext, type WorktreeRecord, type WorktreeRequest, type WorktreeResult, type WorktreeRevisionRange, type WorktreeServiceEventMap, type WorktreeStatus, type WorktreeStatusChangedEvent, type WorktreeTransitionResult, type WorktreeUnitAddedEvent, type WorktreeUnitCreatedEvent, type WorktreeUnitData, type WorktreeUnitMergeArtifact, type WorktreeUnitMergeEvaluation, type WorktreeUnitMergeResult, type WorktreeUnitMergeResultRecordedEvent, type WorktreeUnitRecord, type WorktreeUnitRemovalChangedEvent, type WorktreeUnitSeed, type WorktreeUnitSource };