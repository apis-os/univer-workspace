import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { BaseObject } from '@univerjs/engine-render';
export type BoardGuideOrientation = 'horizontal' | 'vertical';
export interface IBoardGuideLine {
    orientation: BoardGuideOrientation;
    position: number;
    start: number;
    end: number;
    color?: string;
    label?: {
        x: number;
        y: number;
    };
    labelText?: string;
}
export interface IBoardGuideObjectState {
    guides: IBoardGuideLine[];
    zoomRatio?: number;
}
export declare const BOARD_GUIDE_OBJECT_KEY = "board-guide-object";
export declare const BOARD_GUIDE_OBJECT_LAYER_INDEX: 4;
export declare class BoardGuideObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardGuideObjectState>);
    updateState(state?: Partial<IBoardGuideObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
    private _drawGuideLabel;
}
