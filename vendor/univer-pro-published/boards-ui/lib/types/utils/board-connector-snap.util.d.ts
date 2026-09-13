import type { IBoardConnectorEndpoint, IBoardConnectorPoint, IBoardElementData } from '@univerjs-pro/boards';
export interface IBoardConnectorBoundarySnap {
    endpoint: IBoardConnectorEndpoint;
    point: IBoardConnectorPoint;
    normal: IBoardConnectorPoint;
    distance: number;
    elementId: string;
}
export interface IResolveBoardConnectorBoundarySnapOptions {
    point: IBoardConnectorPoint;
    elementData: Record<string, IBoardElementData>;
    threshold: number;
    candidateElementIds?: readonly string[];
    excludeElementIds?: readonly string[];
    preferredElementId?: string | null;
    hysteresisThreshold?: number;
}
export interface IIsBoardConnectorBoundarySnapCandidateOptions {
    point: IBoardConnectorPoint;
    elementDataItem: IBoardElementData;
    elementData?: Record<string, IBoardElementData>;
    threshold: number;
}
export declare function isBoardConnectorBoundarySnapCandidate(options: IIsBoardConnectorBoundarySnapCandidateOptions): boolean;
export declare function resolveBoardConnectorBoundarySnap(options: IResolveBoardConnectorBoundarySnapOptions): IBoardConnectorBoundarySnap | null;
