import type { IBoardConnectorPoint, IBoardContainerElement, IBoardRect } from '@univerjs-pro/boards';
export interface IBoardSwimlaneLaneResizeHandle {
    containerId: string;
    laneId: string;
    nextLaneId: string;
    orientation: 'horizontal' | 'vertical';
    origin: IBoardConnectorPoint;
    initialSize: number;
    minSize: number;
    line: {
        start: IBoardConnectorPoint;
        end: IBoardConnectorPoint;
    };
    hitBounds: IBoardRect;
}
export interface IResolveBoardSwimlaneLaneResizeHandlesOptions {
    hitSlop?: number;
}
export interface IBoardSwimlaneLaneResizeDraft {
    containerId: string;
    laneId: string;
    size: number;
}
export declare function resolveBoardSwimlaneLaneResizeHandles(container: IBoardContainerElement, outerBounds: IBoardRect, options?: IResolveBoardSwimlaneLaneResizeHandlesOptions): IBoardSwimlaneLaneResizeHandle[];
export declare function resolveBoardSwimlaneLaneResizeDraft(handle: IBoardSwimlaneLaneResizeHandle, point: IBoardConnectorPoint): IBoardSwimlaneLaneResizeDraft;
