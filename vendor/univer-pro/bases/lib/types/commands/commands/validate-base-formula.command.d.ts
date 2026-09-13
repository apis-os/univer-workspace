import type { ICommand } from '@univerjs/core';
import type { IBaseFormulaValidationResult } from '../../services/base-formula.service';
export interface IValidateBaseFormulaCommandParams {
    unitId: string;
    tableId: string;
    formula: string;
}
export declare const ValidateBaseFormulaCommand: ICommand<IValidateBaseFormulaCommandParams, IBaseFormulaValidationResult>;
