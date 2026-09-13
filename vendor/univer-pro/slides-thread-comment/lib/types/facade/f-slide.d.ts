import type { Injector } from '@univerjs/core';
import { FPageElement, FSlide } from '@univerjs-pro/slides/facade';
import * as ThreadComment from '@univerjs/thread-comment';
export type ISlideCommentCreateOptions = Omit<ThreadComment.ICreateThreadCommentOptions, 'unitId' | 'subUnitId' | 'anchor' | 'content'>;
export interface ISlideCommentPosition {
    /** Horizontal position normalized to the slide width, from 0 to 1. */
    x: number;
    /** Vertical position normalized to the slide height, from 0 to 1. */
    y: number;
}
export interface IFSlideThreadCommentMixin {
    /**
     * Creates a free-position comment. Coordinates are normalized to the slide size.
     * @param position Normalized position where `(0, 0)` is the top-left and `(1, 1)` is the bottom-right.
     * @param content Plain text or a Univer document body for rich comment content.
     * @param options Optional stable IDs, author, attachments, and creation time.
     * @returns `true` when the create command succeeds; otherwise, `false`.
     * @throws {RangeError} If either coordinate is not finite or is outside the inclusive range from 0 to 1.
     * @throws {TypeError} If the content is empty.
     * @example
     * ```ts
     * const slide = univerAPI.getActivePresentation()?.getSlideByIndex(0);
     * await slide?.createPositionCommentAsync({ x: 0.5, y: 0.25 }, 'Check this area.');
     * ```
     */
    createPositionCommentAsync(position: ISlideCommentPosition, content: ThreadComment.ThreadCommentContent, options?: ISlideCommentCreateOptions): Promise<boolean>;
    /**
     * Creates a comment for any slide element ID, including shapes, text, images, charts, tables, and groups.
     * @param elementId Stable ID returned by the target element Facade, such as `getId()` or `getElementId()`.
     * @param content Plain text or a Univer document body for rich comment content.
     * @param options Optional stable IDs, author, attachments, and creation time.
     * @returns `true` when the create command succeeds; otherwise, `false`.
     * @throws {Error} If the element does not exist on this slide.
     * @throws {TypeError} If the content is empty.
     * @example
     * ```ts
     * const slide = univerAPI.getActivePresentation()?.getSlideByIndex(0);
     * const chart = slide?.getCharts()[0];
     * if (chart) await slide?.createElementCommentAsync(chart.getElementId(), 'Verify the chart source.');
     * ```
     */
    createElementCommentAsync(elementId: string, content: ThreadComment.ThreadCommentContent, options?: ISlideCommentCreateOptions): Promise<boolean>;
    /**
     * Returns locally loaded comments for one stable slide element ID.
     * @param elementId Stable ID of the target slide element.
     * @returns Matching comment threads for this slide and element.
     * @example
     * ```ts
     * const slide = univerAPI.getActivePresentation()?.getSlideByIndex(0);
     * const element = slide?.getElements()[0];
     * const comments = element ? slide?.getElementComments(element.getId()) ?? [] : [];
     * console.log(comments.length);
     * ```
     */
    getElementComments(elementId: string): ThreadComment.IFacadeThreadCommentInfo[];
    /**
     * Synchronizes known threads and returns comments for one stable slide element ID.
     * @param elementId Stable ID of the target slide element.
     * @returns A promise resolving to matching synchronized comment threads.
     * @example
     * ```ts
     * const slide = univerAPI.getActivePresentation()?.getSlideByIndex(0);
     * const element = slide?.getElements()[0];
     * const comments = element ? await slide.listElementCommentsAsync(element.getId()) : [];
     * console.log(comments.length);
     * ```
     */
    listElementCommentsAsync(elementId: string): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
    /**
     * Returns locally loaded element and free-position comments on this slide.
     * @returns Every locally loaded comment thread anchored to this slide.
     * @example
     * ```ts
     * const comments = univerAPI.getActivePresentation()?.getSlideByIndex(0)?.getComments() ?? [];
     * comments.forEach(({ root, anchor }) => console.log(root.id, anchor));
     * ```
     */
    getComments(): ThreadComment.IFacadeThreadCommentInfo[];
    /**
     * Synchronizes known threads and returns element and free-position comments on this slide.
     * @returns A promise resolving to every synchronized comment thread anchored to this slide.
     * @example
     * ```ts
     * const slide = univerAPI.getActivePresentation()?.getSlideByIndex(0);
     * const comments = slide ? await slide.listCommentsAsync() : [];
     * console.log(comments.length);
     * ```
     */
    listCommentsAsync(): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
}
export interface IFSlidePageElementThreadCommentMixin {
    /**
     * Creates a comment anchored to this slide element.
     * @param content Plain text or a Univer document body for rich comment content.
     * @param options Optional stable IDs, author, attachments, and creation time.
     * @returns `true` when the create command succeeds; otherwise, `false`.
     * @throws {TypeError} If the content is empty.
     * @example
     * ```ts
     * const element = univerAPI.getActivePresentation()?.getSlideByIndex(0)?.getElements()[0];
     * await element?.createCommentAsync('Check this element.', { id: 'review-element-1' });
     * ```
     */
    createCommentAsync(content: ThreadComment.ThreadCommentContent, options?: ISlideCommentCreateOptions): Promise<boolean>;
    /**
     * Returns locally loaded comments anchored to this slide element.
     * @returns Matching comment threads for this exact element ID.
     * @example
     * ```ts
     * const element = univerAPI.getActivePresentation()?.getSlideByIndex(0)?.getElements()[0];
     * console.log(element?.getComments().length ?? 0);
     * ```
     */
    getComments(): ThreadComment.IFacadeThreadCommentInfo[];
    /**
     * Synchronizes known threads and returns comments anchored to this slide element.
     * @returns A promise resolving to matching synchronized comment threads.
     * @example
     * ```ts
     * const element = univerAPI.getActivePresentation()?.getSlideByIndex(0)?.getElements()[0];
     * const comments = element ? await element.listCommentsAsync() : [];
     * console.log(comments.length);
     * ```
     */
    listCommentsAsync(): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
}
export declare class FSlideThreadCommentMixin extends FSlide implements IFSlideThreadCommentMixin {
    private _threadCommentService;
    _initialize(injector: Injector): void;
    /** @inheritdoc */
    createPositionCommentAsync(position: ISlideCommentPosition, content: ThreadComment.ThreadCommentContent, options?: ISlideCommentCreateOptions): Promise<boolean>;
    /** @inheritdoc */
    createElementCommentAsync(elementId: string, content: ThreadComment.ThreadCommentContent, options?: ISlideCommentCreateOptions): Promise<boolean>;
    /** @inheritdoc */
    getElementComments(elementId: string): ThreadComment.IFacadeThreadCommentInfo[];
    /** @inheritdoc */
    listElementCommentsAsync(elementId: string): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
    /** @inheritdoc */
    getComments(): ThreadComment.IFacadeThreadCommentInfo[];
    /** @inheritdoc */
    listCommentsAsync(): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
}
export declare class FSlidePageElementThreadCommentMixin extends FPageElement implements IFSlidePageElementThreadCommentMixin {
    private _getThreadCommentService;
    /** @inheritdoc */
    createCommentAsync(content: ThreadComment.ThreadCommentContent, options?: ISlideCommentCreateOptions): Promise<boolean>;
    /** @inheritdoc */
    getComments(): ThreadComment.IFacadeThreadCommentInfo[];
    /** @inheritdoc */
    listCommentsAsync(): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
}
declare module '@univerjs-pro/slides/facade' {
    interface FSlide extends IFSlideThreadCommentMixin {
    }
    interface FPageElement extends IFSlidePageElementThreadCommentMixin {
    }
}
