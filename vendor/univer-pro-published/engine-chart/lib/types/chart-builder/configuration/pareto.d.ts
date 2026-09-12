import type { IChartParetoBarStyleSpec, IChartParetoLineStyleSpec } from '../chart-types';
export declare const setParetoBarStyle: (value: IChartParetoBarStyleSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearParetoBarStyle: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setCumulativeLineStyle: (value: IChartParetoLineStyleSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearCumulativeLineStyle: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setIncludeZeroValues: (value: boolean) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetIncludeZeroValues: () => import("./chart-config-operation").IChartConfigOperation;
