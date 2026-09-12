import type { IBoardConnectorPoint } from '@univerjs-pro/boards';
import type { IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IBoardConnectorLabelRect } from '../utils/board-connector-label.util';
import type { IBoardConnectorCurveAnchorHandle, IBoardConnectorEditableSegment, IBoardConnectorManualWaypointHandle } from '../utils/board-connector-waypoint.util';
import { BaseObject } from '@univerjs/engine-render';
export interface IBoardConnectorLabelSelection {
    connectorId: string;
    labelId: string;
    rect: IBoardConnectorLabelRect;
    /** Rotation around the label center, in radians. */
    angle?: number;
}
export interface IBoardConnectorLabelResizeHandle {
    connectorId: string;
    labelId: string;
    side: 'left' | 'right';
    point: IBoardConnectorPoint;
    rect: IBoardConnectorLabelRect;
}
export interface IBoardConnectorWaypointObjectState {
    segments: IBoardConnectorEditableSegment[];
    waypoints: IBoardConnectorManualWaypointHandle[];
    curveAnchors: IBoardConnectorCurveAnchorHandle[];
    labelObstacles: IBoardConnectorLabelRect[];
    labelSelections: IBoardConnectorLabelSelection[];
    focusedWaypoint: {
        connectorId: string;
        waypointId: string;
    } | null;
    focusedCurveAnchor: {
        connectorId: string;
        anchorId: string;
    } | null;
    zoomRatio: number;
}
export declare const BOARD_CONNECTOR_WAYPOINT_OBJECT_KEY = "board-connector-waypoint-object";
export declare const BOARD_CONNECTOR_WAYPOINT_OBJECT_LAYER_INDEX: 6;
export declare class BoardConnectorWaypointObject extends BaseObject {
    private _state;
    constructor(key?: string, state?: Partial<IBoardConnectorWaypointObjectState>);
    updateState(state?: Partial<IBoardConnectorWaypointObjectState>): void;
    private _getSegmentHandleRect;
    private _isSegmentHandlePointBlocked;
    private _isPointBlockedByLabel;
    private _isWaypointHandleBlocked;
    private _isCurveAnchorBlocked;
    private _resolveSegmentHandlePoint;
    private _getVisibleSegment;
    getHitSegment(point: IBoardConnectorPoint): IBoardConnectorEditableSegment | null;
    getHitCurveAnchor(point: IBoardConnectorPoint): IBoardConnectorCurveAnchorHandle | null;
    getHitLabelResizeHandle(point: IBoardConnectorPoint): IBoardConnectorLabelResizeHandle | null;
    getHitWaypoint(point: IBoardConnectorPoint): IBoardConnectorManualWaypointHandle | null;
    isHit(coord: Vector2): boolean;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
}
