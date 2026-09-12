import type { ChartDirection, IChartElementHit, IRuntimeAxis } from '../../../types';
export declare const CHART_ELEMENT_AXIS_ID_META = "__univerChartElementAxisId";
export type ChartElementAxisId = NonNullable<IChartElementHit['axisId']>;
type ChartElementAxisTarget = 'title' | 'label' | 'line';
export declare function getChartElementAxisId(axisOption: unknown): ChartElementAxisId | undefined;
export declare function setChartElementAxisId(axisOption: Record<string, unknown>, axisId: ChartElementAxisId): void;
export declare function resolveChartElementAxisId(axisPosition: IChartElementHit['axisPosition'] | undefined, direction: ChartDirection | undefined, runtimeAxes: IRuntimeAxis[] | undefined): ChartElementAxisId;
export declare function getChartElementAxisKind(axisId: ChartElementAxisId, target: ChartElementAxisTarget): IChartElementHit['kind'];
export {};
