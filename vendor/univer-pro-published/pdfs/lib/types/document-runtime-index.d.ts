import type { IPdfDocument, IPdfPage, IPdfSourceSuppression, PdfAssetId, PdfDisplayListId, PdfObjectId, PdfPageId, PdfTextStoryId } from './types';
export interface IPdfDocumentRuntimeIndex {
    readonly documentIdentity: number;
    readonly pageById: ReadonlyMap<PdfPageId, IPdfPage>;
    readonly pageIndexById: ReadonlyMap<PdfPageId, number>;
    readonly pageObjectIds: ReadonlyMap<PdfPageId, readonly PdfObjectId[]>;
    readonly pageIdByObjectId: ReadonlyMap<PdfObjectId, PdfPageId>;
    readonly pageIdsByObjectId: ReadonlyMap<PdfObjectId, ReadonlySet<PdfPageId>>;
    readonly formFieldIdByWidgetObjectId: ReadonlyMap<PdfObjectId, PdfObjectId>;
    readonly pageIdsByTextStoryId: ReadonlyMap<PdfTextStoryId, ReadonlySet<PdfPageId>>;
    readonly textStoryIdsByPage: ReadonlyMap<PdfPageId, readonly PdfTextStoryId[]>;
    readonly displayListIdsByPage: ReadonlyMap<PdfPageId, readonly PdfDisplayListId[]>;
    readonly rootDisplayListIds: ReadonlyMap<PdfPageId, readonly PdfDisplayListId[]>;
    readonly childDisplayListIds: ReadonlyMap<PdfDisplayListId, readonly PdfDisplayListId[]>;
    readonly reachableDisplayListIdsByPage: ReadonlyMap<PdfPageId, readonly PdfDisplayListId[]>;
    readonly assetIdsByPage: ReadonlyMap<PdfPageId, ReadonlySet<PdfAssetId>>;
    readonly pageIdsByAssetId: ReadonlyMap<PdfAssetId, ReadonlySet<PdfPageId>>;
    readonly globalSourceSuppressions: readonly IPdfSourceSuppression[];
    readonly sourceSuppressionsByPage: ReadonlyMap<PdfPageId, readonly IPdfSourceSuppression[]>;
    getSourceSuppressionsForPage(pageId: PdfPageId): readonly IPdfSourceSuppression[];
}
/**
 * Returns the immutable derived indexes for one PDF document object.
 *
 * PDF document updates replace the root document object, so object identity is
 * also the lifetime of every derived index in this record.
 */
export declare function getPdfDocumentRuntimeIndex(document: IPdfDocument): IPdfDocumentRuntimeIndex;
