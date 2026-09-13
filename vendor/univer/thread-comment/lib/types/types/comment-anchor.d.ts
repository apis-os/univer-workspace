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
export declare enum ThreadCommentAnchorKind {
    /** A cell comment managed by the Sheets range Facade. */
    SHEET_CELL = "sheet-cell",
    /** A Sheet image, chart, Shape, or other drawing element. */
    SHEET_DRAWING = "sheet-drawing",
    /** A fixed text range comment managed by the Docs text range Facade. */
    DOC_TEXT_RANGE = "doc-text-range",
    /** A Document image, chart, Shape, or other drawing element. */
    DOC_DRAWING = "doc-drawing",
    /** A Slide page element identified by a stable element ID. */
    SLIDE_ELEMENT = "slide-element",
    /** A free position normalized to the Slide page size. */
    SLIDE_POSITION = "slide-position",
    /** A Board element identified by a stable element ID. */
    BOARD_ELEMENT = "board-element",
    /** A free position in Board world coordinates. */
    BOARD_POSITION = "board-position",
    /** A Base record identified by stable table and record IDs. */
    BASE_RECORD = "base-record"
}
export interface IThreadCommentElementAnchor {
    kind: ThreadCommentAnchorKind.SHEET_DRAWING | ThreadCommentAnchorKind.DOC_DRAWING | ThreadCommentAnchorKind.SLIDE_ELEMENT | ThreadCommentAnchorKind.BOARD_ELEMENT;
    elementId: string;
    /** Slide or Board page ID when the host product has pages. */
    pageId?: string;
}
export interface IThreadCommentPositionAnchor {
    kind: ThreadCommentAnchorKind.SLIDE_POSITION | ThreadCommentAnchorKind.BOARD_POSITION;
    x: number;
    y: number;
    /** Slide or Board page ID when the host product has pages. */
    pageId?: string;
}
export interface IThreadCommentBaseRecordAnchor {
    kind: ThreadCommentAnchorKind.BASE_RECORD;
    tableId: string;
    recordId: string;
}
export type IThreadCommentAnchor = IThreadCommentElementAnchor | IThreadCommentPositionAnchor | IThreadCommentBaseRecordAnchor;
export declare function isThreadCommentAnchor(value: unknown): value is IThreadCommentAnchor;
export declare function serializeThreadCommentAnchor(anchor: IThreadCommentAnchor): string;
export declare function deserializeThreadCommentAnchor(ref: string): IThreadCommentAnchor | null;
