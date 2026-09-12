import type { EChartSpec, IChartChordSpec, IChartRenderSpecConverter } from '../../../../types';
export declare const ChordValidationIssue: {
    readonly Angles: "Chord angles must be finite and non-negative where applicable.";
    readonly Radii: "Chord radii require 0 <= inner < outer <= 1.";
    readonly Opacity: "Chord opacity must be from 0 through 1.";
    readonly Sizes: "Chord visual sizes must be finite and non-negative.";
    readonly RibbonColor: "Chord ribbon color must be source, target, or gradient.";
};
export declare function validateChordSpec(spec: IChartChordSpec | undefined): string | undefined;
export declare const chordChartConverter: IChartRenderSpecConverter<EChartSpec>;
