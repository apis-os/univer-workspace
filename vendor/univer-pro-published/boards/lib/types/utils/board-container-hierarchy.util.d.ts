import type { IBoardElementData } from '../services/board-element.service';
export type BoardContainerElementDataMap = Record<string, IBoardElementData>;
export declare function isBoardContainerElementData(elementDataItem: IBoardElementData | undefined): boolean;
export declare function resolveBoardElementParentChain(elementData: BoardContainerElementDataMap, elementId: string): string[];
export declare function getDirectBoardContainerChildIds(elementData: BoardContainerElementDataMap, containerId: string): string[];
export declare function collectBoardContainerDescendantIds(elementData: BoardContainerElementDataMap, containerId: string): string[];
export declare function wouldCreateBoardContainerCycle(elementData: BoardContainerElementDataMap, elementId: string, nextParentId: string | undefined): boolean;
export declare function resolveNearestCommonBoardContainerParent(elementData: BoardContainerElementDataMap, elementIds: readonly string[]): string | undefined;
