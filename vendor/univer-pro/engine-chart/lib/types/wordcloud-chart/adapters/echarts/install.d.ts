import type { echarts } from '../../../utils/echarts';
import type { IWordCloudEChartsSeriesOption } from '../../types';
export declare function registerWordCloudChart(echartsInstance: typeof echarts): typeof echarts;
export declare function waitForWordCloudImageResourcesReady(spec: unknown, timeout?: number): Promise<void>;
export type { IWordCloudEChartsSeriesOption };
