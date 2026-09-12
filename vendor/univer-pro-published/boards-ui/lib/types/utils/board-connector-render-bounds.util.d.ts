import type { IBoardConnectorData, IBoardElementData, IBoardElementTransform } from '@univerjs-pro/boards';
import type { IBoardConnectorRouteBounds, IResolveBoardConnectorRoutePointsOptions } from './board-connector-routing.util';
export interface IResolveBoardConnectorRenderBoundsOptions {
    elementData?: Record<string, IBoardElementData>;
    connectorId?: string;
    fallbackTransform?: IBoardElementTransform;
    stabilityHint?: IResolveBoardConnectorRoutePointsOptions['stabilityHint'];
}
export declare function expandBoardConnectorBounds(bounds: IBoardConnectorRouteBounds, padding: number): IBoardConnectorRouteBounds;
export declare function resolveBoardConnectorRenderBounds(connectorData: IBoardConnectorData, options?: IResolveBoardConnectorRenderBoundsOptions): IBoardConnectorRouteBounds;
