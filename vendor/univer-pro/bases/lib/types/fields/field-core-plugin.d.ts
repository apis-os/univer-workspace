import type { BaseCellValue, BaseConditionalDateMode, BaseFilterOperator, FieldConfig, IFieldCapabilities, IFieldSnapshot, IValidationResult } from '@univerjs/core';
import { BaseConditionalColorOperator, BaseFieldType } from '@univerjs/core';
export interface IFieldTypePlugin {
    type: BaseFieldType;
    enabled: boolean;
    visibleInCreateMenu: boolean;
}
export interface IFieldCorePlugin<TValue extends BaseCellValue = BaseCellValue, TConfig = FieldConfig> extends IFieldTypePlugin {
    i18nKey: string;
    createDefaultConfig(): TConfig;
    createDefaultValue(field: IFieldSnapshot): TValue | null;
    normalize(input: unknown, field: IFieldSnapshot): TValue | null;
    validate(value: unknown, field: IFieldSnapshot): IValidationResult;
    compare(a: TValue | null, b: TValue | null, field: IFieldSnapshot): number;
    filter(value: TValue | null, operator: BaseFilterOperator | string, operand: unknown, field: IFieldSnapshot): boolean;
    toPlainText(value: TValue | null, field: IFieldSnapshot): string;
    fromPlainText(text: string, field: IFieldSnapshot): TValue | null;
    getCapabilities(field: IFieldSnapshot): IFieldCapabilities;
}
export interface IBaseConditionMatchOptions {
    dateMode?: BaseConditionalDateMode;
    now?: number;
}
/** Return the conditional coloring operators supported by a Base field type. */
export declare function getBaseConditionalColorOperators(fieldType: BaseFieldType): readonly BaseConditionalColorOperator[];
/** Whether a field type supports exact and relative conditional coloring date modes. */
export declare function isBaseConditionalColorDateField(fieldType: BaseFieldType): boolean;
export declare function matchesBaseCondition(value: unknown, operator: BaseFilterOperator | string, operand: unknown, field: Pick<IFieldSnapshot, 'type'> & {
    config?: FieldConfig;
}, options?: IBaseConditionMatchOptions): boolean;
export declare function createCoreFieldPlugins(): IFieldCorePlugin[];
export type FieldCorePlugin<TValue extends BaseCellValue = BaseCellValue, TConfig = FieldConfig> = IFieldCorePlugin<TValue, TConfig>;
