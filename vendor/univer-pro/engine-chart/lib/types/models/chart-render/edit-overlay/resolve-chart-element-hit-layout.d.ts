import type { ECharts } from 'echarts';
import type { IChartElementBounds, IChartElementHit } from '../../../types';
import type { IChartElementHitLayout, IResolvedChartElementOverlay } from './types';
export declare function toChartElementFiniteNumber(value: unknown): number | undefined;
export declare function getChartElementTarget(params: any): any;
export declare function getChartElementComponentInfo(element: any): {
    mainType?: string;
    index?: number;
} | undefined;
export declare function getChartElementPropertyInChain(element: any, propertyName: string): unknown;
export declare function isSeriesLabelTarget(element: any): boolean;
export declare function getChartElementTargetSeriesIndex(instance: any, target: any): number | undefined;
export declare function getAxisComponentMainType(hit: IChartElementHit): 'xAxis' | 'yAxis' | undefined;
export declare function createRectOverlay(bounds: IChartElementBounds, padding?: number, shape?: Record<string, any>): IResolvedChartElementOverlay;
export declare function isSameBounds(left: IChartElementBounds | null | undefined, right: IChartElementBounds | undefined): boolean;
export declare function resolveChartElementHitLayout(hit: IChartElementHit, params: any, instance?: ECharts | null): IChartElementHitLayout;
