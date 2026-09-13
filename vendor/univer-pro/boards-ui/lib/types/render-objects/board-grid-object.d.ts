import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IResolvedBoardGridConfig } from '../utils/board-grid.util';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardGridObjectState extends IResolvedBoardGridConfig {
    visible: boolean;
    zoomRatio: number;
}
export declare const BOARD_GRID_OBJECT_KEY = "board-grid-object";
export declare const BOARD_GRID_OBJECT_LAYER_INDEX: 0;
export declare class BoardGridObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardGridObjectState>);
    updateState(state?: Partial<IBoardGridObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, bounds: IViewportInfo): this;
    private _drawDots;
}
