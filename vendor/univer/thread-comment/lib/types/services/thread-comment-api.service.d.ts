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
import type { IDocumentBody } from '@univerjs/core';
import type { IThreadCommentQuery, IThreadInfo } from '../models/thread-comment.model';
import type { IThreadCommentAnchor, ThreadCommentAnchorKind } from '../types/comment-anchor';
import { ICommandService, UserManagerService } from '@univerjs/core';
import { ThreadCommentModel } from '../models/thread-comment.model';
export interface ICreateThreadCommentOptions {
    /** Univer unit that owns the comment. */
    unitId: string;
    /** Sheet, page, table, or product subunit that owns the comment. */
    subUnitId: string;
    /** Stable, serializable product anchor. */
    anchor: IThreadCommentAnchor;
    /** Plain text or a Univer document body for rich comment content. */
    content: ThreadCommentContent;
    /** Attachment resource IDs. */
    attachments?: string[];
    /** Caller-supplied stable comment ID, useful for idempotent agent workflows. */
    id?: string;
    /** Caller-supplied thread ID. Defaults to the root comment ID. */
    threadId?: string;
    /** Author user ID. Defaults to the current user managed by `UserManagerService`. */
    personId?: string;
    /** Creation time. Defaults to the current time. */
    dateTime?: Date;
}
export interface IReplyThreadCommentOptions {
    /** Univer unit that owns the thread. */
    unitId: string;
    /** Sheet, page, table, or product subunit that owns the thread. */
    subUnitId: string;
    /** Stable ID of the root thread being replied to. */
    threadId: string;
    /** Plain text or a Univer document body for rich reply content. */
    content: ThreadCommentContent;
    /** Attachment resource IDs. */
    attachments?: string[];
    /** Caller-supplied stable reply ID, useful for idempotent agent workflows. */
    id?: string;
    /** Author user ID. Defaults to the current user managed by `UserManagerService`. */
    personId?: string;
    /** Creation time. Defaults to the current time. */
    dateTime?: Date;
}
export interface IUpdateThreadCommentOptions {
    /** Univer unit that owns the comment. */
    unitId: string;
    /** Sheet, page, table, or product subunit that owns the comment. */
    subUnitId: string;
    /** Stable ID of the root comment or reply to update. */
    commentId: string;
    /** Replacement plain text or Univer document body. */
    content: ThreadCommentContent;
    /** Replacement attachment resource IDs. Omit to preserve the current attachments. */
    attachments?: string[];
    /** Update time. Defaults to the current time. */
    dateTime?: Date;
}
export interface IDeleteThreadCommentOptions {
    /** Univer unit that owns the comment. */
    unitId: string;
    /** Sheet, page, table, or product subunit that owns the comment. */
    subUnitId: string;
    /** Stable ID of the root comment or reply to delete. */
    commentId: string;
    /** Deletes the complete root and reply tree when true. */
    deleteThread?: boolean;
}
export interface IResolveThreadCommentOptions {
    /** Univer unit that owns the thread. */
    unitId: string;
    /** Sheet, page, table, or product subunit that owns the thread. */
    subUnitId: string;
    /** Stable ID of the root comment or a reply in the target thread. */
    commentId: string;
    /** Defaults to `true`. Pass `false` to reopen the thread. */
    resolved?: boolean;
}
/** Plain text or a Univer document body used as comment content. */
export type ThreadCommentContent = string | IDocumentBody;
export declare function isThreadCommentDocumentBody(value: unknown): value is IDocumentBody;
export declare function normalizeThreadCommentContent(content: ThreadCommentContent): IDocumentBody;
export interface IFacadeThreadCommentInfo extends Omit<IThreadInfo, 'relativeUsers'> {
    /**
     * Product anchor category. Facade query results always populate this field, including for legacy
     * Sheet cell and Document range comments. It remains optional for source compatibility with
     * existing `IFacadeThreadCommentInfo` implementations.
     */
    anchorKind?: ThreadCommentAnchorKind | null;
    /** Parsed stable product anchor, or `null` for a legacy comment reference. */
    anchor: IThreadCommentAnchor | null;
    /** Unique IDs of authors participating in the root and reply tree. */
    relativeUserIds: string[];
}
export declare class ThreadCommentFacadeService {
    private readonly _commandService;
    private readonly _model;
    private readonly _userManagerService;
    constructor(_commandService: ICommandService, _model: ThreadCommentModel, _userManagerService: UserManagerService);
    createCommentAsync(options: ICreateThreadCommentOptions): Promise<boolean>;
    replyCommentAsync(options: IReplyThreadCommentOptions): Promise<boolean>;
    updateCommentAsync(options: IUpdateThreadCommentOptions): Promise<boolean>;
    deleteCommentAsync(options: IDeleteThreadCommentOptions): Promise<boolean>;
    resolveCommentAsync(options: IResolveThreadCommentOptions): Promise<boolean>;
    getComments(query?: IThreadCommentQuery): IFacadeThreadCommentInfo[];
    listCommentsAsync(query?: IThreadCommentQuery): Promise<IFacadeThreadCommentInfo[]>;
}
