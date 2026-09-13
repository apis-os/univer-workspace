import type { IBoardElementData, IBoardRect } from '@univerjs-pro/boards';
import { resolveBoardElementBounds } from './board-selection-geometry.util';
export interface IBoardPoint {
    x: number;
    y: number;
}
export interface ICreateBoardElementSpatialIndexOptions {
    unitId: string;
    subUnitId: string;
    elementData: Record<string, IBoardElementData>;
    resolveElementBounds?: Parameters<typeof resolveBoardElementBounds>[2];
}
export interface IBoardElementSpatialIndex {
    queryIntersecting(bounds: IBoardRect): string[];
    queryContainersAtPoint(point: IBoardPoint): string[];
    dispose(): void;
}
export declare function createBoardElementSpatialIndex(options: ICreateBoardElementSpatialIndexOptions): IBoardElementSpatialIndex;
