import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardElementSpatialIndex } from './board-container-spatial-index.util';
export interface IBoardSelectionRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export type BoardElementBoundsResolver = (elementDataItem: IBoardElementData) => IBoardSelectionRect | null | undefined;
export interface ISelectBoardElementsByRectOptions {
    elementData: Record<string, IBoardElementData>;
    elementOrder: string[];
    rect: IBoardSelectionRect;
    preciseSelection: boolean;
    resolveElementBounds?: BoardElementBoundsResolver;
    spatialIndex?: IBoardElementSpatialIndex;
}
export interface IResolveBoardElementsBoundsOptions {
    elementData: Record<string, IBoardElementData>;
    elementOrder: string[];
    includeHidden?: boolean;
    resolveElementBounds?: BoardElementBoundsResolver;
}
export interface IBoardElementSelectionResult {
    unitId: string;
    subUnitId: string;
    elementId: string;
    element: IBoardElementData['element'];
    transform: IBoardElementData['transform'];
}
export declare function resolveBoardElementBounds(elementDataItem: IBoardElementData, elementData: Record<string, IBoardElementData>, resolveElementBounds?: BoardElementBoundsResolver): IBoardSelectionRect;
export declare function isBoardElementVisibleInTree(elementData: Record<string, IBoardElementData>, elementDataItem: IBoardElementData | undefined): elementDataItem is IBoardElementData;
export declare function selectBoardElementsByRect(options: ISelectBoardElementsByRectOptions): IBoardElementSelectionResult[];
export declare function resolveBoardElementsBounds(options: IResolveBoardElementsBoundsOptions): IBoardSelectionRect | null;
