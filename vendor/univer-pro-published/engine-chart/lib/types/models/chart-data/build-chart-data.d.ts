import type { IChartDataAggregation } from '../../chart-data-aggregation';
import type { ChartTypeBits } from '../../enum';
import type { IChartContext, IChartData, IUniverDataSet } from '../../types';
import type { IChartLocaleTexts } from '../common/chart-locale-texts';
export declare function buildChartData(dataSet: IUniverDataSet, chartContext: IChartContext, chartType: ChartTypeBits, localeTexts: IChartLocaleTexts, dataAggregation?: IChartDataAggregation): IChartData;
