import type { IChartDataAggregation } from '../../../chart-data-aggregation';
import type { IUniverDataSet } from '../../../types';
/**
 * Projects category/value rows while preserving source-field indexes.
 *
 * This runs after field-consumption validation, so callers continue to own chart-specific
 * mapping rules and this module owns only ordinary category/value aggregation and ranking.
 */
export declare function projectCategorySeriesData(dataSet: IUniverDataSet, categoryIndexes: readonly number[], seriesIndexes: readonly number[], dataAggregation: IChartDataAggregation | undefined): IUniverDataSet;
