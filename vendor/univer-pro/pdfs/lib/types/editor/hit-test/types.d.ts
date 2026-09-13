import type { PdfFormFieldType } from '../../enums';
import type { IPdfAcroFormDefaultAppearance, IPdfAnnotationObject, IPdfSourceMapping, IPdfTextRun, PdfAssetId, PdfColor, PdfDisplayListId, PdfDisplayOperationId, PdfEmu, PdfId, PdfJsonValue, PdfMatrix, PdfObjectId, PdfPageId, PdfPoint, PdfRect, PdfTextRunId, PdfTextStoryId } from '../../types';
import type { IPdfDurableEditState, IPdfEditorTextRange } from '../types';
/**
 * Hit-test mode requested by the current editor tool.
 *
 * Modes influence priority and precision. For example, text mode prefers caret
 * hits inside text objects, while select mode prefers whole-object hits.
 */
export declare enum PdfEditorHitTestMode {
    SELECT = "select",
    TEXT = "text",
    IMAGE = "image",
    SHAPE = "shape",
    ANNOTATE = "annotate",
    FORM = "form",
    DEBUG = "debug"
}
/**
 * Kind of editor target found by hit testing.
 *
 * These map directly to selection anchors so UI can stay thin: it asks for a
 * hit, converts it to selection, then dispatches commands from that selection.
 */
export declare enum PdfEditorHitKind {
    PAGE = "page",
    OBJECT = "object",
    TABLE_CELL = "tableCell",
    TEXT_RANGE = "textRange",
    SOURCE_SPAN = "sourceSpan",
    FORM_FIELD = "formField",
    HANDLE = "handle"
}
/**
 * Hit-test adapter target for native PDF image display operations.
 *
 * The editor package intentionally does not calculate PDF operator geometry.
 * Render/UI layers, workers, or future render plans can convert image XObject
 * display ops into this bbox-shaped target and keep command/hit-test logic
 * independent from rendering internals.
 */
export interface IPdfEditorNativeImageHitTarget {
    id: PdfDisplayOperationId;
    pageId: PdfPageId;
    bbox: PdfRect;
    assetId?: PdfAssetId;
    resourceName?: string;
    source?: IPdfSourceMapping;
    zIndex?: number;
}
/**
 * Hit-test adapter target for native PDF Form XObject paint operations.
 *
 * A Form XObject is not just an image; it can contain paths, text, images,
 * transparency groups, and nested forms. The editor treats the painted instance
 * as a visual source span until it is promoted to a raw PDF group or decomposed
 * into more specific semantic targets.
 */
export interface IPdfEditorNativeFormXObjectHitTarget {
    id: PdfDisplayOperationId;
    pageId: PdfPageId;
    bbox: PdfRect;
    assetId?: PdfAssetId;
    objectRef?: string;
    resourceName?: string;
    displayListId?: PdfDisplayListId;
    source?: IPdfSourceMapping;
    zIndex?: number;
}
/**
 * Hit-test adapter target for native PDF text display operations.
 *
 * Text extraction and glyph geometry can improve independently in the render
 * pipeline. The editor only needs a model-space bbox, display operation id, and
 * editable Unicode/style snapshot to start a promotion flow.
 */
export interface IPdfEditorNativeTextHitTarget {
    id: PdfDisplayOperationId;
    pageId: PdfPageId;
    bbox: PdfRect;
    /** Untransformed text frame used when promoting rotated or scaled text. */
    promotionBbox?: PdfRect;
    /** Maps `promotionBbox` into the page while preserving native text orientation. */
    promotionTransform?: PdfMatrix;
    text: string;
    runs?: IPdfTextRun[];
    /**
     * Native operations represented by this target.
     *
     * For direct page text this is usually the same as `id`. For nested Form
     * XObject text, `id` can be an instance-stable synthetic target id while
     * this field keeps the actual inner display operation ids for source
     * suppression and export.
     */
    displayOperationIds?: PdfDisplayOperationId[];
    source?: IPdfSourceMapping;
    zIndex?: number;
}
/** Hit-test adapter target for an imported or materialized Link annotation. */
export interface IPdfEditorLinkAnnotationHitTarget {
    id: PdfObjectId;
    pageId: PdfPageId;
    /** Corner-coordinate hit rectangle in editor model space. */
    bbox: PdfRect;
    /** Optional imported source bbox before renderer/UI normalization. */
    sourceBbox?: PdfRect;
    annotation: IPdfAnnotationObject;
    source?: IPdfSourceMapping;
    zIndex?: number;
}
/**
 * Hit-test adapter target for AcroForm widget annotations.
 *
 * Widgets are page-visible annotation objects, while form fields hold semantic
 * value state. Keeping both ids lets selection/edit commands update field data
 * without losing the widget placement and native appearance identity.
 */
