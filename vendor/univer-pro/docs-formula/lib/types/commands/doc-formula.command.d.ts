import type { ICommand } from '@univerjs/core';
import type { IDocFormulaInsertCommandParams, IDocFormulaInsertCommandResult, IDocFormulaRemoveCommandParams, IDocFormulaSetNumberFormatCommandParams, IDocFormulaUpdateCommandParams } from '../common/type';
export declare const InsertDocFormulaCommand: ICommand<IDocFormulaInsertCommandParams, IDocFormulaInsertCommandResult | false>;
export declare const UpdateDocFormulaCommand: ICommand<IDocFormulaUpdateCommandParams>;
export declare const SetDocFormulaNumberFormatCommand: ICommand<IDocFormulaSetNumberFormatCommandParams>;
export declare const RemoveDocFormulaCommand: ICommand<IDocFormulaRemoveCommandParams>;
export interface IReplaceDocFormulaWithTextCommandParams extends IDocFormulaRemoveCommandParams {
    text: string;
}
export declare const ReplaceDocFormulaWithTextCommand: ICommand<IReplaceDocFormulaWithTextCommandParams>;
export declare const ConvertDocFormulaToTextCommand: ICommand<IDocFormulaRemoveCommandParams>;
