import type { IPdfAssetStore, IPdfDocument, IPdfPage, PdfAssetId, PdfDisplayListId, PdfDocumentId, PdfObjectId, PdfPageId, PdfTextStoryId } from './types';
import type { IPdfAppendInstancePlan } from './unit/pdf-append-plan';
type PdfImportAssetBucket = keyof IPdfAssetStore;
type PdfImportIdKind = 'page' | 'object' | 'displayList' | 'asset' | 'textStory';
export interface IPdfDocumentPageImportIdContext {
    targetDocument: IPdfDocument;
    sourceDocument: IPdfDocument;
    sourceId: string;
    index: number;
    bucket?: PdfImportAssetBucket;
}
export interface IPdfDocumentPageImportOptions {
    targetDocument: IPdfDocument;
    sourceDocument: IPdfDocument;
    atIndex: number;
    /** Reuse immutable assets already present in the target document. */
    reuseExistingAssets?: boolean;
    /** Reuse immutable display lists already present in the target document. */
    reuseExistingDisplayLists?: boolean;
    /** Complete deterministic graph-id plan created before a persisted append/copy mutation. */
    idPlan?: Pick<IPdfAppendInstancePlan, 'pageIdMap' | 'objectIdMap' | 'displayListIdMap' | 'textStoryIdMap'>;
    createId?: (kind: PdfImportIdKind, sourceId: string, context: IPdfDocumentPageImportIdContext) => string;
}
export interface IPdfDocumentPageImportResult {
    document: IPdfDocument;
    pages: IPdfPage[];
    pageIdMap: Record<PdfPageId, PdfPageId>;
    objectIdMap: Record<PdfObjectId, PdfObjectId>;
    displayListIdMap: Record<PdfDisplayListId, PdfDisplayListId>;
    assetIdMap: Record<PdfAssetId, PdfAssetId>;
    textStoryIdMap: Record<PdfTextStoryId, PdfTextStoryId>;
}
export interface IPdfDocumentPageExtractOptions {
    sourceDocument: IPdfDocument;
    pageIds: PdfPageId[];
    documentId?: string;
    title?: string;
}
export interface IPdfDocumentPageExtractResult {
    document: IPdfDocument;
    pages: IPdfPage[];
    pageIdMap: Record<PdfPageId, PdfPageId>;
    objectIdMap: Record<PdfObjectId, PdfObjectId>;
    displayListIdMap: Record<PdfDisplayListId, PdfDisplayListId>;
    assetIdMap: Record<PdfAssetId, PdfAssetId>;
    textStoryIdMap: Record<PdfTextStoryId, PdfTextStoryId>;
}
export interface IPdfDocumentPageSplitGroup {
    id?: string;
    pageIds: PdfPageId[];
    documentId?: PdfDocumentId;
    title?: string;
}
export interface IPdfDocumentPageSplitOptions {
    sourceDocument: IPdfDocument;
    groups: IPdfDocumentPageSplitGroup[];
    createDocumentId?: (group: IPdfDocumentPageSplitGroup, groupIndex: number, sourceDocument: IPdfDocument) => PdfDocumentId;
    createTitle?: (group: IPdfDocumentPageSplitGroup, groupIndex: number, sourceDocument: IPdfDocument) => string | undefined;
}
export interface IPdfDocumentPageSplitGroupResult extends IPdfDocumentPageExtractResult {
    groupId?: string;
    groupIndex: number;
    sourcePageIds: PdfPageId[];
}
export interface IPdfDocumentPageSplitResult {
    sourceDocumentId: PdfDocumentId;
    groups: IPdfDocumentPageSplitGroupResult[];
    documents: IPdfDocument[];
}
export declare function importPdfDocumentPages(options: IPdfDocumentPageImportOptions): IPdfDocumentPageImportResult;
export declare function extractPdfDocumentPages(options: IPdfDocumentPageExtractOptions): IPdfDocumentPageExtractResult;
export declare function splitPdfDocumentPages(options: IPdfDocumentPageSplitOptions): IPdfDocumentPageSplitResult;
export {};
