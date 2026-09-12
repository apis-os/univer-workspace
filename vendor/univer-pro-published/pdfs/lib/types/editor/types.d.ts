import type { ImageSourceType } from '@univerjs/core';
import type { PdfFormFieldType, PdfSemanticRole, PdfTableCellVerticalAlign, PdfTextAnchor } from '../enums';
import type { IPdfDisplayList, IPdfExportPolicy, IPdfImageAsset, IPdfImageObject, IPdfLinkAnnotationAction, IPdfPage, IPdfPaint, IPdfReplacementLink, IPdfSize, IPdfSourceMapping, IPdfSourceSuppression, IPdfStroke, IPdfTableCell, IPdfTableColumn, IPdfTableRow, IPdfTableStyleOptions, IPdfTextBlock, IPdfTextListDefinition, IPdfTextListItem, IPdfTextRun, IPdfTextStory, IPdfTextStoryRun, PdfAssetId, PdfDisplayListId, PdfDisplayOperationId, PdfDocumentId, PdfEditId, PdfId, PdfJsonValue, PdfLayerId, PdfMatrix, PdfObject, PdfObjectId, PdfPageId, PdfRect, PdfRectPt, PdfSourceId, PdfStyleId, PdfTextListId, PdfTextRunId, PdfTextStoryId } from '../types';
import type { PdfEditorDraftKind, PdfEditorExportPatchKind, PdfEditorMutationKind, PdfEditorMutationReason, PdfEditorMutationSource, PdfEditorSelectionKind, PdfEditorSessionStatus, PdfEditorToolMode } from './enums';
/**
 * Stable id for one PDF editor session.
 *
 * A session is not the document itself. It tracks local edit overlays,
 * selection, history, drafts, and collaboration delivery state.
 */
export type PdfEditorSessionId = string;
/**
 * Stable id for a single committed editor mutation.
 *
 * Mutation ids must be unique across clients so collaboration can de-duplicate
 * retries and remote echoes without comparing payloads.
 */
export type PdfEditorMutationId = string;
/**
 * Stable id for an atomic batch of mutations.
 *
 * Batches are the unit of undo/redo and usually represent one user gesture,
 * such as typing a word, finishing a drag, or replacing an image.
 */
export type PdfEditorMutationBatchId = string;
/**
 * Stable id for a running editor client.
 *
 * Client ids are useful for optimistic local changes and reconnect behavior.
 */
export type PdfEditorClientId = string;
/**
 * Stable id for an in-progress local draft.
 *
 * Draft ids should never be exported as PDF content. A draft becomes durable
 * only when it produces a committed mutation batch.
 */
export type PdfEditorDraftId = string;
/**
 * Version identifier used by collaboration and export patch checkpoints.
 *
 * Implementations can encode this as a numeric revision, vector clock digest,
 * server cursor, or any other stable string.
 */
export type PdfEditorVersionId = string;
/**
 * Prefix requested when editor commands need to allocate stable ids.
 *
 * Command callers may provide their own ids for deterministic collaboration,
 * tests, or server-assigned mutations. When omitted, the command can ask the
 * context for ids with one of these prefixes.
 */
export type PdfEditorGeneratedIdPrefix = 'batch' | 'mutation' | 'object' | 'tableRow' | 'tableColumn' | 'tableCell' | 'story' | 'list' | 'block' | 'run' | 'selection' | 'asset' | 'draft';
/**
 * Target addressed by an editor mutation.
 *
 * Mutations should target stable ids, not array indexes, so concurrent edits
 * and page reordering do not invalidate pending operations.
 */
export type PdfEditorMutationTarget = IPdfEditorDocumentTarget | IPdfEditorPageTarget | IPdfEditorObjectTarget | IPdfEditorTextRunTarget | IPdfEditorSourceSpanTarget | IPdfEditorAssetTarget;
/**
 * Target for document-wide mutations.
 *
 * Use this for settings or native patches that are not scoped to one page.
 */
export interface IPdfEditorDocumentTarget {
    kind: 'document';
}
/**
 * Target for page-level mutations.
 *
 * Page ids remain stable even if page order changes. Put ordering changes in
 * the mutation payload rather than targeting a page index.
 */
export interface IPdfEditorPageTarget {
    kind: 'page';
    pageId: PdfPageId;
}
/**
 * Target for object-level mutations.
 *
 * The page id is optional because grouped, copied, or recently deleted objects
 * may be addressed before their final page placement is known.
 */
export interface IPdfEditorObjectTarget {
    kind: 'object';
    pageId?: PdfPageId;
    objectId: PdfObjectId;
}
/**
 * Target for text-run edits inside a text story or object.
 *
 * This keeps rich text editing more precise than replacing the whole text box
 * while still allowing simple text objects to omit story ids.
 */
export interface IPdfEditorTextRunTarget {
    kind: 'textRun';
    pageId?: PdfPageId;
    objectId?: PdfObjectId;
    storyId?: PdfTextStoryId;
    runId?: PdfTextRunId;
}
/**
 * Target for imported native PDF source spans.
 *
 * Source-span mutations usually create suppressions or replacement links rather
 * than editing display-list operators directly.
 */
export interface IPdfEditorSourceSpanTarget {
    kind: 'sourceSpan';
    pageId?: PdfPageId;
    sourceId?: PdfSourceId;
    objectId?: PdfObjectId;
    displayOperationIds?: PdfDisplayOperationId[];
    source?: IPdfSourceMapping;
}
/**
 * Target for asset-level edits such as image replacement.
 *
 * Asset mutations should be paired with object patches when a specific page
 * placement also changes.
 */
export interface IPdfEditorAssetTarget {
    kind: 'asset';
    assetId: PdfAssetId;
}
/**
 * Durable editor state layered on top of an imported PDF document.
 *
 * This state is the reducer output for committed mutations. It intentionally
 * excludes hover, viewport, and other purely local UI details.
 */
