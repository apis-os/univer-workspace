import type { ChartDataSourceValue } from '../../models/chart-host/resource/inline-chart-table';
import type { IUniverDataSet } from '../../types';
export interface IBuildOrientedChartDataSetOptions {
    headerRow: number;
    isRowDirection: boolean;
}
/**
 * Builds detached host data; snapshot options use the shared projector and the existing callback form stays
 * compatible.
 */
export declare function buildOrientedChartDataSet<TCell>(values: TCell[][], buildDataSet: (data: TCell[][]) => IUniverDataSet, isRowDirection?: boolean): IUniverDataSet;
export declare function buildOrientedChartDataSet(values: ChartDataSourceValue[][], options: IBuildOrientedChartDataSetOptions): IUniverDataSet;
