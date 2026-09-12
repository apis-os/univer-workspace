import type { ChartDirection, IChartAxesSpec, IRuntimeAxis } from '@univerjs-pro/engine-chart';
export type ChartAxisKey = keyof IChartAxesSpec;
export declare function getChartEditorRuntimeAxis(runtimeAxes: IRuntimeAxis[], direction: ChartDirection, axis: ChartAxisKey): IRuntimeAxis | undefined;
