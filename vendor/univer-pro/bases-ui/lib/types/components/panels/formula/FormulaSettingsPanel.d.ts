import type { IBaseFormulaTableItem, IBaseMenuFieldItem } from '../field-config/field-config-model';
export declare function FormulaSettings(props: {
    config: Record<string, unknown>;
    fields: IBaseMenuFieldItem[];
    formulaTables?: IBaseFormulaTableItem[];
    currentFieldId?: string;
    onConfig: (config: Record<string, unknown>) => void;
}): import("react").JSX.Element;
