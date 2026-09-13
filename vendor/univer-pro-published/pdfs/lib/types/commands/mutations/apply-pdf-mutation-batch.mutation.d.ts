import type { IMutation } from '@univerjs/core';
import type { IPdfEditorMutationBatch } from '../../editor/types';
/** Parameters for applying one durable PDF mutation batch to a Unit. */
export interface IApplyPdfMutationBatchMutationParams {
    unitId: string;
    batch: IPdfEditorMutationBatch;
}
/** Formal Unit mutation replacing the former server-side editor session map. */
export declare const ApplyPdfMutationBatchMutation: IMutation<IApplyPdfMutationBatchMutationParams>;
