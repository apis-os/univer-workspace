import type { IPdfPaint, IPdfStroke, IPdfTableCellStyle, IPdfTableStyleOptions, IPdfTextBlock, IPdfTextRun, PdfAnnotationType, PdfColor, PdfListKind, PdfListPresetId, PdfPointPt, PdfStyleId } from '@univerjs-pro/pdfs';
import type { HorizontalAlign, ImageSourceType } from '@univerjs/core';
/** Placement shared by all typed editable-element insertion options. */
export interface IPdfElementInsertOptions {
    /** Stable element ID. A unique ID is generated when omitted. */
    id?: string;
    /** Left position in PDF points. Defaults to 0. */
    left?: number;
    /** Top position in PDF points. Defaults to 0. */
    top?: number;
    /** Width in PDF points. Each element type supplies a deterministic default. */
    width?: number;
    /** Height in PDF points. Each element type supplies a deterministic default. */
    height?: number;
    /** Clockwise rotation in degrees. Defaults to 0. */
    rotation?: number;
    /** Zero-based editable-element z-order. Defaults to the front of the current stack. */
    index?: number;
}
/** Public PDF-point placement of an editable page element. */
export interface IPdfFacadeTransform {
    /** Left position in PDF points. */
    left: number;
    /** Top position in PDF points. */
    top: number;
    /** Positive width in PDF points. */
    width: number;
    /** Positive height in PDF points. */
    height: number;
    /** Clockwise rotation in degrees. */
    rotation: number;
    /** Whether the placement is reflected horizontally. */
    flipX: boolean;
    /** Whether the placement is reflected vertically. */
    flipY: boolean;
}
/** Axis-aligned native-text bounds in PDF points. */
export interface IPdfFacadeBounds {
    /** Left bound in PDF points. */
    left: number;
    /** Top bound in PDF points. */
    top: number;
    /** Width in PDF points. */
    width: number;
    /** Height in PDF points. */
    height: number;
}
/** Options for inserting one simple editable PDF text box. */
export interface IPdfTextBoxInsertOptions extends IPdfElementInsertOptions {
    /** Initial text. An empty string is valid. */
    text: string;
    /** Initial font family. The renderer default is used when omitted. */
    fontFamily?: string;
    /** Initial font size in points. Defaults to 12. */
    fontSize?: number;
    /** Initial text fill color. The renderer default is used when omitted. */
    fill?: PdfColor;
}
/** Options for inserting one story-backed paragraph frame. */
export interface IPdfParagraphInsertOptions extends IPdfElementInsertOptions {
    /** Initial paragraph text. An empty string is valid. */
    text: string;
    /** Initial font family. The renderer default is used when omitted. */
    fontFamily?: string;
    /** Initial font size in points. Defaults to 12. */
    fontSize?: number;
    /** Initial text fill color. The renderer default is used when omitted. */
    fill?: PdfColor;
}
/** Options for inserting one story-backed semantic list. */
export interface IPdfListInsertOptions extends IPdfElementInsertOptions {
    /** Initial first-item text. An empty string is valid. */
    text: string;
    /** Ordered or unordered list semantics. */
    kind: PdfListKind;
    /** Marker preset used to create the durable list definition. */
    preset: PdfListPresetId;
    /** Initial font family. The renderer default is used when omitted. */
    fontFamily?: string;
    /** Initial font size in points. Defaults to 12. */
    fontSize?: number;
    /** Initial text fill color. The renderer default is used when omitted. */
    fill?: PdfColor;
}
/** Options for inserting one structured editable table. */
export interface IPdfTableInsertOptions extends IPdfElementInsertOptions {
    /** Positive initial row count. */
    rowCount: number;
    /** Positive initial column count. */
    columnCount: number;
    /** Optional row-major initial cell text. Missing cells default to an empty string. */
    cellTexts?: string[];
    /** Optional local style copied onto every initial cell. */
    defaultCellStyle?: IPdfTableCellStyle;
    /** Optional table style ID. The core default table style is used when omitted. */
    styleId?: PdfStyleId;
    /** Optional conditional table-style regions. Core defaults are used when omitted. */
    options?: IPdfTableStyleOptions;
}
/** Cell container and whole-cell text styles accepted by {@link FPdfTableCell.setStyle}. */
export interface IPdfTableCellStyleOptions extends IPdfTableCellStyle {
    /** Font color applied to every text run in the cell. */
    fontColor?: PdfColor;
    /** Horizontal alignment applied to every paragraph in the cell. */
    horizontalAlignment?: HorizontalAlign;
}
/** Options for inserting one editable vector divider. */
export interface IPdfDividerInsertOptions extends IPdfElementInsertOptions {
    /** Initial divider stroke color. The core default is used when omitted. */
    strokeColor?: PdfColor;
    /** Positive divider stroke width in PDF points. The core default is used when omitted. */
    strokeWidth?: number;
}
/** One markup quadrilateral in PDF points. */
export type PdfAnnotationQuadPoints = [PdfPointPt, PdfPointPt, PdfPointPt, PdfPointPt];
/** Public markup annotation geometry in PDF points. */
export interface IPdfAnnotationMarkup {
    /** Markup quadrilaterals in PDF points. Placement is used when omitted or empty. */
    quadPoints?: PdfAnnotationQuadPoints[];
    /** Markup color. */
    color?: PdfColor;
    /** Markup opacity from 0 through 1. */
    opacity?: number;
    /** Optional markup outline or line style in PDF points. */
    stroke?: IPdfAnnotationStroke;
}
/** Public ink annotation geometry in PDF points. */
export interface IPdfAnnotationInk {
    /** Non-empty freehand paths in PDF points. */
    paths: PdfPointPt[][];
    /** Ink stroke appearance in PDF points. */
    stroke?: IPdfAnnotationStroke;
}
interface IPdfMarkupAnnotationInsertOptions extends IPdfElementInsertOptions {
    /** Markup annotation subtype supported by the Facade fallback renderer. */
    annotationType: PdfAnnotationType.HIGHLIGHT | PdfAnnotationType.UNDERLINE | PdfAnnotationType.STRIKEOUT | PdfAnnotationType.SQUIGGLY;
    /** Optional markup geometry and appearance. */
    markup?: IPdfAnnotationMarkup;
    ink?: never;
}
interface IPdfInkAnnotationInsertOptions extends IPdfElementInsertOptions {
    /** Freehand ink annotation subtype. */
    annotationType: PdfAnnotationType.INK;
    /** Required non-empty ink geometry. */
    ink: IPdfAnnotationInk;
    markup?: never;
}
/**
 * Options for inserting one durable, visibly renderable PDF annotation.
 *
 * Coordinate geometry is expressed in PDF points.
 */
