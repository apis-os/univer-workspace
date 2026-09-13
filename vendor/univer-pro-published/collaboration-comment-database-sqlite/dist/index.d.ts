import { CommentDatabaseContext, CommentRecord, CreateCommentDatabaseResult, CreateReplyDatabaseInput, CreateReplyDatabaseResult, CreateRootDatabaseInput, DeleteCommentDatabaseInput, DeleteCommentDatabaseResult, EditCommentDatabaseInput, EditCommentDatabaseResult, GetCommentDatabaseInput, ICommentDatabaseAdapter, ListThreadsDatabaseInput, SetThreadSolvedDatabaseInput, SetThreadSolvedDatabaseResult } from "@univerjs-pro/collaboration-comment-service";

//#region src/sqlite-comment-database-adapter.d.ts
interface SQLiteCommentDatabaseAdapterOptions {
  readonly filename: string;
  readonly busyTimeoutMs?: number;
}
declare class SQLiteCommentDatabaseAdapter implements ICommentDatabaseAdapter {
  private readonly _database;
  private _disposed;
  constructor(options: SQLiteCommentDatabaseAdapterOptions);
  createRoot(input: CreateRootDatabaseInput, _context: CommentDatabaseContext): Promise<CreateCommentDatabaseResult>;
  createReply(input: CreateReplyDatabaseInput, _context: CommentDatabaseContext): Promise<CreateReplyDatabaseResult>;
  getComment(input: GetCommentDatabaseInput, _context: CommentDatabaseContext): Promise<CommentRecord | null>;
  listThreads(input: ListThreadsDatabaseInput, _context: CommentDatabaseContext): Promise<readonly CommentRecord[]>;
  editComment(input: EditCommentDatabaseInput, _context: CommentDatabaseContext): Promise<EditCommentDatabaseResult>;
  setThreadSolved(input: SetThreadSolvedDatabaseInput, _context: CommentDatabaseContext): Promise<SetThreadSolvedDatabaseResult>;
  deleteComment(input: DeleteCommentDatabaseInput, _context: CommentDatabaseContext): Promise<DeleteCommentDatabaseResult>;
  dispose(): Promise<void>;
  private _initializeSchema;
  private _hasTable;
  private _hasAnyOwnedTable;
  private _insert;
  private _getByReply;
  private _require;
  private _transaction;
  private _assertOpen;
}
//#endregion
export { SQLiteCommentDatabaseAdapter, type SQLiteCommentDatabaseAdapterOptions };