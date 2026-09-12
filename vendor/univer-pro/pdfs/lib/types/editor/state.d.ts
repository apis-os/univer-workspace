import type { PdfDocumentId, PdfJsonValue, PdfObjectId } from '../types';
import type { IPdfDurableEditState, IPdfEditorDraftState, IPdfEditorHistoryState, IPdfEditorMutationLog, IPdfEditorSelectionState, IPdfEditorSession, IPdfEditorViewportState, PdfEditorDraftId, PdfEditorSessionId } from './types';
import { PdfEditorSessionStatus, PdfEditorToolMode } from './enums';
export declare const PDF_EDITOR_LOCAL_STATE_SCHEMA = "univer-pdf-editor-local";
export declare const PDF_EDITOR_LOCAL_STATE_SCHEMA_VERSION = 1;
export declare const PDF_EDITOR_DEFAULT_INK_COLOR = "#2563eb";
/**
 * Client-owned editor state that can be rebuilt around a durable Unit.
 *
 * It may be cached locally, but it must not be serialized into `IPdfUnitData`.
 */
export interface IPdfLocalEditorState {
    schema: typeof PDF_EDITOR_LOCAL_STATE_SCHEMA;
    schemaVersion: typeof PDF_EDITOR_LOCAL_STATE_SCHEMA_VERSION;
    sessionId: PdfEditorSessionId;
    documentId: PdfDocumentId;
    status: PdfEditorSessionStatus;
    mode: PdfEditorToolMode;
    inkColor?: string;
    /** Unit revision observed when this local editor state was created. */
    baseUnitRevision: number;
    mutationLog: IPdfEditorMutationLog;
    selection: IPdfEditorSelectionState;
    history: IPdfEditorHistoryState;
    drafts: Record<PdfEditorDraftId, IPdfEditorDraftState>;
    metadata?: Record<string, PdfJsonValue>;
}
/** Disposable runtime state used by viewport/render integration. */
export interface IPdfEphemeralEditorState {
    activeTextObjectId?: PdfObjectId;
    viewport?: IPdfEditorViewportState;
    view?: {
        continuousScroll?: boolean;
        showAnnotations: boolean;
        showBounds: boolean;
        showOrganizer?: boolean;
        showRaw: boolean;
    };
}
/** Explicit three-way state split used by Unit, UI, and runtime layers. */
export interface IPdfEditorStateParts {
    durable: IPdfDurableEditState;
    local: IPdfLocalEditorState;
    ephemeral: IPdfEphemeralEditorState;
}
export interface ICreatePdfLocalEditorStateParams {
    sessionId: PdfEditorSessionId;
    documentId: PdfDocumentId;
    baseUnitRevision?: number;
    status?: PdfEditorSessionStatus;
    mode?: PdfEditorToolMode;
    inkColor?: string;
    now?: number;
    metadata?: Record<string, PdfJsonValue>;
}
/** Create the durable edit layer persisted by a PDF Unit. */
export declare function createPdfDurableEditState(documentId: PdfDocumentId, revision?: number): IPdfDurableEditState;
/** Create local interaction/history state without render data. */
export declare function createPdfLocalEditorState(params: ICreatePdfLocalEditorStateParams): IPdfLocalEditorState;
/** Create disposable viewport state for one editor runtime. */
export declare function createPdfEphemeralEditorState(params?: Partial<IPdfEphemeralEditorState>): IPdfEphemeralEditorState;
/** Split the legacy aggregate session at the durable serialization boundary. */
export declare function splitPdfEditorSessionState(session: IPdfEditorSession): IPdfEditorStateParts;
/** Recompose the legacy session view for compatibility-only consumers. */
export declare function composePdfEditorSessionState(parts: IPdfEditorStateParts): IPdfEditorSession;
