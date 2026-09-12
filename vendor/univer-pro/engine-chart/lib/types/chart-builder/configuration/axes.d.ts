import type { IChartAxisSpec } from '../chart-types';
export declare enum ChartAxisTarget {
    Min = "min",
    Max = "max",
    Reverse = "reverse",
    Line = "line",
    Tick = "tick",
    Format = "format",
    Label = "label",
    GridLine = "gridLine"
}
export declare enum ChartAxisName {
    X = "x",
    Y = "y",
    RightY = "rightY"
}
export declare const setXAxis: (value: IChartAxisSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearXAxis: (target?: ChartAxisTarget) => import("./chart-config-operation").IChartConfigOperation;
export declare const setYAxis: (value: IChartAxisSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearYAxis: (target?: ChartAxisTarget) => import("./chart-config-operation").IChartConfigOperation;
export declare const setRightYAxis: (value: IChartAxisSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearRightYAxis: (target?: ChartAxisTarget) => import("./chart-config-operation").IChartConfigOperation;
export declare const setAxisTitle: (axis: ChartAxisName, value: string) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearAxisTitle: (axis: ChartAxisName) => import("./chart-config-operation").IChartConfigOperation;
export declare const setUseDateAxis: (value: boolean) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetUseDateAxis: () => import("./chart-config-operation").IChartConfigOperation;
