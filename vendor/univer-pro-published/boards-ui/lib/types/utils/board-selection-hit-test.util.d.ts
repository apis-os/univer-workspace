import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardElementSpatialIndex } from './board-container-spatial-index.util';
import type { IBoardSelectionPoint } from './board-selection-interaction.util';
export interface IHitTestBoardElementAtPointOptions {
    elementData: Record<string, IBoardElementData>;
    elementOrder: string[];
    point: IBoardSelectionPoint;
    hitTestElement?: BoardElementHitTester;
    spatialIndex?: IBoardElementSpatialIndex;
}
export type BoardElementHitTester = (elementDataItem: IBoardElementData, point: IBoardSelectionPoint) => boolean | undefined;
export interface IBoardElementHitTestResult {
    unitId: string;
    subUnitId: string;
    elementId: string;
    element: IBoardElementData['element'];
    transform: IBoardElementData['transform'];
}
export declare function hitTestBoardElementAtPoint(options: IHitTestBoardElementAtPointOptions): IBoardElementHitTestResult | null;
