import type { IChartAxisPointerSpec } from '../chart-types';
export declare enum ChartAxisPointerTarget {
    IndicatorLabelColor = "indicatorLabelColor",
    IndicatorLabelTextColor = "indicatorLabelTextColor",
    IndicatorLineColor = "indicatorLineColor",
    IndicatorLineType = "indicatorLineType"
}
export declare const setAxisPointer: (value: IChartAxisPointerSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearAxisPointer: (target?: ChartAxisPointerTarget) => import("./chart-config-operation").IChartConfigOperation;
