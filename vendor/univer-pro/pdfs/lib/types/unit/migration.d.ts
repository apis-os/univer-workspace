import type { IPdfDurableEditState } from '../editor/types';
import type { IPdfDocument, PdfAssetId, PdfJsonValue } from '../types';
import type { IPdfCapabilityReport, IPdfDocumentShell, IPdfFragmentArtifactBinding, IPdfSourceDocumentRef, IPdfUnitData, IPdfUnitFragmentIndex, PdfDurableResourceBinding } from './types';
/** Input accepted when creating a normalized v1 PDF Unit snapshot. */
export interface ICreatePdfUnitDataParams {
    id: string;
    document: IPdfDocument;
    documentShell?: IPdfDocumentShell;
    rev?: number;
    name?: string;
    sourceDocumentRef?: Partial<IPdfSourceDocumentRef>;
    editState?: IPdfDurableEditState;
    resourceBindings?: Record<PdfAssetId, PdfDurableResourceBinding>;
    fragmentBindings?: Record<string, IPdfFragmentArtifactBinding>;
    capabilityReport?: IPdfCapabilityReport;
    fragmentIndex?: IPdfUnitFragmentIndex;
    metadata?: Record<string, PdfJsonValue>;
}
/** Create a normalized PDF Unit and remove duplicate durable state from its baseline. */
export declare function createPdfUnitData(params: ICreatePdfUnitDataParams): IPdfUnitData;
/** Normalize supported partial PDF Unit data to the current schema. */
export declare function normalizePdfUnitData(input: Partial<IPdfUnitData>): IPdfUnitData;
/** Create the lightweight runtime document view represented by a page-block shell. */
export declare function createPdfDocumentFromShell(shell: IPdfDocumentShell): IPdfDocument;
/** Check whether a value is a structurally valid current PDF Unit snapshot. */
export declare function isPdfUnitData(input: unknown): input is IPdfUnitData;
