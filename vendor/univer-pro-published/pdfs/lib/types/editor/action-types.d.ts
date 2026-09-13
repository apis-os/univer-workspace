import type { PdfAnnotationType, PdfFormFieldType, PdfListKind, PdfTextAnchor } from '../enums';
import type { PdfListPresetId } from '../text/list-presets';
import type { IPdfDisplayList, IPdfInkAnnotationGeometry, IPdfLinkAnnotationAction, IPdfMarkupAnnotationGeometry, IPdfPage, IPdfPaint, IPdfSize, IPdfSourceMapping, IPdfStroke, IPdfTableCell, IPdfTableCellStyle, IPdfTableColumn, IPdfTableRow, IPdfTableStyleOptions, IPdfTextBlock, IPdfTextListDefinition, IPdfTextObject, IPdfTextRun, IPdfTextStory, IPdfTextStoryRun, PdfAssetId, PdfColor, PdfDisplayListId, PdfDisplayOperationId, PdfEditId, PdfEmu, PdfId, PdfJsonValue, PdfLayerId, PdfMatrix, PdfObject, PdfObjectId, PdfObjectRef, PdfPageId, PdfPoint, PdfRect, PdfRectPt, PdfStyleId, PdfTextListId, PdfTextRunId, PdfTextStoryId } from '../types';
import type { IPdfEditorFormFieldHitTarget, IPdfEditorLinkAnnotationHitTarget, IPdfEditorNativeFormXObjectHitTarget, IPdfEditorNativeImageHitTarget, IPdfEditorNativeTextHitTarget, PdfEditorHitTestMode } from './hit-test/types';
import type { IPdfEditorClipboardPayload, IPdfEditorLinkAnnotationPatch, IPdfEditorManagedImageResource, IPdfEditorSourceSpanTarget, IPdfEditorTableCellStylePatch, IPdfEditorTextRange, IPdfImageCrop, PdfEditorMutationBatchId, PdfEditorMutationId } from './types';
/**
 * Input for creating a simple editable text box overlay.
 *
 * Callers can provide ids for deterministic collaboration; otherwise the
 * action asks the context to allocate ids with stable prefixes.
 */
