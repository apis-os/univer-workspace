import { BaseFieldType } from '@univerjs/core';
export interface IBaseMenuFieldItem {
    id: string;
    name: string;
    type: BaseFieldType;
    config?: Record<string, unknown>;
    hidden?: boolean;
    readonly?: boolean;
    system?: boolean;
    primary?: boolean;
}
export interface IBaseFormulaTableItem {
    id: string;
    name: string;
    current?: boolean;
    fields: IBaseMenuFieldItem[];
}
export interface IBaseMenuOption {
    value: string;
    label: string;
    field?: IBaseMenuFieldItem;
}
export interface IBaseSelectOption {
    id: string;
    name: string;
    color: string;
}
export interface IBaseFieldTypeCatalogItem {
    type: BaseFieldType;
    name: string;
    section: 'Basic' | 'Business' | 'Advanced';
    isNew?: boolean;
    enabled?: boolean;
}
export interface IBaseFieldConfigSubmitInput {
    name: string;
    type: BaseFieldType;
    config: Record<string, unknown>;
    defaultValue: unknown;
}
export interface IBasePeopleOption {
    id: string;
    name: string;
    avatar?: string;
}
export declare function normalizeInitialFieldName(value: unknown): string | undefined;
export declare function createDefaultBaseFieldConfig(type: BaseFieldType): Record<string, unknown>;
export declare function getDefaultBaseFieldValue(type: BaseFieldType, config: Record<string, unknown>): unknown;
export declare function supportsBaseFieldDefaultValue(type: BaseFieldType): boolean;
export declare function normalizeBaseMenuOptions(options: unknown, type: BaseFieldType, useFallback?: boolean): IBaseSelectOption[];
export declare function normalizeFieldSubmitConfig(type: BaseFieldType, config: Record<string, unknown>, context?: {
    currentTableId?: string;
}): Record<string, unknown>;
export declare function isSelectOptionSelected(option: IBaseSelectOption, values: string[]): boolean;
export declare function filterOperandOptionValue(option: IBaseSelectOption): string;
export declare function fieldTypeName(type: BaseFieldType, catalog: IBaseFieldTypeCatalogItem[]): string;
