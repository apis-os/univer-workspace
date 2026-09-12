import type { IPdfTableCell, IPdfTableCellStyle, IPdfTableObject, IPdfTableStyleOptions } from '../types';
export declare const DEFAULT_PDF_TABLE_STYLE_ID = "univerPrimaryPlainGrid";
export declare const DEFAULT_PDF_TABLE_STYLE_OPTIONS: IPdfTableStyleOptions;
export type PdfTableThemePresetGroup = 'bestMatch' | 'light' | 'medium' | 'minimal';
export interface IPdfTableThemeColorRamp {
    strong: string;
    medium: string;
    subtle: string;
    subtleAlt: string;
    border?: string;
}
export interface IPdfTableThemePreset {
    id: string;
    group: PdfTableThemePresetGroup;
}
export interface IPdfTableThemePalette {
    background: string;
    border: string;
    primary: string;
    primarySubtle: string;
    primarySubtleAlt: string;
    neutral?: IPdfTableThemeColorRamp;
    blue?: IPdfTableThemeColorRamp;
    cyan?: IPdfTableThemeColorRamp;
    green?: IPdfTableThemeColorRamp;
    orange?: IPdfTableThemeColorRamp;
    purple?: IPdfTableThemeColorRamp;
    pink?: IPdfTableThemeColorRamp;
}
export interface IPdfTableThemeSnapshot {
    id: string;
    name: string;
    wholeTable?: IPdfTableCellStyle;
    firstRow?: IPdfTableCellStyle;
    lastRow?: IPdfTableCellStyle;
    bandRow?: IPdfTableCellStyle;
    bandCol?: IPdfTableCellStyle;
    firstCol?: IPdfTableCellStyle;
    lastCol?: IPdfTableCellStyle;
}
export declare const DEFAULT_PDF_TABLE_THEME_PALETTE: IPdfTableThemePalette;
export declare const DEFAULT_PDF_TABLE_THEME_PRESETS: IPdfTableThemePreset[];
export declare function resolvePdfTableThemePalette(getColorFromTheme: ((token: string) => string | undefined) | null | undefined): IPdfTableThemePalette;
export declare function buildDefaultPdfTableThemes(palette?: IPdfTableThemePalette): Record<string, IPdfTableThemeSnapshot>;
/** Resolve theme, inherited, and direct styles for one table cell. */
export declare function resolvePdfTableCellStyle(table: IPdfTableObject, cell: IPdfTableCell, themes?: Record<string, IPdfTableThemeSnapshot>): IPdfTableCellStyle;
export declare function mergePdfTableCellStyle(current: IPdfTableCellStyle | undefined, patch: IPdfTableCellStyle): IPdfTableCellStyle;
