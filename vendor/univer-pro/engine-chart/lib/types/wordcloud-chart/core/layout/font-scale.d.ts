/**
 * wordcloud-font-size-scale.ts
 *
 * A single-file implementation of the reference wordCloud font-size pipeline.
 *
 * Scope:
 * - This file copies the *font size mapping* behavior used by the ordinary wordCloud transform:
 *   value field -> signed sqrt scale -> fontSizeRange.
 * What this intentionally does NOT do:
 * - It does not copy the full pixel/grid collision layout. If you need 1:1 placement, use @visactor/vlayouts
 *   directly. This file is for engines that already have their own tryPlaceWord/layout implementation.
 *
 * Notes from upstream behavior:
 * - The chart layer passes fontSize as { field: valueField } and fontSizeRange as the configured range.
 * - When fontSizeRange === 'auto', it passes null to the layout transform.
 * - The ordinary VGrammar wordcloud transform only applies fontSizeRange when fontSize is not a fixed number.
 * - The scale is sqrt-based, with signed sqrt support for negative numbers.
 * - If the data has exactly one item, extent shifts min downward so the single word maps to the max font size.
 *
 * License note:
 * - This is an MIT-compatible source-level port of small algorithmic utilities from VisActor/VGrammar.
 *   Keep this header if copied into your project.
 */
export interface IFieldOption {
    field: string;
}
export type CallbackOption<T, R = any> = (datum: T, index: number, data: T[]) => R;
export interface IWordCloudFontSizeMeta {
    /** Effective range after applying the `fontSizeRange === 'auto' ? null : range` rule. */
    effectiveFontSizeRange: [number, number] | null;
    /** Data extent used before sqrt scale. */
    extent: [number, number] | null;
    /** True when field/callback fontSize is mapped through sqrt scale. */
    usedSqrtRangeScale: boolean;
    /** True when fontSize is a fixed number and range is ignored. */
    fixedFontSize: boolean;
}
export declare const WORD_CLOUD_DEFAULT_FONT_SIZE_RANGE: [number, number];
/**
 * Direct port of VGrammar's fontSize + fontSizeRange decision:
 * - `fontSize = field(options.fontSize) || 14`
 * - `fontSizeRange` applies only when fontSize is not a fixed number
 * - mapping is sqrt scale over extent(data)
 */
export declare function createWordCloudFontSizeAccessor<T extends Record<string, any>>(data: T[], options: {
    fontSize?: IFieldOption | CallbackOption<T, number> | number;
    fontSizeRange?: [number, number] | null;
}): {
    fontSize: CallbackOption<T, number>;
    sourceValue: CallbackOption<T, number>;
    meta: IWordCloudFontSizeMeta;
};
/**
 * Chart rule: spec.fontSizeRange === 'auto' is passed to the transform as null.
 * For ordinary wordcloud, null means "do not run fontSizeRange sqrt mapping here".
 */
export declare function normalizeWordCloudFontSizeRange(fontSizeRange: [number, number] | 'auto' | null | undefined): [number, number] | null;
/** Signed sqrt used by VGrammar wordcloud scale. */
export declare function signedSqrt(x: number): number;
/**
 * Direct port of VGrammar `generateScale(extent, range)` for font size.
 * Note: VGrammar's `type` argument exists but sqrt behavior is used by default.
 */
export declare function generateWordCloudSqrtScale(domain: [number, number], range: [number, number]): (datum: number) => number;
/** Direct port of VGrammar extent behavior, including the single-data max-size trick. */
export declare function extent<T extends Record<string, any>>(fieldAccessor: CallbackOption<T, number>, data: T[]): [number, number];