export interface IPdfEditorAddTextBoxActionInput {
    pageId: PdfPageId;
    text: string;
    bbox: PdfRect;
    transform?: PdfMatrix;
    objectId?: PdfObjectId;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
    layerId?: string;
    zIndex?: number;
    fontFamily?: string;
    fontSize?: number;
    fill?: PdfColor;
    fillOpacity?: number;
    bold?: boolean;
    italic?: boolean;
    autoFit?: IPdfTextObject['autoFit'];
    writingMode?: IPdfTextObject['writingMode'];
    textAnchor?: IPdfTextObject['textAnchor'];
}
/** Input for inserting an editable vector divider. */
export interface IPdfEditorAddDividerActionInput {
    /** Page receiving the divider overlay. */
    pageId: PdfPageId;
    /** Divider selection bounds in page EMU coordinates. */
    bbox: PdfRect;
    /** Optional initial affine transform. */
    transform?: PdfMatrix;
    /** Deterministic object id for collaboration or tests. */
    objectId?: PdfObjectId;
    /** Optional target layer; the editable page layer is used by default. */
    layerId?: PdfLayerId;
    /** Optional explicit overlay order. */
    zIndex?: number;
    /** Stroke color understood by the PDF paint model. */
    strokeColor?: PdfColor;
    /** Stroke width in EMU; defaults to one CSS pixel. */
    strokeWidth?: number;
    /** Stable batch id supplied by collaboration callers. */
    batchId?: PdfEditorMutationBatchId;
    /** Stable mutation id supplied by collaboration callers. */
    mutationId?: PdfEditorMutationId;
    /** Stable inverse mutation id supplied by collaboration callers. */
    inverseMutationId?: PdfEditorMutationId;
}
/** Input for creating a semantic paragraph story and its first text frame. */
export interface IPdfEditorAddParagraphActionInput {
    pageId: PdfPageId;
    bbox: PdfRect;
    transform?: PdfMatrix;
    text: string;
    objectId?: PdfObjectId;
    storyId?: PdfTextStoryId;
    blockId?: PdfId;
    runId?: PdfTextRunId;
    layerId?: PdfLayerId;
    zIndex?: number;
    fontFamily?: string;
    fontSize?: number;
    fill?: PdfColor;
    autoFit?: IPdfTextObject['autoFit'];
    autoFitMinHeight?: PdfEmu;
    batchId?: PdfEditorMutationBatchId;
    addStoryMutationId?: PdfEditorMutationId;
    addObjectMutationId?: PdfEditorMutationId;
}
/** Input for atomically creating a structured table and all cell stories. */
export interface IPdfEditorAddTableActionInput {
    pageId: PdfPageId;
    bbox: PdfRect;
    transform?: PdfMatrix;
    rowCount: number;
    columnCount: number;
    tableId?: PdfObjectId;
    rowIds?: PdfId[];
    columnIds?: PdfId[];
    cellIds?: PdfId[];
    storyIds?: PdfTextStoryId[];
    blockIds?: PdfId[];
    runIds?: PdfTextRunId[];
    cellTexts?: string[];
    defaultCellStyle?: IPdfTableCellStyle;
    styleId?: PdfStyleId;
    options?: IPdfTableStyleOptions;
    fontFamily?: string;
    fontSize?: number;
    fill?: PdfColor;
    layerId?: PdfLayerId;
    zIndex?: number;
    batchId?: PdfEditorMutationBatchId;
    addStoryMutationIds?: PdfEditorMutationId[];
    addObjectMutationId?: PdfEditorMutationId;
}
/** Input for changing the theme and conditional regions of one table. */
export interface IPdfEditorUpdateTableThemeActionInput {
    tableId: PdfObjectId;
    pageId?: PdfPageId;
    styleId?: PdfStyleId;
    options?: IPdfTableStyleOptions;
    currentStyleId?: PdfStyleId;
    currentOptions?: IPdfTableStyleOptions;
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
    inverseMutationId?: PdfEditorMutationId;
}
/** Input for atomically updating container and whole-cell text styles. */
export interface IPdfEditorUpdateTableCellStyleActionInput {
    tableId: PdfObjectId;
    cellId: PdfId;
    patch: IPdfEditorTableCellStylePatch;
    fontColor?: PdfColor;
    horizontalAlignment?: IPdfTextBlock['align'];
    pageId?: PdfPageId;
    currentStyle?: IPdfTableCellStyle;
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
    inverseMutationId?: PdfEditorMutationId;
}
/** Input for atomically resizing a table and its row/column grid. */
export interface IPdfEditorResizeTableActionInput {
    tableId: PdfObjectId;
    pageId?: PdfPageId;
    bbox: PdfRect;
    rows: IPdfTableRow[];
    columns: IPdfTableColumn[];
    cells?: IPdfTableCell[];
    addedStories?: IPdfTextStory[];
    removedStories?: IPdfTextStory[];
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
    inverseMutationId?: PdfEditorMutationId;
}
/** Persisted paragraph properties updated together on one story block. */
export type PdfEditorParagraphStylePatch = Partial<Pick<IPdfTextBlock, 'align' | 'lineHeight' | 'indent' | 'firstLineIndent' | 'rightIndent' | 'spacingBefore' | 'spacingAfter'>>;
/** Input for inserting a paragraph block and its initial run. */
export interface IPdfEditorInsertParagraphBlockActionInput {
    storyId: PdfTextStoryId;
    index: number;
    text: string;
    blockId?: PdfId;
    runId?: PdfTextRunId;
    blockStyle?: PdfEditorParagraphStylePatch;
    runStyle?: Partial<Omit<IPdfTextStoryRun, 'id' | 'text' | 'source'>>;
    /** Existing runs moved after the newly-created leading run. */
    followingRunIds?: PdfTextRunId[];
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
}
/** Input for removing one paragraph block with complete inverse data. */
export interface IPdfEditorRemoveParagraphBlockActionInput {
    storyId: PdfTextStoryId;
    blockId: PdfId;
    currentBlock?: IPdfTextBlock;
    currentRuns?: IPdfTextStoryRun[];
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
}
/** Input for updating paragraph layout properties on one story block. */
export interface IPdfEditorUpdateParagraphStyleActionInput {
    storyId: PdfTextStoryId;
    blockId: PdfId;
    patch: PdfEditorParagraphStylePatch;
    currentBlock?: IPdfTextBlock;
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
}
export interface IPdfEditorParagraphGeometryInput {
    pageId: PdfPageId;
    objectId: PdfObjectId;
    previousBbox: PdfRect;
    nextBbox: PdfRect;
    pageBottom: PdfEmu;
}
/** Input for atomically committing paragraph text and its auto-fit frame. */
export interface IPdfEditorEditParagraphActionInput extends IPdfEditorParagraphGeometryInput {
    storyId: PdfTextStoryId;
    runId: PdfTextRunId;
    range?: IPdfEditorTextRange;
    text: string;
    previousText: string;
    batchId?: PdfEditorMutationBatchId;
    textMutationId?: PdfEditorMutationId;
    textInverseMutationId?: PdfEditorMutationId;
    transformMutationId?: PdfEditorMutationId;
    transformInverseMutationId?: PdfEditorMutationId;
}
/** Input for splitting one paragraph at a text range. */
export interface IPdfEditorSplitParagraphActionInput extends IPdfEditorParagraphGeometryInput {
    storyId: PdfTextStoryId;
    blockId: PdfId;
    runId: PdfTextRunId;
    blockIdAfter?: PdfId;
    runIdAfter?: PdfTextRunId;
    text: string;
    previousText: string;
    range: IPdfEditorTextRange;
    batchId?: PdfEditorMutationBatchId;
    textMutationId?: PdfEditorMutationId;
    insertMutationId?: PdfEditorMutationId;
    blockMutationId?: PdfEditorMutationId;
    transformMutationId?: PdfEditorMutationId;
}
/** Input for merging one paragraph into its previous block. */
export interface IPdfEditorMergeParagraphActionInput extends IPdfEditorParagraphGeometryInput {
    storyId: PdfTextStoryId;
    blockId: PdfId;
    runId: PdfTextRunId;
    text: string;
    previousText: string;
    batchId?: PdfEditorMutationBatchId;
    textMutationId?: PdfEditorMutationId;
    removeMutationId?: PdfEditorMutationId;
    blockMutationId?: PdfEditorMutationId;
    transformMutationId?: PdfEditorMutationId;
}
/** Input for creating a semantic ordered or unordered list text box. */
export interface IPdfEditorAddListActionInput {
    pageId: PdfPageId;
    bbox: PdfRect;
    transform?: PdfMatrix;
    kind: PdfListKind;
    presetId: PdfListPresetId;
    text: string;
    objectId?: PdfObjectId;
    storyId?: PdfTextStoryId;
    listId?: PdfTextListId;
    blockId?: PdfId;
    runId?: PdfTextRunId;
    layerId?: PdfLayerId;
    zIndex?: number;
    fontFamily?: string;
    fontSize?: number;
    fill?: PdfColor;
    batchId?: PdfEditorMutationBatchId;
    addStoryMutationId?: PdfEditorMutationId;
    addObjectMutationId?: PdfEditorMutationId;
}
/** Input for replacing one list definition from a PDF-owned preset. */
export interface IPdfEditorChangeListStyleActionInput {
    storyId: PdfTextStoryId;
    listId: PdfTextListId;
    presetId: PdfListPresetId;
    currentDefinition?: IPdfTextListDefinition;
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
}
/** Input for converting one ordinary story paragraph into a semantic list item. */
export interface IPdfEditorConvertParagraphToListActionInput {
    storyId: PdfTextStoryId;
    blockId: PdfId;
    presetId: PdfListPresetId;
    currentBlock?: IPdfTextBlock;
    listId?: PdfTextListId;
    batchId?: PdfEditorMutationBatchId;
    definitionMutationId?: PdfEditorMutationId;
    blockMutationId?: PdfEditorMutationId;
}
/** Input for changing the default first ordinal on one ordered-list level. */
export interface IPdfEditorSetListStartNumberActionInput {
    storyId: PdfTextStoryId;
    listId: PdfTextListId;
    level: number;
    startAt: number;
    currentDefinition?: IPdfTextListDefinition;
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
}
/** Input for inserting one semantic list item, usually from Enter. */
export interface IPdfEditorInsertListItemActionInput {
    storyId: PdfTextStoryId;
    listId: PdfTextListId;
    index: number;
    text: string;
    level: number;
    blockId?: PdfId;
    runId?: PdfTextRunId;
    fontFamily?: string;
    fontSize?: number;
    fill?: PdfColor;
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
}
/** Input for removing one semantic list item with inverse data. */
export interface IPdfEditorRemoveListItemActionInput {
    storyId: PdfTextStoryId;
    blockId: PdfId;
    currentBlock?: IPdfTextBlock;
    currentRuns?: IPdfTextStoryRun[];
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
}
/** Input for turning one list item into an ordinary paragraph block. */
export interface IPdfEditorExitListActionInput {
    storyId: PdfTextStoryId;
    blockId: PdfId;
    currentBlock?: IPdfTextBlock;
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
}
/** Input for increasing or decreasing one list item's nesting level. */
export interface IPdfEditorChangeListLevelActionInput {
    storyId: PdfTextStoryId;
    blockId: PdfId;
    delta: number;
    currentBlock?: IPdfTextBlock;
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
}
/**
 * Input for inserting a user-managed image resource and its first placement.
 *
 * The resource is metadata owned by the shared resource service; browser
 * image objects, blobs, bytes, and URL payloads are deliberately absent.
 */
