import { IChangeset, ISheetBlock, ISnapshot, UnitAction, UnitObject, UniverType } from "@univerjs/protocol";
import { IBoardData } from "@univerjs-pro/boards";
import { ISlideData } from "@univerjs-pro/slides";
import { IBaseSnapshot, IDocumentData, IWorkbookData } from "@univerjs/core";
import { IChangeset as IChangeset$1, ITransformService } from "@univerjs-pro/collaboration";

//#region src/common/types.d.ts
type JsonPrimitive = boolean | number | string | null;
type JsonValue = JsonPrimitive | JsonObject | readonly JsonValue[];
interface JsonObject {
  readonly [key: string]: JsonValue;
}
type CustomData = Record<string, unknown>;
interface Disposable {
  dispose(): void;
}
//#endregion
//#region src/snapshots/types.d.ts
interface SaveSnapshotInput {
  readonly snapshot: ISnapshot;
  readonly sheetBlocks?: readonly ISheetBlock[];
}
interface UnitLoadData {
  readonly snapshot: ISnapshot;
  readonly changesets: readonly IChangeset[];
  readonly targetRevision: number;
}
interface UnitLoadDataWithBlocks extends UnitLoadData {
  readonly sheetBlocks: readonly ISheetBlock[];
}
interface ISnapshotWithBlocks {
  snapshot: ISnapshot;
  sheetBlocks: ISheetBlock[];
}
interface SnapshotPolicy {
  shouldCreate(input: {
    readonly unitID: string;
    readonly type: UniverType;
    readonly revision: number;
    readonly changesetBytes: number;
    readonly revisionsSinceLastSnapshot: number;
  }): boolean;
}
//#endregion
//#region src/request/request.d.ts
interface BaseReadUnitDataRequest {
  readonly unitID: string;
  readonly type: UniverType;
}
interface GetUnitLoadDataRequest extends BaseReadUnitDataRequest {
  readonly revision: number;
}
interface GetChangesetsRequest extends BaseReadUnitDataRequest {
  readonly from: number;
  readonly to: number;
}
interface GetSheetBlockRequest extends BaseReadUnitDataRequest {
  readonly blockID: string;
}
type ReadUnitDataRequest = GetUnitLoadDataRequest | GetChangesetsRequest | GetSheetBlockRequest;
interface CreateUnitRequest {
  readonly snapshot: ISnapshot;
  readonly sheetBlocks?: readonly ISheetBlock[];
}
interface DeleteUnitsRequest {
  readonly unitIDs: readonly string[];
  readonly hardDelete: boolean;
}
interface RecoverUnitsRequest {
  readonly unitIDs: readonly string[];
}
interface SubmitChangesetRequest {
  readonly changeset: IChangeset;
}
type CollabRequest = ReadUnitDataRequest | CreateUnitRequest | DeleteUnitsRequest | RecoverUnitsRequest | SubmitChangesetRequest;
//#endregion
//#region src/database/adapter.d.ts
interface DatabaseContext<TRequest extends object = object> {
  readonly userID: string;
  readonly customData: CustomData;
  readonly request: TRequest;
}
interface SubmitDatabaseContext extends DatabaseContext<SubmitChangesetRequest> {
  readonly memberID: string;
}
interface UnitRecord {
  readonly unitID: string;
  readonly type: UniverType;
  readonly headRevision: number;
}
interface ChangesetRange {
  readonly changesets: readonly IChangeset[];
  readonly latestRevision: number;
}
interface CreateUnitDatabaseInput {
  readonly record: UnitRecord;
  readonly snapshot: ISnapshot;
  readonly sheetBlocks?: readonly ISheetBlock[];
}
type CreateUnitDatabaseResult = {
  readonly status: "created";
  readonly record: UnitRecord;
} | {
  readonly status: "already-exists";
  readonly record: UnitRecord;
};
type DeleteUnitDatabaseStatus = "soft-deleted" | "already-soft-deleted" | "hard-deleted" | "already-hard-deleted";
interface DeleteUnitsDatabaseInput {
  readonly unitIDs: readonly string[];
  readonly hardDelete: boolean;
}
interface DeleteUnitsDatabaseResult {
  readonly units: readonly {
    readonly unitID: string;
    readonly status: DeleteUnitDatabaseStatus;
  }[];
}
type RecoverUnitDatabaseStatus = "recovered" | "already-active";
interface RecoverUnitsDatabaseInput {
  readonly unitIDs: readonly string[];
}
interface RecoverUnitsDatabaseResult {
  readonly units: readonly {
    readonly unitID: string;
    readonly status: RecoverUnitDatabaseStatus;
  }[];
}
interface CommitChangesetInput {
  readonly changeset: IChangeset;
}
type CommitChangesetResult = {
  readonly status: "committed";
  readonly changeset: IChangeset;
  readonly headRevision: number;
} | {
  readonly status: "revision-mismatch";
  readonly actualHeadRevision: number;
};
interface IDatabaseAdapter {
  getUnit(context: DatabaseContext<object>, unitID: string): Promise<UnitRecord | null>;
  getSnapshot(context: DatabaseContext<object>, unitID: string, options?: {
    readonly revision?: number;
  }): Promise<ISnapshot | null>;
  getChangesets(context: DatabaseContext<object>, unitID: string, range: {
    readonly from: number;
    readonly to: number;
  }): Promise<ChangesetRange>;
  createUnit(context: DatabaseContext<object>, input: CreateUnitDatabaseInput): Promise<CreateUnitDatabaseResult>;
  deleteUnits(context: DatabaseContext<object>, input: DeleteUnitsDatabaseInput): Promise<DeleteUnitsDatabaseResult>;
  recoverUnits(context: DatabaseContext<object>, input: RecoverUnitsDatabaseInput): Promise<RecoverUnitsDatabaseResult>;
  commitChangeset(context: SubmitDatabaseContext, input: CommitChangesetInput): Promise<CommitChangesetResult>;
  saveSnapshot(context: DatabaseContext<object>, input: SaveSnapshotInput): Promise<void>;
  getSheetBlock(context: DatabaseContext<object>, unitID: string, blockID: string): Promise<ISheetBlock | null>;
  dispose?(): Promise<void>;
}
//#endregion
//#region src/errors/collab-error.d.ts
type CollabErrorCode = "UNAUTHENTICATED" | "INVALID_REQUEST" | "UNIT_NOT_FOUND" | "PERMISSION_DENIED" | "OT_CONFLICT" | "REVISION_MISMATCH" | "ADAPTER_FAILURE" | "INTERNAL_ERROR";
declare class CollabError extends Error {
  readonly code: CollabErrorCode;
  readonly retryable: boolean;
  readonly details?: Readonly<JsonObject>;
  constructor(code: CollabErrorCode, message: string, options?: {
    retryable?: boolean;
    details?: Readonly<JsonObject>;
    cause?: unknown;
  });
}
//#endregion
//#region src/context/context.d.ts
interface CollabContext {
  readonly userID: string;
  readonly customData?: CustomData;
}
interface CollabMemberContext extends CollabContext {
  readonly memberID: string;
}
//#endregion
//#region src/permissions/permission-requirement.d.ts
interface PermissionRequirement {
  readonly unitID: string;
  readonly objectID: string;
  readonly objectType: UnitObject;
  readonly action: UnitAction;
  readonly mutationIndex: number;
  readonly mutationID: string;
}
//#endregion
//#region src/middleware/middleware.d.ts
type CollabServiceMiddlewareAction = "readUnitData" | "createUnit" | "deleteUnits" | "recoverUnits" | "submitChangeset" | "applyChangeset" | "commitChangeset";
type MiddlewareNext = () => Promise<void>;
type Middleware<TContext> = (ctx: TContext, next: MiddlewareNext) => void | Promise<void>;
interface BaseMiddlewareContext<TRequest extends CollabRequest> {
  readonly userID: string;
  readonly customData: CustomData;
  readonly request: TRequest;
}
type ReadUnitDataMiddlewareContext = BaseMiddlewareContext<ReadUnitDataRequest>;
type CreateUnitMiddlewareContext = BaseMiddlewareContext<CreateUnitRequest>;
type DeleteUnitsMiddlewareContext = BaseMiddlewareContext<DeleteUnitsRequest>;
type RecoverUnitsMiddlewareContext = BaseMiddlewareContext<RecoverUnitsRequest>;
interface SubmitChangesetMiddlewareContext extends BaseMiddlewareContext<SubmitChangesetRequest> {
  readonly memberID: string;
}
interface ApplyChangesetMiddlewareContext extends BaseMiddlewareContext<SubmitChangesetRequest> {
  readonly memberID: string;
  readonly attempt: number;
  readonly currentRevision: number;
  readonly changeset: Readonly<IChangeset>;
  readonly permissionRequirements: readonly PermissionRequirement[];
}
interface CommitChangesetMiddlewareContext extends BaseMiddlewareContext<SubmitChangesetRequest> {
  readonly memberID: string;
  readonly attempt: number;
  readonly expectedHeadRevision: number;
  readonly changeset: Readonly<IChangeset>;
}
interface CollabServiceMiddlewareMap {
  readonly readUnitData: Middleware<ReadUnitDataMiddlewareContext>;
  readonly createUnit: Middleware<CreateUnitMiddlewareContext>;
  readonly deleteUnits: Middleware<DeleteUnitsMiddlewareContext>;
  readonly recoverUnits: Middleware<RecoverUnitsMiddlewareContext>;
  readonly submitChangeset: Middleware<SubmitChangesetMiddlewareContext>;
  readonly applyChangeset: Middleware<ApplyChangesetMiddlewareContext>;
  readonly commitChangeset: Middleware<CommitChangesetMiddlewareContext>;
}
//#endregion
//#region src/observability/observability.d.ts
interface ILogger {
  debug(message: string, fields?: Readonly<JsonObject>): void;
  info(message: string, fields?: Readonly<JsonObject>): void;
  warn(message: string, fields?: Readonly<JsonObject>): void;
  error(message: string, fields?: Readonly<JsonObject>): void;
}
interface IMetrics {
  increment(name: string, labels?: Readonly<Record<string, string>>): void;
  observe(name: string, value: number, labels?: Readonly<Record<string, string>>): void;
}
//#endregion
//#region src/operations/operations.d.ts
type CreateUnitFromSnapshotInput = ISnapshotWithBlocks;
interface CreateUnitResult {
  readonly status: "created" | "already-exists";
  readonly unitID: string;
  readonly headRevision: number;
}
interface DeleteUnitsInput {
  readonly unitIDs: readonly string[];
  readonly hardDelete?: boolean;
}
interface DeleteUnitsResult {
  readonly units: readonly {
    readonly unitID: string;
    readonly status: "soft-deleted" | "already-soft-deleted" | "hard-deleted" | "already-hard-deleted";
  }[];
}
interface RecoverUnitsInput {
  readonly unitIDs: readonly string[];
}
interface RecoverUnitsResult {
  readonly units: readonly {
    readonly unitID: string;
    readonly status: "recovered" | "already-active";
  }[];
}
type CreateUnitFromDataInput = {
  readonly type: UniverType.UNIVER_SHEET;
  readonly data: IWorkbookData;
} | {
  readonly type: UniverType.UNIVER_DOC;
  readonly data: IDocumentData;
} | {
  readonly type: UniverType.UNIVER_SLIDE;
  readonly data: ISlideData;
} | {
  readonly type: UniverType.UNIVER_BOARD;
  readonly data: IBoardData;
} | {
  readonly type: UniverType.UNIVER_BASE;
  readonly data: IBaseSnapshot;
};
interface GetUnitLoadDataInput {
  readonly unitID: string;
  readonly type: UniverType;
  readonly revision: number;
}
interface GetChangesetsInput {
  readonly unitID: string;
  readonly type: UniverType;
  readonly from: number;
  readonly to: number;
}
interface GetChangesetsResult {
  readonly changesets: readonly IChangeset[];
  readonly latestRevision: number;
}
interface GetSheetBlockInput {
  readonly unitID: string;
  readonly type: UniverType;
  readonly blockID: string;
}
interface GetSheetBlockResult {
  readonly block: ISheetBlock | null;
}
interface SubmitChangesetInput {
  readonly changeset: IChangeset;
}
//#endregion
//#region src/submit/changeset.d.ts
type SubmitChangesetResult = {
  readonly status: "committed" | "already-committed";
  readonly changeset: IChangeset;
} | {
  readonly status: "rejected";
  readonly error: CollabError;
} | {
  readonly status: "retry";
  readonly error: CollabError;
};
//#endregion
//#region src/service/service.d.ts
declare const MAX_UNIT_LIFECYCLE_BATCH_SIZE = 100;
interface UniverCollabServiceOptions {
  readonly dbAdapter: IDatabaseAdapter;
  readonly snapshotPolicy?: SnapshotPolicy | false;
  readonly runtime?: {
    readonly maxLoadedUnits?: number;
    readonly idleTimeoutMs?: number;
  };
  readonly logger?: ILogger;
  readonly metrics?: IMetrics;
  readonly submitChangeset?: {
    readonly maxRevisionRetries?: number;
  };
}
interface ChangesetCommittedEvent {
  readonly userID: string;
  readonly memberID: string;
  readonly customData: Record<string, unknown>;
  readonly request: SubmitChangesetRequest;
  readonly changeset: IChangeset;
  readonly permissionRequirements: readonly PermissionRequirement[];
  readonly committedAt: number;
}
interface UnitCreatedEvent {
  readonly userID: string;
  readonly customData: Record<string, unknown>;
  readonly request: CreateUnitRequest;
  readonly record: UnitRecord;
  readonly createdAt: number;
}
interface UnitsDeletedEvent {
  readonly userID: string;
  readonly customData: Record<string, unknown>;
  readonly request: DeleteUnitsRequest;
  readonly result: DeleteUnitsDatabaseResult;
  readonly deletedAt: number;
}
interface UnitsRecoveredEvent {
  readonly userID: string;
  readonly customData: Record<string, unknown>;
  readonly request: RecoverUnitsRequest;
  readonly result: RecoverUnitsDatabaseResult;
  readonly recoveredAt: number;
}
interface CollabServiceEventMap {
  readonly changesetCommitted: ChangesetCommittedEvent;
  readonly unitCreated: UnitCreatedEvent;
  readonly unitsDeleted: UnitsDeletedEvent;
  readonly unitsRecovered: UnitsRecoveredEvent;
}
interface IUniverCollabService {
  use<K extends CollabServiceMiddlewareAction>(action: K, middleware: CollabServiceMiddlewareMap[K]): Disposable;
  getUnitLoadData(input: GetUnitLoadDataInput, context: CollabContext): Promise<UnitLoadData>;
  getUnitLoadDataWithBlocks(input: GetUnitLoadDataInput, context: CollabContext): Promise<UnitLoadDataWithBlocks>;
  getChangesets(input: GetChangesetsInput, context: CollabContext): Promise<GetChangesetsResult>;
  getSheetBlock(input: GetSheetBlockInput, context: CollabContext): Promise<GetSheetBlockResult>;
  createUnitFromSnapshot(input: CreateUnitFromSnapshotInput, context: CollabContext): Promise<CreateUnitResult>;
  createUnitFromData(input: CreateUnitFromDataInput, context: CollabContext): Promise<CreateUnitResult>;
  deleteUnits(input: DeleteUnitsInput, context: CollabContext): Promise<DeleteUnitsResult>;
  recoverUnits(input: RecoverUnitsInput, context: CollabContext): Promise<RecoverUnitsResult>;
  submitChangeset(input: SubmitChangesetInput, context: CollabMemberContext): Promise<SubmitChangesetResult>;
  on<K extends keyof CollabServiceEventMap>(event: K, listener: (event: CollabServiceEventMap[K]) => void | Promise<void>): Disposable;
  dispose(): Promise<void>;
}
declare class UniverCollabService implements IUniverCollabService {
  private readonly _dbAdapter;
  private readonly _middleware;
  private readonly _lifecycle;
  private readonly _logger;
  private readonly _metrics;
  private readonly _events;
  private readonly _runtime;
  private readonly _coordinator;
  private readonly _submitEngine;
  constructor(options: UniverCollabServiceOptions);
  use<K extends CollabServiceMiddlewareAction>(action: K, middleware: CollabServiceMiddlewareMap[K]): Disposable;
  on<K extends keyof CollabServiceEventMap>(event: K, listener: (event: CollabServiceEventMap[K]) => void | Promise<void>): Disposable;
  getUnitLoadData(input: GetUnitLoadDataInput, context: CollabContext): Promise<UnitLoadData>;
  getUnitLoadDataWithBlocks(input: GetUnitLoadDataInput, context: CollabContext): Promise<UnitLoadDataWithBlocks>;
  getChangesets(input: GetChangesetsInput, context: CollabContext): Promise<GetChangesetsResult>;
  getSheetBlock(input: GetSheetBlockInput, context: CollabContext): Promise<GetSheetBlockResult>;
  createUnitFromSnapshot(input: CreateUnitFromSnapshotInput, context: CollabContext): Promise<CreateUnitResult>;
  createUnitFromData(input: CreateUnitFromDataInput, context: CollabContext): Promise<CreateUnitResult>;
  deleteUnits(input: DeleteUnitsInput, context: CollabContext): Promise<DeleteUnitsResult>;
  recoverUnits(input: RecoverUnitsInput, context: CollabContext): Promise<RecoverUnitsResult>;
  submitChangeset(input: SubmitChangesetInput, context: CollabMemberContext): Promise<SubmitChangesetResult>;
  dispose(): Promise<void>;
  private _getUnitLoadData;
  private _getSnapshotSheetBlocks;
  private _createUnit;
  private _requireUnit;
  private _database;
  private _call;
  private _normalizeError;
  private _assertRunning;
}
//#endregion
//#region src/snapshots/unit-snapshot-materializer.d.ts
interface IUnitSnapshotMaterializer {
  materializeSnapshot(input: UnitLoadDataWithBlocks): Promise<ISnapshotWithBlocks>;
  dispose(): Promise<void>;
}
declare class UnitSnapshotMaterializer implements IUnitSnapshotMaterializer {
  private readonly _adapter;
  private readonly _runtime;
  private readonly _coordinator;
  private readonly _lifecycle;
  materializeSnapshot(input: UnitLoadDataWithBlocks): Promise<ISnapshotWithBlocks>;
  dispose(): Promise<void>;
}
//#endregion
//#region src/runtime/unit-runtime.d.ts
interface UnitHandle {
  readonly unitID: string;
  readonly type: UniverType;
  readonly revision: number;
}
interface IUnitRuntime {
  ensureUnit(context: DatabaseContext, unitID: string, type: UniverType): Promise<UnitHandle>;
  releaseUnit(handle: UnitHandle): void;
  applyChangeset(context: DatabaseContext, handle: UnitHandle, changeset: Readonly<IChangeset>): Promise<void>;
  resolvePermissionRequirements(handle: UnitHandle, changeset: Readonly<IChangeset>): readonly PermissionRequirement[];
  createSnapshot(handle: UnitHandle): Promise<SaveSnapshotInput>;
  disposeUnit(unitID: string): void;
  dispose(): Promise<void>;
}
interface UnitRuntimeOptions {
  readonly dbAdapter: IDatabaseAdapter;
  readonly maxLoadedUnits?: number;
  readonly idleTimeoutMs?: number;
}
//#endregion
//#region src/submit/univer-changeset-transformer.d.ts
declare class UniverChangesetTransformer {
  private readonly _transformService;
  constructor(_transformService: ITransformService);
  parseClient(changeset: IChangeset): IChangeset$1;
  transform(original: IChangeset$1, history: readonly IChangeset[]): IChangeset;
}
//#endregion
//#region src/runtime/univer-unit-runtime.d.ts
declare class UniverUnitRuntime implements IUnitRuntime {
  readonly changesetTransformer: UniverChangesetTransformer;
  private readonly _dbAdapter;
  private readonly _maxLoadedUnits;
  private readonly _idleTimeoutMs;
  private readonly _univer;
  private readonly _instanceService;
  private readonly _commandService;
  private readonly _revisionService;
  private readonly _compressMutationService;
  private readonly _snapshotService;
  private readonly _snapshotSaveService;
  private readonly _formulaCalculationSessionService;
  private readonly _snapshotBridge;
  private readonly _entries;
  private readonly _ensuring;
  private _disposed;
  constructor(options: UnitRuntimeOptions);
  ensureUnit(context: DatabaseContext, unitID: string, type: UniverType): Promise<UnitHandle>;
  releaseUnit(handle: UnitHandle): void;
  applyChangeset(context: DatabaseContext, handle: UnitHandle, changeset: Readonly<IChangeset>): Promise<void>;
  resolvePermissionRequirements(handle: UnitHandle, changeset: Readonly<IChangeset>): readonly PermissionRequirement[];
  createSnapshot(handle: UnitHandle): Promise<SaveSnapshotInput>;
  disposeUnit(unitID: string): void;
  dispose(): Promise<void>;
  private _ensureUnit;
  private _loadUnit;
  private _loadSdkUnit;
  private _createProtocolSnapshot;
  private _requireSdkUnit;
  private _replayRange;
  private _applyConfirmedChangeset;
  private _restoreHistoricalRevision;
  private _requireEntry;
  private _withBusy;
  private _retain;
  private _adoptReservation;
  private _touch;
  private _evictOverCapacity;
  private _database;
  private _assertOpen;
}
//#endregion
export { type ApplyChangesetMiddlewareContext, type BaseMiddlewareContext, type ChangesetCommittedEvent, type ChangesetRange, type CollabContext, CollabError, type CollabErrorCode, type CollabMemberContext, type CollabRequest, type CollabServiceEventMap, type CollabServiceMiddlewareAction, type CollabServiceMiddlewareMap, type CommitChangesetInput, type CommitChangesetMiddlewareContext, type CommitChangesetResult, type CreateUnitDatabaseInput, type CreateUnitDatabaseResult, type CreateUnitFromDataInput, type CreateUnitFromSnapshotInput, type CreateUnitMiddlewareContext, type CreateUnitRequest, type CreateUnitResult, type CustomData, type DatabaseContext, type DeleteUnitDatabaseStatus, type DeleteUnitsDatabaseInput, type DeleteUnitsDatabaseResult, type DeleteUnitsInput, type DeleteUnitsMiddlewareContext, type DeleteUnitsRequest, type DeleteUnitsResult, type Disposable, type GetChangesetsInput, type GetChangesetsRequest, type GetChangesetsResult, type GetSheetBlockInput, type GetSheetBlockRequest, type GetSheetBlockResult, type GetUnitLoadDataInput, type GetUnitLoadDataRequest, type IDatabaseAdapter, type ILogger, type IMetrics, type ISnapshotWithBlocks, type IUnitRuntime, type IUnitSnapshotMaterializer, type IUniverCollabService, type JsonObject, type JsonPrimitive, type JsonValue, MAX_UNIT_LIFECYCLE_BATCH_SIZE, type Middleware, type MiddlewareNext, type PermissionRequirement, type ReadUnitDataMiddlewareContext, type ReadUnitDataRequest, type RecoverUnitDatabaseStatus, type RecoverUnitsDatabaseInput, type RecoverUnitsDatabaseResult, type RecoverUnitsInput, type RecoverUnitsMiddlewareContext, type RecoverUnitsRequest, type RecoverUnitsResult, type SaveSnapshotInput, type SnapshotPolicy, type SubmitChangesetInput, type SubmitChangesetMiddlewareContext, type SubmitChangesetRequest, type SubmitChangesetResult, type SubmitDatabaseContext, type UnitCreatedEvent, type UnitHandle, type UnitLoadData, type UnitLoadDataWithBlocks, type UnitRecord, type UnitRuntimeOptions, UnitSnapshotMaterializer, type UnitsDeletedEvent, type UnitsRecoveredEvent, UniverCollabService, type UniverCollabServiceOptions, UniverUnitRuntime };