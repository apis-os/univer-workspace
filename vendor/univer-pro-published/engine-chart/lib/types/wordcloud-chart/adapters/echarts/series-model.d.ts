import type { echarts } from '../../../utils/echarts';
export interface IWordCloudEChartsHelper {
    createDimensions(data: any[], options: Record<string, unknown>): any;
}
export declare function registerWordCloudSeriesModel(echartsInstance: typeof echarts, helper: IWordCloudEChartsHelper): void;
