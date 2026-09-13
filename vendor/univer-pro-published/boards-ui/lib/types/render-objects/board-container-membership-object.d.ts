import type { IBoardThemeData } from '@univerjs-pro/boards';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IBoardContainerMembershipOverlayItem } from '../utils/board-container-membership-overlay.util';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardContainerMembershipObjectState {
    items: IBoardContainerMembershipOverlayItem[];
    themeData?: IBoardThemeData;
    zoomRatio?: number;
}
export declare const BOARD_CONTAINER_MEMBERSHIP_OBJECT_KEY = "board-container-membership-object";
export declare const BOARD_CONTAINER_MEMBERSHIP_OBJECT_LAYER_INDEX: 4;
export declare class BoardContainerMembershipObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardContainerMembershipObjectState>);
    updateState(state?: Partial<IBoardContainerMembershipObjectState>): void;
    getOverlayState(): IBoardContainerMembershipObjectState;
    isHit(_coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
