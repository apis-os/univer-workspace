import type { IChartDataAggregation } from '../../chart-data-aggregation';
import type { IChartContext, IChartData, IUniverDataSet } from '../../types';
import type { IChartLocaleTexts } from '../common/chart-locale-texts';
import type { IChartFieldConsumption } from './chart-field-consumption';
import { ChartTypeBits } from '../../enum';
export type ChartDataBuilder = (dataSet: IUniverDataSet, fieldConsumption: IChartFieldConsumption, chartContext: IChartContext, localeTexts: IChartLocaleTexts, dataAggregation?: IChartDataAggregation) => IChartData;
export declare function getChartDataBuilder(chartType: ChartTypeBits): ChartDataBuilder;
