import type { echarts } from '../../../utils/echarts';
export type PerformWordCloudSeriesLayout = (seriesModel: unknown, ecModel: unknown, api: unknown) => void;
export declare function registerWordCloudLayout(echartsInstance: typeof echarts, performSeriesLayout: PerformWordCloudSeriesLayout): void;
