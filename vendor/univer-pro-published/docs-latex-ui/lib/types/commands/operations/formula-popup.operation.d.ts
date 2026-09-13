import type { ICommand, ITextRange } from '@univerjs/core';
export interface IOpenDocsLatexFormulaPopupOperationParams {
    endIndex?: number;
    initialLatex?: string;
    rangeId?: string;
    selection?: ITextRange;
    segmentId?: string;
    segmentPage?: number;
    startIndex?: number;
    unitId?: string;
}
export declare const OpenDocsLatexFormulaPopupOperation: ICommand<IOpenDocsLatexFormulaPopupOperationParams>;
export declare const CloseDocsLatexFormulaPopupOperation: ICommand;
