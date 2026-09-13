import type { IBaseFormulaTableItem, IBaseMenuFieldItem, IBasePeopleOption } from './field-config-model';
import { BaseFieldType } from '@univerjs/core';
export declare function FieldSettings(props: {
    type: BaseFieldType;
    config: Record<string, unknown>;
    defaultValue: unknown;
    fields: IBaseMenuFieldItem[];
    formulaTables?: IBaseFormulaTableItem[];
    personOptions?: IBasePeopleOption[];
    groupOptions?: IBasePeopleOption[];
    currentFieldId?: string;
    onConfig: (config: Record<string, unknown>) => void;
    onDefaultValue: (value: unknown) => void;
}): import("react").JSX.Element;
