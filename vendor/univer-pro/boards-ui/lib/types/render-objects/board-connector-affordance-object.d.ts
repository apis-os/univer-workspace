import type { IBoardConnectorPoint, IBoardThemeData } from '@univerjs-pro/boards';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IBoardConnectorAffordanceHandle } from '../utils/board-connector-affordance.util';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardConnectorAffordanceObjectState {
    handles: IBoardConnectorAffordanceHandle[];
    hoveredHandle?: IBoardConnectorAffordanceHandle | null;
    zoomRatio: number;
    themeData?: IBoardThemeData;
}
export declare const BOARD_CONNECTOR_AFFORDANCE_OBJECT_KEY = "board-connector-affordance-object";
export declare const BOARD_CONNECTOR_AFFORDANCE_OBJECT_LAYER_INDEX: 5;
export declare class BoardConnectorAffordanceObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardConnectorAffordanceObjectState>);
    updateState(state?: Partial<IBoardConnectorAffordanceObjectState>): void;
    setHoveredHandle(handle: IBoardConnectorAffordanceHandle | null): void;
    getHitHandle(point: IBoardConnectorPoint): IBoardConnectorAffordanceHandle | null;
    isHit(coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
