import type { DeepNullish } from '../../types';
import type { ChartPendingConfig, IChartSeriesStyleSpec } from '../chart-types';
export declare enum ChartAllSeriesStyleTarget {
    Border = "border",
    Color = "color",
    FillOpacity = "fillOpacity",
    Label = "label",
    Point = "point",
    RightAxis = "rightAxis"
}
export declare enum ChartSeriesClearTarget {
    Border = "border",
    Color = "color",
    DataPoints = "dataPoints",
    FillOpacity = "fillOpacity",
    Label = "label",
    Point = "point",
    RightAxis = "rightAxis"
}
export type ChartPublicSeriesSelector = number | {
    name: string;
};
export declare const setSeries: (selector: ChartPublicSeriesSelector, patch: Omit<NonNullable<ChartPendingConfig["series"]>[number], "selector">) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearSeries: (selector: ChartPublicSeriesSelector, target?: ChartSeriesClearTarget) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearAllSeriesOverrides: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setAllSeriesStyle: (style: DeepNullish<IChartSeriesStyleSpec>) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearAllSeriesStyle: (target?: ChartAllSeriesStyleTarget) => import("./chart-config-operation").IChartConfigOperation;
