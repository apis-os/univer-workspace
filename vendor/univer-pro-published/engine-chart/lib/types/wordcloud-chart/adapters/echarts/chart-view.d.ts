import type { echarts } from '../../../utils/echarts';
export interface IRegisterWordCloudChartViewContext {
    createTextElement(layout: any, data: any, dataIndex: number, seriesModel: any): unknown;
}
export declare function registerWordCloudChartView(echartsInstance: typeof echarts, context: IRegisterWordCloudChartViewContext): void;
