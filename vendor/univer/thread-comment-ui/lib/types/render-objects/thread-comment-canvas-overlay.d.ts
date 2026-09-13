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
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface IThreadCommentCanvasMarker {
    commentId: string;
    commentIds?: readonly string[];
    count?: number;
    x: number;
    y: number;
}
export interface IThreadCommentCanvasUnderline {
    commentId: string;
    left: number;
    top: number;
    width: number;
}
export interface IThreadCommentCanvasOutline {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IThreadCommentCanvasOverlayState {
    accentColor: string;
    foregroundColor: string;
    outlineColor: string;
    zoomRatio: number;
    markers: readonly IThreadCommentCanvasMarker[];
    underlines: readonly IThreadCommentCanvasUnderline[];
    focusedCommentIds?: readonly string[];
    focusOutlines?: readonly IThreadCommentCanvasOutline[];
    previewMarker?: Omit<IThreadCommentCanvasMarker, 'commentId'> | null;
    previewUnderline?: Omit<IThreadCommentCanvasUnderline, 'commentId'> | null;
}
export declare function groupThreadCommentCanvasMarkers(markers: readonly IThreadCommentCanvasMarker[]): IThreadCommentCanvasMarker[];
export declare class ThreadCommentCanvasOverlay extends BaseObject {
    private _state;
    private _hoveredCommentId;
    private _hitCommentId;
    constructor(key: string, state: IThreadCommentCanvasOverlayState);
    get hitCommentId(): string | null;
    updateState(state: Partial<IThreadCommentCanvasOverlayState>): void;
    clearHover(): void;
    isHit(coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
    private _getZoomRatio;
    private _containsComment;
    private _markerContainsComment;
    private _renderUnderline;
    private _renderOutline;
    private _renderMarker;
}
