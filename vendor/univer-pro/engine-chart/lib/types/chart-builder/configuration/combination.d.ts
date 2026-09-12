import type { ChartSeriesTypeString } from '../chart-types';
import type { ChartPublicSeriesSelector } from './cartesian-series';
export declare enum ChartSeriesAxis {
    Left = "left",
    Right = "right"
}
export declare const setCombinationSeriesType: (selector: ChartPublicSeriesSelector, value: ChartSeriesTypeString) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetCombinationSeriesType: (selector: ChartPublicSeriesSelector) => import("./chart-config-operation").IChartConfigOperation;
export declare const setCombinationSeriesAxis: (selector: ChartPublicSeriesSelector, value: ChartSeriesAxis) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetCombinationSeriesAxis: (selector: ChartPublicSeriesSelector) => import("./chart-config-operation").IChartConfigOperation;
