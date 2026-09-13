import type { IChartSunburstData, IUniverDataSet } from '../../../types';
import type { IChartFieldConsumption } from '../chart-field-consumption';
/** Builds runtime-only Sunburst data through the shared hierarchy policy. */
export declare function buildSunburstData(dataSet: IUniverDataSet, fields: IChartFieldConsumption, diagnostic?: string): IChartSunburstData;
