import type { IPdfDurableEditState, IPdfEditorMutationBatch } from './types';
/** Replay accepted mutation batches against a durable edit layer. */
export declare function replayPdfMutationBatches(initialState: IPdfDurableEditState, batches: readonly IPdfEditorMutationBatch[]): IPdfDurableEditState;
/** Create a stable diagnostic hash for replay convergence checks. */
export declare function hashPdfDurableEditState(state: IPdfDurableEditState): string;
