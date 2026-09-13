import type { ChartStyle, ChartTypeBits, DeepNullish, IChartDataAggregation } from '@univerjs-pro/engine-chart';
import type { IMutation } from '@univerjs/core';
import type { IChartPersistedContext } from '../chart-persisted-context';
/**
 * Wire payload shared by incremental and replacement mutations.
 * Incremental mutations forward nested `null` values to the model; replacement callers should
 * provide complete values for every supplied config group.
 */
export interface IChartUpdateConfigMutationParams {
    unitId: string;
    chartModelId: string;
    chartType?: ChartTypeBits;
    dataAggregation?: DeepNullish<IChartDataAggregation>;
    style?: DeepNullish<ChartStyle>;
    context?: DeepNullish<IChartPersistedContext>;
}
/**
 * Incrementally updates the model by merging each supplied config group.
 * Unspecified fields are preserved, and nested `null` values are forwarded to the model unchanged.
 */
export declare const ChartUpdateConfigMutation: IMutation<IChartUpdateConfigMutationParams>;
/**
 * Replaces each supplied config group while leaving omitted groups unchanged.
 * Supplied context must be complete, canonical, and free of Pending-only `null` deletion markers.
 */
export declare const ChartReplaceConfigMutation: IMutation<IChartUpdateConfigMutationParams>;
