/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { Injector } from '@univerjs/core';
import * as DocsThreadComment from '@univerjs/docs-thread-comment';
import * as DocsFacade from '@univerjs/docs/facade';
import * as ThreadComment from '@univerjs/thread-comment';
export type IDocumentTextRangeCommentCreateOptions = Omit<DocsThreadComment.ICreateDocTextRangeCommentParams, 'unitId' | 'range' | 'content'>;
/** Comment methods added to a fixed document text range. */
export interface IFDocumentTextRangeThreadCommentMixin {
    /**
     * Creates a comment on this text range.
     * @param content Plain text or a Univer document body for rich comment content.
     * @param options Optional stable IDs, author, attachments, and creation time.
     * @returns `true` when the create command succeeds; otherwise, `false`.
     * @throws {TypeError} If the content is empty.
     * @example
     * ```ts
     * const range = univerAPI.getActiveDocument()?.getTextRange(0, 12);
     * await range?.createCommentAsync('Verify this introduction.', { id: 'review-intro' });
     * ```
     */
    createCommentAsync(content: ThreadComment.ThreadCommentContent, options?: IDocumentTextRangeCommentCreateOptions): Promise<boolean>;
    /**
     * Returns locally loaded comments whose comment decorations overlap this text range.
     * @returns Matching comment threads. The returned anchors use `DOC_TEXT_RANGE`.
     * @example
     * ```ts
     * const range = univerAPI.getActiveDocument()?.getTextRange(0, 12);
     * const comments = range?.getComments() ?? [];
     * comments.forEach(({ root, children }) => console.log(root.id, children.length));
     * ```
     */
    getComments(): ThreadComment.IFacadeThreadCommentInfo[];
    /**
     * Synchronizes known document threads and returns comments whose decorations overlap this text range.
     * @returns A promise resolving to the synchronized matching comment threads.
     * @example
     * ```ts
     * const range = univerAPI.getActiveDocument()?.getTextRange(0, 12);
     * const comments = range ? await range.listCommentsAsync() : [];
     * console.log(comments.length);
     * ```
     */
    listCommentsAsync(): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
}
export declare class FDocumentTextRangeThreadCommentMixin extends DocsFacade.FDocumentTextRange implements IFDocumentTextRangeThreadCommentMixin {
    private _threadCommentCommandService;
    private _threadCommentFacadeService;
    _initialize(injector: Injector): void;
    /** @inheritdoc */
    createCommentAsync(content: ThreadComment.ThreadCommentContent, options?: IDocumentTextRangeCommentCreateOptions): Promise<boolean>;
    /** @inheritdoc */
    getComments(): ThreadComment.IFacadeThreadCommentInfo[];
    /** @inheritdoc */
    listCommentsAsync(): Promise<ThreadComment.IFacadeThreadCommentInfo[]>;
    private _getOverlappingCommentIds;
}
declare module '@univerjs/docs/facade' {
    interface FDocumentTextRange extends IFDocumentTextRangeThreadCommentMixin {
    }
}
