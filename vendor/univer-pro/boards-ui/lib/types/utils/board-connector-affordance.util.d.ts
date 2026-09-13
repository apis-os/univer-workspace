import type { IBoardConnectorEndpoint, IBoardConnectorPoint, IBoardElementData } from '@univerjs-pro/boards';
export interface IBoardConnectorAffordanceHandle {
    elementId: string;
    endpoint: IBoardConnectorEndpoint;
    point: IBoardConnectorPoint;
    normal: IBoardConnectorPoint;
    segmentIndex: number;
    visualScreenOffset?: number;
}
export interface IResolveBoardConnectorAffordanceHandlesOptions {
    selectedIds: readonly string[];
    elementData: Record<string, IBoardElementData>;
}
export declare function withBoardConnectorEndpointFallbackPoint(endpoint: IBoardConnectorEndpoint, point: IBoardConnectorPoint): IBoardConnectorEndpoint;
export declare function resolveBoardConnectorAffordanceHandles(options: IResolveBoardConnectorAffordanceHandlesOptions): IBoardConnectorAffordanceHandle[];
