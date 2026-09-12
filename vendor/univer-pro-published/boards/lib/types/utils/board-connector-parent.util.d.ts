import type { IBoardConnectorElement } from '../board.type';
import type { IBoardElementData } from '../services/board-element.service';
export type BoardConnectorParentElementDataMap = Record<string, IBoardElementData>;
export interface IBoardConnectorParentScope {
    parentId?: string;
    laneId?: string;
}
export declare function resolveBoardConnectorBoundShapeIds(connector: IBoardConnectorElement): string[];
export declare function resolveBoardConnectorAnyBoundShapeIds(connector: IBoardConnectorElement): string[];
export declare function resolveBoardConnectorParentScope(elementData: BoardConnectorParentElementDataMap, connector: IBoardConnectorElement): IBoardConnectorParentScope;
export declare function resolveBoardConnectorParentId(elementData: BoardConnectorParentElementDataMap, connector: IBoardConnectorElement): string | undefined;
export declare function isBoardConnectorElementData(item: IBoardElementData | undefined): item is IBoardElementData & {
    element: IBoardConnectorElement;
};
