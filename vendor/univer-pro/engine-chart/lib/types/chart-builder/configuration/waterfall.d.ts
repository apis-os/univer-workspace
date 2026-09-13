import type { WaterfallStackTypeEnum } from '../../enum';
import type { ChartWaterfallStyleTarget, IChartSeriesPatch, IChartWaterfallConnectorStyleSpec, IChartWaterfallPointRoleSpec } from '../chart-types';
import type { ChartPublicSeriesSelector } from './cartesian-series';
export declare const setWaterfallStackType: (value: WaterfallStackTypeEnum) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetWaterfallStackType: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setUseSubtotal: (value: boolean) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetUseSubtotal: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setWaterfallPointRoles: (roles: readonly IChartWaterfallPointRoleSpec[]) => import("./chart-config-operation").IChartConfigOperation;
export declare const setWaterfallConnector: (value: boolean | IChartWaterfallConnectorStyleSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearWaterfallConnector: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setWaterfallStyle: (selector: ChartPublicSeriesSelector, target: ChartWaterfallStyleTarget, value: Omit<IChartSeriesPatch, "selector" | "waterfallStyles"> & {
    name?: string;
}) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearWaterfallStyle: (selector: ChartPublicSeriesSelector, target: ChartWaterfallStyleTarget) => import("./chart-config-operation").IChartConfigOperation;
