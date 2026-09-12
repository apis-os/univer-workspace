import type { IChartData, IUniverDataSet } from '../types';
import type { ChartPendingConfig, IChartDescription } from './chart-types';
/** Host-owned persistence and rendering capabilities used by a chart builder. */
export interface IChartBuilderAdapter<THostDescription extends object = object> {
    /** Reads the canonical host description, optionally evaluating pending config against an alternate data set without persisting either. */
    describe(config?: ChartPendingConfig, dataSet?: IUniverDataSet): IChartDescription & THostDescription;
    /** Persists one pending semantic configuration patch. */
    commit(config: ChartPendingConfig): void;
    /** Materializes fresh engine semantic data for the effective pending state without mutating the host. */
    resolveData(config: ChartPendingConfig): IChartData;
}
