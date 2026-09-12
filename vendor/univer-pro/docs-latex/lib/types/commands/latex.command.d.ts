import type { ICommand } from '@univerjs/core';
import type { IDocsLatexInsertCommandParams, IDocsLatexInsertCommandResult, IDocsLatexRemoveCommandParams, IDocsLatexReplaceWithTextCommandParams, IDocsLatexUpdateCommandParams } from '../common/type';
export declare const InsertDocsLatexFormulaCommand: ICommand<IDocsLatexInsertCommandParams, IDocsLatexInsertCommandResult | false>;
export declare const UpdateDocsLatexFormulaCommand: ICommand<IDocsLatexUpdateCommandParams>;
export declare const RemoveDocsLatexFormulaCommand: ICommand<IDocsLatexRemoveCommandParams>;
export declare const ReplaceDocsLatexFormulaWithTextCommand: ICommand<IDocsLatexReplaceWithTextCommandParams>;
