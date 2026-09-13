import { AppendHistoryRevisionResult, HistoryCreatorIndex, HistoryIndexState, HistoryRevision, IHistoryDatabaseAdapter, ListHistoryRecordsOptions, ListHistoryRecordsResult } from "@univerjs-pro/collaboration-history-service";

//#region src/sqlite-history-database-adapter.d.ts
interface SQLiteHistoryDatabaseAdapterOptions {
  readonly filename: string;
  readonly busyTimeoutMs?: number;
}
declare class SQLiteHistoryDatabaseAdapter implements IHistoryDatabaseAdapter {
  private readonly _database;
  private _disposed;
  constructor(options: SQLiteHistoryDatabaseAdapterOptions);
  getIndexState(unitID: string): Promise<HistoryIndexState | null>;
  getRevision(unitID: string, revision: number): Promise<HistoryRevision | null>;
  appendRevision(entry: HistoryRevision, options: {
    readonly expectedLatestRevision: number;
  }): Promise<AppendHistoryRevisionResult>;
  listRecords(unitID: string, options: ListHistoryRecordsOptions): Promise<ListHistoryRecordsResult>;
  listCreators(unitID: string): Promise<readonly HistoryCreatorIndex[]>;
  dispose(): Promise<void>;
  private _initializeSchema;
  private _hasTable;
  private _hasAnyOwnedTable;
  private _latestEntry;
  private _getEntry;
  private _transaction;
  private _assertOpen;
}
//#endregion
export { SQLiteHistoryDatabaseAdapter, type SQLiteHistoryDatabaseAdapterOptions };