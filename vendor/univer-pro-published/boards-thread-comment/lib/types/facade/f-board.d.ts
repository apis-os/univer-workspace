import type { Injector } from '@univerjs/core';
import { FBoard } from '@univerjs-pro/boards/facade';
import * as ThreadComment from '@univerjs/thread-comment';
export type IBoardCommentCreateOptions = Omit<ThreadComment.ICreateThreadCommentOptions, 'unitId' | 'subUnitId' | 'anchor' | 'content'>;
export interface IBoardCommentPosition {
    /** Horizontal position in Board world coordinates. */
    x: number;
    /** Vertical position in Board world coordinates. */
    y: number;
}
export interface IFBoardThreadCommentMixin {
    /**
     * Creates a comment for any Board element ID, including shapes, text, images, charts, tables, connectors, mind maps, and ink.
     * @param elementId Stable ID of an element on the active Board page.
     * @param content Plain text or a Univer document body for rich comment content.
     * @param options Optional stable IDs, author, attachments, and creation time.
     * @returns `true` when the create command succeeds; otherwise, `false`.
     * @throws {Error} If the element does not exist on the active page.
     * @throws {TypeError} If the content is empty.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * const chart = board?.getCharts()[0];
     * if (chart) await board?.createElementCommentAsync(chart.getElementId(), 'Verify this chart.');
     * ```
     */
    createElementCommentAsync(elementId: string, content: ThreadComment.ThreadCommentContent, options?: IBoardCommentCreateOptions): Promise<boolean>;
    /**
     * Creates a free-position comment in Board world coordinates.
     * @param position Position in the Board's unscaled world coordinate system.
     * @param content Plain text or a Univer document body for rich comment content.
     * @param options Optional stable IDs, author, attachments, and creation time.
     * @returns `true` when the create command succeeds; otherwise, `false`.
     * @throws {TypeError} If either coordinate is not finite or the content is empty.
     * @example
     * ```ts
     * await univerAPI.getActiveBoard()?.createPositionCommentAsync({ x: 320, y: 180 }, 'Review this area.');
     * ```
     */
    createPositionCommentAsync(position: IBoardCommentPosition, content: ThreadComment.ThreadCommentContent, options?: IBoardCommentCreateOptions): Promise<boolean>;
    /**
     * Returns locally loaded comments for one stable Board element ID on the active page.
     * @param elementId Stable ID of the target Board element.
     * @returns Matching comment threads for the active page and element.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * const elementId = board ? Object.keys(board.getElements())[0] : undefined;
     * const comments = board && elementId ? board.getElementComments(elementId) : [];
     * console.log(comments.length);
     * ```
     */
    getElementComments(elementId: string): ThreadComment.IFacadeThreadCommentInfo[];
    /**
     * Synchronizes known threads and returns comments for one stable Board element ID on the active page.
     * @param elementId Stable ID of the target Board element.
     * @returns A promise resolving to matching synchronized comment threads.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * const elementId = board ? Object.keys(board.getElements())[0] : undefined;
     * const comments = board && elementId ? await board.listElementCommentsAsync(elementId) : [];
     * console.log(comments.length);
     * ```
     */
    listElementCommentsAsync(elementId: string): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
    /**
     * Returns locally loaded element and free-position comments across all pages in this Board.
     * @returns Every locally loaded comment thread owned by this Board.
     * @example
     * ```ts
     * const comments = univerAPI.getActiveBoard()?.getComments() ?? [];
     * comments.forEach(({ root, anchor }) => console.log(root.id, anchor));
     * ```
     */
    getComments(): ThreadComment.IFacadeThreadCommentInfo[];
    /**
     * Synchronizes known threads and returns element and free-position comments across all pages in this Board.
     * @returns A promise resolving to every synchronized comment thread owned by this Board.
     * @example
     * ```ts
     * const board = univerAPI.getActiveBoard();
     * const comments = board ? await board.listCommentsAsync() : [];
     * console.log(comments.length);
     * ```
     */
    listCommentsAsync(): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
}
export declare class FBoardThreadCommentMixin extends FBoard implements IFBoardThreadCommentMixin {
    private _threadCommentService;
    _initialize(injector: Injector): void;
    /** @inheritdoc */
    createElementCommentAsync(elementId: string, content: ThreadComment.ThreadCommentContent, options?: IBoardCommentCreateOptions): Promise<boolean>;
    /** @inheritdoc */
    createPositionCommentAsync(position: IBoardCommentPosition, content: ThreadComment.ThreadCommentContent, options?: IBoardCommentCreateOptions): Promise<boolean>;
    /** @inheritdoc */
    getElementComments(elementId: string): ThreadComment.IFacadeThreadCommentInfo[];
    /** @inheritdoc */
    listElementCommentsAsync(elementId: string): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
    /** @inheritdoc */
    getComments(): ThreadComment.IFacadeThreadCommentInfo[];
    /** @inheritdoc */
    listCommentsAsync(): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
}
declare module '@univerjs-pro/boards/facade' {
    interface FBoard extends IFBoardThreadCommentMixin {
    }
}
