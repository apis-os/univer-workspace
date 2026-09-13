import type { IChartGaugeData, IUniverDataSet } from '../../../types';
import type { IChartLocaleTexts } from '../../common/chart-locale-texts';
import type { IChartFieldConsumption } from '../chart-field-consumption';
export declare const GAUGE_ITEM_ID_PREFIX = "gauge-item:";
export declare function buildGaugeData(dataSet: IUniverDataSet, fields: IChartFieldConsumption, localeTexts: IChartLocaleTexts): IChartGaugeData;
