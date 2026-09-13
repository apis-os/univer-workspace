import type { DeepReadonly } from '@univerjs/core';
import type { ChartPendingConfig, IChartCreateConfig, IChartDescription } from '../chart-types';
/** Converts an effective builder description into detached creation configuration. */
export declare function toChartCreateConfig<TDescription extends IChartDescription>(description: DeepReadonly<TDescription>, pending: DeepReadonly<ChartPendingConfig>): IChartCreateConfig;
/** Converts a complete live description into a reusable creation configuration. */
export declare function toChartCreateConfigSnapshot<TDescription extends IChartDescription>(description: DeepReadonly<TDescription>, pending?: DeepReadonly<ChartPendingConfig>): IChartCreateConfig;
