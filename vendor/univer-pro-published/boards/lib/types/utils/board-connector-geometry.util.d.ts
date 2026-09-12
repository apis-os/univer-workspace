import type { IBoardConnectorElement, IBoardElementTransform } from '../board.type';
import type { IBoardElementData } from '../services/board-element.service';
export interface IBoardConnectorPointDelta {
    x: number;
    y: number;
}
export interface IBoardConnectorBridgeTransform {
    left: number;
    top: number;
    width: number;
    height: number;
    angle: number;
    flipX?: boolean;
    flipY?: boolean;
}
export type BoardConnectorGeometryElementDataMap = Record<string, IBoardElementData>;
export declare function offsetBoardConnectorGeometry(connector: IBoardConnectorElement, delta: IBoardConnectorPointDelta): IBoardConnectorElement;
export declare function offsetBoardConnectorFreeGeometry(connector: IBoardConnectorElement, delta: IBoardConnectorPointDelta): IBoardConnectorElement;
export declare function resolveBoardConnectorFallbackBounds(connector: IBoardConnectorElement): IBoardElementTransform;
export declare function refreshBoardConnectorBoundFallbackGeometryByDelta(connector: IBoardConnectorElement, movedElementIds: ReadonlySet<string>, delta: IBoardConnectorPointDelta): IBoardConnectorElement;
export declare function refreshBoardConnectorBoundFallbackGeometryFromElementData(connector: IBoardConnectorElement, refreshedElementIds: ReadonlySet<string>, elementData: BoardConnectorGeometryElementDataMap): IBoardConnectorElement;
export declare function toBoardConnectorBridgeTransform(transform: IBoardElementTransform): IBoardConnectorBridgeTransform;
