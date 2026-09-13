import type { MindMapNodeSide } from '@univerjs-pro/boards-mind';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardMindMapDragPreviewBounds {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
}
export interface IBoardMindMapDragPreviewObjectState {
    ghostBounds: IBoardMindMapDragPreviewBounds | null;
    sourceBounds?: IBoardMindMapDragPreviewBounds | null;
    parentBounds?: IBoardMindMapDragPreviewBounds | null;
    side?: MindMapNodeSide;
    zoomRatio?: number;
    textStyle?: IBoardMindMapDragPreviewTextStyle;
    renderGhostNode?: boolean;
}
export interface IBoardMindMapDragPreviewTextStyle {
    text?: string;
    fontSize?: number;
    color?: string;
    horizontalAlign?: number;
}
export declare const BOARD_MIND_MAP_DRAG_PREVIEW_OBJECT_KEY = "board-mind-map-drag-preview-object";
export declare const BOARD_MIND_MAP_DRAG_PREVIEW_OBJECT_LAYER_INDEX: 3;
export declare class BoardMindMapDragPreviewObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardMindMapDragPreviewObjectState>);
    updateState(state?: Partial<IBoardMindMapDragPreviewObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
    private _resolveDirtyBounds;
    private _drawSourceHighlight;
    private _drawConnectorPreview;
}
