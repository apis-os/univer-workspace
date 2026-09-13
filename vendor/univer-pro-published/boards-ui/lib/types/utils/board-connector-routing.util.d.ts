import type { IBoardConnectorData, IBoardConnectorElement, IBoardConnectorEndpoint, IBoardConnectorMarker, IBoardConnectorPoint, IBoardElementData, IBoardElementTransform } from '@univerjs-pro/boards';
import type { IBoardRoutingObstacleIndex, IBoardRoutingSegment } from './board-connector-router.util';
export interface IBoardConnectorRouteBounds {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IBoardConnectorResolvedEndpoint {
    point: IBoardConnectorPoint;
    normal?: IBoardConnectorPoint;
    boundShapeId?: string;
}
export type BoardConnectorPathCommand = {
    type: 'moveTo';
    point: IBoardConnectorPoint;
} | {
    type: 'lineTo';
    point: IBoardConnectorPoint;
} | {
    type: 'bezierCurveTo';
    control1: IBoardConnectorPoint;
    control2: IBoardConnectorPoint;
    point: IBoardConnectorPoint;
};
export interface IBoardConnectorPathEndpointGeometry {
    point: IBoardConnectorPoint;
    tangent: IBoardConnectorPoint | null;
}
export interface IBoardConnectorPathGeometry {
    start: IBoardConnectorPathEndpointGeometry;
    end: IBoardConnectorPathEndpointGeometry;
}
export interface IResolveBoardConnectorEndpointPointOptions {
    elementData?: Record<string, IBoardElementData>;
    connectorId?: string;
}
export interface IResolveBoardConnectorEndpointOptions extends IResolveBoardConnectorEndpointPointOptions {
}
export interface IResolveBoardConnectorRoutePointsOptions extends IResolveBoardConnectorEndpointPointOptions {
    stabilityHint?: {
        routePoints: readonly IBoardConnectorPoint[];
        penalty?: number;
        tolerance?: number;
    };
    resolvedRoutePoints?: readonly IBoardConnectorPoint[];
    routingCache?: BoardConnectorRoutingCache;
    connectorCrossingPenaltyEnabled?: boolean;
}
export declare const BOARD_CONNECTOR_MIN_BOUNDS_SIZE = 1;
export declare const BOARD_CONNECTOR_ROUNDED_CORNER_RADIUS = 16;
type IBoardConnectorElementData = IBoardElementData & {
    element: IBoardConnectorElement;
};
export declare function resolveBoardConnectorEndpointPoint(endpoint: IBoardConnectorEndpoint, options?: IResolveBoardConnectorEndpointPointOptions): IBoardConnectorPoint | null;
export declare function resolveBoardConnectorEndpoint(endpoint: IBoardConnectorEndpoint, options?: IResolveBoardConnectorEndpointOptions): IBoardConnectorResolvedEndpoint | null;
export declare function isBoardConnectorTerminalSegmentAlignedWithEndpointNormal(segment: IBoardRoutingSegment, endpoint: IBoardConnectorResolvedEndpoint, terminal: 'start' | 'end'): boolean;
export declare function isBoardConnectorRouteAlignedWithEndpoints(connectorData: IBoardConnectorData, routePoints: readonly IBoardConnectorPoint[] | undefined, options?: IResolveBoardConnectorEndpointPointOptions): routePoints is readonly IBoardConnectorPoint[];
export declare function normalizeBoardConnectorEndpointManualRoutePoints(connectorData: IBoardConnectorData, options?: IResolveBoardConnectorEndpointOptions): IBoardConnectorData;
export declare class BoardConnectorRoutingCache {
    private _elementData?;
    private readonly _connectorSceneKeyById;
    private readonly _obstacleKeyByElementId;
    private readonly _obstacleIndexesByExclusion;
    private readonly _routePointsByConnectorId;
    private readonly _crossingRoutePointsByConnectorId;
    invalidate(elementData?: Record<string, IBoardElementData>, invalidatedElementIds?: Iterable<string>): string[];
    private _reset;
    private _syncConnectorSnapshot;
    private _syncObstacleSnapshot;
    private _invalidateDependentRoutes;
    getObstacleIndex(elementData: Record<string, IBoardElementData> | undefined, excludeElementIds: readonly string[]): IBoardRoutingObstacleIndex;
    resolveRoutePoints(connectorData: IBoardConnectorData, options?: IResolveBoardConnectorRoutePointsOptions): IBoardConnectorPoint[];
    private _resolveRouteDependency;
    resolveCrossingRoutePoints(item: IBoardConnectorElementData, elementData: Record<string, IBoardElementData>): IBoardConnectorPoint[];
}
export declare function resolveBoardConnectorTerminalPadding(marker: IBoardConnectorMarker | undefined, strokeWidth: number, rounded: boolean): number;
export declare function resolveBoardConnectorRoutePoints(connectorData: IBoardConnectorData, options?: IResolveBoardConnectorRoutePointsOptions): IBoardConnectorPoint[];
export declare function resolveBoardConnectorPathCommands(connectorData: IBoardConnectorData, options?: IResolveBoardConnectorRoutePointsOptions): BoardConnectorPathCommand[];
export declare function resolveBoardConnectorPathBounds(commands: readonly BoardConnectorPathCommand[], fallbackTransform?: IBoardElementTransform): IBoardConnectorRouteBounds;
/**
 * Resolves marker-facing endpoint tangents from the final rendered path.
 *
 * The start tangent points backward from the route into the start marker; the end tangent points forward from the
 * route into the end marker. Repeated points and coincident Bézier handles are skipped so callers never need a
 * routing-specific marker rule or an arbitrary axis fallback.
 */
export declare function resolveBoardConnectorPathGeometry(commands: readonly BoardConnectorPathCommand[]): IBoardConnectorPathGeometry | null;
export declare function trimBoardConnectorPathCommands(commands: readonly BoardConnectorPathCommand[], startTrim: number, endTrim: number): BoardConnectorPathCommand[];
export declare function resolveBoardConnectorPathLength(commands: readonly BoardConnectorPathCommand[]): number;
export declare function resolveBoardConnectorRoundedRoutePathLength(points: readonly IBoardConnectorPoint[], cornerRadius?: number): number;
export declare function resolveBoardConnectorRoundedRouteRadius(points: readonly IBoardConnectorPoint[], cornerRadius?: number): number;
export declare function hitTestBoardConnectorPath(point: IBoardConnectorPoint, commands: readonly BoardConnectorPathCommand[], tolerance: number): boolean;
export declare function resolveBoardConnectorRouteBounds(points: readonly IBoardConnectorPoint[], fallbackTransform?: IBoardElementTransform): IBoardConnectorRouteBounds;
export declare function distanceToBoardConnectorSegment(point: IBoardConnectorPoint, start: IBoardConnectorPoint, end: IBoardConnectorPoint): number;
export declare function resolveBoardConnectorPolylineLength(points: readonly IBoardConnectorPoint[]): number;
export declare function trimBoardConnectorRoute(points: readonly IBoardConnectorPoint[], startTrim: number, endTrim: number): IBoardConnectorPoint[];
export {};
