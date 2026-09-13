import type { PdfAnnotationType, PdfAssetType, PdfDisplayOpType, PdfEditability, PdfExportDisposition, PdfExportPageStrategy, PdfFillRule, PdfFormFieldType, PdfImageMaskKind, PdfImageSourceKind, PdfLayerType, PdfListKind, PdfListMarkerAlignment, PdfListMarkerStyle, PdfObjectOrigin, PdfObjectType, PdfOfficeSourceKind, PdfOperationType, PdfPathCommandType, PdfSemanticRole, PdfSourceSuppressionReason, PdfTableCellVerticalAlign, PdfTextAnchor, PdfXObjectSubtype } from './enums';
export type PdfId = string;
export type PdfDocumentId = PdfId;
export type PdfPageId = PdfId;
export type PdfObjectId = PdfId;
export type PdfAssetId = PdfId;
export type PdfLayerId = PdfId;
export type PdfStyleId = PdfId;
export type PdfOperationId = PdfId;
export type PdfSourceId = PdfId;
export type PdfDisplayListId = PdfId;
export type PdfDisplayOperationId = PdfId;
export type PdfTextStoryId = PdfId;
export type PdfTextRunId = PdfId;
export type PdfTextListId = PdfId;
export type PdfEditId = PdfId;
export type PdfObjectRef = `${number} ${number} R` | string;
export type PdfEmu = number;
export type PdfPt = number;
export type PdfCssPx = number;
export type PdfMatrix = [number, number, number, number, number, number];
export type PdfRectEmu = [PdfEmu, PdfEmu, PdfEmu, PdfEmu];
export type PdfRectPt = [PdfPt, PdfPt, PdfPt, PdfPt];
export type PdfQuadEmu = [PdfEmu, PdfEmu, PdfEmu, PdfEmu, PdfEmu, PdfEmu, PdfEmu, PdfEmu];
export type PdfPointEmu = [PdfEmu, PdfEmu];
export type PdfPointPt = [PdfPt, PdfPt];
export type PdfRect = PdfRectEmu;
export type PdfQuad = PdfQuadEmu;
export type PdfPoint = PdfPointEmu;
export type PdfQuadPoints = [PdfPoint, PdfPoint, PdfPoint, PdfPoint];
export type PdfColor = string | number[];
export type PdfJsonPrimitive = string | number | boolean | null;
export type PdfJsonValue = PdfJsonPrimitive | PdfJsonValue[] | {
    [key: string]: PdfJsonValue;
};
/**
 * Declares the coordinate systems persisted in a PDF document model.
 *
 * The model side is optimized for editing and Office interop. The PDF side is
 * optimized for native patching and exact provenance. Future coordinate systems
 * should be added as explicit fields instead of changing the meaning of these
 * existing fields.
 */
export interface IPdfDocumentCoordinate {
    modelUnit: 'emu';
    modelOrigin: 'top-left';
    pdfUnit: 'pdf-user-space';
    pdfOrigin: 'bottom-left';
    emuPerPt: number;
    emuPerCssPx: number;
}
/**
 * Describes one imported or exportable source document.
 *
 * Keep source-specific artifacts as optional references so new import pipelines
 * can attach qpdf JSON, QDF, parser indexes, or Office package parts without
 * changing the core page/object model.
 */
export interface IPdfDocumentSource {
    id?: PdfSourceId;
    kind: PdfOfficeSourceKind;
    assetId?: PdfAssetId;
    qpdfJsonAssetId?: PdfAssetId;
    qdfAssetId?: PdfAssetId;
    nativeIndexId?: PdfId;
    pageCount?: number;
    pages?: IPdfPageSourceMapping[];
    fingerprint?: string;
    fileName?: string;
    importer?: string;
    importedAt?: string;
}
/**
 * Root JSON contract for an editable PDF document.
 *
 * This object is the front-end source of truth: pages and objects are editable
 * state, sources/displayLists preserve import fidelity, and edits/exportPlan
 * explain how to write back to PDF or Office formats. Prefer additive optional
 * fields or metadata bags for future features.
 */
