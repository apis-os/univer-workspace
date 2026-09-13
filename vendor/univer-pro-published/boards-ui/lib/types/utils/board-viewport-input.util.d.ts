import type { IResolvedBoardInteractionConfig } from './board-interaction-config.util';
import type { IBoardViewportPoint } from './board-viewport.util';
export declare const BOARD_WHEEL_LINE_HEIGHT = 16;
export declare const BOARD_WHEEL_PAGE_HEIGHT = 800;
export declare const BOARD_WHEEL_ZOOM_DELTA_BASE = 100;
export interface IBoardWheelEventLike {
    clientX: number;
    clientY: number;
    ctrlKey?: boolean;
    deltaMode?: number;
    deltaX: number;
    deltaY: number;
    metaKey?: boolean;
    shiftKey?: boolean;
}
export interface IBoardViewportInputRect {
    left: number;
    top: number;
}
export type IBoardWheelViewportAction = {
    type: 'none';
} | {
    type: 'pan';
    delta: IBoardViewportPoint;
} | {
    type: 'zoomAtPoint';
    viewportPoint: IBoardViewportPoint;
    zoomFactor: number;
};
export interface IResolveBoardWheelViewportActionOptions {
    event: IBoardWheelEventLike;
    interactionConfig: Pick<IResolvedBoardInteractionConfig, 'trackpadPanEnabled' | 'wheelPanFactor' | 'wheelZoomFactor' | 'wheelZoomWithModifier' | 'zoomWheelFactor'>;
    viewportRect: IBoardViewportInputRect;
}
export declare function resolveBoardWheelViewportAction({ event, interactionConfig, viewportRect, }: IResolveBoardWheelViewportActionOptions): IBoardWheelViewportAction;
