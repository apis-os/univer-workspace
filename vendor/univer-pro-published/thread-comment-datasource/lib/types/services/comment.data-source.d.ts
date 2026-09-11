import type { IBaseComment, IThreadComment, IThreadCommentDataSource } from '@univerjs/thread-comment';
import { CollaborationSessionService } from '@univerjs-pro/collaboration-client';
import { UserManagerService } from '@univerjs/core';
import { HTTPService } from '@univerjs/network';
export declare class ThreadCommentServerDataSource implements IThreadCommentDataSource {
    private readonly _httpService;
    private readonly _userService;
    private readonly _sessionService;
    constructor(_httpService: HTTPService, _userService: UserManagerService, _sessionService: CollaborationSessionService);
    addComment(comment: IThreadComment): Promise<IThreadComment>;
    updateComment(comment: IThreadComment): Promise<boolean>;
    resolveComment(comment: IThreadComment): Promise<boolean>;
    deleteComment(unitId: string, _subUnitId: string, threadId: string, commentId: string): Promise<boolean>;
    deleteThread(unitId: string, _subUnitId: string, threadId: string): Promise<boolean>;
    private _deleteComment;
    listComments(unitId: string, subUnitId: string, threadIds: string[]): Promise<IBaseComment[]>;
    saveCommentToSnapshot(comment: IThreadComment): {
        id: string;
        threadId: string;
        ref: string;
    };
}
