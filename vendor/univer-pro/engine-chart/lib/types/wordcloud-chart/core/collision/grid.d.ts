import type { IBoxFootprint, IWordCloudLayoutGrid } from '../types/layout';
export declare function createWordCloudGrid(width: number, height: number, cellSize: number): IWordCloudLayoutGrid;
export declare function getCellCenter(grid: IWordCloudLayoutGrid, index: number): {
    row: number;
    col: number;
    x: number;
    y: number;
};
export declare function getCellIndex(grid: IWordCloudLayoutGrid, row: number, col: number): number;
export declare function commitBoxFootprint(grid: IWordCloudLayoutGrid, footprint: IBoxFootprint, centerIndex: number): void;
