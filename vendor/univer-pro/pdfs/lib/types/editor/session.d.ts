import type { PdfDocumentId } from '../types';
import type { IPdfDurableEditState, IPdfEditorSession, PdfEditorSessionId } from './types';
import { PdfEditorSessionStatus, PdfEditorToolMode } from './enums';
/**
 * Parameters for creating a local PDF editor session.
 *
 * The source PDF document is intentionally passed by id only. Editor state is a
 * layer over an imported document, not a second copy of that document.
 */
export interface ICreatePdfEditorSessionParams {
    id: PdfEditorSessionId;
    documentId: PdfDocumentId;
    baseDocumentRevision?: number;
    now?: number;
    mode?: PdfEditorToolMode;
    status?: PdfEditorSessionStatus;
}
/**
 * Create an empty durable edit state for a PDF document.
 *
 * This is useful for tests, local-only editing, and future fragment-backed
 * sessions where the imported document may not be fully loaded yet.
 */
export declare function createPdfEditorEditState(documentId: PdfDocumentId, revision?: number): IPdfDurableEditState;
/**
 * Create a PDF editor session with empty history, selection, drafts, and log.
 *
 * Reducers update this session by returning a new object; callers should treat
 * the returned state as immutable.
 */
export declare function createPdfEditorSession(params: ICreatePdfEditorSessionParams): IPdfEditorSession;
