import type { IPdfFontCIDVerticalMetricEntry, IPdfFontCIDWidthEntry, IPdfFontCMapCodeSpaceRange, IPdfFontDefaultVerticalMetrics, IPdfGlyphRun } from '../types';
export interface IPdfTextFontMetrics {
    pdfSubtype?: string;
    encoding?: string;
    firstChar?: number;
    widths?: number[];
    cidWidths?: IPdfFontCIDWidthEntry[];
    defaultWidth?: number;
    cidVerticalMetrics?: IPdfFontCIDVerticalMetricEntry[];
    defaultVerticalMetrics?: IPdfFontDefaultVerticalMetrics;
    toUnicode?: Record<number, string>;
    codeSpaceRanges?: IPdfFontCMapCodeSpaceRange[];
    writingMode?: 'horizontal-tb' | 'vertical-rl' | 'vertical-lr';
    type3Glyphs?: Record<number, {
        width?: number;
    }>;
}
export interface IPdfTextMetricState {
    fontName?: string;
    fontSize: number;
    textScale: number;
    horizontalScale: number;
    charSpacing: number;
    wordSpacing: number;
}
export interface IPdfTextUnicodeMappingInput {
    fontName?: string;
    metrics?: IPdfTextFontMetrics;
}
export declare function estimatePdfTextAdvancePt(text: string, state: IPdfTextMetricState, metrics: IPdfTextFontMetrics | undefined): number;
export declare function mapPdfTextToUnicode(text: string, input: IPdfTextUnicodeMappingInput): string;
export declare function createPdfGlyphRun(text: string, unicode: string, state: IPdfTextMetricState, metrics: IPdfTextFontMetrics | undefined): IPdfGlyphRun | undefined;
export declare function getPdfTextCodes(text: string, metrics: IPdfTextFontMetrics | undefined): number[];
export declare function pdfGlyphWidth(code: number, metrics: IPdfTextFontMetrics | undefined): number;
export declare function isPdfVerticalWritingMode(metrics: IPdfTextFontMetrics | undefined): boolean;
