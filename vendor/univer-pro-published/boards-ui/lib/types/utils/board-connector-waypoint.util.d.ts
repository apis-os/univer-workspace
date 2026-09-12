import type { IBoardConnectorElement, IBoardConnectorPoint, IBoardElementData } from '@univerjs-pro/boards';
export type BoardConnectorEditableSegmentOrientation = 'horizontal' | 'vertical';
export interface IBoardConnectorEditableSegment {
    connectorId: string;
    segmentIndex: number;
    segmentEndIndex?: number;
    orientation: BoardConnectorEditableSegmentOrientation;
    start: IBoardConnectorPoint;
    end: IBoardConnectorPoint;
    point: IBoardConnectorPoint;
}
export interface IBoardConnectorManualWaypointHandle {
    connectorId: string;
    waypointId: string;
    waypointIndex: number;
    point: IBoardConnectorPoint;
}
export interface IBoardConnectorCurveAnchorHandle {
    connectorId: string;
    kind: 'anchor' | 'insert';
    segmentIndex: number;
    point: IBoardConnectorPoint;
    anchorId?: string;
    anchorIndex?: number;
}
export interface IResolveBoardConnectorEditableSegmentsOptions {
    elementData?: Record<string, IBoardElementData>;
    connectorId?: string;
    minSegmentLength?: number;
    routePoints?: readonly IBoardConnectorPoint[];
}
export interface IResolveBoardConnectorSegmentDragUpdateOptions extends IResolveBoardConnectorEditableSegmentsOptions {
    element: IBoardConnectorElement;
    segmentIndex: number;
    segmentEndIndex?: number;
    delta: IBoardConnectorPoint;
}
export interface IResolveBoardConnectorInsertWaypointUpdateOptions extends IResolveBoardConnectorEditableSegmentsOptions {
    element: IBoardConnectorElement;
    point: IBoardConnectorPoint;
    tolerance: number;
}
export interface IResolveBoardConnectorWaypointDragUpdateOptions extends IResolveBoardConnectorEditableSegmentsOptions {
    element: IBoardConnectorElement;
    waypointId: string;
    point: IBoardConnectorPoint;
    cleanupCollinear?: boolean;
}
export interface IResolveBoardConnectorRemoveWaypointUpdateOptions extends IResolveBoardConnectorEditableSegmentsOptions {
    element: IBoardConnectorElement;
    waypointId: string;
}
export interface IResolveBoardConnectorCurveAnchorDragUpdateOptions extends IResolveBoardConnectorEditableSegmentsOptions {
    element: IBoardConnectorElement;
    handle: IBoardConnectorCurveAnchorHandle;
    point: IBoardConnectorPoint;
}
export interface IResolveBoardConnectorRemoveCurveAnchorUpdateOptions extends IResolveBoardConnectorEditableSegmentsOptions {
    element: IBoardConnectorElement;
    anchorId: string;
}
export declare function cleanupBoardConnectorCollinearPoints(points: readonly IBoardConnectorPoint[]): IBoardConnectorPoint[];
export declare function resolveBoardConnectorEditableSegments(element: IBoardConnectorElement, options?: IResolveBoardConnectorEditableSegmentsOptions): IBoardConnectorEditableSegment[];
export declare function resolveBoardConnectorManualWaypointHandles(element: IBoardConnectorElement): IBoardConnectorManualWaypointHandle[];
export declare function resolveBoardConnectorCurveAnchorHandles(element: IBoardConnectorElement, options?: IResolveBoardConnectorEditableSegmentsOptions): IBoardConnectorCurveAnchorHandle[];
export declare function resolveBoardConnectorCurveAnchorDragUpdate(options: IResolveBoardConnectorCurveAnchorDragUpdateOptions): IBoardConnectorElement;
export declare function resolveBoardConnectorRemoveCurveAnchorUpdate(options: IResolveBoardConnectorRemoveCurveAnchorUpdateOptions): IBoardConnectorElement;
export declare function resolveBoardConnectorSegmentDragUpdate(options: IResolveBoardConnectorSegmentDragUpdateOptions): IBoardConnectorElement;
export declare function resolveBoardConnectorInsertWaypointUpdate(options: IResolveBoardConnectorInsertWaypointUpdateOptions): IBoardConnectorElement | null;
export declare function resolveBoardConnectorWaypointDragUpdate(options: IResolveBoardConnectorWaypointDragUpdateOptions): IBoardConnectorElement;
export declare function resolveBoardConnectorRemoveWaypointUpdate(options: IResolveBoardConnectorRemoveWaypointUpdateOptions): IBoardConnectorElement;
