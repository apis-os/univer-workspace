import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IBoardConnectorSnapHighlight } from '../utils/board-connector-snap-highlight.util';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardConnectorSnapObjectState {
    highlight: IBoardConnectorSnapHighlight | null;
    zoomRatio: number;
}
export declare const BOARD_CONNECTOR_SNAP_OBJECT_KEY = "board-connector-snap-object";
export declare const BOARD_CONNECTOR_SNAP_OBJECT_LAYER_INDEX: 7;
export declare class BoardConnectorSnapObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardConnectorSnapObjectState>);
    updateState(state?: Partial<IBoardConnectorSnapObjectState>): void;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