export interface IPdfDocument {
    schema: 'univer-pdf-document';
    schemaVersion: 1;
    id: PdfDocumentId;
    title?: string;
    coordinate: IPdfDocumentCoordinate;
    source?: IPdfDocumentSource;
    sources: Record<PdfSourceId, IPdfDocumentSource>;
    pages: IPdfPage[];
    objects: Record<PdfObjectId, PdfObject>;
    displayLists: Record<PdfDisplayListId, IPdfDisplayList>;
    textStories: Record<PdfTextStoryId, IPdfTextStory>;
    edits: IPdfEditState;
    exportPlan?: IPdfExportPlan;
    assets: IPdfAssetStore;
    styles: IPdfStyleStore;
    native?: IPdfNativePackage;
    outlines?: IPdfOutlineItem[];
    logicalStructure?: IPdfLogicalStructure;
    operations: IPdfOperationEnvelope[];
    conversion?: IPdfConversionState;
    collaboration?: IPdfCollaborationState;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Editable page record.
 *
 * Page geometry uses EMU, while pdfBoxes preserves the imported PDF page boxes.
 * Add page-level feature data through layers, source, background, or metadata
 * rather than embedding renderer-only state here.
 */
export interface IPdfPage {
    id: PdfPageId;
    index: number;
    label?: string;
    size: IPdfSize;
    pdfBoxes: IPdfPageBoxes;
    rotation: 0 | 90 | 180 | 270;
    layers: IPdfLayer[];
    source?: IPdfPageSourceMapping;
    thumbnailAssetId?: PdfAssetId;
    background?: IPdfPaint;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Width and height in model units.
 *
 * The current model unit is EMU. Keep this structure unit-neutral enough that
 * conversion helpers, not consumers, own any future unit conversion.
 */
export interface IPdfSize {
    width: PdfEmu;
    height: PdfEmu;
}
/**
 * Width and height in PDF user-space units.
 *
 * Use this for intrinsic/native resource dimensions such as image pixel counts
 * or Form XObject boxes where converting to EMU would lose PDF semantics.
 */
export interface IPdfNativeSize {
    width: number;
    height: number;
}
/**
 * PDF page boundary boxes in PDF user space.
 *
 * These boxes are kept in the native PDF coordinate system so exporters can
 * preserve crop/media/trim semantics exactly.
 */
export interface IPdfPageBoxes {
    mediaBox: PdfRectPt;
    cropBox?: PdfRectPt;
    bleedBox?: PdfRectPt;
    trimBox?: PdfRectPt;
    artBox?: PdfRectPt;
}
/**
 * A logical page layer with visibility, locking, and object ordering.
 *
 * Layers are an extensibility point for annotations, guides, redactions, or
 * future feature-specific views without changing page object storage.
 */
export interface IPdfLayer {
    id: PdfLayerId;
    type: PdfLayerType;
    name?: string;
    visible: boolean;
    locked: boolean;
    objectIds: PdfObjectId[];
    blendMode?: string;
    opacity?: number;
}
/**
 * Provenance mapping for a page back to an imported source page.
 *
 * Use this for page-level PDF objects and resource dictionaries. Object-level
 * spans should use IPdfSourceMapping so page mappings stay compact.
 */
export interface IPdfPageSourceMapping {
    sourceId?: PdfSourceId;
    pageIndex?: number;
    pageRef?: PdfObjectRef;
    pageObjectRef?: PdfObjectRef;
    contentStreamRefs?: PdfObjectRef[];
    resourceObjectRef?: PdfObjectRef;
    pdfBoxes?: Partial<IPdfPageBoxes>;
    structParents?: number[];
}
/**
 * Provenance mapping from a model entity back to native PDF/Office structures.
 *
 * Fields are optional because different importers can preserve different
 * levels of detail. Add new pointers here when they help deterministic export,
 * visual diffing, or debugging of the original source.
 */
export interface IPdfSourceMapping {
    sourceId?: PdfSourceId;
    pageId?: PdfPageId;
    pageIndex?: number;
    pageRef?: PdfObjectRef;
    pageObjectRef?: PdfObjectRef;
    pdfObjectRefs?: PdfObjectRef[];
    contentStreamRefs?: PdfObjectRef[];
    /** Zero-based index into the owning display list's source.contentStreamRefs. */
    contentStreamIndex?: number;
    operatorIds?: PdfDisplayOperationId[];
    /**
     * Instance path from an owning display list down to the exact native
     * operation. This is required for reusable structures such as Form XObjects:
     * the same inner text operation can be painted several times, so a flat
     * operator id is not enough to suppress or replace only one occurrence.
     */
    operationPath?: IPdfSourceOperationPathSegment[];
    operatorRange?: [number, number];
    displayListIds?: PdfDisplayListId[];
    resourceRefs?: IPdfSourceResourceRef[];
    pdfBounds?: PdfRectPt;
    markedContentId?: number;
    structElementId?: PdfId;
    structParent?: number;
    xobjectRef?: PdfObjectRef;
    appearanceStreamRef?: PdfObjectRef;
    officePath?: string;
    notes?: string;
}
/**
 * One segment in a native display-operation instance path.
 *
 * A segment usually points to an operator inside a display list. Optional
 * resource metadata lets future exporters distinguish the resource invocation
 * that introduced a nested list without decoding the operation again.
 */
export interface IPdfSourceOperationPathSegment {
    displayListId?: PdfDisplayListId;
    operatorId?: PdfDisplayOperationId;
    resourceName?: string;
    objectRef?: PdfObjectRef;
    assetId?: PdfAssetId;
}
export type PdfSourceResourceKind = 'Font' | 'XObject' | 'ExtGState' | 'Pattern' | 'Shading' | 'ColorSpace' | 'Properties';
/**
 * Reference to a PDF resource used by a source span.
 *
 * The shape allows a resource to be identified by PDF name, object ref, asset,
 * or any combination of those, which keeps it usable across parser pipelines.
 */
export interface IPdfSourceResourceRef {
    kind: PdfSourceResourceKind;
    name?: string;
    ref?: PdfObjectRef;
    assetId?: PdfAssetId;
}
/**
 * Normalized view of a PDF resource dictionary.
 *
 * PDF resource dictionaries are scoped by page, Form XObject, patterns, and
 * appearance streams. This structure keeps resource names and object refs close
 * to the native PDF while allowing importers to attach model asset ids.
 */
export interface IPdfPdfResourceDictionary {
    fonts?: Record<string, IPdfSourceResourceRef>;
    xObjects?: Record<string, IPdfXObjectResourceRef>;
    extGStates?: Record<string, IPdfSourceResourceRef>;
    colorSpaces?: Record<string, IPdfSourceResourceRef>;
    patterns?: Record<string, IPdfSourceResourceRef>;
    shadings?: Record<string, IPdfSourceResourceRef>;
    properties?: Record<string, IPdfSourceResourceRef>;
}
/**
 * Resource-dictionary entry for a PDF XObject.
 *
 * XObjects are invoked by the Do operator and can be images, forms, or rarer
 * PostScript objects. The subtype is kept separate from the asset id because a
 * decoder may choose to preserve unsupported XObjects as native resources.
 */
export interface IPdfXObjectResourceRef extends IPdfSourceResourceRef {
    kind: 'XObject';
    subtype: PdfXObjectSubtype;
    width?: number;
    height?: number;
    bbox?: PdfRectPt;
    matrix?: PdfMatrix;
}
/**
 * Object-level export preference.
 *
 * Exporters can override this with page plans when necessary, but this policy
 * gives individual objects a durable hint for native preserve, overlay, rewrite,
 * rasterization, removal, or redaction workflows.
 */
export interface IPdfExportPolicy {
    disposition: PdfExportDisposition;
    targetLayer?: PdfLayerId;
    flattenDpi?: number;
    preserveSourceMapping?: boolean;
    requireVisualDiff?: boolean;
}
/**
 * Shared fields for every page object.
 *
 * Keep cross-cutting capabilities here only when they apply to most object
 * kinds. Feature-specific state should live in the concrete object interface or
 * metadata to avoid forcing every importer to understand it.
 */
export interface IPdfObjectBase {
    id: PdfObjectId;
    type: PdfObjectType;
    origin?: PdfObjectOrigin;
    editability: PdfEditability;
    confidence?: number;
    bbox: PdfRect;
    transform?: PdfMatrix;
    clipPathId?: PdfObjectId;
    name?: string;
    visible?: boolean;
    locked?: boolean;
    source?: IPdfSourceMapping | null;
    semantic?: IPdfSemanticMetadata;
    office?: IPdfOfficeInteropMetadata;
    exportPolicy?: IPdfExportPolicy;
    revision?: number;
    deleted?: boolean;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Format-neutral semantic information for accessibility and conversion.
 *
 * This should map to tagged PDF, Office structure, and future semantic engines
 * without depending on one renderer's internal representation.
 */
export interface IPdfSemanticMetadata {
    role?: PdfSemanticRole;
    language?: string;
    altText?: string;
    actualText?: string;
    readingOrder?: number;
    taggedPdfPath?: PdfId[];
}
/**
 * Metadata used when an object can round-trip to an Office concept.
 *
 * Keep this intentionally loose: Office formats evolve independently, so store
 * stable source identifiers and equivalent type hints without mirroring a whole
 * PPTX/DOCX/XLSX schema inside the PDF model.
 */
export interface IPdfOfficeInteropMetadata {
    sourceKind?: PdfOfficeSourceKind;
    sourceObjectId?: string;
    sourcePart?: string;
    equivalentType?: 'slideShape' | 'docRun' | 'sheetChart' | 'sheetRange' | 'drawing' | 'unknown';
    canRoundTrip?: boolean;
}
/**
 * Opaque imported PDF content that should usually be preserved natively.
 *
 * Use this whenever the importer cannot safely promote content to semantic
 * objects. Future parsers can attach richer snapshots while keeping this as the
 * fallback for unknown or unsupported PDF features.
 */
export interface IPdfRawPdfGroupObject extends IPdfObjectBase {
    type: PdfObjectType.RAW_PDF_GROUP;
    displayListIds?: PdfId[];
    nativeSnapshot?: IPdfNativeSnapshot;
}
/**
 * Logical group of model objects.
 *
 * Groups are format-neutral and should express editor organization, not PDF
 * resource ownership. Native grouping belongs in source or nativeSnapshot.
 */
export interface IPdfGroupObject extends IPdfObjectBase {
    type: PdfObjectType.GROUP;
    childIds: PdfObjectId[];
}
/**
 * Text extracted from PDF operators before it is trusted as editable text.
 *
 * Candidate objects let importers keep uncertain glyph/run/line grouping visible
 * without committing to a final text story. Promotion data makes later semantic
 * upgrades explicit and reversible.
 */
export interface IPdfTextCandidateObject extends IPdfObjectBase {
    type: PdfObjectType.PDF_TEXT_CANDIDATE;
    text?: string;
    displayOpIds: PdfDisplayOperationId[];
    grouping: {
        level: 'glyph' | 'run' | 'line' | 'block';
        confidence: number;
        reason?: string;
    };
    fontCandidates?: Array<Partial<IPdfTextRun>>;
    promotion?: {
        canPromoteToTextBox: boolean;
        targetStoryId?: PdfTextStoryId;
        reason?: string;
    };
}
/**
 * Editable text box object.
 *
 * Prefer textStoryId for rich editing and collaboration. Inline runs remain
 * useful for simple labels, tests, and lightweight importers.
 */
export interface IPdfTextObject extends IPdfObjectBase {
    type: PdfObjectType.TEXT_BOX;
    textStoryId?: PdfTextStoryId;
    runs?: IPdfTextRun[];
    paragraphs?: IPdfParagraph[];
    writingMode?: 'horizontal-tb' | 'vertical-rl' | 'vertical-lr';
    textAnchor?: PdfTextAnchor;
    autoFit?: 'none' | 'shrinkText' | 'resizeShape';
    /** Minimum frame height retained when `resizeShape` shrinks content, in EMU. */
    autoFitMinHeight?: PdfEmu;
}
/**
 * Single-run text object for simple positioned text.
 *
 * This is useful for imported fragments or generated labels. Rich paragraphs
 * should use IPdfTextObject plus IPdfTextStory.
 */
export interface IPdfTextRunObject extends IPdfObjectBase {
    type: PdfObjectType.TEXT_RUN;
    run: IPdfTextRun;
}
/**
 * Text styling and glyph metadata for a contiguous run.
 *
 * Keep typographic values in PDF/Office-friendly units. Renderer-specific
 * measurements, such as canvas pixels, should be derived outside the model.
 */
export interface IPdfTextRun {
    text: string;
    /**
     * Visual reconstruction only; editor hit targets, search, and promotion must ignore this run.
     */
    visualOnly?: boolean;
    fontId?: PdfAssetId;
    fontFamily?: string;
    fontSize: PdfPt;
    fill?: PdfColor;
    /** Original non-canvas PDF color space retained for faithful export and raster fallback. */
    fillColorSpace?: string;
    fillColorComponents?: number[];
    /**
     * PDF pattern resource used as the text fill paint.
     *
     * Kept beside `fill` so simple editors can still show a fallback color while
     * renderers that understand shading or tiling patterns can paint the text
     * with the original PDF resource.
     */
    fillPatternId?: PdfAssetId;
    fillOpacity?: number;
    stroke?: IPdfStroke;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    /** Draw a horizontal strike through the run without changing its text content. */
    strikeout?: boolean;
    charSpacing?: number;
    wordSpacing?: number;
    /** Percentage scale from the source PDF text state, where 100 is unscaled. */
    horizontalScale?: number;
    baselineShift?: number;
    /**
     * Logical writing direction for this run.
     *
     * PDF composite fonts can use vertical CMaps. Keeping the mode on the run
     * lets renderers choose a faithful layout strategy without changing the
     * surrounding display operation contract.
     */
    writingMode?: 'horizontal-tb' | 'vertical-rl' | 'vertical-lr';
    glyphs?: IPdfGlyphRun;
    source?: IPdfSourceMapping;
}
/**
 * Optional low-level glyph data preserved from a PDF text run.
 *
 * Importers can use this for precise visual reconstruction, while semantic text
 * editing can ignore it when Unicode text and style are sufficient.
 */
export interface IPdfGlyphRun {
    /**
     * Renderer or decoder glyph identifiers after font-specific mapping.
     *
     * These may differ from source PDF codes for composite fonts, CFF charsets,
     * or shaped text. Omit them until a decoder can resolve real glyph ids.
     */
    glyphIds?: Array<string | number>;
    /**
     * Original PDF character codes or CIDs read from the text string.
     *
     * This is the durable bridge back to ToUnicode CMaps, CID widths, embedded
     * font programs, and export. It should not be rewritten during editing.
     */
    sourceCodes?: number[];
    /**
     * Unicode text produced from ToUnicode or fallback mapping for this run.
     *
     * Keeping it here makes it possible to compare editable text against the
     * original glyph mapping during import QA and export reconciliation.
     */
    unicode?: string;
    /**
     * Per-code advance estimates in PDF points.
     *
     * These are layout hints rather than authoritative glyph metrics. Precise
     * renderers may replace them with embedded-font measurements.
     */
    advances?: number[];
    /**
     * Optional per-glyph positions in PDF model coordinates.
     *
     * This is reserved for decoders that can preserve exact glyph placement
     * after shaping or per-glyph displacement operators.
     */
    positions?: PdfPoint[];
    /**
     * PDF encoding or CMap name used while decoding the source codes.
     *
     * Examples include `/WinAnsiEncoding`, `/Identity-H`, and `/Identity-V`.
     */
    fontEncoding?: string;
}
/**
 * Mapping from a PDF text code or CID to Unicode text.
 *
 * Composite fonts usually expose this through a `/ToUnicode` CMap. The code is
 * intentionally numeric so decoders can map it back to CIDs and CFF charsets,
 * while editors can consume the Unicode string directly.
 */
export interface IPdfFontUnicodeMapEntry {
    code: number;
    unicode: string;
}
/**
 * PDF CMap code-space range.
 *
 * Variable-length CMaps decide how raw text bytes become source character
 * codes before `/ToUnicode`, widths, or embedded font cmaps are consulted.
 */
export interface IPdfFontCMapCodeSpaceRange {
    start: number;
    end: number;
    byteLength: number;
}
/**
 * Width information from a CIDFont `/W` array.
 *
 * PDF supports either explicit width arrays for a first CID or compact ranges
 * with one shared width. Keeping both forms avoids expanding large CJK fonts
 * into huge JSON payloads.
 */
export interface IPdfFontCIDWidthEntry {
    firstCid: number;
    lastCid?: number;
    width?: number;
    widths?: number[];
}
/**
 * CID-to-GID mapping metadata from a CIDFont `/CIDToGIDMap` entry.
 *
 * Large maps can be one binary stream entry per CID. The PDF model keeps those
 * stream-backed instead of expanding them into JSON so large CJK documents do
 * not balloon during import.
 */
export interface IPdfFontCIDToGIDMap {
    /**
     * Mapping strategy declared by the PDF.
     *
     * `identity` means CID equals GID. `stream` means the raw map lives in a
     * stream asset. `none` is reserved for decoders that explicitly determine
     * that no mapping is available.
     */
    kind: 'identity' | 'stream' | 'none';
    /** Raw `/CIDToGIDMap` stream asset id when `kind` is `stream`. */
    streamAssetId?: PdfAssetId;
    /** Original object reference for diagnostics and backend stream lookup. */
    objectRef?: PdfObjectRef;
}
/**
 * One vertical metric tuple from a CIDFont `/W2` array.
 *
 * PDF stores the vertical displacement as a signed Y value, commonly negative.
 * Renderers can convert it to a positive cursor advance, while exporters can
 * still round-trip the PDF-native value.
 */
export interface IPdfFontCIDVerticalMetricValue {
    /** Signed PDF vertical displacement Y (`w1y`) in font units. */
    verticalDisplacementY: number;
    /** Vertical origin vector (`vx`, `vy`) in font units when specified. */
    verticalOrigin?: [number, number];
}
/**
 * Compact vertical metric range from a CIDFont `/W2` array.
 *
 * Like `/W`, `/W2` supports both CID ranges with one shared metric and explicit
 * metric arrays starting at a first CID.
 */
export interface IPdfFontCIDVerticalMetricEntry {
    firstCid: number;
    lastCid?: number;
    verticalDisplacementY?: number;
    verticalOrigin?: [number, number];
    metrics?: IPdfFontCIDVerticalMetricValue[];
}
/**
 * CIDFont `/DW2` default vertical metrics.
 *
 * PDF defines this as `[verticalOriginY, verticalDisplacementY]`; the X origin
 * defaults from the horizontal width and is therefore not stored here.
 */
export interface IPdfFontDefaultVerticalMetrics {
    verticalOriginY: number;
    verticalDisplacementY: number;
}
/**
 * Selected metrics from a PDF FontDescriptor.
 *
 * These values are kept in native PDF/font units because importers, renderers,
 * and exporters need the original metric space to build browser font wrappers,
 * estimate text advances, and round-trip embedded fonts.
 */
export interface IPdfFontDescriptorMetrics {
    fontName?: string;
    flags?: number;
    fontBBox?: PdfRectPt;
    italicAngle?: number;
    ascent?: number;
    descent?: number;
    capHeight?: number;
    xHeight?: number;
    stemV?: number;
    avgWidth?: number;
    maxWidth?: number;
    missingWidth?: number;
}
/**
 * Paragraph layout over inline run indexes.
 *
 * This lightweight shape supports simple text boxes; future rich text features
 * should prefer IPdfTextStory blocks and extend them additively.
 */
export interface IPdfParagraph {
    runIndexes: number[];
    align?: 'left' | 'center' | 'right' | 'justify';
    lineHeight?: number;
    indent?: number;
    spacingBefore?: number;
    spacingAfter?: number;
}
/**
 * Editable text flow shared by one or more text objects.
 *
 * Stories are the durable collaboration target for text editing. Add new block
 * or run metadata here when it must survive import/export across formats.
 */
export interface IPdfTextStory {
    id: PdfTextStoryId;
    objectIds: PdfObjectId[];
    blocks: IPdfTextBlock[];
    runs: Record<PdfTextRunId, IPdfTextStoryRun>;
    /**
     * List definitions referenced by blocks in this story.
     *
     * Definitions live with the story rather than page objects because one
     * logical list can flow through multiple text boxes or pages.
     */
    lists?: Record<PdfTextListId, IPdfTextListDefinition>;
    language?: string;
    writingMode?: 'horizontal-tb' | 'vertical-rl' | 'vertical-lr';
    source?: IPdfSourceMapping;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Block-level unit inside a text story.
 *
 * Blocks can become paragraphs, headings, list items, table cell text, or future
 * semantic text containers without changing the text run storage model.
 */
export interface IPdfTextBlock {
    id: PdfId;
    runIds: PdfTextRunId[];
    role?: PdfSemanticRole;
    /** Semantic list metadata; generated marker text is not stored in runs. */
    listItem?: IPdfTextListItem;
    align?: 'left' | 'center' | 'right' | 'justify';
    lineHeight?: number;
    indent?: number;
    /** Additional offset applied only to the first line, in EMU. */
    firstLineIndent?: PdfEmu;
    /** Space reserved between paragraph content and the frame's right edge, in EMU. */
    rightIndent?: PdfEmu;
    spacingBefore?: number;
    spacingAfter?: number;
    source?: IPdfSourceMapping;
}
/**
 * Reusable semantic numbering definition inside one text story.
 *
 * The definition is independent from editor presets so persisted documents can
 * render even when preset menus change in a later product version.
 */
export interface IPdfTextListDefinition {
    /** Stable list identity used by blocks and collaborative mutations. */
    id: PdfTextListId;
    /** Whether levels generate ordinal labels or unordered glyph labels. */
    kind: PdfListKind;
    /** Per-level marker and indentation rules, indexed by `level`. */
    levels: IPdfTextListLevel[];
    /** Native/import provenance when the definition was reconstructed. */
    source?: IPdfSourceMapping;
    /** Additive extension data that does not affect core numbering. */
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Marker and body layout rules for one zero-based list level.
 *
 * Geometry uses the PDF model's EMU unit. Typography inside
 * `markerTextStyle` keeps the same units as `IPdfTextRun`.
 */
export interface IPdfTextListLevel {
    /** Zero-based nesting level; the first supported level is `0`. */
    level: number;
    /** Numbering or glyph family used to generate the visible label. */
    markerStyle: PdfListMarkerStyle;
    /**
     * Ordered label template using `%1` through `%9` level placeholders.
     * For example, `%1.%2.` produces `2.a.` for a nested alpha level.
     */
    markerFormat?: string;
    /** Visible glyph for unordered or custom marker styles. */
    markerGlyph?: string;
    /** Alignment of the generated label within `markerColumnWidth`. */
    markerAlignment?: PdfListMarkerAlignment;
    /** First ordinal used when the level starts; defaults to `1`. */
    startAt?: number;
    /** Width reserved for the generated marker, in EMU. */
    markerColumnWidth?: PdfEmu;
    /** Gap between marker column and body, in EMU. */
    markerGap?: PdfEmu;
    /** Body start position relative to the text box, in EMU. */
    textIndent?: PdfEmu;
    /** Hanging-indent distance for wrapped body lines, in EMU. */
    hangingIndent?: PdfEmu;
    /** Optional style override applied only to the generated label. */
    markerTextStyle?: Partial<IPdfTextRun>;
}
/**
 * List membership attached to one text block.
 *
 * Body text remains in `runIds`; exporters and renderers derive the label from
 * this metadata and the referenced list definition.
 */
export interface IPdfTextListItem {
    /** List definition in the containing story. */
    listId: PdfTextListId;
    /** Zero-based nesting level, supported from `0` through `8`. */
    level: number;
    /** Ordinal that restarts this level and becomes its new counter state. */
    restartAt?: number;
    /** Visible ordinal override for this item without changing later counters. */
    valueOverride?: number;
    /** Imported label used when source numbering rules cannot be reconstructed. */
    importedLabel?: string;
    /** Source objects that visually formed an imported label. */
    sourceLabelObjectIds?: PdfObjectId[];
}
/**
 * Identified run inside a text story.
 *
 * The id makes text operations addressable for collaboration, comments, and
 * future rich text transforms.
 */
export interface IPdfTextStoryRun extends IPdfTextRun {
    id: PdfTextRunId;
    source?: IPdfSourceMapping;
}
/**
 * Editable preset or custom shape.
 *
 * The geometry object is intentionally separate so future shape engines can add
 * presets, adjustments, or paths without changing common object fields.
 */
export interface IPdfShapeObject extends IPdfObjectBase {
    type: PdfObjectType.SHAPE;
    shape: IPdfShapeGeometry;
    fill?: IPdfPaint;
    stroke?: IPdfStroke;
    effects?: IPdfEffect[];
}
/**
 * Editable vector path object.
 *
 * Use this for user-created or promoted vector content. Raw PDF paths that are
 * not editable can remain in display lists or raw PDF groups.
 */
export interface IPdfPathObject extends IPdfObjectBase {
    type: PdfObjectType.PATH;
    commands: IPdfPathCommand[];
    fill?: IPdfPaint;
    stroke?: IPdfStroke;
    fillRule?: PdfFillRule;
}
/**
 * Raster image object backed by an asset.
 *
 * Store binary/image metadata in assets and keep this object focused on layout,
 * cropping, opacity, and relationships to masks.
 */
export interface IPdfImageObject extends IPdfObjectBase {
    type: PdfObjectType.IMAGE;
    assetId: PdfAssetId;
    crop?: PdfRect;
    opacity?: number;
    softMaskAssetId?: PdfAssetId;
}
/**
 * Detected table-like content before it is promoted to an editable table.
 *
 * This keeps table recognition incremental: importers can preserve confidence,
 * supporting objects, and detection signals before creating structured cells.
 */
export interface IPdfTableCandidateObject extends IPdfObjectBase {
    type: PdfObjectType.TABLE_CANDIDATE;
    sourceObjectIds: PdfObjectId[];
    displayOpIds?: PdfDisplayOperationId[];
    detection: {
        confidence: number;
        rowCount?: number;
        columnCount?: number;
        hasRuledLines?: boolean;
        hasAlignedText?: boolean;
        reason?: string;
    };
    promotion?: {
        canPromoteToTable: boolean;
        targetObjectId?: PdfObjectId;
        reason?: string;
    };
}
/**
 * Editable structured table.
 *
 * Keep rows, columns, and cells format-neutral so the same object can export to
 * PDF vectors, DOCX tables, slides, or spreadsheet ranges later.
 */
export interface IPdfTableObject extends IPdfObjectBase {
    type: PdfObjectType.TABLE;
    rows: IPdfTableRow[];
    columns: IPdfTableColumn[];
    cells: IPdfTableCell[];
    /** Built-in or imported table theme identifier. */
    styleId?: PdfStyleId;
    /** Conditional table regions enabled for the selected theme. */
    options?: IPdfTableStyleOptions;
    /** Default appearance inherited by cells that omit a local style value. */
    defaultCellStyle?: IPdfTableCellStyle;
    gridSource?: IPdfOfficeInteropMetadata;
}
/**
 * Detected chart-like content before it is promoted to an editable chart.
 *
 * Candidate data lets future chart recognition improve without forcing the
 * first importer to recover full data series.
 */
export interface IPdfChartCandidateObject extends IPdfObjectBase {
    type: PdfObjectType.CHART_CANDIDATE;
    sourceObjectIds: PdfObjectId[];
    displayOpIds?: PdfDisplayOperationId[];
    detection: {
        confidence: number;
        chartType?: string;
        hasAxes?: boolean;
        hasLegend?: boolean;
        reason?: string;
    };
    promotion?: {
        canPromoteToChart: boolean;
        targetObjectId?: PdfObjectId;
        reason?: string;
    };
}
/**
 * Editable chart object.
 *
 * Fallback objects keep visual fidelity when embedded data is incomplete, while
 * dataRef/embeddedData leave room for future chart engines.
 */
export interface IPdfChartObject extends IPdfObjectBase {
    type: PdfObjectType.CHART;
    chartType: string;
    dataRef?: string;
    embeddedData?: PdfJsonValue;
    fallbackObjectIds?: PdfObjectId[];
}
/**
 * Editable or recognized mathematical formula.
 *
 * Multiple payload formats are allowed so PDF imports, Office conversions, and
 * future math editors can choose the most faithful representation available.
 */
export interface IPdfFormulaObject extends IPdfObjectBase {
    type: PdfObjectType.FORMULA;
    latex?: string;
    mathMl?: string;
    omml?: string;
    plainText?: string;
    fallbackObjectIds?: PdfObjectId[];
}
/**
 * Geometry and style for a PDF `/Line` annotation.
 *
 * Points use model coordinates (EMU, top-left origin). Native PDF values such
 * as `/L`, `/LE`, and appearance streams can still be preserved through source
 * mappings or metadata for export paths that need exact PDF patching.
 */
export interface IPdfLineAnnotationGeometry {
    start: PdfPoint;
    end: PdfPoint;
    stroke?: IPdfStroke;
    lineEndings?: [string, string];
}
/**
 * State for a PDF `/Popup` annotation.
 *
 * Popup annotations are usually companion UI for another annotation. Their
 * rectangle is not page artwork by itself; renderers should use `open` and the
 * parent relationship to decide whether to show popup chrome in an annotation
 * interaction layer.
 */
export interface IPdfPopupAnnotationState {
    parentRef?: PdfObjectRef;
    parentObjectId?: PdfObjectId;
    open?: boolean;
}
/**
 * Geometry for text markup annotations such as highlight and underline.
 *
 * PDF stores markup as `/QuadPoints` in source coordinate order. The model keeps
 * each quad as four top-left EMU points so renderers, hit testing, and future
 * text-range promotion can use the same geometry without re-reading native PDF.
 */
export interface IPdfMarkupAnnotationGeometry {
    quadPoints: PdfQuadPoints[];
    color?: PdfColor;
    opacity?: number;
    stroke?: IPdfStroke;
}
/**
 * Freehand ink annotation geometry.
 *
 * Each path is one stroke from `/InkList`, already converted into model
 * coordinates. Keeping stroke style here lets simple renderers draw annotations
 * even when the PDF did not provide an appearance stream.
 */
export interface IPdfInkAnnotationGeometry {
    paths: PdfPoint[][];
    stroke?: IPdfStroke;
}
/**
 * Fallback shape style for square/circle annotations without appearance streams.
 *
 * The annotation object's bbox carries geometry; this payload carries border and
 * interior paint so renderers can draw a standards-like approximation and
 * exporters can later regenerate annotation appearances.
 */
export interface IPdfShapeAnnotationGeometry {
    border?: IPdfStroke;
    interiorFill?: IPdfPaint;
}
/**
 * Link annotation action data.
 *
 * URI and destination actions are kept separate from generic metadata because
 * editor UI, accessibility, and export code will need stable access to them.
 */
export interface IPdfLinkAnnotationAction {
    actionType?: string;
    uri?: string;
    dest?: PdfJsonValue;
    /** Resolved document page id for an internal destination, when available. */
    pageId?: PdfPageId;
    /**
     * Visible link annotation border from `/Border`, `/BS`, and `/C`.
     *
     * Many links are invisible, but some PDFs intentionally use annotation
     * borders as page graphics. Keeping it here lets renderers draw the source
     * appearance while exporters can preserve or restyle the annotation chrome.
     */
    border?: IPdfStroke;
}
/**
 * Parsed AcroForm default appearance (`/DA`) text state.
 *
 * `/DA` is a compact PDF content snippet, usually containing font selection and
 * fill color for widget text. Keeping both the raw string and parsed fields lets
 * renderers draw a useful synthetic fallback while exporters can preserve the
 * original appearance command.
 */
export interface IPdfAcroFormDefaultAppearance {
    raw?: string;
    fontResourceName?: string;
    fontAssetId?: PdfAssetId;
    fontSize?: number;
    fillColor?: PdfColor;
}
/**
 * Widget annotation data linking page chrome to an AcroForm field object.
 *
 * Widgets are visual annotations. Form fields are semantic state. This bridge
 * lets the same field own multiple widgets, while each widget keeps appearance
 * state and page-level bounds.
 */
export interface IPdfWidgetAnnotationState {
    fieldObjectId?: PdfObjectId;
    fieldRef?: PdfObjectRef;
    fieldName?: string;
    fieldType?: PdfFormFieldType;
    value?: PdfJsonValue;
    defaultValue?: PdfJsonValue;
    choices?: string[];
    appearanceState?: string;
    /**
     * Non-Off appearance state name that represents this widget being selected.
     *
     * Button fields use name values such as `/Yes`, `/Male`, or `/Choice1`
     * instead of booleans. Radio widgets in particular need this per-widget
     * value so clicking one control can update the shared field value.
     */
    onValue?: string;
    /**
     * Selected normal appearance stream from `/AP /N`.
     *
     * For buttons `/AP /N` can be a state dictionary; this field stores the
     * state-resolved Form XObject stream so renderers can use the native widget
     * appearance before falling back to synthetic control drawing.
     */
    normalAppearanceRef?: PdfObjectRef;
    /**
     * Asset id for the selected normal appearance Form XObject.
     *
     * Keeping the asset pointer on the widget avoids re-resolving object refs
     * in hot render paths and gives export code a stable resource identity.
     */
    normalAppearanceAssetId?: PdfAssetId;
    /**
     * Parsed display list id for the selected normal appearance stream.
     *
     * Renderers should treat this as optional because malformed PDFs can point
     * to appearance streams that are missing, unparseable, or intentionally
     * regenerated at export time.
     */
    normalAppearanceDisplayListId?: PdfDisplayListId;
    /**
     * Parsed widget text fallback from annotation or AcroForm `/DA`.
     *
     * Native appearance streams still win when present. This is used when a PDF
     * asks viewers to synthesize field appearance or when an appearance stream
     * is missing but the field value should remain visible in the demo renderer.
     */
    defaultAppearance?: IPdfAcroFormDefaultAppearance;
    /**
     * AcroForm `/NeedAppearances` hint.
     *
     * When true, viewers are expected to synthesize missing widget appearances
     * from field values and `/DA`. Renderers should avoid doing this by default
     * when the source PDF explicitly provides or does not request appearances.
     */
    needsAppearance?: boolean;
    flags?: number;
    quadding?: number;
    /**
     * Widget background color from appearance characteristics (`/MK /BG`).
     *
     * This is used only for generated fallback appearances; native `/AP`
     * streams remain the source of truth when available.
     */
    backgroundColor?: PdfColor;
    /**
     * Widget border color from appearance characteristics (`/MK /BC`).
     *
     * Exporters can use this with borderWidth to regenerate simple AcroForm
     * appearances when `/NeedAppearances` is set.
     */
    borderColor?: PdfColor;
    /**
     * Widget border width in EMUs, parsed from `/BS /W` or `/Border`.
     *
     * A missing value lets renderers choose their default synthetic border.
     */
    borderWidth?: number;
}
/**
 * PDF annotation or annotation-like editor object.
 *
 * Keep common annotation fields here and add type-specific payloads later as
 * optional metadata or narrower interfaces when one annotation family grows.
 */
export interface IPdfAnnotationObject extends IPdfObjectBase {
    type: PdfObjectType.ANNOTATION;
    annotationType: PdfAnnotationType;
    contents?: string;
    author?: string;
    createdAt?: string;
    modifiedAt?: string;
    /**
     * Selected normal appearance stream from `/AP /N`.
     *
     * This applies to any annotation subtype, not only AcroForm widgets. When
     * present, renderers should draw this native Form XObject before falling
     * back to synthetic annotation geometry such as `/C`, `/BS`, or `/QuadPoints`.
     */
    normalAppearanceRef?: PdfObjectRef;
    /**
     * Asset id for the selected normal appearance Form XObject.
     *
     * Keeping the resolved asset id avoids object-ref lookup in hot render paths
     * and gives import/export code a stable pointer to the native appearance.
     */
    normalAppearanceAssetId?: PdfAssetId;
    /**
     * Parsed display list id for the selected normal appearance stream.
     *
     * Malformed PDFs may omit or reference missing appearances, so this remains
     * optional even when `normalAppearanceRef` is set.
     */
    normalAppearanceDisplayListId?: PdfDisplayListId;
    appearanceObjectId?: PdfObjectId;
    flags?: number;
    line?: IPdfLineAnnotationGeometry;
    popup?: IPdfPopupAnnotationState;
    markup?: IPdfMarkupAnnotationGeometry;
    ink?: IPdfInkAnnotationGeometry;
    shape?: IPdfShapeAnnotationGeometry;
    link?: IPdfLinkAnnotationAction;
    widget?: IPdfWidgetAnnotationState;
}
/**
 * Interactive form field object.
 *
 * Widget appearance and field value are separated so future AcroForm, XFA-like,
 * or Office form integrations can share the same field identity.
 */
export interface IPdfFormFieldObject extends IPdfObjectBase {
    type: PdfObjectType.FORM_FIELD;
    fieldType: PdfFormFieldType;
    name: string;
    value?: PdfJsonValue;
    defaultValue?: PdfJsonValue;
    choices?: string[];
    required?: boolean;
    readOnly?: boolean;
    fieldFlags?: number;
    alternateName?: string;
    mappingName?: string;
    parentRef?: PdfObjectRef;
    fieldRef?: PdfObjectRef;
    widgetObjectIds?: PdfObjectId[];
}
/**
 * Redaction region and export intent.
 *
 * Redactions must remain explicit until export burn-in so compliance workflows
 * can audit why content is hidden and whether it has been permanently applied.
 */
export interface IPdfRedactionObject extends IPdfObjectBase {
    type: PdfObjectType.REDACTION;
    reason?: string;
    overlayFill?: IPdfPaint;
    overlayText?: string;
    burnInRequired: boolean;
}
/**
 * Reference to another page rendered as an object.
 *
 * This leaves room for future page thumbnails, page reuse, slide imports, or
 * placed PDF pages without duplicating all child objects immediately.
 */
export interface IPdfEmbeddedPageObject extends IPdfObjectBase {
    type: PdfObjectType.EMBEDDED_PAGE;
    pageId: PdfPageId;
}
export type PdfObject = IPdfRawPdfGroupObject | IPdfTextCandidateObject | IPdfGroupObject | IPdfTextObject | IPdfTextRunObject | IPdfShapeObject | IPdfPathObject | IPdfImageObject | IPdfTableCandidateObject | IPdfTableObject | IPdfChartCandidateObject | IPdfChartObject | IPdfFormulaObject | IPdfAnnotationObject | IPdfFormFieldObject | IPdfRedactionObject | IPdfEmbeddedPageObject;
/**
 * Shape geometry payload.
 *
 * Presets cover common Office-like shapes, paths cover custom geometry, and
 * adjustments provide an additive extension point for parametric shapes.
 */
export interface IPdfShapeGeometry {
    preset?: string;
    path?: IPdfPathCommand[];
    adjustments?: Record<string, number>;
}
export type IPdfPathCommand = {
    type: PdfPathCommandType.MOVE_TO;
    point: PdfPoint;
} | {
    type: PdfPathCommandType.LINE_TO;
    point: PdfPoint;
} | {
    type: PdfPathCommandType.CUBIC_TO;
    c1: PdfPoint;
    c2: PdfPoint;
    point: PdfPoint;
} | {
    type: PdfPathCommandType.QUAD_TO;
    c: PdfPoint;
    point: PdfPoint;
} | {
    type: PdfPathCommandType.RECT;
    rect: PdfRect;
} | {
    type: PdfPathCommandType.CLOSE;
};
/**
 * Fill/paint description shared by objects and display operations.
 *
 * Keep paint resources by asset or pattern id so future color spaces, gradients,
 * and PDF patterns can be added without changing every object type.
 */
export interface IPdfPaint {
    color?: PdfColor;
    /** Original non-canvas PDF color space retained for faithful export and raster fallback. */
    sourceColorSpace?: string;
    sourceColorComponents?: number[];
    opacity?: number;
    assetId?: PdfAssetId;
    patternId?: PdfAssetId;
    gradient?: IPdfGradient;
}
/**
 * Stroke style for paths, shapes, borders, and annotations.
 *
 * Add new stroke features as optional fields so simple importers can ignore
 * advanced PDF graphics state without losing the base outline.
 */
export interface IPdfStroke {
    color?: PdfColor;
    /** Original non-canvas PDF color space retained for faithful export and raster fallback. */
    sourceColorSpace?: string;
    sourceColorComponents?: number[];
    /** PDF pattern resource used as the stroke paint. */
    patternId?: PdfAssetId;
    width?: number;
    opacity?: number;
    dash?: number[];
    dashPhase?: number;
    lineCap?: 'butt' | 'round' | 'square';
    lineJoin?: 'miter' | 'round' | 'bevel';
    miterLimit?: number;
}
/**
 * Gradient paint definition.
 *
 * This is intentionally compact; complex PDF shadings should stay in assets and
 * be referenced until the editor supports semantic gradient editing.
 */
export interface IPdfGradient {
    type: 'linear' | 'radial';
    /**
     * PDF user-space gradient coordinates.
     *
     * Linear gradients use [x0, y0, x1, y1]. Radial gradients use
     * [x0, y0, r0, x1, y1, r1]. Keeping the original coordinates lets renderers
     * apply page, pattern, or form transforms without flattening the asset.
     */
    coords?: number[];
    /**
     * PDF shading parameter domain.
     *
     * Axial and radial shadings map points to a parameter `t` before evaluating
     * the color function. The default is [0, 1]. Keeping non-default domains
     * lets renderers constrain non-extended shadings without inflating them to
     * the full page or pattern bounds.
     */
    domain?: [number, number];
    /**
     * Whether the gradient extends before the first stop or after the last stop.
     *
     * This mirrors PDF's /Extend pair and is optional because many shadings omit
     * it. Renderers that cannot extend can still draw the bounded shading box.
     */
    extend?: [boolean, boolean];
    stops: Array<{
        offset: number;
        color: PdfColor;
        opacity?: number;
    }>;
    transform?: PdfMatrix;
}
/**
 * Visual effect descriptor.
 *
 * The value is JSON so future effects can be prototyped without changing the
 * object union; stable high-use effects can later become typed interfaces.
 */
export interface IPdfEffect {
    type: 'shadow' | 'blur' | 'opacity' | 'blend';
    value: PdfJsonValue;
}
/**
 * Row definition for an editable table.
 *
 * Keep row layout independent from cells so future row styles, resizing, and
 * Office table imports can extend rows without duplicating data per cell.
 */
export interface IPdfTableRow {
    id: PdfId;
    /** Row height in EMU within the table's local coordinate system. */
    height: PdfEmu;
}
/**
 * Column definition for an editable table.
 *
 * Column metadata is separated from cells to support future resizing,
 * hidden-column behavior, and spreadsheet-like export decisions.
 */
export interface IPdfTableColumn {
    id: PdfId;
    /** Column width in EMU within the table's local coordinate system. */
    width: PdfEmu;
}
/** Conditional regions used by table themes. */
export interface IPdfTableStyleOptions {
    firstRow?: boolean;
    firstCol?: boolean;
    lastRow?: boolean;
    lastCol?: boolean;
    bandRow?: boolean;
    bandCol?: boolean;
}
/** Independent strokes for the four visible edges of a table cell. */
export interface IPdfTableBorders {
    top?: IPdfStroke;
    right?: IPdfStroke;
    bottom?: IPdfStroke;
    left?: IPdfStroke;
}
/** Cell content insets in EMU. */
export interface IPdfTablePadding {
    top: PdfEmu;
    right: PdfEmu;
    bottom: PdfEmu;
    left: PdfEmu;
}
/** Visual and text-frame properties inherited or overridden by one cell. */
export interface IPdfTableCellStyle {
    fill?: IPdfPaint;
    borders?: IPdfTableBorders;
    padding?: IPdfTablePadding;
    verticalAlign?: PdfTableCellVerticalAlign;
}
/**
 * Cell definition for an editable table.
 *
 * Cells reference child objects so text, images, formulas, or future embedded
 * content can live inside the table without inventing separate cell payloads.
 */
export interface IPdfTableCell {
    id: PdfId;
    /** Anchor row for this cell or merged range. */
    rowId: PdfId;
    /** Anchor column for this cell or merged range. */
    columnId: PdfId;
    rowSpan: number;
    columnSpan: number;
    /** Canonical editable content owned exclusively by this cell. */
    contentStoryId: PdfTextStoryId;
    style?: IPdfTableCellStyle;
}
/**
 * Normalized render-operation list for one page.
 *
 * Display lists preserve visual PDF structure after import. They are not the
 * final editing model, but they provide a stable bridge for grouping,
 * promotion, source suppression, and visual diffing.
 */
export interface IPdfDisplayList {
    id: PdfDisplayListId;
    sourceId?: PdfSourceId;
    pageId: PdfPageId;
    ops: PdfDisplayOperation[];
    source?: IPdfSourceMapping;
}
export type PdfDisplayOperation = {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.SAVE_STATE;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.RESTORE_STATE;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.TRANSFORM;
    matrix: PdfMatrix;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.SET_GRAPHICS_STATE;
    state: IPdfGraphicsState;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.CLIP;
    path: IPdfPathCommand[];
    fillRule?: PdfFillRule;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.PATH;
    commands: IPdfPathCommand[];
    paint: IPdfPathPaint;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.TEXT;
    runs: IPdfTextRun[];
    transform?: PdfMatrix;
    textState?: IPdfTextState;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.IMAGE;
    assetId: PdfAssetId;
    resourceName?: string;
    intrinsicSize?: IPdfNativeSize;
    imageSpaceMatrix?: PdfMatrix;
    transform?: PdfMatrix;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.SHADING;
    assetId: PdfAssetId;
    transform?: PdfMatrix;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.FORM_XOBJECT;
    assetId?: PdfAssetId;
    objectRef: PdfObjectRef;
    resourceName?: string;
    displayListId?: PdfDisplayListId;
    bbox?: PdfRectPt;
    matrix?: PdfMatrix;
    transform?: PdfMatrix;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.MARKED_CONTENT_BEGIN;
    tag: string;
    mcid?: number;
    source?: IPdfSourceMapping;
} | {
    id: PdfDisplayOperationId;
    type: PdfDisplayOpType.MARKED_CONTENT_END;
    source?: IPdfSourceMapping;
};
/**
 * Paint instructions for a display-list or editable path.
 *
 * This mirrors PDF path painting at a model-friendly level while keeping fill
 * and stroke reusable across semantic objects.
 */
export interface IPdfPathPaint {
    fill?: IPdfPaint;
    stroke?: IPdfStroke;
    fillRule?: PdfFillRule;
}
/**
 * Normalized graphics state for display operations.
 *
 * Keep low-level PDF state here when it affects rendering or export. Promote it
 * to semantic object fields only when editors can meaningfully manipulate it.
 */
export interface IPdfGraphicsState {
    ctm?: PdfMatrix;
    fill?: IPdfPaint;
    stroke?: IPdfStroke;
    alpha?: number;
    blendMode?: string;
    overprint?: boolean;
    softMask?: IPdfSoftMaskState;
    textState?: IPdfTextState;
}
/**
 * Structured PDF `/SMask` graphics state.
 *
 * The group reference points to the Form XObject that defines the mask. Early
 * renderers may use backdropColor as a fallback alpha, while precise renderers
 * can rasterize the group and apply it as an alpha or luminosity mask.
 */
export interface IPdfSoftMaskState {
    subtype?: string;
    groupRef?: PdfObjectRef;
    backdropColor?: number[];
    transferFunctionRef?: PdfObjectRef;
    raw?: PdfJsonValue;
}
/**
 * Text-specific graphics state captured from PDF operators.
 *
 * These fields are useful for faithful rendering and candidate extraction; rich
 * editable text should copy stable values into IPdfTextRun.
 */
export interface IPdfTextState {
    fontId?: PdfAssetId;
    fontSize?: number;
    charSpacing?: number;
    wordSpacing?: number;
    horizontalScale?: number;
    leading?: number;
    renderingMode?: number;
    rise?: number;
}
/**
 * Document-level edit ledger.
 *
 * This is the bridge between immutable source provenance and mutable editor
 * objects. Future edit features should add explicit records here when exporters
 * need to understand user intent.
 */
export interface IPdfEditState {
    suppressions: Record<PdfEditId, IPdfSourceSuppression>;
    replacements: Record<PdfEditId, IPdfReplacementLink>;
    pageOperations: IPdfPageEditOperation[];
}
/**
 * Explicit instruction to hide, remove, redact, or replace a native source span.
 *
 * Suppressions make export deterministic: writers do not have to infer from
 * object order whether imported PDF content should remain visible.
 */
export interface IPdfSourceSuppression {
    id: PdfEditId;
    sourceId: PdfSourceId;
    pageId?: PdfPageId;
    objectId?: PdfObjectId;
    displayListId?: PdfDisplayListId;
    operatorIds?: PdfDisplayOperationId[];
    operationPath?: IPdfSourceOperationPathSegment[];
    source?: IPdfSourceMapping;
    reason: PdfSourceSuppressionReason;
    exportDisposition: PdfExportDisposition;
    createdAt?: string;
    notes?: string;
}
/**
 * Relationship between suppressed source content and replacement model objects.
 *
 * Keeping this link separate supports many-to-one and one-to-many replacements,
 * review UI, undo, and future conflict resolution.
 */
export interface IPdfReplacementLink {
    id: PdfEditId;
    suppressionId?: PdfEditId;
    sourceObjectIds?: PdfObjectId[];
    replacementObjectIds: PdfObjectId[];
    createdAt?: string;
    notes?: string;
}
/**
 * Page-level edit operation that affects page identity or order.
 *
 * Object edits remain in object operations; this record is for changes whose
 * export impact is page-scoped.
 */
export interface IPdfPageEditOperation {
    id: PdfEditId;
    pageId: PdfPageId;
    type: 'insert' | 'delete' | 'reorder' | 'rotate' | 'resize';
    payload: PdfJsonValue;
    createdAt?: string;
}
/**
 * Planned export strategy for a target format.
 *
 * The plan is optional and can be regenerated, but when present it documents
 * exactly how sources, suppressions, overlays, rewrites, and rasterization
 * should be combined.
 */
export interface IPdfExportPlan {
    id?: PdfId;
    targetKind: PdfOfficeSourceKind;
    pages: IPdfPageExportPlan[];
    requireVisualDiff?: boolean;
    createdAt?: string;
    notes?: string;
}
/**
 * Export strategy for one page.
 *
 * Keep page plans coarse and reference object/edit ids so future exporters can
 * add specialized writers without duplicating object data.
 */
export interface IPdfPageExportPlan {
    pageId: PdfPageId;
    sourceId?: PdfSourceId;
    sourcePageIndex?: number;
    strategy: PdfExportPageStrategy;
    suppressionIds?: PdfEditId[];
    overlayObjectIds?: PdfObjectId[];
    rewriteObjectIds?: PdfObjectId[];
    rasterDpi?: number;
    notes?: string;
}
/**
 * Typed asset buckets referenced by objects, display lists, and native records.
 *
 * Store durable resources here rather than embedding binary data throughout the
 * object graph. Add buckets when a resource family needs independent lifecycle.
 */
export interface IPdfAssetStore {
    fonts: Record<PdfAssetId, IPdfFontAsset>;
    images: Record<PdfAssetId, IPdfImageAsset>;
    formXObjects: Record<PdfAssetId, IPdfFormXObjectAsset>;
    colorProfiles: Record<PdfAssetId, IPdfColorProfileAsset>;
    patterns: Record<PdfAssetId, IPdfPatternAsset>;
    shadings: Record<PdfAssetId, IPdfShadingAsset>;
    attachments: Record<PdfAssetId, IPdfAttachmentAsset>;
    streams: Record<PdfAssetId, IPdfStreamAsset>;
}
/**
 * Shared metadata for every asset.
 *
 * Asset-specific interfaces should extend this base and keep binary storage,
 * provenance, checksums, and MIME metadata consistent across resource kinds.
 */
export interface IPdfAssetBase {
    id: PdfAssetId;
    type: PdfAssetType;
    source?: IPdfSourceMapping;
    checksum?: string;
    mimeType?: string;
    fileName?: string;
    byteLength?: number;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Font asset metadata.
 *
 * Keep font identity and embedding details here so text objects can remain
 * lightweight and future font-substitution workflows have one source of truth.
 */
export interface IPdfFontAsset extends IPdfAssetBase {
    type: PdfAssetType.FONT;
    family?: string;
    postScriptName?: string;
    embedded: boolean;
    /**
     * Native PDF font subtype such as `/Type1`, `/TrueType`, `/Type0`, or
     * `/Type3`. Keeping the raw subtype lets import diagnostics and future font
     * backends choose the right decoding path without re-reading the source PDF.
     */
    pdfSubtype?: string;
    subset?: boolean;
    encoding?: string;
    /**
     * Default writing mode implied by the font's PDF encoding or CMap.
     *
     * `/Identity-V` and custom CMaps with `/WMode 1` map to `vertical-rl`.
     * Horizontal fonts may omit this field to keep common simple-font JSON small.
     */
    writingMode?: 'horizontal-tb' | 'vertical-rl' | 'vertical-lr';
    cmapAssetId?: PdfAssetId;
    /**
     * Parsed `/ToUnicode` entries. The importer preserves the original numeric
     * source code/CID so backend decoders can build OpenType `cmap` tables from
     * embedded CID fonts without re-reading the source PDF.
     */
    unicodeMap?: IPdfFontUnicodeMapEntry[];
    /**
     * Parsed CMap code-space ranges used to split raw PDF text bytes.
     *
     * This is essential for custom composite fonts whose source codes are not
     * uniformly two bytes long.
     */
    codeSpaceRanges?: IPdfFontCMapCodeSpaceRange[];
    /**
     * Raw embedded font program stream, when the importer can locate `/FontFile`,
     * `/FontFile2`, or `/FontFile3`.
     *
     * For composite `/Type0` fonts this may point at a descendant CID font
     * program so front-end renderers or backend decoders can resolve the same
     * font through the text run's composite font id.
     */
    fontFileStreamAssetId?: PdfAssetId;
    /**
     * PDF font program subtype such as `/TrueType`, `/Type1`, `/Type1C`, or
     * `/CIDFontType0C`. This is duplicated from diagnostics on purpose: render
     * and decode planning need a quick positive signal even when there are no
     * warnings to show.
     */
    fontProgramKind?: string;
    /**
     * Descendant font assets for composite fonts. Type0 fonts use these to map
     * CIDs to a concrete CIDFont program while preserving the composite font as
     * the text-run identity.
     */
    descendantFontIds?: PdfAssetId[];
    /**
     * Type3 fonts draw glyphs with PDF content streams. These fields preserve
     * the font-space transform and glyph bounds so renderers can map CharProc
     * display ops into page space, and exporters can retain the native font.
     */
    fontBBox?: PdfRectPt;
    fontMatrix?: PdfMatrix;
    /**
     * FontDescriptor metrics inherited through descendant fonts when needed.
     * Composite Type0 assets copy the descendant descriptor here so renderers can
     * work from the text-run font id instead of chasing PDF resource graphs.
     */
    descriptor?: IPdfFontDescriptorMetrics;
    /**
     * Import-time font rendering/export diagnostics.
     *
     * These flags deliberately do not block rendering. They mark fonts that need
     * a deeper font engine for exact cmap lookup, glyph outlines, or shaping.
     */
    diagnostics?: IPdfFontDiagnostics;
    firstChar?: number;
    lastChar?: number;
    widths?: number[];
    /**
     * CIDFont `/W` entries in compact PDF form. For Type0 fonts this can be
     * inherited from the descendant CIDFont so font decoders can resolve widths
     * from the composite text-run font id.
     */
    cidWidths?: IPdfFontCIDWidthEntry[];
    defaultWidth?: number;
    /**
     * CIDFont `/CIDToGIDMap` metadata. Kept compact so backend decoders can
     * resolve glyph ids without forcing the frontend model to carry huge maps.
     */
    cidToGidMap?: IPdfFontCIDToGIDMap;
    /** CIDFont `/W2` vertical metrics in compact PDF form. */
    cidVerticalMetrics?: IPdfFontCIDVerticalMetricEntry[];
    /** CIDFont `/DW2` default vertical metrics. */
    defaultVerticalMetrics?: IPdfFontDefaultVerticalMetrics;
}
/**
 * Diagnostic hints for PDF font handling.
 *
 * The importer fills this when it detects a font path that the current
 * front-end renderer can only approximate. Future Rust/Go/backend decoders can
 * consume the same hints to decide which font program or CMap to decode.
 */
export interface IPdfFontDiagnostics {
    hasToUnicode?: boolean;
    requiresCMap?: boolean;
    requiresGlyphProgram?: boolean;
    requiresShaping?: boolean;
    fontProgramKind?: string;
    warnings?: string[];
}
/**
 * Image asset metadata.
 *
 * Layout stays on IPdfImageObject; this record stores intrinsic image/resource
 * properties that can be shared by multiple placements.
 */
export interface IPdfImageAsset extends IPdfAssetBase {
    type: PdfAssetType.IMAGE;
    width: number;
    height: number;
    sourceKind?: PdfImageSourceKind;
    xObjectSubtype?: PdfXObjectSubtype.IMAGE;
    rawStreamAssetId?: PdfAssetId;
    decodedAssetId?: PdfAssetId;
    previewAssetId?: PdfAssetId;
    objectRef?: PdfObjectRef;
    resourceName?: string;
    colorSpace?: string;
    decode?: number[];
    decodeParms?: PdfJsonValue;
    filters?: string[];
    bitsPerComponent?: number;
    interpolate?: boolean;
    maskKind?: PdfImageMaskKind;
    /**
     * `/Mask` color-key ranges for image XObjects.
     *
     * PDF stores these as `[min max ...]`, one pair per color component. Keeping
     * the raw ranges lets local/backend decoders pre-compose transparent pixels
     * without re-reading the source object dictionary.
     */
    colorKeyMask?: number[];
    maskAssetId?: PdfAssetId;
    softMaskAssetId?: PdfAssetId;
    /**
     * `/Matte` color used by a soft-mask image when the source colors were
     * preblended before masking. Decoders can unblend this matte before writing
     * browser-ready RGBA pixels.
     */
    matte?: number[];
    sMaskInData?: number;
}
/**
 * Form XObject metadata.
 *
 * A Form XObject is a reusable PDF mini content stream with its own resources,
 * BBox, and optional Matrix. Parsed display lists can be attached later while
 * preserving the original stream for native copy-through export.
 */
export interface IPdfFormXObjectAsset extends IPdfAssetBase {
    type: PdfAssetType.FORM_XOBJECT;
    objectRef: PdfObjectRef;
    rawStreamAssetId?: PdfAssetId;
    displayListId?: PdfDisplayListId;
    bbox: PdfRectPt;
    matrix?: PdfMatrix;
    resources?: IPdfPdfResourceDictionary;
    group?: Record<string, PdfJsonValue>;
    xObjectSubtype?: PdfXObjectSubtype.FORM;
}
/**
 * Color profile asset metadata.
 *
 * Keep profiles as assets so future color-managed export can reference source
 * profiles without expanding every paint object.
 */
export interface IPdfColorProfileAsset extends IPdfAssetBase {
    type: PdfAssetType.COLOR_PROFILE;
    colorSpace: string;
}
/**
 * PDF or model pattern asset metadata.
 *
 * Complex pattern definitions can remain native or external until semantic
 * pattern editing is supported.
 */
export interface IPdfPatternAsset extends IPdfAssetBase {
    type: PdfAssetType.PATTERN;
    patternType?: string;
    rawStreamAssetId?: PdfAssetId;
    objectRef?: PdfObjectRef;
    displayListId?: PdfDisplayListId;
    paintType?: number;
    tilingType?: number;
    bbox?: PdfRectPt;
    matrix?: PdfMatrix;
    xStep?: number;
    yStep?: number;
    shadingAssetId?: PdfAssetId;
    fallbackPaint?: IPdfPaint;
}
/**
 * PDF shading asset metadata.
 *
 * Shadings are preserved as assets because many PDF shadings are lower-level
 * than current editor gradient controls.
 */
export interface IPdfShadingAsset extends IPdfAssetBase {
    type: PdfAssetType.SHADING;
    shadingType?: string;
    objectRef?: PdfObjectRef;
    colorSpace?: string;
    bbox?: PdfRectPt;
    decode?: number[];
    /**
     * Renderer-friendly representation for axial and radial shadings.
     *
     * Complex mesh shadings should continue to use fallbackMesh. This field is
     * intentionally optional so importers can preserve original shading metadata
     * even when a specific function or color space is not decoded yet.
     */
    gradient?: IPdfGradient;
    fallbackPaint?: IPdfPaint;
    /**
     * Lightweight decoded mesh summary for PDF mesh shadings.
     *
     * This is not a full tessellation. It gives renderers and diagnostics enough
     * geometry/color information to choose better fallbacks, tile cache bounds,
     * and future backend handoff without storing every patch in the main model.
     */
    fallbackMesh?: IPdfShadingFallbackMesh;
}
export interface IPdfShadingFallbackMesh {
    shadingType?: string;
    bitsPerFlag?: number;
    bitsPerCoordinate?: number;
    bitsPerComponent?: number;
    verticesPerRow?: number;
    vertexCount: number;
    bbox?: PdfRectPt;
    averageColor?: PdfColor;
    degenerate?: boolean;
    /**
     * Bounded decoded mesh vertices in PDF user-space coordinates.
     *
     * Importers should omit this when a mesh is too large for the front-end JSON
     * budget. Renderers can still use bbox and averageColor as a cheap fallback.
     */
    vertices?: IPdfShadingMeshVertex[];
    /**
     * Bounded triangle index list referencing vertices.
     *
     * Type 4 shadings derive triangles from edge flags. Type 5 shadings derive
     * them from `/VerticesPerRow`. Patch meshes can later add parallel typed
     * patch payloads without changing this simple triangle path.
     */
    triangles?: IPdfShadingMeshTriangle[];
}
/**
 * Decoded vertex for a Gouraud mesh shading.
 *
 * Coordinates are preserved in decoded PDF user units, not EMUs or CSS pixels,
 * so renderers can apply the active CTM and page transform consistently.
 */
export interface IPdfShadingMeshVertex {
    x: number;
    y: number;
    color: PdfColor;
    flag?: number;
}
/**
 * Triangle topology for a decoded shading mesh.
 *
 * Indices reference `IPdfShadingFallbackMesh.vertices`. Keeping topology
 * separate from vertex data avoids duplicating colors and positions.
 */
export interface IPdfShadingMeshTriangle {
    vertices: [number, number, number];
}
/**
 * Embedded or linked attachment asset metadata.
 *
 * This supports PDF file attachments now and leaves room for future Office
 * package parts or external document references.
 */
export interface IPdfAttachmentAsset extends IPdfAssetBase {
    type: PdfAssetType.ATTACHMENT;
    description?: string;
}
/**
 * Raw stream asset metadata.
 *
 * Streams may be external files, inline base64, or native PDF references. This
 * keeps large source artifacts out of normal object payloads.
 */
export interface IPdfStreamAsset extends IPdfAssetBase {
    type: PdfAssetType.STREAM;
    storage: 'inline-base64' | 'external-file' | 'native-ref';
    value?: string;
    uri?: string;
    objectRef?: PdfObjectRef;
    filters?: string[];
}
/**
 * Reusable style dictionaries.
 *
 * Styles are optional deduplication helpers. Objects may still carry inline
 * styling when importers or early features do not need style sharing.
 */
export interface IPdfStyleStore {
    fills: Record<PdfStyleId, IPdfPaint>;
    strokes: Record<PdfStyleId, IPdfStroke>;
    text: Record<PdfStyleId, Partial<IPdfTextRun>>;
}
/**
 * Native PDF package index.
 *
 * This preserves qpdf/PDF-native structures needed for debugging, copy-through
 * export, and incremental patching without exposing them as editable objects.
 */
export interface IPdfNativePackage {
    producer?: string;
    qpdfJsonUri?: string;
    qdfUri?: string;
    objectTable?: Record<PdfObjectRef, IPdfNativeObjectRecord>;
    streams?: Record<PdfObjectRef, IPdfNativeStreamRecord>;
    trailer?: PdfJsonValue;
    catalogRef?: PdfObjectRef;
    pagesTreeRef?: PdfObjectRef;
}
/**
 * Index entry for one native PDF object.
 *
 * Keep stable hashes and JSON pointers here so future diffing, caching, and
 * patching can identify native objects across import/export cycles.
 */
export interface IPdfNativeObjectRecord {
    objectRef: PdfObjectRef;
    generation?: number;
    type?: string;
    jsonPointer?: string;
    sourceUri?: string;
    stableHash?: string;
}
/**
 * Storage record for one native PDF stream.
 *
 * Decoded stream metadata is separated from assets so tooling can inspect or
 * externalize streams without loading every byte into the main document JSON.
 */
export interface IPdfNativeStreamRecord {
    objectRef: PdfObjectRef;
    storage: 'external-file' | 'inline-base64' | 'omitted';
    uri?: string;
    decoded: boolean;
    filters?: string[];
    length?: number;
}
/**
 * Compact snapshot of native content represented by a model object.
 *
 * Use this on raw groups or preserved objects to keep enough native context for
 * copy-through export and visual debugging.
 */
export interface IPdfNativeSnapshot {
    objectRefs?: PdfObjectRef[];
    displayListId?: PdfId;
    qpdfJsonPointer?: string;
    streamUris?: string[];
}
/**
 * Bookmark/outline entry.
 *
 * The tree shape mirrors PDF outlines while staying simple enough to map to
 * Office navigation or future document outline panels.
 */
export type PdfOutlineDestinationFit = 'XYZ' | 'Fit' | 'FitH' | 'FitV' | 'FitR' | 'FitB' | 'FitBH' | 'FitBV';
/** PDF-native destination preserved for bookmark navigation and export. */
export interface IPdfOutlineDestination {
    pageId?: PdfPageId;
    fit?: PdfOutlineDestinationFit;
    left?: PdfPt;
    top?: PdfPt;
    right?: PdfPt;
    bottom?: PdfPt;
    zoom?: number;
}
/** Optional visual treatment stored by PDF outline dictionaries. */
export interface IPdfOutlineStyle {
    color?: PdfColor;
    bold?: boolean;
    italic?: boolean;
}
export interface IPdfOutlineItem {
    id: PdfId;
    title: string;
    /** Legacy resolved-page shortcut retained for existing consumers. */
    pageId?: PdfPageId;
    destination?: IPdfOutlineDestination;
    open?: boolean;
    style?: IPdfOutlineStyle;
    children?: IPdfOutlineItem[];
    source?: IPdfSourceMapping;
}
/**
 * Logical structure tree for accessibility and reading order.
 *
 * Keep this separate from the visual object graph because tagged PDF structure
 * can group or reference content differently from page rendering order.
 */
export interface IPdfLogicalStructure {
    rootId: PdfId;
    nodes: Record<PdfId, IPdfStructNode>;
}
/**
 * Node in the logical structure tree.
 *
 * Roles may use known semantic roles or source-specific strings so importers
 * can preserve unknown tagged PDF roles without data loss.
 */
export interface IPdfStructNode {
    id: PdfId;
    role: PdfSemanticRole | string;
    title?: string;
    parentId?: PdfId;
    childIds?: PdfId[];
    objectIds?: PdfObjectId[];
    mcids?: number[];
    source?: IPdfSourceMapping;
}
/**
 * Collaboration/history operation envelope.
 *
 * Payloads stay JSON so operation versions can evolve. New operation kinds
 * should keep enough inverse data for undo or conflict resolution where needed.
 */
export interface IPdfOperationEnvelope {
    id: PdfOperationId;
    type: PdfOperationType;
    timestamp?: number;
    baseRevision?: number;
    targetId?: PdfId;
    payload: PdfJsonValue;
    inversePayload?: PdfJsonValue;
}
/**
 * Minimal collaboration clocks and revisions for the document.
 *
 * This is intentionally small; richer CRDT or OT metadata can be added
 * additively when the collaboration engine is chosen.
 */
export interface IPdfCollaborationState {
    documentRevision: number;
    siteId?: string;
    clock?: Record<string, number>;
    objectRevisions?: Record<PdfObjectId, number>;
}
/**
 * Import/export diagnostics stored with the document.
 *
 * Use summaries for quick UI status and page reports/warnings for actionable
 * diagnostics. Future pipelines can append reports without rewriting content.
 */
export interface IPdfConversionState {
    import?: IPdfImportSummary;
    importReports?: IPdfImportReport[];
    export?: IPdfExportSummary;
    warnings?: IPdfConversionWarning[];
}
/**
 * Document-level import summary.
 *
 * This gives a fast overview of the source kind, tools, and feature coverage;
 * per-page details belong in IPdfImportReport.
 */
export interface IPdfImportSummary {
    sourceKind: PdfOfficeSourceKind;
    toolchain: string[];
    nativeObjectCount?: number;
    displayOperationCount?: number;
    semanticObjectCount?: number;
    unsupportedFeatures?: string[];
}
/**
 * Detailed import report for one source document.
 *
 * Reports are source-scoped so multi-source documents can track partial import,
 * rasterized pages, or unsupported features independently.
 */
export interface IPdfImportReport {
    sourceId?: PdfSourceId;
    pages: IPdfImportPageReport[];
}
/**
 * Page-level import diagnostics.
 *
 * This is the right place for confidence, fallback, and unsupported-feature
 * counters because PDF import quality often varies page by page.
 */
export interface IPdfImportPageReport {
    pageIndex: number;
    pageId?: PdfPageId;
    status: 'imported' | 'partial' | 'rasterized' | 'failed';
    warnings?: IPdfConversionWarning[];
    stats?: {
        nativeObjectCount?: number;
        displayOperationCount?: number;
        semanticObjectCount?: number;
        candidateObjectCount?: number;
        contentOperatorCount?: number;
        unsupportedOperatorCount?: number;
        contentOperatorCounts?: Record<string, number>;
        unsupportedOperatorCounts?: Record<string, number>;
        unsupportedFeatureCounts?: Record<string, number>;
    };
}
/**
 * Document-level export summary.
 *
 * Keep this as an audit/status record after export; the intended strategy before
 * export belongs in IPdfExportPlan.
 */
export interface IPdfExportSummary {
    targetKind: PdfOfficeSourceKind;
    toolchain: string[];
    policyCounts?: Partial<Record<PdfExportDisposition, number>>;
    visualDiffRequired?: boolean;
}
/**
 * Structured warning emitted by import or export pipelines.
 *
 * Warnings can point to pages, objects, or source spans so UI can surface them
 * without parsing free-form messages.
 */
export interface IPdfConversionWarning {
    code: string;
    message: string;
    pageId?: PdfPageId;
    objectId?: PdfObjectId;
    source?: IPdfSourceMapping;
}
/**
 * Context passed into an importer implementation.
 *
 * TNative lets each parser use its own input representation while returning the
 * shared IPdfDocument contract.
 */
export interface IPdfImportContext<TNative = unknown> {
    source: IPdfDocumentSource;
    native: TNative;
    assets?: Partial<IPdfAssetStore>;
}
/**
 * Context passed into an exporter implementation.
 *
 * TTarget keeps exporters flexible: a PDF writer can return bytes or a path,
 * while an Office exporter can return an in-memory package.
 */
export interface IPdfExportContext<TTarget = unknown> {
    document: IPdfDocument;
    target?: TTarget;
    policy?: Partial<Record<PdfObjectType, PdfExportDisposition>>;
}
/**
 * Importer plugin contract.
 *
 * Implementations can run in the browser, a worker, CLI batch job, or backend as
 * long as they produce the same IPdfDocument shape.
 */
export interface IPdfImporter<TNative = unknown> {
    readonly id: string;
    import(context: IPdfImportContext<TNative>): Promise<IPdfDocument> | IPdfDocument;
}
/**
 * Exporter plugin contract.
 *
 * Exporters should honor source mappings, edits, and export plans when present,
 * while still accepting a policy override for simple workflows.
 */
export interface IPdfExporter<TTarget = unknown> {
    readonly id: string;
    export(context: IPdfExportContext<TTarget>): Promise<TTarget> | TTarget;
}
/**
 * Parameters for creating a page with builder helpers.
 *
 * The builder accepts EMU page size and can derive default PDF boxes, so callers
 * do not need to duplicate unit conversion logic.
 */
export interface ICreatePdfPageParams {
    id: PdfPageId;
    index: number;
    size: IPdfSize;
    label?: string;
    rotation?: 0 | 90 | 180 | 270;
    pdfBoxes?: Partial<IPdfPageBoxes>;
    objectIds?: PdfObjectId[];
    layers?: IPdfLayer[];
    source?: IPdfPageSourceMapping;
}
/**
 * Parameters for creating a document with builder helpers.
 *
 * All stores are optional so importers can build the model incrementally. The
 * builder fills stable empty maps for extensible root collections.
 */
export interface ICreatePdfDocumentParams {
    id: PdfDocumentId;
    title?: string;
    source?: IPdfDocumentSource;
    sources?: Record<PdfSourceId, IPdfDocumentSource>;
    pages?: IPdfPage[];
    objects?: Record<PdfObjectId, PdfObject>;
    displayLists?: Record<PdfDisplayListId, IPdfDisplayList>;
    textStories?: Record<PdfTextStoryId, IPdfTextStory>;
    edits?: IPdfEditState;
    exportPlan?: IPdfExportPlan;
    assets?: Partial<IPdfAssetStore>;
    styles?: Partial<IPdfStyleStore>;
    native?: IPdfNativePackage;
    logicalStructure?: IPdfLogicalStructure;
    outlines?: IPdfOutlineItem[];
    operations?: IPdfOperationEnvelope[];
    conversion?: IPdfConversionState;
    collaboration?: IPdfCollaborationState;
    metadata?: Record<string, PdfJsonValue>;
}
