import type { IThreadComment, IThreadCommentDataSource } from '@univerjs/thread-comment';
export declare class ThreadCommentServerDataSource implements IThreadCommentDataSource {
    addComment(comment: IThreadComment): Promise<IThreadComment>;
    updateComment(_comment: IThreadComment): Promise<boolean>;
    resolveComment(_comment: IThreadComment): Promise<boolean>;
    deleteComment(_unitId: string, _subUnitId: string, _threadId: string, _commentId: string): Promise<boolean>;
    listComments(_unitId: string, _subUnitId: string, _threadIds: string[]): Promise<never[]>;
    saveCommentToSnapshot(comment: IThreadComment): {
        id: string;
        threadId: string;
        ref: string;
    };
}
