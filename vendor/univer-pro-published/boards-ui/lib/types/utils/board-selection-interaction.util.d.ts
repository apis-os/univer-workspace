import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardElementSpatialIndex } from './board-container-spatial-index.util';
import type { BoardElementBoundsResolver, IBoardSelectionRect } from './board-selection-geometry.util';
export declare const BOARD_SELECTION_DRAG_THRESHOLD = 4;
export interface IBoardSelectionPoint {
    x: number;
    y: number;
}
export interface IResolveBoardElementDragSelectionOptions {
    elementData: Record<string, IBoardElementData>;
    elementOrder: string[];
    start: IBoardSelectionPoint;
    end: IBoardSelectionPoint;
    dragSelection: boolean;
    preciseSelection: boolean;
    resolveElementBounds?: BoardElementBoundsResolver;
    spatialIndex?: IBoardElementSpatialIndex;
}
export interface IResolvedBoardDragSelection {
    rect: IBoardSelectionRect;
    selectedIds: string[];
}
export declare function createBoardSelectionRect(start: IBoardSelectionPoint, end: IBoardSelectionPoint): IBoardSelectionRect;
export declare function isBoardDragSelection(start: IBoardSelectionPoint, end: IBoardSelectionPoint): boolean;
export declare function resolveBoardDragSelection(options: IResolveBoardElementDragSelectionOptions): IResolvedBoardDragSelection | null;
