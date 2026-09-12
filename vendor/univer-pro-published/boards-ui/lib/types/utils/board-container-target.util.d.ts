import type { IBoardElementData } from '@univerjs-pro/boards';
import type { IBoardElementSpatialIndex, IBoardPoint } from './board-container-spatial-index.util';
import { BoardElementType } from '@univerjs-pro/boards';
export interface IBoardContainerTarget {
    containerId: string;
    depth: number;
}
export interface IResolveBoardContainerTargetAtPointOptions {
    elementData: Record<string, IBoardElementData>;
    elementOrder: readonly string[];
    point: IBoardPoint;
    activeElementIds?: readonly string[];
    activeElementTypes?: Record<string, BoardElementType | string>;
    allowCaptureFromParentedCandidateIds?: readonly string[];
    spatialIndex?: IBoardElementSpatialIndex;
}
export declare function resolveBoardContainerTargetAtPoint(options: IResolveBoardContainerTargetAtPointOptions): IBoardContainerTarget | null;
