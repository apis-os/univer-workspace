import type { IChartTreemapData, IUniverDataSet } from '../../../types';
import type { IChartFieldConsumption } from '../chart-field-consumption';
/** Builds Treemap runtime data through the shared renderer-independent hierarchy policy. */
export declare function buildTreemapData(dataSet: IUniverDataSet, fields: IChartFieldConsumption, diagnostic?: string): IChartTreemapData;