export interface IPdfEditorFormFieldHitTarget {
    id: PdfObjectId;
    pageId: PdfPageId;
    bbox: PdfRect;
    widgetObjectId: PdfObjectId;
    fieldObjectId?: PdfObjectId;
    fieldName?: string;
    fieldType?: PdfFormFieldType;
    value?: PdfJsonValue;
    choices?: string[];
    appearanceState?: string;
    onValue?: string;
    normalAppearanceDisplayListId?: PdfDisplayListId;
    normalAppearanceAssetId?: PdfAssetId;
    defaultAppearance?: IPdfAcroFormDefaultAppearance;
    needsAppearance?: boolean;
    quadding?: number;
    backgroundColor?: PdfColor;
    borderColor?: PdfColor;
    borderWidth?: PdfEmu;
    source?: IPdfSourceMapping;
    zIndex?: number;
    readOnly?: boolean;
    required?: boolean;
}
/**
 * Request passed into the PDF editor hit-test engine.
 *
 * Coordinates are in PDF model space: EMU, top-left origin. Canvas or DOM
 * layers should convert pointer positions before calling this API.
 */
export interface IPdfEditorHitTestRequest {
    pageId: PdfPageId;
    point: PdfPoint;
    tolerance?: PdfEmu;
    mode?: PdfEditorHitTestMode;
    includeNative?: boolean;
    includeLocked?: boolean;
    includeInvisible?: boolean;
    includePageFallback?: boolean;
    selectedObjectIds?: PdfObjectId[];
    nativeImageTargets?: IPdfEditorNativeImageHitTarget[];
    nativeFormXObjectTargets?: IPdfEditorNativeFormXObjectHitTarget[];
    nativeTextTargets?: IPdfEditorNativeTextHitTarget[];
    formFieldTargets?: IPdfEditorFormFieldHitTarget[];
    linkAnnotationTargets?: IPdfEditorLinkAnnotationHitTarget[];
}
/**
 * Text-specific hit payload.
 *
 * The first implementation estimates caret offsets from object bounds. Future
 * providers can replace this with glyph-level geometry without changing the
 * selection contract.
 */
export interface IPdfEditorTextHitPayload {
    range: IPdfEditorTextRange;
    caretOffset: number;
    text?: string;
    storyId?: PdfTextStoryId;
    runId?: PdfTextRunId;
}
/**
 * Handle-specific hit payload for resize, rotate, and crop controls.
 *
 * Handle geometry belongs in hit testing rather than commands so drag tools can
 * start from a precise target.
 */
export interface IPdfEditorHandleHitPayload {
    handleId: string;
    role?: 'move' | 'resize' | 'rotate' | 'crop' | 'textCaret';
}
/**
 * One hit-test result candidate.
 *
 * Results are sorted by priority, z-order, and distance. Consumers should use
 * `primary` for default selection but may inspect all hits for debug UI.
 */
export interface IPdfEditorHit {
    id: string;
    kind: PdfEditorHitKind;
    pageId: PdfPageId;
    objectId?: PdfObjectId;
    cellId?: PdfId;
    storyId?: PdfTextStoryId;
    bbox?: PdfRect;
    source?: IPdfSourceMapping;
    displayOperationIds?: PdfDisplayOperationId[];
    assetId?: PdfAssetId;
    objectRef?: string;
    displayListId?: PdfDisplayListId;
    resourceName?: string;
    fieldObjectId?: PdfObjectId;
    fieldName?: string;
    fieldType?: PdfFormFieldType;
    formValue?: PdfJsonValue;
    choices?: string[];
    readOnly?: boolean;
    required?: boolean;
    text?: IPdfEditorTextHitPayload;
    handle?: IPdfEditorHandleHitPayload;
    distance: number;
    zIndex: number;
    priority: number;
    confidence: number;
}
/**
 * Full hit-test response.
 *
 * Keeping the original request in the result makes debug panels and future
 * worker tracing easier without coupling them to UI event objects.
 */
export interface IPdfEditorHitTestResult {
    request: IPdfEditorHitTestRequest;
    hits: IPdfEditorHit[];
    primary?: IPdfEditorHit;
}
/**
 * Pluggable hit-test provider boundary.
 *
 * Providers can be added for overlay objects, native display ops, selection
 * handles, image alpha masks, or text glyph runs without changing callers.
 */
export interface IPdfEditorHitTestProvider {
    readonly id: string;
    hitTest(editState: IPdfDurableEditState, request: IPdfEditorHitTestRequest): IPdfEditorHit[];
}
