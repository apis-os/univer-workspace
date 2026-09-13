import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IBoardViewportBarRect } from '../utils/board-viewport-bar.util';
import { BaseObject } from '@univerjs/engine-render';
export type BoardViewportBarAxis = 'horizontal' | 'vertical';
export interface IBoardViewportBarObjectState {
    activeAxis: BoardViewportBarAxis | null;
    activeColor: string;
    activeOpacity: number;
    barSize: number;
    hitSize: number;
    horizontalRect: IBoardViewportBarRect | null;
    hoverAxis: BoardViewportBarAxis | null;
    hoverColor: string;
    hoverOpacity: number;
    idleColor: string;
    idleOpacity: number;
    verticalRect: IBoardViewportBarRect | null;
    zoomRatio: number;
}
export declare const BOARD_VIEWPORT_BAR_OBJECT_KEY = "board-viewport-bar-object";
export declare const BOARD_VIEWPORT_BAR_OBJECT_LAYER_INDEX: 8;
type BoardViewportBarPoint = Pick<Vector2, 'x' | 'y'>;
export declare class BoardViewportBarObject extends BaseObject {
    private _state;
    constructor(key: string | undefined, state: IBoardViewportBarObjectState);
    getBarState(): IBoardViewportBarObjectState;
    updateState(state: Partial<IBoardViewportBarObjectState>): void;
    resolveHitAxis(coord: BoardViewportBarPoint): BoardViewportBarAxis | null;
    isHit(coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
    private _syncVisibility;
}
export {};
