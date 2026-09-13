import type { DeepReadonly } from '@univerjs/core';
import type { IChartDescription, IChartTrendlineSpec } from '../chart-types';
export type ChartTrendlineValue = Omit<IChartTrendlineSpec, 'selector'>;
export type ChartSeriesTrendlineSelector = number | {
    name: string;
};
export type ChartTrendlineSelector = number | {
    name: string;
};
export declare const setTrendline: (target: ChartSeriesTrendlineSelector, value: ChartTrendlineValue) => import("./chart-config-operation").IChartConfigOperation;
export declare function removeTrendline(description: DeepReadonly<IChartDescription>, series: ChartSeriesTrendlineSelector, trendline: ChartTrendlineSelector): import("./chart-config-operation").IChartConfigOperation;
export declare function clearTrendlines(description: DeepReadonly<IChartDescription>, series?: ChartSeriesTrendlineSelector): import("./chart-config-operation").IChartConfigOperation;
