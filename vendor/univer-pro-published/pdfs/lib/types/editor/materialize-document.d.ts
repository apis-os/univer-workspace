import type { IPdfDocument, IPdfPage, PdfDisplayListId, PdfDocumentId, PdfObjectId, PdfPageId } from '../types';
import type { IPdfEditorSession } from './types';
export interface IPdfEditorDocumentSnapshotOptions {
    document: IPdfDocument;
    session: IPdfEditorSession;
    id?: PdfDocumentId;
    title?: string;
    createdAt?: number;
}
export interface IPdfEditorPageProjectionOptions {
    document: IPdfDocument;
    session: IPdfEditorSession;
    pageId: PdfPageId;
    sourcePage?: IPdfPage;
    objectIds: readonly PdfObjectId[];
    displayListIds: readonly PdfDisplayListId[];
}
export interface IPdfEditorEditedDocumentJsonExportOptions extends IPdfEditorDocumentSnapshotOptions {
    sourceName?: string;
}
export interface IPdfEditorEditedDocumentJsonExport {
    filename: string;
    document: IPdfDocument;
}
export declare function createPdfEditorEditedDocumentJsonExport(options: IPdfEditorEditedDocumentJsonExportOptions): IPdfEditorEditedDocumentJsonExport;
export declare function materializePdfEditorDocumentSnapshot(options: IPdfEditorDocumentSnapshotOptions): IPdfDocument;
/** Materialize only page order and geometry for lightweight workbench navigation. */
export declare function materializePdfEditorPages(document: IPdfDocument, session: IPdfEditorSession): IPdfPage[];
/**
 * Build a render-only view of one edited page without cloning the full source
 * document. Stable stores stay shared; only page-local edited structures are
 * projected.
 */
export declare function materializePdfEditorPageProjection(options: IPdfEditorPageProjectionOptions): IPdfDocument | undefined;
