export declare const PDF_DOCUMENT_SCHEMA = "univer-pdf-document";
export declare const PDF_DOCUMENT_SCHEMA_VERSION = 1;
export declare const EMU_PER_INCH = 914400;
export declare const EMU_PER_PT = 12700;
export declare const CSS_PX_PER_INCH = 96;
export declare const EMU_PER_CSS_PX = 9525;
/**
 * Coordinate origin names used by both model geometry and PDF-native mappings.
 * Keep this enum small; add a value only when a new coordinate system is stored
 * in the JSON model, not for transient renderer transforms.
 */
export declare enum PdfCoordinateOrigin {
    TOP_LEFT = "top-left",
    BOTTOM_LEFT = "bottom-left"
}
/**
 * Stable unit used by editable document geometry. Additional units should be
 * added only when the model can round-trip them without precision loss.
 */
export declare enum PdfModelUnit {
    EMU = "emu"
}
/**
 * Unit used by imported/exported PDF-native data. This is intentionally
 * separate from model units so future importers can preserve source fidelity.
 */
export declare enum PdfNativeUnit {
    PDF_USER_SPACE = "pdf-user-space"
}
/**
 * Object kinds stored in the page object graph. Treat values as persisted JSON
 * protocol keys; extend by adding new values instead of changing existing ones.
 */
export declare enum PdfObjectType {
    RAW_PDF_GROUP = "rawPdfGroup",
    PDF_TEXT_CANDIDATE = "pdfTextCandidate",
    GROUP = "group",
    TEXT_BOX = "textBox",
    TEXT_RUN = "textRun",
    SHAPE = "shape",
    PATH = "path",
    IMAGE = "image",
    TABLE_CANDIDATE = "tableCandidate",
    TABLE = "table",
    CHART_CANDIDATE = "chartCandidate",
    CHART = "chart",
    FORMULA = "formula",
    ANNOTATION = "annotation",
    FORM_FIELD = "formField",
    REDACTION = "redaction",
    EMBEDDED_PAGE = "embeddedPage"
}
/**
 * Describes where an object came from. New origins should explain provenance,
 * not editability; editability belongs in PdfEditability.
 */
export declare enum PdfObjectOrigin {
    IMPORTED_NATIVE = "imported-native",
    INFERRED = "inferred",
    USER_CREATED = "user-created",
    OFFICE_IMPORTED = "office-imported"
}
/**
 * High-level editing contract for an object. Exporters and UI should use this
 * as a capability hint, while feature-specific permissions can be added later.
 */
export declare enum PdfEditability {
    RAW = "raw",
    VISUAL_ONLY = "visual-only",
    SEMANTIC = "semantic",
    NATIVE_PATCHABLE = "native-patchable"
}
/**
 * Horizontal anchoring for editable semantic text boxes.
 *
 * Values intentionally mirror common text layout anchors instead of PDF
 * operator details, so editor UI, collaboration payloads, and Office
 * conversion can share one stable model enum.
 */
export declare enum PdfTextAnchor {
    START = "start",
    MIDDLE = "middle",
    END = "end"
}
/**
 * Vertical placement of a text story inside a structured table cell.
 *
 * Horizontal alignment remains a paragraph property because different
 * paragraphs in the same cell can use different alignment values.
 */
export declare enum PdfTableCellVerticalAlign {
    TOP = "top",
    MIDDLE = "middle",
    BOTTOM = "bottom"
}
/**
 * Semantic family of a generated text-list marker.
 *
 * Values are persisted in PDF JSON. New list families must be introduced as
 * additive values so collaborative mutations can continue to replay old data.
 */
export declare enum PdfListKind {
    /** A list whose label is a glyph such as a disc, circle, or square. */
    UNORDERED = "unordered",
    /** A list whose label is derived from a deterministic ordinal. */
    ORDERED = "ordered"
}
/**
 * Marker semantics for one PDF text-list level.
 *
 * Ordered values align with Tagged PDF `ListNumbering` names where possible.
 * `DECIMAL_ZERO` and `CUSTOM` are additive editor extensions that exporters
 * can lower to visible label text while preserving list structure.
 */
