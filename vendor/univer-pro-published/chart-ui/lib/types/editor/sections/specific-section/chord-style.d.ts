import type { DeepNullish, IChartChordSpec } from '@univerjs-pro/engine-chart';
/** Shared numeric constraints for Chord ratio fields. */
export declare const CHORD_RATIO_FIELD_CONSTRAINTS: {
    readonly min: 0;
    readonly max: 1;
    readonly precision: 2;
    readonly step: 0.01;
};
export declare const CHORD_OPACITY_FIELD_CONSTRAINTS: {
    readonly min: 0;
    readonly max: 1;
    readonly precision: 2;
    readonly step: 0.05;
};
export declare function resolveEffectiveChordStyle(style: DeepNullish<IChartChordSpec> | undefined): IChartChordSpec;
export declare function hasInvalidChordRadii(style: DeepNullish<IChartChordSpec> | undefined): boolean;
