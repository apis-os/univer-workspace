import type { IPdfDurableEditState, IPdfEditorMutationBatch, IPdfEditorSession, PdfEditorMutation } from './types';
/**
 * Options for applying a committed mutation batch.
 *
 * Local user actions usually record log, pending ids, history, and clear redo.
 * Undo/redo replay uses the lower-level helpers to avoid duplicating history.
 */
export interface IPdfEditorApplyBatchOptions {
    /** Skip durable replay when the Unit model has already accepted this batch. */
    applyDurable?: boolean;
    recordLog?: boolean;
    recordPending?: boolean;
    recordHistory?: boolean;
    clearRedo?: boolean;
    /** Local selection produced by the command that created this batch. */
    selectionAfter?: IPdfEditorSession['selection'];
}
/**
 * Apply a single editor mutation to durable edit state.
 *
 * This is intentionally pure. Unsupported mutation kinds currently preserve
 * state and leave room for feature-specific reducers to be added incrementally.
 */
export declare function applyPdfEditorMutation(editState: IPdfDurableEditState, mutation: PdfEditorMutation): IPdfDurableEditState;
/**
 * Apply a user or remote mutation batch to a session.
 *
 * This updates edit state, mutation delivery log, and history together so the
 * rest of the editor can consume one coherent session snapshot.
 */
export declare function applyPdfEditorMutationBatch(session: IPdfEditorSession, batch: IPdfEditorMutationBatch, options?: IPdfEditorApplyBatchOptions): IPdfEditorSession;
/** Apply one authoritative batch directly to durable state with batch-scoped COW. */
export declare function applyPdfEditorMutationBatchToEditState(editState: IPdfDurableEditState, batch: IPdfEditorMutationBatch): IPdfDurableEditState;
/**
 * Undo the last history batch by applying its inverse mutations in reverse.
 *
 * Batches without complete inverse data are left untouched. Later command
 * layers can generate richer inverses for native patches and text ranges.
 */
export declare function undoPdfEditorSession(session: IPdfEditorSession): IPdfEditorSession;
/**
 * Redo the most recently undone batch.
 *
 * Redo replays the original batch mutations without duplicating the mutation
 * log, because the original committed batch is already the source of truth.
 */
export declare function redoPdfEditorSession(session: IPdfEditorSession): IPdfEditorSession;
