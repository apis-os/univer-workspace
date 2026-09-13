import type { IFormulaTemplate } from './formula-templates';
export interface IFormulaTemplateInsertionResult {
    selectionEnd: number;
    selectionStart: number;
    value: string;
}
export declare function insertFormulaTemplate(value: string, template: IFormulaTemplate, selectionStart: number, selectionEnd: number): IFormulaTemplateInsertionResult;
