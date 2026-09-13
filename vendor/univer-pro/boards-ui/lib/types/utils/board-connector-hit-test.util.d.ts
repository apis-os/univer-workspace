import type { IBoardConnectorData, IBoardConnectorPoint, IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardConnectorRenderGeometry } from './board-connector-render-geometry.util';
import type { BoardConnectorPathCommand } from './board-connector-routing.util';
export interface IHitTestBoardConnectorElementOptions {
    connectorData: IBoardConnectorData;
    point: IBoardConnectorPoint;
    elementData?: Record<string, IBoardElementData>;
    connectorId?: string;
    pathCommands?: readonly BoardConnectorPathCommand[];
    routePoints?: readonly IBoardConnectorPoint[];
    renderGeometry?: IBoardConnectorRenderGeometry | null;
    pathTolerance?: number;
}
export declare const BOARD_CONNECTOR_DEFAULT_HIT_TOLERANCE = 8;
export declare function resolveBoardConnectorHitTolerance(strokeWidth?: number): number;
export declare function hitTestBoardConnectorElement(options: IHitTestBoardConnectorElementOptions): boolean;
