import type { IChartContext, IChartData, IUniverDataSet } from '../../../types';
import type { IChartLocaleTexts } from '../../common/chart-locale-texts';
import type { IChartFieldConsumption } from '../chart-field-consumption';
export declare function buildTreemapChartData(dataSet: IUniverDataSet, fieldConsumption: IChartFieldConsumption, chartContext: IChartContext, localeTexts: IChartLocaleTexts): IChartData;
export declare function buildSunburstChartData(dataSet: IUniverDataSet, fieldConsumption: IChartFieldConsumption, chartContext: IChartContext, localeTexts: IChartLocaleTexts): IChartData;