export type IPdfAnnotationInsertOptions = IPdfMarkupAnnotationInsertOptions | IPdfInkAnnotationInsertOptions;
/** Detached text styling accepted by text-box Facades. */
export type IPdfTextStyle = Partial<Omit<IPdfTextRun, 'text'>>;
/** Stable range inside one text-box run, using UTF-16 offsets. */
export interface IPdfTextRange {
    /** Inclusive UTF-16 start offset. */
    start: number;
    /** Exclusive UTF-16 end offset. */
    end: number;
}
/** Detached paragraph block returned by a paragraph Facade. */
export interface IPdfParagraphBlockSnapshot extends IPdfTextBlock {
    /** Materialized block text. Mutating this snapshot does not edit the PDF. */
    text: string;
}
/** Input for inserting one paragraph block. */
export interface IPdfParagraphBlockInput {
    /** Stable block ID. A unique ID is generated when omitted. */
    id?: string;
    /** Initial block text. */
    text: string;
    /** Optional paragraph layout fields for the new block. */
    style?: Partial<Omit<IPdfTextBlock, 'id' | 'runIds' | 'listItem' | 'source'>>;
    /** Optional initial styling for the generated text run. */
    textStyle?: IPdfTextStyle;
}
/** Paragraph layout fields accepted by block style updates. */
export type IPdfParagraphStyle = Partial<Pick<IPdfTextBlock, 'align' | 'lineHeight' | 'indent' | 'firstLineIndent' | 'rightIndent' | 'spacingBefore' | 'spacingAfter'>>;
/** Detached semantic list item returned by a list Facade. */
export interface IPdfListItemSnapshot extends IPdfParagraphBlockSnapshot {
    /** Zero-based semantic nesting level. */
    level: number;
}
/** Input for inserting one semantic list item. */
export interface IPdfListItemInput {
    /** Stable item/block ID. A unique ID is generated when omitted. */
    id?: string;
    /** Initial list-item body text. */
    text: string;
    /** Zero-based nesting level from 0 through 8. Defaults to 0. */
    level?: number;
}
/** Public table theme descriptor. */
export interface IPdfTableTheme {
    /** Optional durable table style ID. */
    styleId?: PdfStyleId;
    /** Optional conditional table-style regions. */
    options?: IPdfTableStyleOptions;
}
/** Divider stroke exposed in PDF points instead of the core model's EMU lengths. */
export interface IPdfDividerStroke extends Omit<IPdfStroke, 'width' | 'dash' | 'dashPhase'> {
    /** Stroke width in PDF points. */
    width?: number;
    /** Alternating dash and gap lengths in PDF points. */
    dash?: number[];
    /** Dash-pattern phase in PDF points. */
    dashPhase?: number;
}
/** Annotation stroke exposed in PDF points instead of the core model's EMU lengths. */
export type IPdfAnnotationStroke = IPdfDividerStroke;
/** Public annotation appearance fields supported by the core model. */
export interface IPdfAnnotationStyle {
    /** Annotation fill paint; `null` removes the supported fill field. */
    fill?: IPdfPaint | null;
    /** Annotation stroke in PDF points; `null` removes the supported stroke field. */
    stroke?: IPdfAnnotationStroke | null;
    /** Opacity from 0 through 1; `null` restores the subtype default. */
    opacity?: number | null;
}
/** Crop offsets stored on an editable PDF image. */
export interface IPdfImageCrop {
    /** Left edge in the managed image's crop coordinate space. */
    left: number;
    /** Top edge in the managed image's crop coordinate space. */
    top: number;
    /** Right edge in the managed image's crop coordinate space. */
    right: number;
    /** Bottom edge in the managed image's crop coordinate space. */
    bottom: number;
}
/** Detached image element produced by {@link FPdfImageBuilder}. */
export interface IPdfImageBuilderElement {
    /** Stable image placement ID. */
    id: string;
    /** Durable URL, UUID, or base64 image source. */
    source: string;
    /** Durable image source type. */
    imageSourceType: ImageSourceType;
    /** Detached placement snapshot in PDF points and degrees. */
    transform: IPdfFacadeTransform;
    /** Optional detached crop snapshot. */
    crop?: IPdfImageCrop;
    /** Optional opacity from 0 through 1. */
    opacity?: number;
    /** Existing managed asset ID when the builder was initialized from a live image. */
    assetId?: string;
}
/** Detached builder result accepted by PDF image insertion and update APIs. */
export interface IPdfImageBuilderInfo {
    /** PDF unit that owns this builder information. */
    unitId: string;
    /** PDF page that owns this builder information. */
    pageId: string;
    /** Detached image descriptor and placement. */
    element: IPdfImageBuilderElement;
}
/** Convenience options for asynchronous string or Blob-source insertion. */
export interface IPdfImageInsertOptions extends IPdfElementInsertOptions {
    /** Explicit image source type. The type is inferred from the source when omitted. */
    imageSourceType?: ImageSourceType;
    /** Optional crop descriptor. */
    crop?: IPdfImageCrop;
    /** Optional opacity from 0 through 1. Defaults to 1. */
    opacity?: number;
}
export {};
