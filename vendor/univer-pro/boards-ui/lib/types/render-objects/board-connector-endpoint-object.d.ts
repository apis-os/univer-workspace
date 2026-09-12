import type { IBoardConnectorEndpoint, IBoardConnectorPoint, IBoardThemeData } from '@univerjs-pro/boards';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IBoardConnectorLabelRect } from '../utils/board-connector-label.util';
import { BaseObject } from '@univerjs/engine-render';
export type BoardConnectorEndpointHandleSide = 'start' | 'end';
export interface IBoardConnectorEndpointHandle {
    connectorId: string;
    endpoint: IBoardConnectorEndpoint;
    point: IBoardConnectorPoint;
    normal?: IBoardConnectorPoint;
    side: BoardConnectorEndpointHandleSide;
}
export interface IBoardConnectorEndpointObjectState {
    handles: IBoardConnectorEndpointHandle[];
    labelObstacles: IBoardConnectorLabelRect[];
    zoomRatio: number;
    themeData?: IBoardThemeData;
}
export declare const BOARD_CONNECTOR_ENDPOINT_OBJECT_KEY = "board-connector-endpoint-object";
export declare const BOARD_CONNECTOR_ENDPOINT_OBJECT_LAYER_INDEX: 6;
export declare class BoardConnectorEndpointObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardConnectorEndpointObjectState>);
    updateState(state?: Partial<IBoardConnectorEndpointObjectState>): void;
    private _isHandleBlocked;
    getHitHandle(point: IBoardConnectorPoint): IBoardConnectorEndpointHandle | null;
    isHit(coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
