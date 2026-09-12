import type { IBoardConnectorPoint } from '@univerjs-pro/boards';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardSwimlaneResizeDraftAffordance {
    line: {
        start: IBoardConnectorPoint;
        end: IBoardConnectorPoint;
    };
    labelPoint: IBoardConnectorPoint;
    size: number;
}
export interface IBoardSwimlaneResizeHoverAffordance {
    line: {
        start: IBoardConnectorPoint;
        end: IBoardConnectorPoint;
    };
    orientation: 'horizontal' | 'vertical';
}
export interface IBoardSwimlaneResizeObjectState {
    draft: IBoardSwimlaneResizeDraftAffordance | null;
    hover: IBoardSwimlaneResizeHoverAffordance | null;
    zoomRatio: number;
}
export declare const BOARD_SWIMLANE_RESIZE_OBJECT_KEY = "board-swimlane-resize-object";
export declare const BOARD_SWIMLANE_RESIZE_OBJECT_LAYER_INDEX: 6;
export declare class BoardSwimlaneResizeObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardSwimlaneResizeObjectState>);
    updateState(state?: Partial<IBoardSwimlaneResizeObjectState>): void;
    getResizeState(): IBoardSwimlaneResizeObjectState;
    isHit(coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
