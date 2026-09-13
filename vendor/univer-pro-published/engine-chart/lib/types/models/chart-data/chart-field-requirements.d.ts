import type { IUniverDataSet } from '../../types';
import { ChartTypeBits } from '../../enum';
export interface IChartRequiredFieldCounts {
    categoryRequiredCount: number;
    seriesRequiredCount: number;
}
export declare function getChartRequiredFieldCounts(chartType: ChartTypeBits, dataSet: IUniverDataSet): IChartRequiredFieldCounts | undefined;
