import type { BaseFieldType, FieldConfig, FieldId, IBaseDateFieldConfig, IRecordLinkFieldConfig } from '@univerjs/core';
/** A canonical option stored by SingleSelect and MultiSelect fields. */
export interface IBaseSelectOption {
    /** Stable option identifier stored in record values. */
    id: string;
    /** Human-readable option label. */
    name: string;
    /** CSS color used to render the option. */
    color: string;
}
/** Configuration shared by SingleSelect and MultiSelect fields. */
export interface IBaseSelectFieldConfig extends FieldConfig {
    /** String options are accepted for compatibility; prefer canonical option objects. */
    options?: Array<IBaseSelectOption | string>;
    optionSource?: {
        type: 'manual';
    } | {
        type: 'field';
        fieldId: FieldId;
    };
}
/** Configuration for a Person field. */
export interface IBasePersonFieldConfig extends FieldConfig {
    allowMultiple?: boolean;
    provider?: 'person';
}
/** Configuration for a Currency field. */
export interface IBaseCurrencyFieldConfig extends FieldConfig {
    /** Explicit number-format pattern, such as `#,##0.00`. */
    pattern?: string;
    /** Optional UI format identifier. */
    format?: string;
    decimalPlaces?: number;
    separatorStyle?: string;
    locale?: string;
    useThousands?: boolean;
    abbreviation?: string;
    allowNegative?: boolean;
    currencySymbol?: string;
    /** Minimum accepted value. */
    min?: number | null;
    /** Maximum accepted value. */
    max?: number | null;
}
/** Configuration for a Progress field. */
export interface IBaseProgressFieldConfig extends FieldConfig {
    format?: 'percent' | 'number';
    /** Decimal places from 0 through 2. */
    decimalPlaces?: number;
    color?: string;
    customRange?: boolean;
    start?: number;
    end?: number;
    /** Compatibility lower bound used by existing snapshots. */
    min?: number | null;
    /** Compatibility upper bound used by existing snapshots. */
    max?: number | null;
}
/** Configuration for a Rating field. */
export interface IBaseRatingFieldConfig extends FieldConfig {
    icon?: string;
    min?: number;
    max?: number;
}
/** Resolve the public field configuration accepted for a Base field type. */
export type BaseFieldConfig<T extends BaseFieldType = BaseFieldType> = T extends BaseFieldType.SingleSelect | BaseFieldType.MultiSelect ? IBaseSelectFieldConfig : T extends BaseFieldType.Person ? IBasePersonFieldConfig : T extends BaseFieldType.Date | BaseFieldType.CreatedAt | BaseFieldType.UpdatedAt ? IBaseDateFieldConfig : T extends BaseFieldType.Progress ? IBaseProgressFieldConfig : T extends BaseFieldType.Currency ? IBaseCurrencyFieldConfig : T extends BaseFieldType.Rating ? IBaseRatingFieldConfig : T extends BaseFieldType.RecordLink ? IRecordLinkFieldConfig : FieldConfig;
