import type { IMutation } from '@univerjs/core';
import type { IPdfDocument } from '../../types';
import type { IPdfAppendInstancePlan } from '../../unit/pdf-append-plan';
import type { IPdfUnitData } from '../../unit/types';
export interface IAppendPdfDocumentMutationParams {
    unitId: string;
    appendPlan: IPdfAppendInstancePlan;
    sourceDocument?: IPdfDocument;
    sourceUnitData?: IPdfUnitData;
    sourceResourceBindings?: IPdfUnitData['resourceBindings'];
}
/** Append every page and referenced resource from another PDF document. */
export declare const AppendPdfDocumentMutation: IMutation<IAppendPdfDocumentMutationParams>;
