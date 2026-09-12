import type { IPivotViewValueType, PivotTable, PivotView } from '@univerjs-pro/engine-pivot';
import type { IPivotTableCubeConfig } from './type';
import { DateSystem } from '@univerjs/core';
export declare const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";
export declare function unixToExcel(unixTimestamp: number, dateSystem?: DateSystem): number;
export declare function generatePivotViewDimensionArr(pivot: PivotTable, view: PivotView, isZhCN: boolean, config: IPivotTableCubeConfig): {
    dataArr: IPivotViewValueType[][];
    dataArrWithSplit: IPivotViewValueType[][][];
};
