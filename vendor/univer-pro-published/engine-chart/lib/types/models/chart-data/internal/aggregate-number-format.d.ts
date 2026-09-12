import type { IUniverDataSet } from '../../../types';
/**
 * Reconstructs the visible number pattern carried by a normalized chart source.
 * Source datasets currently expose formatted labels rather than number-format codes,
 * so aggregates reuse the first positive finite sample's prefix, suffix, separators,
 * scale, and precision instead of copying any input cell's already-formatted value.
 */
export declare function createAggregateNumberFormatter(dataSet: IUniverDataSet, fieldIndex: number): (value: number) => string;