export declare enum PdfListMarkerStyle {
    /** Suppress the visible label while retaining list-item semantics. */
    NONE = "none",
    /** A filled circular bullet. */
    DISC = "disc",
    /** A hollow circular bullet. */
    CIRCLE = "circle",
    /** A square bullet. */
    SQUARE = "square",
    /** A base-10 integer such as `1`. */
    DECIMAL = "decimal",
    /** A zero-padded base-10 integer such as `01`. */
    DECIMAL_ZERO = "decimalZero",
    /** A lowercase Roman numeral such as `iv`. */
    LOWER_ROMAN = "lowerRoman",
    /** An uppercase Roman numeral such as `IV`. */
    UPPER_ROMAN = "upperRoman",
    /** A lowercase alphabetic ordinal such as `a` or `aa`. */
    LOWER_ALPHA = "lowerAlpha",
    /** An uppercase alphabetic ordinal such as `A` or `AA`. */
    UPPER_ALPHA = "upperAlpha",
    /** A caller-provided glyph, format, or imported visible label. */
    CUSTOM = "custom"
}
/**
 * Horizontal alignment of a generated label inside its marker column.
 *
 * This controls layout only; it does not change list numbering semantics.
 */
export declare enum PdfListMarkerAlignment {
    /** Align the label to the logical start of its marker column. */
    START = "start",
    /** Center the label inside its marker column. */
    CENTER = "center",
    /** Align the label to the logical end nearest the list body. */
    END = "end"
}
/**
 * Export behavior for an object or source span. Additions should describe a
 * concrete writer strategy that can be implemented deterministically.
 */
export declare enum PdfExportDisposition {
    PRESERVE_NATIVE = "preserve-native",
    OVERLAY = "overlay",
    REWRITE_VECTOR = "rewrite-vector",
    FLATTEN_RASTER = "flatten-raster",
    REMOVE = "remove",
    REDACT = "redact"
}
/**
 * Reason a source span is hidden or removed during export. This keeps user
 * intent auditable and leaves space for future compliance or workflow reasons.
 */
export declare enum PdfSourceSuppressionReason {
    REPLACED_BY_SEMANTIC_OBJECT = "replaced-by-semantic-object",
    USER_DELETED = "user-deleted",
    REDACTED = "redacted",
    HIDDEN_FOR_EXPORT = "hidden-for-export"
}
/**
 * Page-level export strategy. Page strategies can combine many object policies,
 * so future values should stay coarse-grained and writer-oriented.
 */
export declare enum PdfExportPageStrategy {
    COPY_SOURCE_PAGE = "copy-source-page",
    COPY_AND_APPEND_OVERLAY = "copy-and-append-overlay",
    REWRITE_CONTENT_STREAM = "rewrite-content-stream",
    REBUILD_VECTOR_PAGE = "rebuild-vector-page",
    RASTERIZE_PAGE = "rasterize-page"
}
/**
 * Logical rendering/editing layer categories. Add new layer types when the UI or
 * exporter needs a distinct visibility/locking/export behavior.
 */
export declare enum PdfLayerType {
    NATIVE_PDF = "nativePdf",
    EDITABLE = "editable",
    ANNOTATION = "annotation",
    REDACTION = "redaction",
    GUIDE = "guide"
}
/**
 * Normalized display-list operation kinds. These should remain close to PDF
 * rendering semantics so importers can preserve unknown content faithfully.
 */
export declare enum PdfDisplayOpType {
    SAVE_STATE = "saveState",
    RESTORE_STATE = "restoreState",
    TRANSFORM = "transform",
    SET_GRAPHICS_STATE = "setGraphicsState",
    CLIP = "clip",
    PATH = "path",
    TEXT = "text",
    IMAGE = "image",
    SHADING = "shading",
    FORM_XOBJECT = "formXObject",
    MARKED_CONTENT_BEGIN = "markedContentBegin",
    MARKED_CONTENT_END = "markedContentEnd"
}
/**
 * PDF XObject subtypes defined by the source resource dictionary. Keep these
 * values close to PDF names while using model-friendly persisted keys.
 */
export declare enum PdfXObjectSubtype {
    IMAGE = "image",
    FORM = "form",
    POSTSCRIPT = "postScript",
    UNKNOWN = "unknown"
}
/**
 * Describes where an image asset's bytes came from before any decoder creates
 * front-end friendly derivatives.
 */
export declare enum PdfImageSourceKind {
    XOBJECT = "xObject",
    INLINE = "inline",
    GENERATED = "generated"
}
/**
 * PDF image mask families. Keep masks explicit so renderers and exporters can
 * choose between native preservation, decoded alpha, or raster fallback.
 */
