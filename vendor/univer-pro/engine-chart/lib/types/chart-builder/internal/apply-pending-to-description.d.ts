import type { ChartPendingConfig, IChartDescription } from '../chart-types';
export declare function applyChartPendingConfigToDescription<THost extends object>(baseline: IChartDescription & THost, pending: ChartPendingConfig): IChartDescription & THost;
