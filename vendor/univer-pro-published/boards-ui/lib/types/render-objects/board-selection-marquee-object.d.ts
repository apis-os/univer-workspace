import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IBoardSelectionRect } from '../utils/board-selection-geometry.util';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardSelectionMarqueeObjectState {
    outlineOnly?: boolean;
    stroke?: string;
    preciseSelection?: boolean;
    rect: IBoardSelectionRect | null;
    zoomRatio?: number;
}
export declare const BOARD_SELECTION_MARQUEE_OBJECT_KEY = "board-selection-marquee-object";
export declare const BOARD_SELECTION_DIMENSIONS_OBJECT_KEY = "board-selection-dimensions-object";
export declare const BOARD_SELECTION_OVERLAY_LAYER_INDEX: 4;
export declare class BoardSelectionMarqueeObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardSelectionMarqueeObjectState>);
    updateState(state?: Partial<IBoardSelectionMarqueeObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
export interface IBoardSelectionDimensionsObjectState {
    bounds: IBoardSelectionRect | null;
    zoomRatio?: number;
}
export declare class BoardSelectionDimensionsObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardSelectionDimensionsObjectState>);
    updateState(state?: Partial<IBoardSelectionDimensionsObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
