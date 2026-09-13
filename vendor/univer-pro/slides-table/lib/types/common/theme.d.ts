import type { ISlideTableStyleOptions, ISlideTableThemeSnapshot } from '../types';
export declare const DEFAULT_SLIDE_TABLE_STYLE_ID = "univerPrimaryPlainGrid";
export declare const DEFAULT_SLIDE_TABLE_STYLE_OPTIONS: ISlideTableStyleOptions;
export type SlideTableThemePresetGroup = 'bestMatch' | 'light' | 'medium' | 'minimal';
export interface ISlideTableThemeColorRamp {
    strong: string;
    medium: string;
    subtle: string;
    subtleAlt: string;
    border?: string;
}
export interface ISlideTableThemePreset {
    id: string;
    group: SlideTableThemePresetGroup;
}
export interface ISlideTableThemePalette {
    background: string;
    border: string;
    primary: string;
    primarySubtle: string;
    primarySubtleAlt: string;
    neutral?: ISlideTableThemeColorRamp;
    blue?: ISlideTableThemeColorRamp;
    cyan?: ISlideTableThemeColorRamp;
    green?: ISlideTableThemeColorRamp;
    orange?: ISlideTableThemeColorRamp;
    purple?: ISlideTableThemeColorRamp;
    pink?: ISlideTableThemeColorRamp;
}
export declare const DEFAULT_SLIDE_TABLE_THEME_PALETTE: ISlideTableThemePalette;
export declare const DEFAULT_SLIDE_TABLE_THEME_PRESETS: ISlideTableThemePreset[];
export declare function resolveSlideTableThemePalette(getColorFromTheme: ((token: string) => string | undefined) | null | undefined): ISlideTableThemePalette;
export declare function buildDefaultSlideTableThemes(palette?: ISlideTableThemePalette): Record<string, ISlideTableThemeSnapshot>;
export declare function getFrozenSlideTableThemeId(tableId: string): string;
export declare function hasSlideTableStyleChanged(currentStyleId: string | undefined, nextStyleId: string | null | undefined): boolean;
export declare function buildFrozenSlideTableTheme(tableId: string, styleId: string, palette?: ISlideTableThemePalette): ISlideTableThemeSnapshot | undefined;
export declare function freezeSlideTableTheme(tableId: string, theme: ISlideTableThemeSnapshot): ISlideTableThemeSnapshot;
