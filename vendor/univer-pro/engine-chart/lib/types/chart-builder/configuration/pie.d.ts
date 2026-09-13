import type { DeepNullish } from '../../types';
import type { IChartPieCompositeSpec, IChartPieLabelSpec, IChartSliceStyleSpec } from '../chart-types';
export declare const setDoughnutHole: (value: number) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearDoughnutHole: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setExplosion: (value: number) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetExplosion: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setSliceBorderColor: (value: string) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearSliceBorderColor: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setPaddingAngleEnabled: (value: boolean) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetPaddingAngleEnabled: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setHalfPie: (value: boolean) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetHalfPie: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setRosePie: (value: boolean) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetRosePie: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setLabelLineVisible: (value: boolean) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetLabelLineVisible: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setValueScale: (value: number) => import("./chart-config-operation").IChartConfigOperation;
export declare const resetValueScale: () => import("./chart-config-operation").IChartConfigOperation;
export declare const setPieLabel: (value: DeepNullish<IChartPieLabelSpec>) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearPieLabel: () => import("./chart-config-operation").IChartConfigOperation;
/** Records the authored style for one materialized Pie or Donut slice. */
export declare const setSliceStyle: (index: number, value: IChartSliceStyleSpec) => import("./chart-config-operation").IChartConfigOperation;
/** Clears the authored style for one materialized Pie or Donut slice. */
export declare const clearSliceStyle: (index: number) => import("./chart-config-operation").IChartConfigOperation;
export declare const setPieComposite: (value: DeepNullish<IChartPieCompositeSpec>) => import("./chart-config-operation").IChartConfigOperation;
export declare const clearPieComposite: () => import("./chart-config-operation").IChartConfigOperation;
