import type { DeepNullish, IChartContext } from '../../types';
/** Validates a complete persisted context and returns the canonical snapshot fields only. */
export declare function canonicalizeChartContext(value: unknown): IChartContext;
/** Internal Pending boundary used before a command payload is created. */
export declare function applyPendingChartContext(current: IChartContext | undefined, value: DeepNullish<IChartContext>): IChartContext;
