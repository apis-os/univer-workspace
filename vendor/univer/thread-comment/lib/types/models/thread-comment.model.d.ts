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
import type { Nullable } from '@univerjs/core';
import type { IUpdateCommentPayload, IUpdateCommentRefPayload } from '../commands/mutations/comment.mutation';
import type { IThreadComment } from '../types/interfaces/i-thread-comment';
import { Disposable, IUniverInstanceService, LifecycleService } from '@univerjs/core';
import { IThreadCommentDataSourceService } from '../services/tc-datasource.service';
import { ThreadCommentAnchorKind } from '../types/comment-anchor';
export interface IThreadCommentQuery {
    /** Match comments in any of these Univer units. */
    unitIds?: string[];
    /** Match comments in any of these sheets, pages, tables, or product subunits. */
    subUnitIds?: string[];
    /** Match product targets such as ranges, drawings, slide elements, or base records. */
    anchorKinds?: ThreadCommentAnchorKind[];
    /** Match threads containing a root comment or reply written by any of these user IDs. */
    authorIds?: string[];
    /** Match resolved or unresolved root threads. */
    resolved?: boolean;
}
export type CommentUpdate = {
    unitId: string;
    subUnitId: string;
    silent?: boolean;
} & ({
    type: 'add';
    payload: IThreadComment;
    isRoot: boolean;
} | {
    type: 'update';
    payload: IUpdateCommentPayload;
} | {
    type: 'delete';
    payload: {
        commentId: string;
        isRoot: boolean;
        comment: IThreadComment;
    };
} | {
    type: 'updateRef';
    payload: IUpdateCommentRefPayload;
    threadId: string;
} | {
    type: 'resolve';
    payload: {
        commentId: string;
        resolved: boolean;
    };
} | {
    type: 'syncUpdate';
    payload: IThreadComment;
});
export interface IThreadInfo {
    /** Univer unit that owns the thread. */
    unitId: string;
    /** Sheet, page, table, or product subunit that owns the thread. */
    subUnitId: string;
    /** Stable root thread ID. */
    threadId: string;
    /** Root comment. */
    root: IThreadComment;
    /** Replies ordered by the comment model. */
    children: IThreadComment[];
    /** Unique user IDs participating in the root and reply tree. */
    relativeUsers: Set<string>;
}
export declare class ThreadCommentModel extends Disposable {
    private readonly _dataSourceService;
    private readonly _lifecycleService;
    private readonly _univerInstanceService;
    private _commentsMap;
    private _threadMap;
    private _syncVersions;
    private _nextSyncVersion;
    private _commentUpdate$;
    commentUpdate$: import("rxjs").Observable<CommentUpdate>;
    private _tasks;
    constructor(_dataSourceService: IThreadCommentDataSourceService, _lifecycleService: LifecycleService, _univerInstanceService: IUniverInstanceService);
    private _ensureCommentMap;
    ensureMap(unitId: string, subUnitId: string): Map<string, IThreadComment>;
    private _ensureThreadMap;
    private _syncKey;
    private _invalidateSync;
    private _replaceComment;
    syncThreadComments(unitId: string, subUnitId: string, threadIds: string[]): Promise<void>;
    addComment(unitId: string, subUnitId: string, origin: IThreadComment, shouldSync?: boolean): boolean;
    updateComment(unitId: string, subUnitId: string, payload: IUpdateCommentPayload, silent?: boolean): boolean;
    updateCommentRef(unitId: string, subUnitId: string, payload: IUpdateCommentRefPayload, silent?: boolean): boolean;
    resolveComment(unitId: string, subUnitId: string, commentId: string, resolved: boolean): boolean;
    getComment(unitId: string, subUnitId: string, commentId: string): IThreadComment | undefined;
    getRootComment(unitId: string, subUnitId: string, threadId: string): IThreadComment | undefined;
    getThread(unitId: string, subUnitId: string, threadId: string): Nullable<IThreadInfo>;
    getCommentWithChildren(unitId: string, subUnitId: string, commentId: string): Nullable<IThreadInfo>;
    private _deleteComment;
    deleteThread(unitId: string, subUnitId: string, threadId: string): void;
    deleteComment(unitId: string, subUnitId: string, commentId: string): boolean;
    deleteUnit(unitId: string): void;
    getUnit(unitId: string): IThreadInfo[];
    getAll(): {
        unitId: string;
        threads: IThreadInfo[];
    }[];
    getAnchorKind(unitId: string, ref: string): ThreadCommentAnchorKind | null;
    query(query?: IThreadCommentQuery): IThreadInfo[];
}
