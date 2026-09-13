import type { IPdfEditorAction, IPdfEditorActionResult, IPdfStroke, PdfDocumentModel } from '@univerjs-pro/pdfs';
import type { Injector } from '@univerjs/core';
type PdfPointStroke = Omit<IPdfStroke, 'width' | 'dash' | 'dashPhase'> & {
    width?: number;
    dash?: number[];
    dashPhase?: number;
};
export declare function toCorePdfStroke(stroke: PdfPointStroke): IPdfStroke;
export declare function toCorePdfStroke(stroke: null): null;
export declare function toCorePdfStroke(stroke: undefined): undefined;
export declare function toCorePdfStroke(stroke: PdfPointStroke | null | undefined): IPdfStroke | null | undefined;
export declare function toPdfPointStroke(stroke: IPdfStroke | undefined): PdfPointStroke | undefined;
/** Execute one pure PDF editor action through the durable Univer command path. */
export declare function executePdfFacadeAction<TInput>(model: PdfDocumentModel, injector: Injector, action: IPdfEditorAction<TInput>, input: TInput): IPdfEditorActionResult;
export {};
