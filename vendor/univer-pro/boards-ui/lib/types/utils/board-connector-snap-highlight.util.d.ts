import type { IBoardConnectorPoint, IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardConnectorBoundarySnap } from './board-connector-snap.util';
export interface IBoardConnectorSnapHighlight {
    elementId: string;
    point: IBoardConnectorPoint;
    normal: IBoardConnectorPoint;
    segmentStart: IBoardConnectorPoint;
    segmentEnd: IBoardConnectorPoint;
}
export declare function resolveBoardConnectorSnapHighlight(snap: IBoardConnectorBoundarySnap | null | undefined, elementData: Record<string, IBoardElementData>): IBoardConnectorSnapHighlight | null;
