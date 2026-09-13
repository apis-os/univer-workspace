import type { IBoardConnectorPoint, IBoardElementData } from '@univerjs-pro/boards';
export interface IBoardRoutingRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IBoardRoutingSegment {
    start: IBoardConnectorPoint;
    end: IBoardConnectorPoint;
}
export type BoardRoutingObstacleKind = 'shape' | 'image' | 'table' | 'container' | 'generic';
export interface IBoardRoutingObstacle {
    id: string;
    bounds: IBoardRoutingRect;
    polygon?: IBoardConnectorPoint[];
    clearance: number;
    kind: BoardRoutingObstacleKind;
}
export interface IBoardRoutingPenaltyContext {
    obstacles: readonly IBoardRoutingObstacle[];
    searchRect: IBoardRoutingRect;
}
export interface IBoardRoutingGuideCoordinates {
    xs?: readonly number[];
    ys?: readonly number[];
}
export interface IBoardRoutingPenaltyProvider {
    priority?: 'avoid' | 'soft';
    scoreSegment(segment: IBoardRoutingSegment, context: IBoardRoutingPenaltyContext): number;
    getGuideCoordinates?(context: IBoardRoutingPenaltyContext): IBoardRoutingGuideCoordinates;
}
export interface ICreateBoardConnectorRoutingObstaclesOptions {
    clearance?: number;
    excludeElementIds?: readonly string[];
}
export interface IBoardRoutingObstacleIndex {
    obstacles: readonly IBoardRoutingObstacle[];
    version: string;
    query(bounds: IBoardRoutingRect): IBoardRoutingObstacle[];
}
export interface IResolveBoardOrthogonalObstacleRouteOptions {
    start: IBoardConnectorPoint;
    end: IBoardConnectorPoint;
    preferredStartAxis?: 'horizontal' | 'vertical' | null;
    preferredEndAxis?: 'horizontal' | 'vertical' | null;
    preferEndpointAxisAlignment?: boolean;
    obstacles?: readonly IBoardRoutingObstacle[];
    obstacleIndex?: IBoardRoutingObstacleIndex;
    maxGraphNodes?: number;
    searchPadding?: number;
    penaltyProviders?: readonly IBoardRoutingPenaltyProvider[];
    stabilityHint?: {
        routePoints: readonly IBoardConnectorPoint[];
        penalty?: number;
        tolerance?: number;
    };
    fallbackRoute?: () => IBoardConnectorPoint[];
}
export declare function createBoardConnectorRoutingObstaclesForElementIds(elementData: Record<string, IBoardElementData>, elementIds: Iterable<string>, clearance?: number): IBoardRoutingObstacle[];
export declare function createBoardConnectorRoutingObstacleIndex(elementData: Record<string, IBoardElementData> | undefined, options?: ICreateBoardConnectorRoutingObstaclesOptions): IBoardRoutingObstacleIndex;
export declare function isBoardRoutingPointInsideObstacle(point: IBoardConnectorPoint, obstacle: IBoardRoutingObstacle): boolean;
export declare function doesBoardRoutingSegmentIntersectObstacle(segment: IBoardRoutingSegment, obstacle: IBoardRoutingObstacle): boolean;
export declare function resolveBoardOrthogonalObstacleRoute(options: IResolveBoardOrthogonalObstacleRouteOptions): IBoardConnectorPoint[];
