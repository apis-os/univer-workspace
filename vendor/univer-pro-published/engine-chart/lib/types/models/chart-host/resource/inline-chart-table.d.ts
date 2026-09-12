import type { CellValue } from '@univerjs/core';
import type { IChartSourceTable } from '../../../source/chart-data-set-projector';
import type { IUniverDataSet } from '../../../types';
export type ChartDataSourceValue = CellValue | null;
export declare function parseInlineChartTable(text: string): ChartDataSourceValue[][];
export declare function buildChartSourceTableFromValues(values: readonly (readonly ChartDataSourceValue[])[]): IChartSourceTable;
/**
 * Adapts historical inline tables for projection while keeping the selected physical header.
 * New source-table callers must use buildChartSourceTableFromValues() to retain every row.
 */
export declare function buildLegacyInlineChartProjectionTable(values: readonly (readonly ChartDataSourceValue[])[], headerRow: number): IChartSourceTable;
export declare function buildChartDataSetFromValues(values: readonly (readonly ChartDataSourceValue[])[]): IUniverDataSet;
