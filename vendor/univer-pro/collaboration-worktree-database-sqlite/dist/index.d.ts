import { ChangesetRange, DatabaseContext } from "@univerjs-pro/collaboration-service";
import { AddWorktreeUnitDatabaseInput, AddWorktreeUnitDatabaseResult, CommitWorktreeChangesetInput, CommitWorktreeChangesetResult, CreateWorktreeDatabaseInput, CreateWorktreeDatabaseResult, CreateWorktreeUnitDatabaseInput, CreateWorktreeUnitDatabaseResult, IWorktreeDatabaseAdapter, RecordUnitMergeResultInput, RecordUnitMergeResultResult, SaveWorktreeUnitMergeArtifactInput, SaveWorktreeUnitMergeArtifactResult, SetWorktreeUnitRemovedDatabaseInput, SetWorktreeUnitRemovedResult, StartMergeResult, WorktreeAggregateRecord, WorktreeRevisionRange, WorktreeTransitionResult, WorktreeUnitMergeArtifact, WorktreeUnitRecord, WorktreeUnitSeed } from "@univerjs-pro/collaboration-worktree-service";

//#region src/sqlite-worktree-database-adapter.d.ts
interface SQLiteWorktreeDatabaseAdapterOptions {
  readonly filename: string;
  readonly busyTimeoutMs?: number;
}
declare class SQLiteWorktreeDatabaseAdapter implements IWorktreeDatabaseAdapter {
  private readonly _database;
  private _disposed;
  constructor(options: SQLiteWorktreeDatabaseAdapterOptions);
  getWorktree(_context: DatabaseContext, worktreeID: string): Promise<WorktreeAggregateRecord | null>;
  getWorktreeUnit(_context: DatabaseContext, worktreeID: string, unitID: string): Promise<WorktreeUnitRecord | null>;
  getDraftChangesets(_context: DatabaseContext, worktreeID: string, unitID: string, range: WorktreeRevisionRange): Promise<ChangesetRange>;
  getUnitSeed(_context: DatabaseContext, worktreeID: string, unitID: string): Promise<WorktreeUnitSeed | null>;
  getUnitMergeArtifact(_context: DatabaseContext, worktreeID: string, unitID: string): Promise<WorktreeUnitMergeArtifact | null>;
  createWorktree(_context: DatabaseContext, input: CreateWorktreeDatabaseInput): Promise<CreateWorktreeDatabaseResult>;
  addUnit(_context: DatabaseContext, input: AddWorktreeUnitDatabaseInput): Promise<AddWorktreeUnitDatabaseResult>;
  createUnit(_context: DatabaseContext, input: CreateWorktreeUnitDatabaseInput): Promise<CreateWorktreeUnitDatabaseResult>;
  saveUnitMergeArtifact(_context: DatabaseContext, input: SaveWorktreeUnitMergeArtifactInput): Promise<SaveWorktreeUnitMergeArtifactResult>;
  setUnitRemoved(_context: DatabaseContext, input: SetWorktreeUnitRemovedDatabaseInput): Promise<SetWorktreeUnitRemovedResult>;
  commitDraftChangeset(_context: DatabaseContext, input: CommitWorktreeChangesetInput): Promise<CommitWorktreeChangesetResult>;
  markReady(_context: DatabaseContext, worktreeID: string): Promise<WorktreeTransitionResult>;
  reopenWorktree(_context: DatabaseContext, worktreeID: string): Promise<WorktreeTransitionResult>;
  discardWorktree(_context: DatabaseContext, worktreeID: string): Promise<WorktreeTransitionResult>;
  startOrResumeMerge(_context: DatabaseContext, worktreeID: string): Promise<StartMergeResult>;
  recordUnitMergeResult(_context: DatabaseContext, input: RecordUnitMergeResultInput): Promise<RecordUnitMergeResultResult>;
  finishMerge(_context: DatabaseContext, worktreeID: string): Promise<WorktreeTransitionResult>;
  dispose(): Promise<void>;
  private _initializeSchema;
  private _hasTable;
  private _hasAnyOwnedTable;
  private _getWorktreeRow;
  private _getUnitRow;
  private _getUnitRows;
  private _getUnitSeed;
  private _getUnitMergeArtifact;
  private _getAggregate;
  private _requireAggregate;
  private _updateStatus;
  private _transaction;
  private _assertOpen;
}
//#endregion
export { SQLiteWorktreeDatabaseAdapter, type SQLiteWorktreeDatabaseAdapterOptions };