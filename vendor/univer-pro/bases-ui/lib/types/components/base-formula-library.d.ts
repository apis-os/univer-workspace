import type { LocaleKey as BaseLocaleKey } from '../locale/types';
export type BaseFormulaCategoryKey = 'array' | 'compatibility' | 'cube' | 'database' | 'date' | 'engineering' | 'financial' | 'information' | 'logical' | 'lookup' | 'math' | 'statistical' | 'text' | 'web';
export interface IBaseFormulaParameter {
    name: string;
    detail: string;
    example?: string;
    required: boolean;
    repeat?: boolean;
}
export interface IBaseFormulaFunctionItem {
    id: string;
    name: string;
    category: string;
    signature: string;
    abstract: string;
    description: string;
    parameters: IBaseFormulaParameter[];
    insertText: string;
}
export interface IBaseFormulaFunctionTextItem {
    name: string;
    category: string;
    abstract: string;
    description: string;
    parameters: IBaseFormulaParameter[];
    insertText: string;
}
export interface IBaseFormulaParameterDefinition {
    key: string;
    nameKey: string;
    detailKey: string;
    required: boolean;
    repeat?: boolean;
    example?: string;
}
export interface IBaseFormulaFunctionDefinition {
    name: string;
    categoryKey: BaseFormulaCategoryKey;
    abstractKey: BaseLocaleKey | `bases-ui.formula.functionList.${string}.abstract`;
    abstractArgs?: string[];
    descriptionKey: string;
    descriptionArgs?: string[];
    parameters: IBaseFormulaParameterDefinition[];
}
export declare function getBaseFormulaFunctions(texts: IBaseFormulaFunctionTextItem[]): IBaseFormulaFunctionItem[];
export declare function getBaseFormulaFunctionDefinitions(): IBaseFormulaFunctionDefinition[];
