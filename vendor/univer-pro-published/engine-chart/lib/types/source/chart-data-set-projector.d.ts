import type { IRange } from '@univerjs/core';
import type { IUniverDataSet, OptionDataValue } from '../types';
import { ChartSourceDataTypeEnum } from '../enum';
/** Explicit physical-header sentinel for chart source tables. */
export declare const CHART_HEADER_ROW_NONE = -1;
export interface IChartSourceItem {
    value: OptionDataValue;
    type: ChartSourceDataTypeEnum;
    label: string;
}
export interface IChartSourceTable {
    data: ReadonlyArray<ReadonlyArray<IChartSourceItem>>;
    /** Source-local physical row offsets; omission means contiguous offsets. */
    rowIndexes?: readonly number[];
    /** Source-local physical column offsets; omission means contiguous offsets. */
    columnIndexes?: readonly number[];
    /** Optional source-local merge topology used to produce categorySpans. */
    mergeRanges?: readonly IRange[];
}
export interface IChartDataSetProjector {
    project(table: IChartSourceTable): IUniverDataSet;
}
export interface ICreateChartDataSetProjectorOptions {
    /**
     * Zero-based physical row offset in the source table.
     * Always represents a row, regardless of isRowDirection.
     */
    headerRow: number;
    isRowDirection: boolean;
}
export declare function createChartDataSetProjector(options: ICreateChartDataSetProjectorOptions): IChartDataSetProjector;