export interface IPdfEditorAddImageActionInput {
    pageId: PdfPageId;
    objectId?: PdfObjectId;
    assetId?: PdfAssetId;
    resource: IPdfEditorManagedImageResource;
    bbox: PdfRect;
    transform?: PdfMatrix;
    crop?: IPdfImageCrop;
    opacity?: number;
    layerId?: PdfLayerId;
    zIndex?: number;
    batchId?: PdfEditorMutationBatchId;
    registerMutationId?: PdfEditorMutationId;
    addObjectMutationId?: PdfEditorMutationId;
}
/** Input for atomically updating a managed image resource and placement. */
export interface IPdfEditorUpdateManagedImageActionInput {
    pageId: PdfPageId;
    objectId: PdfObjectId;
    resource: IPdfEditorManagedImageResource;
    bbox: PdfRect;
    transform?: PdfMatrix;
    cropRect: PdfRect | null;
    opacity?: number;
    batchId?: PdfEditorMutationBatchId;
}
/** Input for atomically removing one managed image placement and releasing its resource when unused. */
export interface IPdfEditorRemoveManagedImageActionInput {
    pageId: PdfPageId;
    objectId: PdfObjectId;
    batchId?: PdfEditorMutationBatchId;
}
/**
 * Input for inserting a page into the editable document order.
 *
 * The page is already normalized to the PDF model. This action records the
 * collaborative mutation and inverse; callers can decide how to materialize the
 * page into their document view.
 */
