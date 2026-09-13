import type { LocaleService } from '@univerjs/core';
import type { IBaseFormulaTableItem, IBaseMenuFieldItem } from '../field-config/field-config-model';
export declare const FORMULA_GENERAL_PATTERN = "General";
export interface IFormulaEditorHighlightToken {
    text: string;
    offset: number;
    component?: string;
    className?: string;
}
export declare function readFormulaEditorText(editor: HTMLElement): string;
export declare function getFormulaEditorSelection(editor: HTMLElement): {
    start: number;
    end: number;
} | null;
export declare function setFormulaEditorSelection(editor: HTMLElement, start: number, end: number): void;
export declare function formulaEditorHighlightTokens(value: string, functionNames: Set<string>): IFormulaEditorHighlightToken[];
export declare function normalizeEditorFormulaForConfig(value: string, tables: IBaseFormulaTableItem[]): string;
export declare function formulaToEditorFormula(value: string, tables?: IBaseFormulaTableItem[]): string;
export declare function formulaDependenciesFromEditor(value: string, fields: IBaseMenuFieldItem[]): string[];
export declare function structuredFormulaDependenciesFromEditor(value: string, tables: IBaseFormulaTableItem[]): Array<{
    tableId: string;
    fieldId: string;
}>;
export declare function validateEditorFormula(value: string, fieldNames: Array<{
    tableId: string;
    tableName: string;
    current: boolean;
    fieldName: string;
}> | string[]): string | null;
export declare function normalizeFormulaTables(tables: IBaseFormulaTableItem[] | undefined, fields: IBaseMenuFieldItem[], localeService: LocaleService, currentFieldId?: string): IBaseFormulaTableItem[];
export declare function formulaTableToken(table: IBaseFormulaTableItem, tables: IBaseFormulaTableItem[]): string;
export declare function containsCellReference(value: string): boolean;
