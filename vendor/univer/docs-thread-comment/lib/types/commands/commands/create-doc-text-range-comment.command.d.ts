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
import type { IAccessor, ICommand, IMutation, IMutationInfo, ITextRangeParam, JSONXActions } from '@univerjs/core';
import type { IThreadComment, ThreadCommentContent } from '@univerjs/thread-comment';
export interface IAddDocTextRangeCommentParams {
    unitId: string;
    comment: IThreadComment;
    range: ITextRangeParam;
}
/** Parameters accepted by the document text-range Facade. */
export interface ICreateDocTextRangeCommentParams {
    unitId: string;
    range: ITextRangeParam;
    content: ThreadCommentContent;
    attachments?: string[];
    id?: string;
    threadId?: string;
    personId?: string;
    dateTime?: Date;
}
export interface IPreparedDocTextRangeComment {
    comment: IThreadComment;
    commentMutation: IMutationInfo;
    decorationMutationParams: IDocCommentDecorationMutationParams;
}
export interface IDocCommentDecorationMutationParams {
    unitId: string;
    actions: JSONXActions;
    segmentId?: string;
}
/** Applies document comment decoration actions without render or selection services. */
export declare const AddDocCommentDecorationMutation: IMutation<IDocCommentDecorationMutationParams, IDocCommentDecorationMutationParams | false>;
/** Builds the model mutations shared by headless and UI document comment commands. */
export declare function prepareDocTextRangeComment(accessor: IAccessor, params: IAddDocTextRangeCommentParams): Promise<IPreparedDocTextRangeComment | null>;
/**
 * Creates a root comment and document decoration for an explicit text range.
 * This model command is safe to execute without loading document UI packages.
 */
export declare const CreateDocTextRangeCommentCommand: ICommand<ICreateDocTextRangeCommentParams>;
