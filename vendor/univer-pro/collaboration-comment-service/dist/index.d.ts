import { CollabContext, CollabMemberContext, CustomData, Disposable } from "@univerjs-pro/collaboration-service";
import { CommentSolvedStatus, ICommentUpdate, IReply, IThread, IUser } from "@univerjs/protocol";

//#region src/middleware.d.ts
interface DeleteCommentMiddlewareTarget {
  readonly kind: "root" | "reply";
  readonly threadID: string;
  readonly replyID: string;
  readonly authorUserID: string;
  readonly generation: string;
}
interface BaseCommentMiddlewareContext<TRequest> {
  readonly userID: string;
  readonly customData: CustomData;
  readonly request: TRequest;
}
interface MemberCommentMiddlewareContext<TRequest> extends BaseCommentMiddlewareContext<TRequest> {
  readonly memberID: string;
}
type AddCommentMiddlewareContext = MemberCommentMiddlewareContext<AddCommentRequest>;
type ListCommentsMiddlewareContext = BaseCommentMiddlewareContext<ListCommentsRequest>;
type ReplyCommentMiddlewareContext = MemberCommentMiddlewareContext<ReplyCommentRequest>;
type SetThreadSolvedMiddlewareContext = MemberCommentMiddlewareContext<SetThreadSolvedRequest>;
type EditCommentMiddlewareContext = MemberCommentMiddlewareContext<EditCommentRequest>;
interface DeleteCommentMiddlewareContext extends MemberCommentMiddlewareContext<DeleteCommentRequest> {
  readonly target: DeleteCommentMiddlewareTarget;
}
type CommentMiddlewareNext = () => Promise<void>;
type CommentMiddleware<TContext> = (context: TContext, next: CommentMiddlewareNext) => void | Promise<void>;
type CommentMiddlewareAction = "addComment" | "listComments" | "replyComment" | "setThreadSolved" | "editComment" | "deleteComment";
interface CommentMiddlewareMap {
  readonly addComment: CommentMiddleware<AddCommentMiddlewareContext>;
  readonly listComments: CommentMiddleware<ListCommentsMiddlewareContext>;
  readonly replyComment: CommentMiddleware<ReplyCommentMiddlewareContext>;
  readonly setThreadSolved: CommentMiddleware<SetThreadSolvedMiddlewareContext>;
  readonly editComment: CommentMiddleware<EditCommentMiddlewareContext>;
  readonly deleteComment: CommentMiddleware<DeleteCommentMiddlewareContext>;
}
//#endregion
//#region src/types.d.ts
interface AddCommentInput {
  readonly unitID: string;
  readonly content: string;
  readonly mentions: readonly string[];
}
interface ListCommentsInput {
  readonly unitID: string;
  readonly threadIDs: readonly string[];
}
interface ReplyCommentInput {
  readonly unitID: string;
  readonly threadID: string;
  readonly content: string;
  readonly mentions: readonly string[];
}
interface SetThreadSolvedInput {
  readonly unitID: string;
  readonly threadID: string;
  readonly solved: CommentSolvedStatus;
}
interface EditCommentInput {
  readonly unitID: string;
  readonly threadID: string;
  readonly replyID: string;
  readonly content: string;
  readonly mentions: readonly string[];
}
interface DeleteCommentInput {
  readonly unitID: string;
  readonly threadID: string;
  readonly replyID?: string;
}
interface AddCommentRequest extends AddCommentInput {}
interface ListCommentsRequest extends ListCommentsInput {}
interface ReplyCommentRequest extends ReplyCommentInput {}
interface SetThreadSolvedRequest extends SetThreadSolvedInput {}
interface EditCommentRequest extends EditCommentInput {}
interface DeleteCommentRequest extends DeleteCommentInput {}
type CommentRequest = AddCommentRequest | ListCommentsRequest | ReplyCommentRequest | SetThreadSolvedRequest | EditCommentRequest | DeleteCommentRequest;
type CommentWriteRequest = Exclude<CommentRequest, ListCommentsRequest>;
interface CommentListResult {
  readonly comments: Readonly<Record<string, IThread>>;
  readonly users: Readonly<Record<string, IUser>>;
}
interface CommentUserProviderContext {
  readonly userID: string;
  readonly customData: CustomData;
  readonly request: CommentRequest;
}
interface ICommentUserProvider {
  getUsers(userIDs: readonly string[], context: CommentUserProviderContext): Promise<readonly IUser[]>;
}
interface CommentCommittedEvent {
  readonly userID: string;
  readonly memberID: string;
  readonly customData: CustomData;
  readonly request: CommentWriteRequest;
  readonly update: ICommentUpdate;
  readonly committedAt: number;
}
interface CommentServiceEventMap {
  readonly commentCommitted: CommentCommittedEvent;
}
type CommentServiceListener<K extends keyof CommentServiceEventMap> = (event: CommentServiceEventMap[K]) => void | Promise<void>;
interface IUniverCommentService {
  addComment(input: AddCommentInput, context: CollabMemberContext): Promise<IThread>;
  listComments(input: ListCommentsInput, context: CollabContext): Promise<CommentListResult>;
  replyComment(input: ReplyCommentInput, context: CollabMemberContext): Promise<IReply>;
  setThreadSolved(input: SetThreadSolvedInput, context: CollabMemberContext): Promise<void>;
  editComment(input: EditCommentInput, context: CollabMemberContext): Promise<void>;
  deleteComment(input: DeleteCommentInput, context: CollabMemberContext): Promise<void>;
  use<K extends CommentMiddlewareAction>(action: K, middleware: CommentMiddlewareMap[K]): Disposable;
  on<K extends keyof CommentServiceEventMap>(event: K, listener: CommentServiceListener<K>): Disposable;
  dispose(): Promise<void>;
}
//#endregion
//#region src/database-adapter.d.ts
interface CommentRecord {
  readonly unitID: string;
  readonly threadID: string;
  readonly replyID: string;
  readonly authorUserID: string;
  readonly content: string;
  readonly mentions: readonly string[];
  readonly solved: CommentSolvedStatus;
  readonly createdAt: number;
  readonly updatedAt: number;
  readonly generation: string;
}
interface CommentDatabaseContext<TRequest extends CommentRequest = CommentRequest> {
  readonly userID: string;
  readonly customData: CustomData;
  readonly request: TRequest;
}
interface CommentMemberDatabaseContext<TRequest extends CommentRequest = CommentRequest> extends CommentDatabaseContext<TRequest> {
  readonly memberID: string;
}
interface CreateRootDatabaseInput {
  readonly unitID: string;
  readonly threadID: string;
  readonly authorUserID: string;
  readonly content: string;
  readonly mentions: readonly string[];
}
interface CreateReplyDatabaseInput extends CreateRootDatabaseInput {
  readonly replyID: string;
}
interface GetCommentDatabaseInput {
  readonly unitID: string;
  readonly threadID: string;
  readonly replyID: string;
}
interface ListThreadsDatabaseInput {
  readonly unitID: string;
  readonly threadIDs: readonly string[];
}
interface EditCommentDatabaseInput extends GetCommentDatabaseInput {
  readonly expectedAuthorUserID: string;
  readonly content: string;
  readonly mentions: readonly string[];
}
interface SetThreadSolvedDatabaseInput {
  readonly unitID: string;
  readonly threadID: string;
  readonly solved: CommentSolvedStatus;
}
interface DeleteCommentDatabaseInput {
  readonly unitID: string;
  readonly threadID: string;
  readonly replyID?: string;
  readonly expectedGeneration: string;
}
type CreateCommentDatabaseResult = {
  readonly status: "created";
  readonly record: CommentRecord;
} | {
  readonly status: "duplicate";
};
type CreateReplyDatabaseResult = CreateCommentDatabaseResult | {
  readonly status: "not-found";
} | {
  readonly status: "closed";
};
type EditCommentDatabaseResult = {
  readonly status: "edited";
  readonly record: CommentRecord;
} | {
  readonly status: "unchanged";
  readonly record: CommentRecord;
} | {
  readonly status: "not-found";
} | {
  readonly status: "closed";
} | {
  readonly status: "author-mismatch";
};
type SetThreadSolvedDatabaseResult = {
  readonly status: "updated";
} | {
  readonly status: "unchanged";
} | {
  readonly status: "not-found";
};
type DeleteCommentDatabaseResult = {
  readonly status: "deleted";
} | {
  readonly status: "not-found";
} | {
  readonly status: "generation-mismatch";
};
interface ICommentDatabaseAdapter {
  createRoot(input: CreateRootDatabaseInput, context: CommentMemberDatabaseContext): Promise<CreateCommentDatabaseResult>;
  createReply(input: CreateReplyDatabaseInput, context: CommentMemberDatabaseContext): Promise<CreateReplyDatabaseResult>;
  getComment(input: GetCommentDatabaseInput, context: CommentMemberDatabaseContext): Promise<CommentRecord | null>;
  listThreads(input: ListThreadsDatabaseInput, context: CommentDatabaseContext): Promise<readonly CommentRecord[]>;
  editComment(input: EditCommentDatabaseInput, context: CommentMemberDatabaseContext): Promise<EditCommentDatabaseResult>;
  setThreadSolved(input: SetThreadSolvedDatabaseInput, context: CommentMemberDatabaseContext): Promise<SetThreadSolvedDatabaseResult>;
  deleteComment(input: DeleteCommentDatabaseInput, context: CommentMemberDatabaseContext): Promise<DeleteCommentDatabaseResult>;
  dispose(): Promise<void>;
}
//#endregion
//#region src/service.d.ts
interface UniverCommentServiceOptions {
  readonly database: ICommentDatabaseAdapter;
  readonly userProvider?: ICommentUserProvider;
}
declare class UniverCommentService implements IUniverCommentService {
  private readonly _middleware;
  private readonly _listeners;
  private readonly _calls;
  private readonly _database;
  private readonly _userProvider;
  private _state;
  private _disposePromise;
  constructor(options: UniverCommentServiceOptions);
  use<K extends CommentMiddlewareAction>(action: K, middleware: CommentMiddlewareMap[K]): Disposable;
  on<K extends keyof CommentServiceEventMap>(event: K, listener: CommentServiceListener<K>): Disposable;
  addComment(input: AddCommentInput, context: CollabMemberContext): Promise<IThread>;
  listComments(input: ListCommentsInput, context: CollabContext): Promise<CommentListResult>;
  replyComment(input: ReplyCommentInput, context: CollabMemberContext): Promise<IReply>;
  editComment(input: EditCommentInput, context: CollabMemberContext): Promise<void>;
  setThreadSolved(input: SetThreadSolvedInput, context: CollabMemberContext): Promise<void>;
  deleteComment(input: DeleteCommentInput, context: CollabMemberContext): Promise<void>;
  dispose(): Promise<void>;
  private _createUpdate;
  private _resolveUsers;
  private _emitWrite;
  private _call;
  private _databaseCall;
  private _assertRunning;
}
//#endregion
export { type AddCommentInput, type AddCommentMiddlewareContext, type AddCommentRequest, type CommentCommittedEvent, type CommentDatabaseContext, type CommentListResult, type CommentMemberDatabaseContext, type CommentMiddleware, type CommentMiddlewareAction, type CommentMiddlewareMap, type CommentMiddlewareNext, type CommentRecord, type CommentRequest, type CommentServiceEventMap, type CommentUserProviderContext, type CommentWriteRequest, type CreateCommentDatabaseResult, type CreateReplyDatabaseInput, type CreateReplyDatabaseResult, type CreateRootDatabaseInput, type DeleteCommentDatabaseInput, type DeleteCommentDatabaseResult, type DeleteCommentInput, type DeleteCommentMiddlewareContext, type DeleteCommentMiddlewareTarget, type DeleteCommentRequest, type EditCommentDatabaseInput, type EditCommentDatabaseResult, type EditCommentInput, type EditCommentMiddlewareContext, type EditCommentRequest, type GetCommentDatabaseInput, type ICommentDatabaseAdapter, type ICommentUserProvider, type IUniverCommentService, type ListCommentsInput, type ListCommentsMiddlewareContext, type ListCommentsRequest, type ListThreadsDatabaseInput, type ReplyCommentInput, type ReplyCommentMiddlewareContext, type ReplyCommentRequest, type SetThreadSolvedDatabaseInput, type SetThreadSolvedDatabaseResult, type SetThreadSolvedInput, type SetThreadSolvedMiddlewareContext, type SetThreadSolvedRequest, UniverCommentService, type UniverCommentServiceOptions };