export interface IPdfEditorInsertPageActionInput {
    page: IPdfPage;
    atIndex: number;
    orderedPageIds: PdfPageId[];
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/**
 * Input for removing a page from document order.
 *
 * The tombstone keeps enough page data for undo and conflict resolution without
 * requiring reducers to query the source document.
 */
export interface IPdfEditorRemovePageActionInput {
    pageId: PdfPageId;
    atIndex: number;
    orderedPageIds: PdfPageId[];
    tombstone?: IPdfPage;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/**
 * Input for copying a page.
 *
 * Copying is represented as an INSERT_PAGE mutation with provenance metadata on
 * the inserted page, so collaboration and exporters can reuse the same page
 * insertion path.
 */
export interface IPdfEditorCopyPageActionInput extends IPdfEditorInsertPageActionInput {
    sourcePageId: PdfPageId;
    objects?: Record<PdfObjectId, PdfObject>;
    displayLists?: Record<PdfDisplayListId, IPdfDisplayList>;
    textStories?: Record<PdfTextStoryId, IPdfTextStory>;
}
/**
 * Input for moving a page to a new order position.
 */
export interface IPdfEditorReorderPageActionInput {
    pageId: PdfPageId;
    fromIndex: number;
    toIndex: number;
    orderedPageIds: PdfPageId[];
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/** Input for creating a durable visual PDF annotation. */
export interface IPdfEditorAddAnnotationActionInput {
    pageId: PdfPageId;
    annotationType: PdfAnnotationType;
    bbox: PdfRect;
    transform?: PdfMatrix;
    markup?: IPdfMarkupAnnotationGeometry;
    ink?: IPdfInkAnnotationGeometry;
    objectId?: PdfObjectId;
    layerId?: PdfLayerId;
    zIndex?: number;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/** Input for deleting selected pages as one undoable gesture. */
export interface IPdfEditorRemovePagesActionInput {
    pageCount: number;
    pages: Array<{
        page: IPdfPage;
        atIndex: number;
    }>;
    orderedPageIds: PdfPageId[];
    batchId?: string;
    mutationIds?: string[];
    inverseMutationIds?: string[];
}
/** Input for moving selected pages as one ordered, undoable gesture. */
export interface IPdfEditorReorderPagesActionInput {
    orderedPageIds: PdfPageId[];
    pageIds: PdfPageId[];
    /** Insertion index after the selected pages have been removed. */
    toIndex: number;
    batchId?: string;
    mutationIds?: string[];
    inverseMutationIds?: string[];
}
/**
 * Input for updating page geometry, such as rotation, size, or crop box.
 *
 * Previous values are explicit because source page data may live outside the
 * editor state in the host document model.
 */
export interface IPdfEditorUpdatePageGeometryActionInput {
    pageId: PdfPageId;
    rotation?: IPdfPage['rotation'];
    size?: IPdfSize;
    cropBox?: PdfRectPt;
    previousRotation?: IPdfPage['rotation'];
    previousSize?: IPdfSize;
    previousCropBox?: PdfRectPt;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/** Input for rotating selected pages as one undoable gesture. */
export interface IPdfEditorRotatePagesActionInput {
    pages: Array<{
        pageId: PdfPageId;
        previousRotation?: IPdfPage['rotation'];
    }>;
    direction?: 'clockwise' | 'counterclockwise';
    batchId?: string;
    mutationIds?: string[];
    inverseMutationIds?: string[];
}
/**
 * Input for committing an object move/resize/transform gesture.
 *
 * Previous placement can be supplied by callers, but the action will derive it
 * from edit state when the target is an overlay or already has a transform
 * patch.
 */
export interface IPdfEditorMoveObjectActionInput {
    pageId: PdfPageId;
    objectId: PdfObjectId;
    bbox: PdfRect;
    transform?: PdfMatrix;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
    previousBbox?: PdfRect;
    previousTransform?: PdfMatrix;
}
/**
 * One object placement inside a multi-object transform action.
 *
 * This lets selection controllers commit one atomic batch for a multi-select
 * move or resize while keeping each object's inverse placement explicit.
 */
export interface IPdfEditorMoveObjectsPlacementInput {
    pageId?: PdfPageId;
    objectId: PdfObjectId;
    bbox: PdfRect;
    transform?: PdfMatrix;
    previousBbox?: PdfRect;
    previousTransform?: PdfMatrix;
}
/**
 * Input for committing a multi-object placement change.
 *
 * Use this for marquee selections, grouped keyboard nudges, and future
 * collaboration replay where one gesture should undo as a single unit.
 */
export interface IPdfEditorMoveObjectsActionInput {
    pageId?: PdfPageId;
    placements: IPdfEditorMoveObjectsPlacementInput[];
    batchId?: string;
    mutationIds?: string[];
    inverseMutationIds?: string[];
}
export type PdfEditorFlipAxis = 'horizontal' | 'vertical';
export type PdfEditorRotateDirection = 'left' | 'right';
/**
 * Input for mirroring an editable object around its current bounding-box center.
 *
 * Flip is represented as an affine transform so bbox-based editing remains
 * stable and collaboration can replay the same deterministic placement patch.
 */
export interface IPdfEditorFlipObjectActionInput {
    pageId: PdfPageId;
    objectId: PdfObjectId;
    axis: PdfEditorFlipAxis;
    bbox?: PdfRect;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/** Input for rotating an editable object by one quarter turn around its bbox center. */
export interface IPdfEditorRotateObjectActionInput {
    pageId: PdfPageId;
    objectId: PdfObjectId;
    direction: PdfEditorRotateDirection;
    bbox?: PdfRect;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/**
 * Input for deleting one or more editable overlay objects.
 *
 * If objectIds is omitted, the action deletes selected overlay object anchors.
 * Native source spans should be promoted or suppressed through their own
 * actions before deletion.
 */
export interface IPdfEditorDeleteObjectsActionInput {
    objectIds?: PdfObjectId[];
    pageId?: PdfPageId;
    batchId?: string;
    mutationIds?: string[];
    inverseMutationIds?: string[];
}
export interface IPdfEditorDeleteSelectionActionInput {
    objectIds?: PdfObjectId[];
    sourceSpans?: IPdfEditorSourceSpanTarget[];
    pageId?: PdfPageId;
    batchId?: string;
    mutationIds?: string[];
    inverseMutationIds?: string[];
}
/**
 * Input for changing an overlay object's page-layer order.
 *
 * Callers can supply an absolute zIndex or a relative delta. Absolute zIndex is
 * preferred for collaboration because every client replays the same value.
 */
export interface IPdfEditorReorderObjectActionInput {
    objectId: PdfObjectId;
    pageId?: PdfPageId;
    zIndex?: number;
    delta?: number;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/**
 * Input for pasting overlay objects as new semantic objects.
 *
 * The action clones current overlay objects by default. Copied objects keep
 * assets and visual style but clear native source mapping so export treats them
 * as new user overlays rather than replacements for original PDF operators.
 */
export interface IPdfEditorPasteObjectsActionInput {
    pageId?: PdfPageId;
    objectIds?: PdfObjectId[];
    /** Self-contained snapshot used by cut/paste and cross-document paste. */
    clipboard?: IPdfEditorClipboardPayload;
    objectIdMap?: Partial<Record<PdfObjectId, PdfObjectId>>;
    offset?: PdfPoint;
    layerId?: PdfLayerId;
    zIndexStart?: number;
    batchId?: string;
    mutationIds?: string[];
    inverseMutationIds?: string[];
}
/**
 * Input for committing a text-content edit.
 *
 * This action targets semantic text content, not source PDF character codes.
 * Native rewrites can later be generated from the resulting mutation log.
 */
export interface IPdfEditorEditTextActionInput {
    pageId?: PdfPageId;
    objectId: PdfObjectId;
    /** Optional auto-fitted geometry committed atomically with fixed text content. */
    bbox?: PdfRect;
    /** Optional durable story target for rich text and semantic lists. */
    storyId?: PdfTextStoryId;
    /** Run receiving the edit when `storyId` is provided. */
    runId?: PdfTextRunId;
    /** Optional UTF-16 range inside the targeted run. */
    range?: IPdfEditorTextRange;
    text: string;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
    transformMutationId?: PdfEditorMutationId;
    transformInverseMutationId?: PdfEditorMutationId;
    previousText?: string;
}
/**
 * Input for committing text style changes on an editable text object.
 *
 * This styles the selected semantic text object as a whole. Range-level rich
 * text styling can reuse the same mutation shape later with story/run targets.
 */
export interface IPdfEditorUpdateTextStyleActionInput {
    pageId?: PdfPageId;
    objectId: PdfObjectId;
    /** Optional rich-text story target. When supplied, styling updates its listed runs or every referenced run. */
    storyId?: PdfTextStoryId;
    /** Optional subset of story runs. Omit it to style every run referenced by the story blocks. */
    runIds?: PdfTextRunId[];
    textStyle?: Partial<Omit<IPdfTextRun, 'text'>>;
    textAnchor?: PdfTextAnchor | null;
    previousTextStyle?: Partial<Omit<IPdfTextRun, 'text'>>;
    previousTextAnchor?: PdfTextAnchor | null;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/** Input for changing the stroke of an editable PDF object. */
export interface IPdfEditorUpdateObjectStrokeActionInput {
    pageId?: PdfPageId;
    objectId: PdfObjectId;
    stroke: IPdfStroke | null;
    previousStroke?: IPdfStroke | null;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/** Input for changing cross-cutting editable object state. */
export interface IPdfEditorUpdateObjectStateActionInput {
    objectId: PdfObjectId;
    pageId?: PdfPageId;
    visible?: boolean;
    locked?: boolean;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/** Input for changing model-supported fill, stroke, or opacity fields. */
export interface IPdfEditorUpdateObjectAppearanceActionInput {
    objectId: PdfObjectId;
    pageId?: PdfPageId;
    fill?: IPdfPaint | null;
    stroke?: IPdfStroke | null;
    opacity?: number | null;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/**
 * Input for applying rich-text style to a local text range.
 *
 * The action materializes a new run array so reducers, collaboration replay,
 * and exporters can treat the edit as a durable semantic text-content patch.
 */
export interface IPdfEditorUpdateTextRangeStyleActionInput {
    pageId?: PdfPageId;
    objectId: PdfObjectId;
    storyId?: PdfTextStoryId;
    blockId?: PdfId;
    runId?: PdfTextRunId;
    range: IPdfEditorTextRange;
    textStyle: Partial<Omit<IPdfTextRun, 'text'>>;
    previousRuns?: IPdfTextRun[];
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/** Input for styling the text represented by the current primary selection. */
export interface IPdfEditorUpdateSelectedTextStyleActionInput {
    textStyle: Partial<Omit<IPdfTextRun, 'text'>>;
    nativeTextTarget?: IPdfEditorNativeTextHitTarget;
}
/**
 * Input for selecting a semantic text range without mutating PDF content.
 *
 * Browser text controls and keyboard caret movement can use this action to
 * keep local selection shape consistent.
 */
export interface IPdfEditorSelectTextRangeActionInput {
    pageId?: PdfPageId;
    objectId: PdfObjectId;
    /** Optional story owning the selected range. */
    storyId?: PdfTextStoryId;
    /** Optional run whose local offsets are selected. Omit for a story-level range. */
    runId?: PdfTextRunId;
    range: IPdfEditorTextRange;
}
/**
 * Input for committing an AcroForm field value edit.
 *
 * The field id is the durable semantic target. The widget id keeps the edit
 * connected to the page-visible control selected by the user.
 */
export interface IPdfEditorEditFormFieldActionInput {
    pageId?: PdfPageId;
    fieldObjectId: PdfObjectId;
    widgetObjectId?: PdfObjectId;
    fieldName?: string;
    fieldType?: PdfFormFieldType;
    value?: PdfJsonValue;
    previousValue?: PdfJsonValue;
    choices?: string[];
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/** Input for applying an invertible sparse edit to a Link annotation action. */
export interface IPdfEditorUpdateLinkAnnotationActionInput {
    objectId: PdfObjectId;
    /** Page containing the annotation object. The destination page is `patch.pageId`. */
    pageId?: PdfPageId;
    patch: IPdfEditorLinkAnnotationPatch;
    /** Current source action used to construct an exact inverse for imported annotations. */
    previousLink?: IPdfLinkAnnotationAction;
    batchId?: PdfEditorMutationBatchId;
    mutationId?: PdfEditorMutationId;
    inverseMutationId?: PdfEditorMutationId;
}
/**
 * Input for selecting the editor target at a model-space point.
 *
 * Canvas or DOM code should convert pointer coordinates into EMU before
 * calling this action. The action itself remains renderer-independent.
 */
export interface IPdfEditorSelectAtPointActionInput {
    pageId: PdfPageId;
    point: PdfPoint;
    tolerance?: number;
    mode?: PdfEditorHitTestMode;
    includeLocked?: boolean;
    includeInvisible?: boolean;
    includeNative?: boolean;
    nativeImageTargets?: IPdfEditorNativeImageHitTarget[];
    nativeFormXObjectTargets?: IPdfEditorNativeFormXObjectHitTarget[];
    nativeTextTargets?: IPdfEditorNativeTextHitTarget[];
    formFieldTargets?: IPdfEditorFormFieldHitTarget[];
    linkAnnotationTargets?: IPdfEditorLinkAnnotationHitTarget[];
}
/**
 * Input for promoting imported native text into an editable overlay object.
 *
 * The original display operations are not mutated directly. Instead the action
 * records a source suppression plus replacement link so export can avoid
 * drawing the native and edited text twice.
 */
export interface IPdfEditorPromoteNativeTextActionInput {
    pageId: PdfPageId;
    text: string;
    bbox: PdfRect;
    transform?: PdfMatrix;
    displayOperationIds: PdfDisplayOperationId[];
    runs?: IPdfTextRun[];
    source?: IPdfSourceMapping;
    objectId?: PdfObjectId;
    batchId?: string;
    addObjectMutationId?: string;
    suppressionMutationId?: string;
    replacementLinkMutationId?: string;
    suppressionId?: PdfEditId;
    replacementLinkId?: PdfEditId;
    layerId?: string;
    zIndex?: number;
    fontFamily?: string;
    fontSize?: number;
    fill?: PdfColor;
    fillOpacity?: number;
    metadata?: Record<string, PdfJsonValue>;
}
/**
 * Input for promoting one native image display span into an editable image.
 *
 * The native image operator is suppressed for export while the new semantic
 * image object becomes the editable replacement on the page.
 */
export interface IPdfEditorPromoteNativeImageActionInput {
    pageId: PdfPageId;
    assetId: PdfAssetId;
    bbox: PdfRect;
    displayOperationIds: PdfDisplayOperationId[];
    source?: IPdfSourceMapping;
    objectId?: PdfObjectId;
    batchId?: string;
    addObjectMutationId?: string;
    suppressionMutationId?: string;
    replacementLinkMutationId?: string;
    suppressionId?: PdfEditId;
    replacementLinkId?: PdfEditId;
    layerId?: string;
    zIndex?: number;
    crop?: PdfRect;
    opacity?: number;
}
/**
 * Input for replacing the asset used by an editable image object.
 *
 * Replacement keeps placement, crop, transform, and source mapping intact. The
 * previous asset can be supplied by UI code for deterministic undo, or derived
 * from the current overlay/patch state.
 */
export interface IPdfEditorReplaceImageActionInput {
    pageId?: PdfPageId;
    objectId: PdfObjectId;
    assetId: PdfAssetId;
    previousAssetId?: PdfAssetId;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/**
 * Input for changing or clearing an editable image crop.
 *
 * cropRect is in editor model coordinates and can be null to explicitly clear
 * the crop. sourceRect is optional source-space metadata for native export.
 */
export interface IPdfEditorCropImageActionInput {
    pageId?: PdfPageId;
    objectId: PdfObjectId;
    cropRect: PdfRect | null;
    sourceRect?: PdfRectPt | null;
    previousCropRect?: PdfRect | null;
    previousSourceRect?: PdfRectPt | null;
    batchId?: string;
    mutationId?: string;
    inverseMutationId?: string;
}
/**
 * Input for promoting one native Form XObject paint instance.
 *
 * Form XObjects may contain arbitrary PDF drawing operators, so the first
 * editable representation is a visual-only raw PDF group. Semantic promotion of
 * its inner text/images can happen later through recursive source targets.
 */
export interface IPdfEditorPromoteNativeFormXObjectActionInput {
    pageId: PdfPageId;
    objectRef?: PdfObjectRef;
    assetId?: string;
    displayListId?: string;
    bbox: PdfRect;
    displayOperationIds: PdfDisplayOperationId[];
    source?: IPdfSourceMapping;
    objectId?: PdfObjectId;
    batchId?: string;
    addObjectMutationId?: string;
    suppressionMutationId?: string;
    replacementLinkMutationId?: string;
    suppressionId?: PdfEditId;
    replacementLinkId?: PdfEditId;
    layerId?: string;
    zIndex?: number;
}
