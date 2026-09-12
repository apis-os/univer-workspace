import type { BoardConnectorRouting, IBoardConnectorData, IBoardConnectorPoint, IBoardElementData } from '@univerjs-pro/boards';
import type { BoardConnectorPathCommand } from './board-connector-routing.util';
export interface IBoardConnectorMarkerAnchor {
    point: IBoardConnectorPoint;
    tangent: IBoardConnectorPoint;
}
export interface IBoardConnectorMarkerAnchors {
    start: IBoardConnectorMarkerAnchor;
    end: IBoardConnectorMarkerAnchor;
}
export interface IResolveBoardConnectorMarkerAnchorsOptions {
    connectorData?: IBoardConnectorData;
    elementData?: Record<string, IBoardElementData>;
    endpointGap?: number;
}
export declare function resolveBoardConnectorMarkerAnchors(_routing: BoardConnectorRouting, points: readonly IBoardConnectorPoint[], pathCommands: readonly BoardConnectorPathCommand[], options?: IResolveBoardConnectorMarkerAnchorsOptions): IBoardConnectorMarkerAnchors | null;
