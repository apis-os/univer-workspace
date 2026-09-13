import type { ICommand, ITextRangeParam } from '@univerjs/core';
export interface IOpenDocFormulaEditorOperationParams {
    rangeId?: string;
    selection?: ITextRangeParam;
    unitId?: string;
}
export declare const OpenDocFormulaEditorOperation: ICommand<IOpenDocFormulaEditorOperationParams>;
export declare const OpenSelectedDocFormulaHoverOperation: ICommand;
export declare const CloseDocFormulaPopupOperation: ICommand;
export declare const RemoveSelectedDocFormulaOperation: ICommand;
