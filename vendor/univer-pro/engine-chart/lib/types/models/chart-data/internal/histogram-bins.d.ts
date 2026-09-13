import type { IChartHistogramBin, IChartHistogramDataSpec } from '../../../types';
export declare const MAX_HISTOGRAM_BIN_COUNT = 1000;
export interface IBuildHistogramBinsResult {
    bins: IChartHistogramBin[];
    sampleCount: number;
}
/** Builds deterministic numeric bins without renderer strings or persisted derived values. */
export declare function buildHistogramBins(values: readonly unknown[], spec?: IChartHistogramDataSpec): IBuildHistogramBinsResult;
/** Stable two-pass sample standard deviation using denominator n - 1. */
export declare function sampleStandardDeviation(samples: readonly number[]): number;
