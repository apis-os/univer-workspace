import type { IChartAggregationSpec } from '../chart-types';
export declare enum ChartAggregationTarget {
    Aggregate = "aggregate",
    TopN = "topN"
}
export declare const setAggregation: (value: IChartAggregationSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearAggregation: (target?: ChartAggregationTarget) => import("./chart-config-operation").IChartConfigOperation;