export interface IPdfDurableEditState {
    documentId: PdfDocumentId;
    /**
     * Monotonic local mutation sequence used while reducing this edit layer.
     *
     * This is not a Unit revision and must never be used as the authoritative
     * server clock. `IPdfUnitData.rev` owns that responsibility.
     */
    revision: number;
    /** Complete user-created text stories layered above the source document. */
    overlayTextStories: Record<PdfTextStoryId, IPdfTextStory>;
    /** Complete copied display lists layered above the immutable source document. */
    overlayDisplayLists: Record<PdfDisplayListId, IPdfDisplayList>;
    /** Sparse collaborative changes applied to imported text stories. */
    textStoryPatches: Record<PdfTextStoryId, IPdfEditorTextStoryPatch>;
    overlayObjects: Record<PdfObjectId, IPdfEditorOverlayObject>;
    objectPatches: Record<PdfObjectId, IPdfEditorObjectPatch>;
    pagePatches: Record<PdfPageId, IPdfEditorPagePatch>;
    sourceSuppressions: Record<PdfEditId, IPdfSourceSuppression>;
    replacementLinks: Record<PdfEditId, IPdfReplacementLink>;
    /**
     * Durable metadata for managed image resources referenced by editor edits.
     * This state never owns resource bytes or runtime image objects.
     */
    managedResources: Record<PdfAssetId, IPdfEditorManagedImageResource>;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * User-created or promoted object that is rendered above native PDF content.
 *
 * Overlay objects are the safest first export path: exporters can append them
 * without rewriting the original content stream.
 */
export interface IPdfEditorOverlayObject {
    object: PdfObject;
    pageId: PdfPageId;
    /** Whether this object is a direct page-layer member rather than a referenced dependency. */
    addToPageLayer?: boolean;
    layerId?: PdfLayerId;
    zIndex: number;
    createdAt?: number;
    revision?: number;
    sourceSuppressionId?: PdfEditId;
    metadata?: Record<string, PdfJsonValue>;
}
/** Self-contained PDF overlay snapshot kept by the session clipboard. */
export interface IPdfEditorClipboardPayload {
    sourceDocumentId: PdfDocumentId;
    overlayObjects: Record<PdfObjectId, IPdfEditorOverlayObject>;
    textStories: Record<PdfTextStoryId, IPdfTextStory>;
    managedResources: Record<PdfAssetId, IPdfEditorManagedImageResource>;
}
/**
 * Patch applied to an imported or overlay object.
 *
 * Keep patches sparse so reducers and collaboration can merge independent
 * changes, such as style and transform edits, without rewriting full objects.
 */
export interface IPdfEditorObjectPatch {
    objectId: PdfObjectId;
    pageId?: PdfPageId;
    bbox?: PdfRect;
    transform?: PdfMatrix;
    visible?: boolean;
    locked?: boolean;
    style?: IPdfEditorObjectStylePatch;
    text?: IPdfEditorTextPatch;
    image?: IPdfEditorImagePatch;
    formField?: IPdfEditorFormFieldPatch;
    annotation?: IPdfEditorAnnotationPatch;
    exportPolicy?: IPdfExportPolicy;
    source?: IPdfSourceMapping;
    updatedAt?: number;
    revision?: number;
    metadata?: Record<string, PdfJsonValue>;
}
/** Sparse editable fields for a Link annotation action. `null` clears a field. */
export interface IPdfEditorLinkAnnotationPatch {
    actionType?: IPdfLinkAnnotationAction['actionType'] | null;
    uri?: IPdfLinkAnnotationAction['uri'] | null;
    dest?: IPdfLinkAnnotationAction['dest'] | null;
    /** Resolved destination page, distinct from the annotation object's page. */
    pageId?: IPdfLinkAnnotationAction['pageId'] | null;
    border?: IPdfLinkAnnotationAction['border'] | null;
}
/** Sparse semantic fields for annotation-specific edits. */
export interface IPdfEditorAnnotationPatch {
    link?: IPdfEditorLinkAnnotationPatch;
}
/**
 * Style patch shared by text, paths, shapes, annotations, and form widgets.
 *
 * Values are optional so callers can update one visual property without
 * accidentally clearing other style information.
 */
export interface IPdfEditorObjectStylePatch {
    fill?: IPdfPaint | null;
    stroke?: IPdfStroke | null;
    /** Internal provenance: a non-null stroke after an explicit clear replaces the source stroke. */
    strokeReplace?: boolean;
    opacity?: number | null;
    textStyle?: Partial<IPdfTextRun>;
    textAnchor?: PdfTextAnchor | null;
    styleId?: PdfStyleId | null;
    tableStyleOptions?: IPdfTableStyleOptions | null;
}
/**
 * Text patch for simple text edits and rich text story updates.
 *
 * Simple editors can use plain text. Rich editors can target a story or run and
 * include replacement runs when style changes are part of the same operation.
 */
export interface IPdfEditorTextPatch {
    storyId?: PdfTextStoryId;
    blockId?: PdfId;
    runId?: PdfTextRunId;
    /** Story run ids atomically replaced by `runs`, used for rich range styling and undo. */
    replacedRunIds?: PdfTextRunId[];
    range?: IPdfEditorTextRange;
    text?: string;
    runs?: IPdfTextRun[];
}
/**
 * Sparse durable patch for a source text story.
 *
 * Insertions retain their requested position, while block/run/list records use
 * `null` as an explicit deletion marker that survives JSON serialization.
 */
export interface IPdfEditorTextStoryPatch {
    /** Source story receiving this patch. */
    storyId: PdfTextStoryId;
    /** Explicit removal of the entire source story. */
    removed?: boolean;
    /** Ordered block insertions generated by committed mutations. */
    insertedBlocks?: IPdfEditorTextStoryBlockInsertion[];
    /** Sparse block property changes or explicit block removals. */
    blockPatches?: Record<PdfId, IPdfEditorTextBlockPatch | null>;
    /** Sparse run replacements or explicit run removals. */
    runPatches?: Record<PdfTextRunId, Partial<IPdfTextStoryRun> | null>;
    /** Text edits replayed over source or patched runs in mutation order. */
    runTextEdits?: Record<PdfTextRunId, IPdfEditorTextStoryRunEdit[]>;
    /** Complete list definitions or explicit definition removals. */
    listPatches?: Record<PdfTextListId, IPdfTextListDefinition | null>;
}
/** One block insertion retained inside a sparse imported-story patch. */
export interface IPdfEditorTextStoryBlockInsertion {
    /** Requested position in the source story's block order. */
    index: number;
    /** Complete inserted block. */
    block: IPdfTextBlock;
    /** Complete runs introduced with the block. */
    runs: IPdfTextStoryRun[];
}
/**
 * Serializable block patch with explicit nullable clearing semantics.
 *
 * `null` clears an optional field; `undefined` leaves the source value intact.
 */
export interface IPdfEditorTextBlockPatch {
    runIds?: PdfTextRunId[];
    role?: PdfSemanticRole | null;
    listItem?: IPdfTextListItem | null;
    align?: IPdfTextBlock['align'] | null;
    lineHeight?: number | null;
    indent?: number | null;
    firstLineIndent?: IPdfTextBlock['firstLineIndent'] | null;
    rightIndent?: IPdfTextBlock['rightIndent'] | null;
    spacingBefore?: number | null;
    spacingAfter?: number | null;
}
/** Text edit retained for materialization of an imported story run. */
export interface IPdfEditorTextStoryRunEdit {
    range?: IPdfEditorTextRange;
    text?: string;
    runs?: IPdfTextRun[];
}
/**
 * Image-specific patch data.
 *
 * Replacement and crop are kept together because most image editing UIs expose
 * both operations, while exporters may handle them differently.
 */
export interface IPdfEditorImagePatch {
    assetId?: PdfAssetId;
    /**
     * Visible crop window in editor model coordinates.
     *
     * `undefined` means this patch does not touch crop. `null` means the edit
     * explicitly clears the crop and restores the object's uncropped image.
     */
    cropRect?: PdfRect | null;
    /**
     * Optional source-space crop for exporters that can preserve native image
     * coordinates. It follows the same undefined/null semantics as cropRect.
     */
    sourceRect?: PdfRectPt | null;
    intrinsic?: Pick<IPdfImageObject, 'assetId' | 'crop' | 'softMaskAssetId'>;
}
/**
 * Form-field semantic value patch.
 *
 * Widget annotations own placement and appearance, but field objects own the
 * durable value. This patch can be stored on both ids so UI and export code can
 * read the same change from their natural lookup path.
 */
export interface IPdfEditorFormFieldPatch {
    fieldObjectId?: PdfObjectId;
    widgetObjectId?: PdfObjectId;
    fieldName?: string;
    fieldType?: PdfFormFieldType;
    value?: PdfJsonValue;
    defaultValue?: PdfJsonValue;
    choices?: string[];
}
/**
 * Page-level patch for order, visibility, and geometry changes.
 *
 * This does not replace IPdfPage. It records the user's edits on top of the
 * imported page so export can preserve native page objects when possible.
 */
export interface IPdfEditorPagePatch {
    pageId: PdfPageId;
    /** Complete page record required to restore a user-inserted page from a Unit snapshot. */
    insertedPage?: IPdfPage;
    orderIndex?: number;
    deleted?: boolean;
    rotation?: 0 | 90 | 180 | 270;
    size?: IPdfSize;
    cropBox?: PdfRectPt;
    updatedAt?: number;
    revision?: number;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Text range in an editable story, run, or simple text object.
 *
 * Offsets use UTF-16 code units for compatibility with browser text editing.
 * A future text engine may add grapheme indexes without changing this field.
 */
export interface IPdfEditorTextRange {
    start: number;
    end: number;
}
/**
 * Generic editor mutation envelope.
 *
 * The reducer should treat this as immutable input. Inverse mutations can be
 * stored for fast undo, but implementations may also regenerate inverses from
 * history snapshots when that is safer.
 */
export interface IPdfEditorMutation<TKind extends PdfEditorMutationKind = PdfEditorMutationKind, TPayload = PdfEditorMutationPayload> {
    id: PdfEditorMutationId;
    documentId: PdfDocumentId;
    clientId?: PdfEditorClientId;
    sequence: number;
    timestamp: number;
    kind: TKind;
    source: PdfEditorMutationSource;
    target?: PdfEditorMutationTarget;
    payload: TPayload;
    baseRevision?: number;
    baseVersion?: PdfEditorVersionId;
    inverse?: IPdfEditorMutation;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Union of committed editor mutations.
 *
 * New feature-specific payloads should be added to this union when reducers,
 * exporters, or collaboration need stronger typing than generic JSON metadata.
 */
export type PdfEditorMutation = IPdfEditorMutation<PdfEditorMutationKind.ADD_OBJECT, IPdfEditorAddObjectPayload> | IPdfEditorMutation<PdfEditorMutationKind.REMOVE_OBJECT, IPdfEditorRemoveObjectPayload> | IPdfEditorMutation<PdfEditorMutationKind.ADD_TEXT_STORY, IPdfEditorAddTextStoryPayload> | IPdfEditorMutation<PdfEditorMutationKind.REMOVE_TEXT_STORY, IPdfEditorRemoveTextStoryPayload> | IPdfEditorMutation<PdfEditorMutationKind.ADD_DISPLAY_LIST, IPdfEditorAddDisplayListPayload> | IPdfEditorMutation<PdfEditorMutationKind.REMOVE_DISPLAY_LIST, IPdfEditorRemoveDisplayListPayload> | IPdfEditorMutation<PdfEditorMutationKind.INSERT_TEXT_BLOCK, IPdfEditorInsertTextBlockPayload> | IPdfEditorMutation<PdfEditorMutationKind.UPDATE_TEXT_BLOCK, IPdfEditorUpdateTextBlockPayload> | IPdfEditorMutation<PdfEditorMutationKind.REMOVE_TEXT_BLOCK, IPdfEditorRemoveTextBlockPayload> | IPdfEditorMutation<PdfEditorMutationKind.UPSERT_TEXT_LIST_DEFINITION, IPdfEditorUpsertTextListDefinitionPayload> | IPdfEditorMutation<PdfEditorMutationKind.REMOVE_TEXT_LIST_DEFINITION, IPdfEditorRemoveTextListDefinitionPayload> | IPdfEditorMutation<PdfEditorMutationKind.UPDATE_OBJECT_TRANSFORM, IPdfEditorObjectTransformPayload> | IPdfEditorMutation<PdfEditorMutationKind.UPDATE_OBJECT_STYLE, IPdfEditorObjectStylePayload> | IPdfEditorMutation<PdfEditorMutationKind.UPDATE_TABLE_GEOMETRY, IPdfEditorTableGeometryPayload> | IPdfEditorMutation<PdfEditorMutationKind.UPDATE_TABLE_CELL_STYLE, IPdfEditorTableCellStylePayload> | IPdfEditorMutation<PdfEditorMutationKind.UPDATE_TEXT_CONTENT, IPdfEditorTextContentPayload> | IPdfEditorMutation<PdfEditorMutationKind.REPLACE_IMAGE, IPdfEditorImageReplacementPayload> | IPdfEditorMutation<PdfEditorMutationKind.CROP_IMAGE, IPdfEditorImageCropPayload> | IPdfEditorMutation<PdfEditorMutationKind.REORDER_OBJECT, IPdfEditorObjectReorderPayload> | IPdfEditorMutation<PdfEditorMutationKind.ADD_ANNOTATION, IPdfEditorAddObjectPayload> | IPdfEditorMutation<PdfEditorMutationKind.UPDATE_ANNOTATION, IPdfEditorAnnotationPayload | IPdfEditorObjectStylePayload | IPdfEditorObjectTransformPayload> | IPdfEditorMutation<PdfEditorMutationKind.REMOVE_ANNOTATION, IPdfEditorRemoveObjectPayload> | IPdfEditorMutation<PdfEditorMutationKind.UPDATE_FORM_FIELD, IPdfEditorFormFieldValuePayload> | IPdfEditorMutation<PdfEditorMutationKind.INSERT_PAGE, IPdfEditorInsertPagePayload> | IPdfEditorMutation<PdfEditorMutationKind.REMOVE_PAGE, IPdfEditorRemovePagePayload> | IPdfEditorMutation<PdfEditorMutationKind.REORDER_PAGE, IPdfEditorReorderPagePayload> | IPdfEditorMutation<PdfEditorMutationKind.UPDATE_PAGE_GEOMETRY, IPdfEditorPageGeometryPayload> | IPdfEditorMutation<PdfEditorMutationKind.SET_SOURCE_SUPPRESSION, IPdfEditorSourceSuppressionPayload> | IPdfEditorMutation<PdfEditorMutationKind.SET_REPLACEMENT_LINK, IPdfEditorReplacementLinkPayload> | IPdfEditorMutation<PdfEditorMutationKind.COMMIT_NATIVE_PATCH, IPdfEditorNativePatchPayload> | IPdfEditorMutation<PdfEditorMutationKind.REGISTER_RESOURCE, IPdfEditorRegisterResourcePayload> | IPdfEditorMutation<PdfEditorMutationKind.UNREGISTER_RESOURCE, IPdfEditorUnregisterResourcePayload>;
/**
 * Payload for creating an editable overlay or promoted object.
 *
 * Use sourceSuppressionId when the new object replaces native PDF content.
 */
export interface IPdfEditorAddObjectPayload {
    object: PdfObject;
    pageId?: PdfPageId;
    /** Set false for referenced objects that must be stored but not appended to a page layer. */
    addToPageLayer?: boolean;
    layerId?: PdfLayerId;
    zIndex?: number;
    selectAfterApply?: boolean;
    sourceSuppressionId?: PdfEditId;
}
/**
 * Payload for removing an editable object.
 *
 * A tombstone can preserve enough prior state for undo or conflict resolution
 * without forcing the reducer to retain deleted objects in the live map.
 */
export interface IPdfEditorRemoveObjectPayload {
    objectId: PdfObjectId;
    pageId?: PdfPageId;
    tombstone?: PdfObject;
    reason?: 'delete' | 'replace' | 'redact' | 'hide';
}
/** Payload for adding a complete user-created text story. */
export interface IPdfEditorAddTextStoryPayload {
    /** Story added to the durable overlay layer. */
    story: IPdfTextStory;
}
/** Payload for removing a text story with enough state for inversion. */
export interface IPdfEditorRemoveTextStoryPayload {
    /** Story removed from the materialized document. */
    storyId: PdfTextStoryId;
    /** Complete previous story used by undo and conflict diagnostics. */
    previousStory: IPdfTextStory;
}
/** Payload for inserting one block and its runs into a text story. */
export interface IPdfEditorInsertTextBlockPayload {
    /** Story receiving the new block. */
    storyId: PdfTextStoryId;
    /** Requested zero-based insertion position. */
    index: number;
    /** Complete block inserted at `index`. */
    block: IPdfTextBlock;
    /** Complete runs referenced by the inserted block. */
    runs: IPdfTextStoryRun[];
}
/** Payload for changing semantic or layout properties of one block. */
export interface IPdfEditorUpdateTextBlockPayload {
    /** Story containing the target block. */
    storyId: PdfTextStoryId;
    /** Stable target block identity. */
    blockId: PdfId;
    /** Sparse serializable block changes. */
    patch: IPdfEditorTextBlockPatch;
    /** Complete previous block used by an inverse mutation. */
    previous: IPdfTextBlock;
}
/** Payload for removing one block and its owned runs. */
export interface IPdfEditorRemoveTextBlockPayload {
    /** Story containing the target block. */
    storyId: PdfTextStoryId;
    /** Stable target block identity. */
    blockId: PdfId;
    /** Previous zero-based position used by an inverse insertion. */
    index: number;
    /** Complete removed block. */
    previousBlock: IPdfTextBlock;
    /** Runs removed with the block when no other block owns them. */
    previousRuns: IPdfTextStoryRun[];
}
/** Payload for creating or replacing one list definition in a story. */
export interface IPdfEditorUpsertTextListDefinitionPayload {
    /** Story that owns the definition. */
    storyId: PdfTextStoryId;
    /** Complete next list definition. */
    definition: IPdfTextListDefinition;
    /** Previous definition when this mutation replaces one. */
    previous?: IPdfTextListDefinition;
}
/** Payload for removing one list definition with inverse data. */
export interface IPdfEditorRemoveTextListDefinitionPayload {
    /** Story that owns the definition. */
    storyId: PdfTextStoryId;
    /** Stable definition identity. */
    listId: PdfTextListId;
    /** Complete removed definition. */
    previous: IPdfTextListDefinition;
}
/**
 * Payload for changing object placement.
 *
 * Drag, resize, and rotate gestures should usually produce one committed
 * transform mutation at pointerup rather than one mutation per pointermove.
 */
export interface IPdfEditorObjectTransformPayload {
    objectId: PdfObjectId;
    pageId?: PdfPageId;
    bbox?: PdfRect;
    transform?: PdfMatrix;
    anchor?: string;
}
/**
 * Payload for visual style updates.
 *
 * This mirrors the externally editable IPdfEditorObjectStylePatch fields while
 * excluding reducer-owned provenance such as `strokeReplace`.
 */
export interface IPdfEditorObjectStylePayload extends Omit<IPdfEditorObjectStylePatch, 'strokeReplace'> {
    objectId: PdfObjectId;
    pageId?: PdfPageId;
    /** Cross-cutting object state updated through the same sparse patch boundary. */
    visible?: boolean;
    locked?: boolean;
}
/** Payload for adding one complete copied display list. */
export interface IPdfEditorAddDisplayListPayload {
    displayList: IPdfDisplayList;
}
/** Payload for removing a copied display list with an undo tombstone. */
export interface IPdfEditorRemoveDisplayListPayload {
    displayListId: PdfDisplayListId;
    previousDisplayList?: IPdfDisplayList;
}
/** Payload for applying a sparse semantic patch to an annotation object. */
export interface IPdfEditorAnnotationPayload {
    objectId: PdfObjectId;
    /** Page containing the annotation object, used for routing and export. */
    pageId?: PdfPageId;
    annotation: IPdfEditorAnnotationPatch;
}
/** Complete, atomic placement and grid sizing for one structured table. */
export interface IPdfEditorTableGeometryPayload {
    /** Structured overlay table receiving the geometry update. */
    tableId: PdfObjectId;
    /** Page containing the table, retained for collaboration and export routing. */
    pageId?: PdfPageId;
    /** Complete table bounds in page-local EMU coordinates. */
    bbox: PdfRect;
    /** Complete ordered row identities and heights. */
    rows: IPdfTableRow[];
    /** Complete ordered column identities and widths. */
    columns: IPdfTableColumn[];
    /** Complete row-major cell grid when a structural resize changes identities. */
    cells?: IPdfTableCell[];
}
/** Sparse editable style patch for one structured table cell. */
export interface IPdfEditorTableCellStylePatch {
    /** Cell fill; `null` removes a local fill and restores inherited fill. */
    fill?: IPdfPaint | null;
    /** Vertical placement of the cell text; `null` restores inherited placement. */
    verticalAlign?: PdfTableCellVerticalAlign | null;
}
/** Durable payload for changing the visual style of one table cell. */
export interface IPdfEditorTableCellStylePayload extends IPdfEditorTableCellStylePatch {
    /** Structured table overlay owning the target cell. */
    tableId: PdfObjectId;
    /** Stable id of the cell whose local style is updated. */
    cellId: PdfId;
    /** Page containing the table, retained for export planning. */
    pageId?: PdfPageId;
}
/**
 * Payload for editing text content.
 *
 * Text mutations should be semantic. Low-level glyph/source-code changes belong
 * in importer diagnostics or native patch payloads, not ordinary text editing.
 */
export interface IPdfEditorTextContentPayload extends IPdfEditorTextPatch {
    objectId?: PdfObjectId;
    pageId?: PdfPageId;
}
/**
 * Payload for replacing an image asset.
 *
 * The previous asset is optional but useful for undo and export diagnostics.
 */
export interface IPdfEditorImageReplacementPayload {
    objectId: PdfObjectId;
    pageId?: PdfPageId;
    assetId: PdfAssetId;
    previousAssetId?: PdfAssetId;
}
/**
 * Payload for cropping an image placement.
 *
 * cropRect uses model coordinates for the visible placement. sourceRect uses
 * native image/PDF coordinates when an exporter can preserve the crop natively.
 */
export interface IPdfEditorImageCropPayload {
    objectId: PdfObjectId;
    pageId?: PdfPageId;
    cropRect: PdfRect | null;
    sourceRect?: PdfRectPt | null;
}
/** Visible crop window for an inserted image in model coordinates. */
export type IPdfImageCrop = NonNullable<IPdfImageObject['crop']>;
/**
 * Durable descriptor for an image resource owned by the shared resource
 * service. It deliberately stores metadata only, never resource bytes or
 * browser runtime image values.
 */
export interface IPdfEditorManagedImageResource {
    asset: IPdfImageAsset;
    source: string;
    imageSourceType: ImageSourceType;
    mimeType?: string;
    fileName?: string;
    byteLength?: number;
}
/** Register durable metadata for a shared managed image resource. */
export interface IPdfEditorRegisterResourcePayload {
    resource: IPdfEditorManagedImageResource;
}
/** Remove durable metadata for a no-longer-managed image resource. */
export interface IPdfEditorUnregisterResourcePayload {
    assetId: PdfAssetId;
}
/**
 * Payload for editing an AcroForm field value.
 *
 * The field id is the semantic target. The widget id is optional because one
 * field can have multiple widgets, but it is important for selection and visual
 * preview on the page that initiated the edit.
 */
export interface IPdfEditorFormFieldValuePayload extends IPdfEditorFormFieldPatch {
    fieldObjectId: PdfObjectId;
    pageId?: PdfPageId;
    previousValue?: PdfJsonValue;
}
/**
 * Payload for changing object order within a page layer.
 *
 * Prefer before/after ids for collaboration. zIndex remains available for
 * imported or compacted states that already have numeric ordering.
 */
export interface IPdfEditorObjectReorderPayload {
    objectId: PdfObjectId;
    pageId: PdfPageId;
    layerId?: PdfLayerId;
    beforeObjectId?: PdfObjectId;
    afterObjectId?: PdfObjectId;
    zIndex?: number;
}
/**
 * Payload for inserting a page into the editor state.
 *
 * Pages can be user-created, imported from another PDF, or generated by Office
 * conversion; provenance should stay on the IPdfPage source fields.
 */
export interface IPdfEditorInsertPagePayload {
    page: IPdfPage;
    atIndex: number;
    orderedPageIds: PdfPageId[];
}
/**
 * Payload for removing a page.
 *
 * tombstone lets undo restore the page without querying the original document.
 */
export interface IPdfEditorRemovePagePayload {
    pageId: PdfPageId;
    tombstone?: IPdfPage;
    orderedPageIds: PdfPageId[];
}
/**
 * Payload for moving a page in the document order.
 *
 * Use page ids and indexes instead of relying on the page array position at the
 * time a remote mutation arrives.
 */
export interface IPdfEditorReorderPagePayload {
    pageId: PdfPageId;
    fromIndex?: number;
    toIndex: number;
    orderedPageIds: PdfPageId[];
}
/**
 * Payload for page rotation, size, or crop changes.
 *
 * Native page box changes can be exported as page dictionary updates later,
 * while early exporters may flatten or append transforms.
 */
export interface IPdfEditorPageGeometryPayload {
    pageId: PdfPageId;
    rotation?: 0 | 90 | 180 | 270;
    size?: IPdfSize;
    cropBox?: PdfRectPt;
}
/**
 * Payload for hiding or removing imported source spans during export.
 *
 * This is the durable bridge between a visual replacement and native PDF
 * content that should not appear twice in the exported file.
 */
export interface IPdfEditorSourceSuppressionPayload {
    suppression: IPdfSourceSuppression;
}
/**
 * Payload for linking replacement objects to suppressed source content.
 *
 * A link can represent one-to-one text replacement, many glyphs replaced by one
 * text box, or a full group replaced by multiple overlay objects.
 */
export interface IPdfEditorReplacementLinkPayload {
    link: IPdfReplacementLink;
}
/**
 * Payload for a deliberate native PDF patch.
 *
 * This is reserved for later writer work. Keeping it typed now prevents native
 * rewrites from being smuggled through generic object mutations.
 */
export interface IPdfEditorNativePatchPayload {
    patchId: string;
    description?: string;
    affectedPageIds?: PdfPageId[];
    affectedObjectIds?: PdfObjectId[];
    source?: IPdfSourceMapping;
    payload: PdfJsonValue;
}
/**
 * Page operation payload emitted inside an export patch entry.
 *
 * Exporters should read this as a semantic page operation log item. The
 * consolidated `pagePatch` describes the latest known editor page state, while
 * `mutationPayload` preserves the original command intent for native writers
 * that can translate insert, delete, reorder, rotate, resize, or crop directly.
 */
export interface IPdfEditorPageOperationExportPayload {
    mutationKind: PdfEditorMutationKind;
    mutationId: PdfEditorMutationId;
    batchId: PdfEditorMutationBatchId;
    batchReason: PdfEditorMutationReason;
    pageId: PdfPageId;
    mutationSource: PdfEditorMutationSource;
    sequence: number;
    timestamp: number;
    mutationPayload: PdfJsonValue;
    inversePayload?: PdfJsonValue;
    pagePatch?: IPdfEditorPagePatch;
}
/**
 * Semantic object patch payload emitted for backend PDF writers.
 *
 * The generic object patch remains available as a compatibility layer, while
 * these payloads give import/export services a narrower contract for common
 * native write-back paths such as text, images, and AcroForm values.
 */
export interface IPdfEditorSemanticObjectPatchExportPayload {
    objectId: PdfObjectId;
    pageId?: PdfPageId;
    patch: IPdfEditorObjectPatch;
    objectSnapshot?: PdfObject;
    sourceSuppressionId?: PdfEditId;
}
/**
 * Self-contained overlay payload consumed by backend PDF writers.
 *
 * A semantic text object carries its final story beside the placement so an
 * exchange service can export it without querying the Univer document store.
 */
export interface IPdfEditorOverlayObjectExportPayload {
    /** Overlay placement and page/layer ordering metadata. */
    overlay: IPdfEditorOverlayObject;
    /** Final materialized story referenced by a semantic text object. */
    textStory?: IPdfTextStory;
    /** Final cell stories referenced by a structured table object. */
    textStories?: Record<PdfTextStoryId, IPdfTextStory>;
}
/**
 * Payload union for all known editor mutations.
 *
 * Generic command code can use this type when it does not need to discriminate
 * on mutation kind.
 */
export type PdfEditorMutationPayload = IPdfEditorAddObjectPayload | IPdfEditorRemoveObjectPayload | IPdfEditorAddDisplayListPayload | IPdfEditorRemoveDisplayListPayload | IPdfEditorAddTextStoryPayload | IPdfEditorRemoveTextStoryPayload | IPdfEditorInsertTextBlockPayload | IPdfEditorUpdateTextBlockPayload | IPdfEditorRemoveTextBlockPayload | IPdfEditorUpsertTextListDefinitionPayload | IPdfEditorRemoveTextListDefinitionPayload | IPdfEditorObjectTransformPayload | IPdfEditorObjectStylePayload | IPdfEditorAnnotationPayload | IPdfEditorTableGeometryPayload | IPdfEditorTableCellStylePayload | IPdfEditorTextContentPayload | IPdfEditorImageReplacementPayload | IPdfEditorImageCropPayload | IPdfEditorRegisterResourcePayload | IPdfEditorUnregisterResourcePayload | IPdfEditorFormFieldValuePayload | IPdfEditorObjectReorderPayload | IPdfEditorInsertPagePayload | IPdfEditorRemovePagePayload | IPdfEditorReorderPagePayload | IPdfEditorPageGeometryPayload | IPdfEditorSourceSuppressionPayload | IPdfEditorReplacementLinkPayload | IPdfEditorNativePatchPayload;
/**
 * Atomic group of editor mutations.
 *
 * Reducers should either apply the whole batch or none of it when atomic is
 * true. Non-atomic batches are useful for replaying imported histories.
 */
export interface IPdfEditorMutationBatch {
    id: PdfEditorMutationBatchId;
    documentId: PdfDocumentId;
    reason: PdfEditorMutationReason;
    mutations: PdfEditorMutation[];
    createdAt: number;
    atomic?: boolean;
    baseRevision?: number;
    baseVersion?: PdfEditorVersionId;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Mutation delivery log for optimistic collaboration.
 *
 * Keep network delivery state outside IPdfDurableEditState so local retries and
 * server acknowledgements do not change the document revision by themselves.
 */
export interface IPdfEditorMutationLog {
    documentId: PdfDocumentId;
    batches: IPdfEditorMutationBatch[];
    pendingMutationIds: PdfEditorMutationId[];
    acknowledgedMutationIds: Record<PdfEditorMutationId, IPdfEditorMutationAck>;
    rejectedMutationIds: Record<PdfEditorMutationId, IPdfEditorMutationReject>;
}
/**
 * Acknowledgement metadata for a mutation accepted by collaboration.
 *
 * Server revisions are optional because local-only editor sessions can still
 * use the same mutation log shape.
 */
export interface IPdfEditorMutationAck {
    mutationId: PdfEditorMutationId;
    serverRevision?: number;
    serverVersion?: PdfEditorVersionId;
    acknowledgedAt: number;
}
/**
 * Rejection metadata for a mutation that collaboration could not accept.
 *
 * The reducer should not silently drop rejected local changes; callers can
 * decide whether to rollback, rebase, or surface conflict UI.
 */
export interface IPdfEditorMutationReject {
    mutationId: PdfEditorMutationId;
    code: string;
    message: string;
    rejectedAt: number;
}
/**
 * Undo/redo bookkeeping for editor mutation batches.
 *
 * History stores batch ids rather than payload copies so compaction and
 * collaboration can keep a single source of mutation truth.
 */
export interface IPdfEditorHistoryState {
    undoBatchIds: PdfEditorMutationBatchId[];
    redoBatchIds: PdfEditorMutationBatchId[];
    /** Local selection immediately before each recorded batch. */
    selectionBeforeByBatchId?: Record<PdfEditorMutationBatchId, IPdfEditorSelectionState>;
    /** Local selection produced after each recorded batch. */
    selectionAfterByBatchId?: Record<PdfEditorMutationBatchId, IPdfEditorSelectionState>;
    checkpointRevision?: number;
    currentGroupId?: string;
}
/**
 * Complete local selection state.
 *
 * Selection is intentionally separate from mutation history, so normal
 * selection changes do not dirty a PDF.
 */
export interface IPdfEditorSelectionState {
    activePageId?: PdfPageId;
    primaryAnchorId?: string;
    anchors: PdfEditorSelectionAnchor[];
    focus?: IPdfEditorTextFocus;
    updatedAt?: number;
}
/**
 * Selection anchor union.
 *
 * Hit testing should produce these anchors, and interaction controllers should
 * translate them into drafts or commands.
 */
export type PdfEditorSelectionAnchor = IPdfEditorPageSelectionAnchor | IPdfEditorObjectSelectionAnchor | IPdfEditorTableCellSelectionAnchor | IPdfEditorTextRangeSelectionAnchor | IPdfEditorSourceSpanSelectionAnchor | IPdfEditorFormFieldSelectionAnchor | IPdfEditorControlHandleSelectionAnchor;
/**
 * Selection anchor for whole-page operations.
 *
 * This is used by page thumbnails and page-level crop/rotate/delete tools.
 */
export interface IPdfEditorPageSelectionAnchor {
    id: string;
    kind: PdfEditorSelectionKind.PAGE;
    pageId: PdfPageId;
}
/**
 * Selection anchor for editable or imported objects.
 *
 * The object id should be stable across overlay patches, native replacement,
 * and collaboration updates.
 */
export interface IPdfEditorObjectSelectionAnchor {
    id: string;
    kind: PdfEditorSelectionKind.OBJECT;
    pageId?: PdfPageId;
    objectId: PdfObjectId;
}
/** Selection anchor for one stable cell inside a structured PDF table. */
export interface IPdfEditorTableCellSelectionAnchor {
    id: string;
    kind: PdfEditorSelectionKind.TABLE_CELL;
    pageId?: PdfPageId;
    objectId: PdfObjectId;
    cellId: PdfId;
    storyId: PdfTextStoryId;
}
/**
 * Selection anchor for editable text ranges.
 *
 * This supports text caret/selection without requiring the whole object to be
 * in transform-selection mode.
 */
export interface IPdfEditorTextRangeSelectionAnchor {
    id: string;
    kind: PdfEditorSelectionKind.TEXT_RANGE;
    pageId?: PdfPageId;
    objectId?: PdfObjectId;
    /** Owning table cell when the range belongs to a cell story. */
    cellId?: PdfId;
    storyId?: PdfTextStoryId;
    runId?: PdfTextRunId;
    range: IPdfEditorTextRange;
}
/**
 * Selection anchor for native source spans that are not editable objects yet.
 *
 * This is useful for debug mode, promotion flows, and source suppression tools.
 */
export interface IPdfEditorSourceSpanSelectionAnchor {
    id: string;
    kind: PdfEditorSelectionKind.SOURCE_SPAN;
    pageId?: PdfPageId;
    source?: IPdfSourceMapping;
    displayOperationIds?: PdfDisplayOperationId[];
}
/**
 * Selection anchor for AcroForm widgets and their semantic field value.
 *
 * The widget id identifies the page-visible control. The field id identifies
 * the durable value target for mutation/export.
 */
export interface IPdfEditorFormFieldSelectionAnchor {
    id: string;
    kind: PdfEditorSelectionKind.FORM_FIELD;
    pageId?: PdfPageId;
    widgetObjectId: PdfObjectId;
    fieldObjectId?: PdfObjectId;
    fieldName?: string;
    fieldType?: PdfFormFieldType;
}
/**
 * Selection anchor for resize, rotate, and crop handles.
 *
 * The handle id is UI-defined but stable during one interaction.
 */
export interface IPdfEditorControlHandleSelectionAnchor {
    id: string;
    kind: PdfEditorSelectionKind.CONTROL_HANDLE;
    pageId?: PdfPageId;
    objectId?: PdfObjectId;
    handleId: string;
}
/**
 * Focus information for text editing.
 *
 * This lets text tools keep caret state separate from document mutations until
 * text content is committed.
 */
export interface IPdfEditorTextFocus {
    objectId?: PdfObjectId;
    storyId?: PdfTextStoryId;
    runId?: PdfTextRunId;
    caretOffset: number;
}
/**
 * In-progress interaction preview.
 *
 * Draft state is local and short-lived. It can carry preview mutations so the
 * renderer can show the result without committing to collaboration history.
 */
export interface IPdfEditorDraftState {
    id: PdfEditorDraftId;
    kind: PdfEditorDraftKind;
    pageId?: PdfPageId;
    target?: PdfEditorMutationTarget;
    startedAt: number;
    updatedAt?: number;
    previewBatch?: IPdfEditorMutationBatch;
    initialSelection?: IPdfEditorSelectionState;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Viewport information for local UI and rendering.
 *
 * This is measured in CSS pixels and zoom because it is UI state, not document
 * geometry. Persisted PDF object coordinates remain in the PDF model units.
 */
export interface IPdfEditorPageNavigationState {
    requestId: number;
    pageId: PdfPageId;
    alignment: 'start' | 'end';
    scrollLeft?: number;
}
export interface IPdfEditorViewportState {
    activePageId?: PdfPageId;
    visiblePageIds?: PdfPageId[];
    pageNavigation?: IPdfEditorPageNavigationState;
    zoom: number;
    zoomPreview?: boolean;
    scrollX: number;
    scrollY: number;
}
/**
 * Root state for one PDF editor session.
 *
 * The imported PDF document is intentionally not embedded here. Consumers hold
 * the immutable document separately and render `document + editState`.
 */
export interface IPdfEditorSession {
    schema: 'univer-pdf-editor-session';
    schemaVersion: 1;
    id: PdfEditorSessionId;
    documentId: PdfDocumentId;
    status: PdfEditorSessionStatus;
    mode: PdfEditorToolMode;
    baseDocumentRevision: number;
    editState: IPdfDurableEditState;
    mutationLog: IPdfEditorMutationLog;
    selection: IPdfEditorSelectionState;
    history: IPdfEditorHistoryState;
    drafts: Record<PdfEditorDraftId, IPdfEditorDraftState>;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Context available to an editor action.
 *
 * Actions translate UI intent into mutation batches. They should not mutate
 * edit state directly; reducers own state transitions.
 */
export interface IPdfEditorActionContext {
    documentId: PdfDocumentId;
    clientId?: PdfEditorClientId;
    editState: IPdfDurableEditState;
    selection: IPdfEditorSelectionState;
    baseRevision: number;
    now: number;
    createId?: (prefix: PdfEditorGeneratedIdPrefix) => string;
}
/**
 * Pure action contract for editor intent planning.
 *
 * A command may be bound to a toolbar, shortcut, context menu, or API call as
 * long as it returns the same mutation result for the same input.
 */
export interface IPdfEditorAction<TInput = unknown> {
    id: string;
    description?: string;
    execute(context: IPdfEditorActionContext, input: TInput): IPdfEditorActionResult;
}
/**
 * Result produced by an editor action.
 *
 * Commands can return mutations, selection updates, drafts, and warnings
 * without directly touching renderer or collaboration services.
 */
export interface IPdfEditorActionResult {
    batch?: IPdfEditorMutationBatch;
    selection?: IPdfEditorSelectionState;
    draft?: IPdfEditorDraftState | null;
    warnings?: IPdfEditorWarning[];
}
/**
 * Structured warning emitted by editor commands or reducers.
 *
 * Warnings should be machine-readable so UI can decide whether to show a toast,
 * block export, or attach the issue to a specific object.
 */
export interface IPdfEditorWarning {
    code: string;
    message: string;
    pageId?: PdfPageId;
    objectId?: PdfObjectId;
    source?: IPdfSourceMapping;
}
/**
 * Export-oriented patch derived from editor state.
 *
 * This is a compact handoff object for PDF writers. It can be regenerated from
 * edit state and mutation history, so it should not replace either one.
 */
export interface IPdfEditorExportPatch {
    id: string;
    documentId: PdfDocumentId;
    revision: number;
    sourceDocumentRevision?: number;
    entries: IPdfEditorExportPatchEntry[];
    createdAt: number;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Single export patch entry.
 *
 * Entries describe what a writer should do, not how a specific PDF library
 * implements it. Native writer details belong in the payload metadata.
 */
export interface IPdfEditorExportPatchEntry {
    id: string;
    kind: PdfEditorExportPatchKind;
    pageId?: PdfPageId;
    objectIds?: PdfObjectId[];
    editIds?: PdfEditId[];
    source?: IPdfSourceMapping;
    payload: PdfJsonValue;
    requiresVisualDiff?: boolean;
}
