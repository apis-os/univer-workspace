import type { IPdfFontCIDVerticalMetricEntry, IPdfFontCIDWidthEntry, IPdfFontCMapCodeSpaceRange, IPdfFontDefaultVerticalMetrics, IPdfGraphicsState, IPdfImageAsset, IPdfPaint, IPdfPathCommand, PdfColor, PdfDisplayOperation, PdfId, PdfMatrix, PdfObjectRef, PdfPageId, PdfRectPt, PdfSourceId } from '../types';
import { PdfDisplayOpType, PdfFillRule, PdfXObjectSubtype } from '../enums';
export interface IPdfContentStreamParseOptions {
    sourceId: PdfSourceId;
    pageId: PdfPageId;
    pageIndex: number;
    pageRef?: PdfObjectRef;
    contentStreamRef?: PdfObjectRef;
    contentStreamIndex?: number;
    mediaBox: PdfRectPt;
    fontResourceIds?: Record<string, string>;
    fontMetrics?: Record<string, IPdfContentStreamFontMetrics>;
    xObjectResources?: Record<string, IPdfContentStreamXObjectResource>;
    xObjectResourceTypes?: Record<string, string>;
    extGStateResources?: Record<string, IPdfContentStreamExtGStateResource>;
    colorSpaceResources?: Record<string, IPdfContentStreamColorSpaceResource>;
    patternResources?: Record<string, IPdfContentStreamPatternResource>;
    shadingResources?: Record<string, IPdfContentStreamShadingResource>;
    initialGraphicsState?: IPdfContentStreamInitialGraphicsState;
}
export interface IPdfContentStreamInitialGraphicsState {
    fill?: PdfColor;
    fillPatternId?: string;
    stroke?: PdfColor;
    strokePatternId?: string;
    fillColorSpace?: IPdfContentStreamColorSpaceResource;
    strokeColorSpace?: IPdfContentStreamColorSpaceResource;
    lineWidth?: number;
    lineCap?: 'butt' | 'round' | 'square';
    lineJoin?: 'miter' | 'round' | 'bevel';
    miterLimit?: number;
    dash?: number[];
    dashPhase?: number;
    fillAlpha?: number;
    strokeAlpha?: number;
    blendMode?: string;
}
export interface IPdfContentStreamFontMetrics {
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
    type3Glyphs?: Record<number, IPdfContentStreamType3Glyph>;
}
export interface IPdfContentStreamType3Glyph {
    charName?: string;
    width?: number;
    bbox?: PdfRectPt;
    matrix?: PdfMatrix;
    resources?: IPdfContentStreamType3GlyphResources;
    content: string;
}
export interface IPdfContentStreamType3GlyphResources {
    fontResourceIds?: Record<string, string>;
    fontMetrics?: Record<string, IPdfContentStreamFontMetrics>;
    xObjectResources?: Record<string, IPdfContentStreamXObjectResource>;
    xObjectResourceTypes?: Record<string, string>;
    extGStateResources?: Record<string, IPdfContentStreamExtGStateResource>;
    colorSpaceResources?: Record<string, IPdfContentStreamColorSpaceResource>;
    patternResources?: Record<string, IPdfContentStreamPatternResource>;
    shadingResources?: Record<string, IPdfContentStreamShadingResource>;
}
export interface IPdfContentStreamType3GlyphMetrics {
    width?: number;
    bbox?: PdfRectPt;
}
export interface IPdfContentStreamXObjectResource {
    resourceName: string;
    objectRef?: PdfObjectRef;
    assetId?: string;
    subtype: PdfXObjectSubtype;
    width?: number;
    height?: number;
    bbox?: PdfRectPt;
    matrix?: PdfMatrix;
    displayListId?: string;
}
export interface IPdfContentStreamExtGStateResource {
    resourceName: string;
    objectRef?: PdfObjectRef;
    state: IPdfGraphicsState;
}
export interface IPdfContentStreamPatternResource {
    resourceName: string;
    objectRef?: PdfObjectRef;
    assetId?: string;
    fallbackPaint?: IPdfPaint;
}
export interface IPdfContentStreamShadingResource {
    resourceName: string;
    objectRef?: PdfObjectRef;
    assetId?: string;
    fallbackPaint?: IPdfPaint;
}
export type PdfContentStreamColorSpaceKind = 'DeviceGray' | 'DeviceRGB' | 'DeviceCMYK' | 'CalGray' | 'CalRGB' | 'ICCBased' | 'Indexed' | 'Lab' | 'Pattern' | 'Unknown';
export interface IPdfContentStreamColorSpaceResource {
    resourceName: string;
    objectRef?: PdfObjectRef;
    kind: PdfContentStreamColorSpaceKind;
    channels: number;
    baseColorSpace?: IPdfContentStreamColorSpaceResource;
    highValue?: number;
    lookup?: number[];
    whitePoint?: [number, number, number];
    blackPoint?: [number, number, number];
    gamma?: number[];
    matrix?: number[];
}
export interface IPdfContentStreamParseReport {
    operatorCounts: Record<string, number>;
    unsupportedOperatorCounts: Record<string, number>;
    unsupportedFeatureCounts: Record<string, number>;
    unsupportedFeatures: string[];
}
export interface IPdfContentStreamParseResult {
    ops: PdfDisplayOperation[];
    imageAssets?: Record<PdfId, IPdfImageAsset>;
    report: IPdfContentStreamParseReport;
}
interface IGraphicsState {
    ctm: PdfMatrix;
    ctmUnstable: boolean;
    fill: PdfColor;
    fillPatternId?: string;
    stroke: PdfColor;
    strokePatternId?: string;
    fillColorSpace?: IPdfContentStreamColorSpaceResource;
    strokeColorSpace?: IPdfContentStreamColorSpaceResource;
    lineWidth: number;
    lineCap: 'butt' | 'round' | 'square';
    lineJoin: 'miter' | 'round' | 'bevel';
    miterLimit: number;
    dash: number[];
    dashPhase: number;
    fillAlpha: number;
    strokeAlpha: number;
    blendMode?: string;
    fontName?: string;
    fontSize: number;
    charSpacing: number;
    wordSpacing: number;
    horizontalScale: number;
    leading: number;
    renderingMode: number;
    rise: number;
    textScale: number;
    textMatrix: PdfMatrix;
    textX: number;
    textY: number;
    textLineX: number;
    textLineY: number;
    pendingTextClipFallbacks: PdfTextOperation[];
    pendingTextClipPaths: IPdfPathCommand[];
    deferredClipRule?: PdfFillRule;
}
type PdfTextOperation = Extract<PdfDisplayOperation, {
    type: PdfDisplayOpType.TEXT;
}>;
/**
 * Parses a decoded PDF content stream into model display operations.
 *
 * This is intentionally a first-pass parser. It focuses on common text and path
 * operators emitted by qpdf/QDF so the JSON renderer can draw real content while
 * later iterations improve glyph metrics, encodings, images, and color spaces.
 */
export declare function parsePdfContentStreamToDisplayOps(content: string, options: IPdfContentStreamParseOptions): PdfDisplayOperation[];
export declare function parsePdfContentStreamToDisplayList(content: string, options: IPdfContentStreamParseOptions): IPdfContentStreamParseResult;
export declare function parsePdfType3GlyphMetrics(content: string): IPdfContentStreamType3GlyphMetrics;
export declare function createGraphicsStateFromParserState(state: IGraphicsState): IPdfGraphicsState;
export {};
