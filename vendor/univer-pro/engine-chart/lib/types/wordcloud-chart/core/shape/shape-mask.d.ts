import type { IWordCloudLayoutOptions, IWordCloudMaskGrid, WordCloudShape } from '../../types';
import type { IWordCloudLayoutGrid, IWordCloudLayoutRuntime } from '../types/layout';
export interface IWordCloudShapeGridOptions {
    sampleSize?: number;
    insideRatio?: number;
    shape?: WordCloudShape | string;
}
export declare function createWordCloudShapeGrid(grid: IWordCloudLayoutGrid, maskGrid: IWordCloudMaskGrid | undefined, options?: IWordCloudShapeGridOptions): Uint8Array;
export declare function resolveWordCloudMaskGrid(grid: IWordCloudLayoutGrid, options: IWordCloudLayoutOptions, runtime: IWordCloudLayoutRuntime): IWordCloudMaskGrid | undefined;
export declare function getDefaultShapeSampleSize(shape: WordCloudShape | string | undefined, cellSize: number): number;
export declare function getDefaultShapeInsideRatio(shape: WordCloudShape | string | undefined): number;
export declare function getBuiltinShapeName(shape: IWordCloudLayoutOptions['maskShape'] | undefined): WordCloudShape | undefined;
