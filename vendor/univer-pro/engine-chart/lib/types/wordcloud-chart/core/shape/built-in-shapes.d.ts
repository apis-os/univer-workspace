import type { IWordCloudMaskGrid, IWordCloudMaskShapeSpec, IWordCloudSegmentationResult, WordCloudShape } from '../../types';
export interface IWordCloudShapeGridOptions {
    shapePaddingRatio?: number | null;
}
type BuiltinWordCloudShape = Exclude<WordCloudShape, 'cloud'>;
export declare function createMaskGridFromShape(shape: IWordCloudMaskShapeSpec | undefined, width: number, height: number, options?: IWordCloudShapeGridOptions): IWordCloudMaskGrid | undefined;
export declare function createBuiltinMaskGrid(shape: BuiltinWordCloudShape, width: number, height: number, options?: IWordCloudShapeGridOptions): IWordCloudMaskGrid;
export declare function createBuiltinMaskGrid(shape: WordCloudShape, width: number, height: number, options?: IWordCloudShapeGridOptions): IWordCloudMaskGrid | undefined;
export declare function createTextMaskGrid(shape: Extract<IWordCloudMaskShapeSpec, {
    type: 'text';
}>, width: number, height: number): IWordCloudMaskGrid;
export declare function normalizeMaskGrid(grid: IWordCloudMaskGrid, width?: number, height?: number): IWordCloudMaskGrid;
export declare function segmentMaskGrid(maskGrid: IWordCloudMaskGrid): IWordCloudSegmentationResult;
export {};
