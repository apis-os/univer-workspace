import type { IPdfSourceSuppression, PdfDisplayListId, PdfDisplayOperationId, PdfObjectId, PdfPageId, PdfTextStoryId } from '../types';
import type { IPdfDurableEditState, IPdfEditorInsertPagePayload, IPdfEditorMutationBatch, IPdfEditorMutationLog, IPdfEditorOverlayObject } from './types';
export interface IPdfEditorEditStateRuntimeIndex {
    readonly overlaysByPage: ReadonlyMap<PdfPageId, readonly IPdfEditorOverlayObject[]>;
    readonly maxOverlayZIndexByPage: ReadonlyMap<PdfPageId, number>;
    readonly pageIdByOverlayObjectId: ReadonlyMap<PdfObjectId, PdfPageId>;
    readonly pageIdsByTextStoryId: ReadonlyMap<PdfTextStoryId, ReadonlySet<PdfPageId>>;
    readonly activeSourceSuppressions: readonly IPdfSourceSuppression[];
    getActiveSourceSuppressionsForPage(pageId: PdfPageId): readonly IPdfSourceSuppression[];
    isSourceOperationSuppressed(pageId: PdfPageId, displayListId: PdfDisplayListId, operatorId: PdfDisplayOperationId): boolean;
}
export interface IPdfEditorMutationLogRuntimeIndex {
    readonly batchById: ReadonlyMap<string, IPdfEditorMutationBatch>;
    readonly insertedPages: readonly IPdfEditorInsertPagePayload[];
}
export declare function getPdfEditorEditStateRuntimeIndex(editState: IPdfDurableEditState): IPdfEditorEditStateRuntimeIndex;
export declare function getPdfEditorMutationLogRuntimeIndex(mutationLog: IPdfEditorMutationLog): IPdfEditorMutationLogRuntimeIndex;
export declare function getNewPdfEditorMutationBatches(before: IPdfEditorMutationLog, after: IPdfEditorMutationLog): IPdfEditorMutationBatch[];
export declare function markPdfEditorMutationLogAppend(before: IPdfEditorMutationLog, after: IPdfEditorMutationLog): void;
