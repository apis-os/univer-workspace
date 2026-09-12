import type { IBaseMenuFieldItem } from './field-config-model';
import { BaseFieldType } from '@univerjs/core';
interface IOptionsSettingsProps {
    type: BaseFieldType;
    multi: boolean;
    config: Record<string, unknown>;
    defaultValue: unknown;
    fields: IBaseMenuFieldItem[];
    currentFieldId?: string;
    onConfig: (config: Record<string, unknown>) => void;
    onDefaultValue: (value: unknown) => void;
}
export declare function OptionsSettings(props: IOptionsSettingsProps): import("react").JSX.Element;
export {};
