import type { DeepNullish, IChartGaugeRangeSpec, IChartGaugeSpec } from '@univerjs-pro/engine-chart';
/** Resolves nullable editor patches against the canonical Gauge defaults. */
export declare function resolveEffectiveGaugeStyle(style: DeepNullish<IChartGaugeSpec> | undefined): IChartGaugeSpec;
export declare function mergeGaugeStylePatch(style: DeepNullish<IChartGaugeSpec> | undefined, patch: DeepNullish<IChartGaugeSpec>): DeepNullish<IChartGaugeSpec>;
export declare function areGaugeScaleBoundsValid(scale: DeepNullish<IChartGaugeSpec['scale']>): scale is NonNullable<IChartGaugeSpec['scale']> & {
    min: number;
    max: number;
};
export declare function areGaugeRangesValid(ranges: readonly IChartGaugeRangeSpec[], scale: DeepNullish<IChartGaugeSpec['scale']>): boolean;
export declare function createNextGaugeRange(style: DeepNullish<IChartGaugeSpec> | undefined): IChartGaugeRangeSpec | undefined;
