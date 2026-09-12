import type { Injector } from '@univerjs/core';
import { FBaseTableRecord } from '@univerjs-pro/bases/facade';
import * as ThreadComment from '@univerjs/thread-comment';
export type IBaseRecordCommentCreateOptions = Omit<ThreadComment.ICreateThreadCommentOptions, 'unitId' | 'subUnitId' | 'anchor' | 'content'>;
export interface IFBaseTableRecordThreadCommentMixin {
    /**
     * Creates a comment anchored to this record. The same record anchor is used in Grid, Kanban, Gallery, Calendar, and Gantt views.
     * @param content Plain text or a Univer document body for rich comment content.
     * @param options Optional stable IDs, author, attachments, and creation time.
     * @returns `true` when the create command succeeds; otherwise, `false`.
     * @throws {TypeError} If the content is empty.
     * @example
     * ```ts
     * const table = univerAPI.getActiveBase()?.getTables()[0];
     * const record = table?.getRecords()[0];
     * await record?.createCommentAsync('Confirm this record.', { id: 'review-record-1' });
     * ```
     */
    createCommentAsync(content: ThreadComment.ThreadCommentContent, options?: IBaseRecordCommentCreateOptions): Promise<boolean>;
    /**
     * Returns locally loaded comments anchored to this record.
     * @returns Matching comment threads for this exact Base, table, and record ID.
     * @example
     * ```ts
     * const record = univerAPI.getActiveBase()?.getTables()[0]?.getRecords()[0];
     * const comments = record?.getComments() ?? [];
     * comments.forEach(({ root, children }) => console.log(root.id, children.length));
     * ```
     */
    getComments(): ThreadComment.IFacadeThreadCommentInfo[];
    /**
     * Synchronizes known threads and returns comments anchored to this record.
     * @returns A promise resolving to matching synchronized comment threads.
     * @example
     * ```ts
     * const record = univerAPI.getActiveBase()?.getTables()[0]?.getRecords()[0];
     * const comments = record ? await record.listCommentsAsync() : [];
     * console.log(comments.length);
     * ```
     */
    listCommentsAsync(): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
}
export declare class FBaseTableRecordThreadCommentMixin extends FBaseTableRecord implements IFBaseTableRecordThreadCommentMixin {
    private _threadCommentService;
    _initialize(injector: Injector): void;
    /** @inheritdoc */
    createCommentAsync(content: ThreadComment.ThreadCommentContent, options?: IBaseRecordCommentCreateOptions): Promise<boolean>;
    /** @inheritdoc */
    getComments(): ThreadComment.IFacadeThreadCommentInfo[];
    /** @inheritdoc */
    listCommentsAsync(): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
}
declare module '@univerjs-pro/bases/facade' {
    interface FBaseTableRecord extends IFBaseTableRecordThreadCommentMixin {
    }
}
