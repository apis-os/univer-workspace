import type { ICommand } from '@univerjs/core';
import type { PdfEditorMutationSource } from '../../editor/enums';
import type { IPdfEditorMutationBatch, PdfEditorMutation } from '../../editor/types';
export interface IPdfApplyHistoryCommandParams {
    unitId: string;
    clientId?: string;
    source: PdfEditorMutationSource.UNDO | PdfEditorMutationSource.REDO;
    mutations: PdfEditorMutation[];
    atomic?: boolean;
}
/** Apply history templates as a fresh batch against the current PDF revision. */
export declare const ApplyPdfHistoryCommand: ICommand<IPdfApplyHistoryCommandParams, IPdfEditorMutationBatch | false>;