export declare enum PdfImageMaskKind {
    NONE = "none",
    IMAGE_MASK = "imageMask",
    COLOR_KEY_MASK = "colorKeyMask",
    EXPLICIT_MASK = "explicitMask",
    SOFT_MASK = "softMask",
    SMASK_IN_DATA = "sMaskInData"
}
/**
 * Vector path command kinds used by shapes, clipping paths, and display lists.
 * Add commands only when they represent reusable model geometry.
 */
export declare enum PdfPathCommandType {
    MOVE_TO = "moveTo",
    LINE_TO = "lineTo",
    CUBIC_TO = "cubicTo",
    QUAD_TO = "quadTo",
    RECT = "rect",
    CLOSE = "close"
}
/**
 * Fill rules shared by PDF paths, SVG-like geometry, and canvas rendering.
 */
export declare enum PdfFillRule {
    NONZERO = "nonzero",
    EVENODD = "evenodd"
}
/**
 * Supported PDF annotation families. Keep annotation-specific payload fields in
 * interfaces so this enum can grow without forcing one giant union immediately.
 */
export declare enum PdfAnnotationType {
    TEXT = "text",
    POPUP = "popup",
    LINK = "link",
    FREE_TEXT = "freeText",
    LINE = "line",
    SQUARE = "square",
    CIRCLE = "circle",
    POLYGON = "polygon",
    POLYLINE = "polyline",
    HIGHLIGHT = "highlight",
    UNDERLINE = "underline",
    STRIKEOUT = "strikeout",
    SQUIGGLY = "squiggly",
    STAMP = "stamp",
    INK = "ink",
    FILE_ATTACHMENT = "fileAttachment",
    WIDGET = "widget"
}
/**
 * Form field control families. Future widget-specific behavior should extend
 * field metadata instead of overloading these broad control types.
 */
export declare enum PdfFormFieldType {
    TEXT = "text",
    BUTTON = "button",
    CHECKBOX = "checkbox",
    RADIO = "radio",
    CHOICE = "choice",
    SIGNATURE = "signature"
}
/**
 * Asset buckets stored beside the object model. New asset kinds should map to
 * durable binary/resource concepts, not temporary cache entries.
 */
export declare enum PdfAssetType {
    FONT = "font",
    IMAGE = "image",
    FORM_XOBJECT = "formXObject",
    COLOR_PROFILE = "colorProfile",
    PATTERN = "pattern",
    SHADING = "shading",
    ATTACHMENT = "attachment",
    STREAM = "stream"
}
/**
 * Source/target document families for import and export. Add values for stable
 * interchange formats that can own provenance and conversion reports.
 */
export declare enum PdfOfficeSourceKind {
    PDF = "pdf",
    PPTX = "pptx",
    DOCX = "docx",
    XLSX = "xlsx",
    UDOC = "udoc"
}
/**
 * Semantic roles used for accessibility, reading order, and Office conversion.
 * Values should stay format-neutral so they can map to tagged PDF and Office.
 */
export declare enum PdfSemanticRole {
    ARTIFACT = "artifact",
    PARAGRAPH = "paragraph",
    HEADING = "heading",
    LIST = "list",
    LIST_ITEM = "listItem",
    LIST_LABEL = "listLabel",
    LIST_BODY = "listBody",
    TABLE = "table",
    TABLE_ROW = "tableRow",
    TABLE_HEADER_CELL = "tableHeaderCell",
    TABLE_DATA_CELL = "tableDataCell",
    FIGURE = "figure",
    FORMULA = "formula",
    CHART = "chart",
    SHAPE = "shape",
    FOOTNOTE = "footnote",
    HEADER = "header",
    FOOTER = "footer"
}
/**
 * Collaborative operation categories. Keep payload details outside the enum so
 * future operation versions can evolve without renaming operation kinds.
 */
export declare enum PdfOperationType {
    INSERT_OBJECT = "insertObject",
    UPDATE_OBJECT = "updateObject",
    DELETE_OBJECT = "deleteObject",
    REORDER_OBJECT = "reorderObject",
    INSERT_PAGE = "insertPage",
    UPDATE_PAGE = "updatePage",
    DELETE_PAGE = "deletePage",
    UPDATE_ASSET = "updateAsset",
    SET_EXPORT_POLICY = "setExportPolicy"
}
