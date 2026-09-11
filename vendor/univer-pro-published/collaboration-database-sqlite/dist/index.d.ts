import { ChangesetRange, CommitChangesetInput, CommitChangesetResult, CreateUnitDatabaseInput, CreateUnitDatabaseResult, DatabaseContext, DeleteUnitsDatabaseInput, DeleteUnitsDatabaseResult, IDatabaseAdapter, RecoverUnitsDatabaseInput, RecoverUnitsDatabaseResult, SaveSnapshotInput, UnitRecord } from "@univerjs-pro/collaboration-service";
import { ISheetBlock, ISnapshot } from "@univerjs/protocol";

//#region src/sqlite-database-adapter.d.ts
interface SQLiteDatabaseAdapterOptions {
  readonly filename: string;
  readonly busyTimeoutMs?: number;
}
declare class SQLiteDatabaseAdapter implements IDatabaseAdapter {
  private readonly _database;
  private _disposed;
  constructor(options: SQLiteDatabaseAdapterOptions);
  getUnit(_context: DatabaseContext, unitID: string): Promise<UnitRecord | null>;
  getSnapshot(_context: DatabaseContext, unitID: string, options?: {
    readonly revision?: number;
  }): Promise<ISnapshot | null>;
  getChangesets(_context: DatabaseContext, unitID: string, range: {
    readonly from: number;
    readonly to: number;
  }): Promise<ChangesetRange>;
  createUnit(_context: DatabaseContext, input: CreateUnitDatabaseInput): Promise<CreateUnitDatabaseResult>;
  deleteUnits(_context: DatabaseContext, input: DeleteUnitsDatabaseInput): Promise<DeleteUnitsDatabaseResult>;
  recoverUnits(_context: DatabaseContext, input: RecoverUnitsDatabaseInput): Promise<RecoverUnitsDatabaseResult>;
  commitChangeset(_context: DatabaseContext, input: CommitChangesetInput): Promise<CommitChangesetResult>;
  saveSnapshot(_context: DatabaseContext, input: SaveSnapshotInput): Promise<void>;
  getSheetBlock(_context: DatabaseContext, unitID: string, blockID: string): Promise<ISheetBlock | null>;
  dispose(): Promise<void>;
  private _initializeSchema;
  private _getActiveUnitRow;
  private _getStoredUnitRow;
  private _hasTombstone;
  private _hasTable;
  private _hasAnyCoreTable;
  private _writeSheetBlocks;
  private _transaction;
  private _assertOpen;
}
//#endregion
export { SQLiteDatabaseAdapter, type SQLiteDatabaseAdapterOptions };