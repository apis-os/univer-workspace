import type { BoardConnectorRouting, IBoardConnectorElement, IBoardConnectorEndpoint, IBoardConnectorPoint, IBoardConnectorStyle, IBoardElementData, IBoardShapeElement } from '@univerjs-pro/boards';
import { ShapeTypeEnum } from '@univerjs-pro/engine-shape';
export declare const BOARD_QUICK_CONNECT_GAP = 200;
export declare const BOARD_QUICK_CONNECT_SIBLING_GAP = 40;
export interface ICreateBoardConnectorQuickConnectElementsOptions {
    sourceEndpoint: IBoardConnectorEndpoint;
    sourcePoint: IBoardConnectorPoint;
    normal: IBoardConnectorPoint;
    routing: BoardConnectorRouting;
    style: IBoardConnectorStyle;
    targetPoint?: IBoardConnectorPoint;
    shapeType?: ShapeTypeEnum | string;
    sourceShape?: IBoardShapeElement;
    sourceSize?: {
        width?: number;
        height?: number;
    };
    elementData?: Record<string, IBoardElementData>;
}
export interface ICreateBoardConnectorQuickConnectElementsResult {
    shape: IBoardShapeElement;
    connector: IBoardConnectorElement;
    reflowedShapes: IBoardShapeElement[];
}
export declare function createBoardConnectorQuickConnectElements(options: ICreateBoardConnectorQuickConnectElementsOptions): ICreateBoardConnectorQuickConnectElementsResult;
