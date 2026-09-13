import type { IWordCloudBounds, IWordCloudMeasureResult } from '../../types';
import type { IBoxFootprint, IWordCloudLayoutGrid } from '../types/layout';
export interface IBoxTightTextBox {
    readonly width: number;
    readonly height: number;
    readonly angle: number;
    readonly corners: ReadonlyArray<readonly [number, number]>;
    readonly bounds: IWordCloudBounds;
}
export declare function createBoxFromTightTextBox(textMetrics: IWordCloudMeasureResult, angle: number, padding: number): IBoxTightTextBox;
export declare function createBoxFootprint(grid: IWordCloudLayoutGrid, rawWidth: number, rawHeight: number, angle: number): IBoxFootprint;
export declare function getCachedBoxFootprint(cache: Map<string, IBoxFootprint>, grid: IWordCloudLayoutGrid, rawWidth: number, rawHeight: number, angle: number): IBoxFootprint;
export declare function getBoxBounds(x: number, y: number, footprint: IBoxFootprint): IWordCloudBounds;
