import type { IBaseFormulaTableItem } from '../field-config/field-config-model';
export declare function FormulaEditorPanel(props: {
    tables: IBaseFormulaTableItem[];
    formula: string;
    onCancel: () => void;
    onSave: (formula: string) => void;
}): import("react").JSX.Element;
