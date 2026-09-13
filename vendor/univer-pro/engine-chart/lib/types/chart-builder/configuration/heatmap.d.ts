import type { ChartVisualMapType, IChartHeatmapLabelSpec } from '../chart-types';
export declare const setVisualMapType: (value: ChartVisualMapType) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetVisualMapType: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setValueRange: (min: number, max: number) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearValueRange: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setCellLabel: (value: IChartHeatmapLabelSpec) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearCellLabel: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setValueUnit: (value: string) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearValueUnit: () => import("./chart-config-operation").IChartConfigOperation;
