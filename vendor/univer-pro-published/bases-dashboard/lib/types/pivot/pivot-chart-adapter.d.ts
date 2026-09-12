import type { IUniverDataSet } from '@univerjs-pro/engine-chart';
import type { IPivotViewJSON } from '@univerjs-pro/engine-pivot';
import type { IBasePivotChartConfig } from '../types';
export interface IPivotChartAdapterOptions {
    rowDimensionNames?: string[];
    emptyCategoryLabel?: string;
}
export declare function resolveBasePivotChartRowDirection(orient: IBasePivotChartConfig['orient']): boolean;
export declare function adaptPivotViewToChartDataSet(viewJson: IPivotViewJSON, options?: IPivotChartAdapterOptions): IUniverDataSet;
