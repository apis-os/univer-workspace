import type { IBoardConnectorData, IBoardElementData } from '@univerjs-pro/boards';
export type BoardConnectorAdjacencyMap = Map<string, string[]>;
export interface ICreateBoardConnectorAdjacencyMapOptions {
    includeHidden?: boolean;
}
export declare function getBoardConnectorBoundShapeIds(connectorData: IBoardConnectorData): string[];
export declare function createBoardConnectorAdjacencyMap(elementData: Record<string, IBoardElementData>, options?: ICreateBoardConnectorAdjacencyMapOptions): BoardConnectorAdjacencyMap;
