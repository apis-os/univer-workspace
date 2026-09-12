import type { IChartDataAggregation } from '../../../chart-data-aggregation';
import type { ChartStyle, IChartContext } from '../../../types';
import type { IChartResourceSnapshot } from '../resource/chart-resource-repository';
export interface IChartConfigUpdate {
    chartType?: IChartResourceSnapshot['chartType'];
    style?: ChartStyle;
    context?: IChartContext;
    dataAggregation?: Partial<IChartDataAggregation>;
    patch?: Partial<Omit<IChartResourceSnapshot, 'id'>>;
}
export declare const chartConfigInterpreter: {
    apply(previous: IChartResourceSnapshot, update: IChartConfigUpdate, replaceConfig: boolean): IChartResourceSnapshot | null;
};
