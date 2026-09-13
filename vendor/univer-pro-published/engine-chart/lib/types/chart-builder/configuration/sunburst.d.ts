import type { DeepNullish, IChartSunburstCenterLabelSpec, IChartSunburstLabelSpec } from '../../types';
export declare const setSunburstHierarchyFields: (indexes: readonly number[]) => import("./chart-config-operation").IChartConfigOperation;
export declare const setSunburstValueField: (index: number) => import("./chart-config-operation").IChartConfigOperation;
export declare const setSunburstLabel: (label: DeepNullish<IChartSunburstLabelSpec>) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetSunburstLabel: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setSunburstCenterLabel: (centerLabel: DeepNullish<IChartSunburstCenterLabelSpec>) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetSunburstCenterLabel: () => import("./chart-config-operation").IChartConfigOperation;
