import type { IChartDataAggregation } from '../../../chart-data-aggregation';
import type { IChartContext, IChartData, IUniverDataSet } from '../../../types';
import type { IChartLocaleTexts } from '../../common/chart-locale-texts';
import type { IChartFieldConsumption } from '../chart-field-consumption';
export declare function buildCategorySeriesChartData(dataSet: IUniverDataSet, fieldConsumption: IChartFieldConsumption, chartContext: IChartContext, localeTexts: IChartLocaleTexts, dataAggregation?: IChartDataAggregation): IChartData;
