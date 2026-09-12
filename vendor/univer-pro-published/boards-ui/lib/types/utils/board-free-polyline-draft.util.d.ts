import type { BoardConnectorRouting, BoardConnectorRoutingMode, IBoardConnectorEndpoint, IBoardConnectorPoint, IBoardConnectorWaypoint } from '@univerjs-pro/boards';
export interface IBoardResolvedConnectorEndpoint {
    endpoint: IBoardConnectorEndpoint;
    point: IBoardConnectorPoint;
}
export interface IBoardFreePolylineDraft {
    startEndpoint: IBoardConnectorEndpoint;
    startPoint: IBoardConnectorPoint;
    currentEndpoint: IBoardConnectorEndpoint;
    currentPoint: IBoardConnectorPoint;
    points: IBoardConnectorPoint[];
}
export interface IBoardFreePolylineConnectorOptions {
    start: IBoardConnectorEndpoint;
    end: IBoardConnectorEndpoint;
    routing: Extract<BoardConnectorRouting, 'freePolyline'>;
    routingMode: BoardConnectorRoutingMode;
    waypoints: IBoardConnectorWaypoint[];
}
export declare function createBoardFreePolylineDraft(resolved: IBoardResolvedConnectorEndpoint): IBoardFreePolylineDraft;
export declare function updateBoardFreePolylineDraftCurrent(draft: IBoardFreePolylineDraft, resolved: IBoardResolvedConnectorEndpoint): IBoardFreePolylineDraft;
export declare function appendBoardFreePolylineDraftPoint(draft: IBoardFreePolylineDraft, resolved: IBoardResolvedConnectorEndpoint, threshold: number): IBoardFreePolylineDraft;
export declare function removeBoardFreePolylineDraftLastPoint(draft: IBoardFreePolylineDraft): IBoardFreePolylineDraft;
export declare function resolveBoardFreePolylineConnectorOptions(draft: IBoardFreePolylineDraft, connectorId: string): IBoardFreePolylineConnectorOptions;
