import type { ChartTypeBits, IChartSourceTable, IUniverDataSet } from '@univerjs-pro/engine-chart';
export interface IInitialSheetChartMapping {
    /**
     * Zero-based physical row offset in the source table.
     * Always represents a row, regardless of isRowDirection.
     */
    headerRow: number;
    isRowDirection: boolean;
    categoryIndexes: number[];
    seriesIndexes: number[];
}
export interface IInferInitialSheetChartSourceOptions {
    chartType: ChartTypeBits;
    isRowDirection: boolean;
    headerRow?: number;
    categoryIndexes?: readonly number[];
    seriesIndexes?: readonly number[];
}
export interface IInitialSheetChartSourceResult {
    dataSet: IUniverDataSet;
    mapping: IInitialSheetChartMapping;
}
export interface IProjectInitialSheetChartSourceOptions {
    isRowDirection: boolean;
    headerRow?: number;
}
export interface IInitialSheetChartProjection {
    dataSet: IUniverDataSet;
    headerRow: number;
}
export declare function inferInitialSheetChartHeaderRow(table: IChartSourceTable, isRowDirection: boolean): number | undefined;
export declare function projectInitialSheetChartSource(table: IChartSourceTable, options: IProjectInitialSheetChartSourceOptions): IInitialSheetChartProjection;
export declare function inferInitialSheetChartSource(table: IChartSourceTable, options: IInferInitialSheetChartSourceOptions): IInitialSheetChartSourceResult;
