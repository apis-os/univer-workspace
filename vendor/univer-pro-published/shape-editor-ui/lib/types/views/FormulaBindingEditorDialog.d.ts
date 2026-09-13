import type { ReactNode } from 'react';
import type { IFormulaBindingEditorResult, IFormulaBindingEditorValue, IFormulaBindingHost } from '../config/config';
export interface IFormulaBindingEditorDialogProps {
    open: boolean;
    host: IFormulaBindingHost;
    value: IFormulaBindingEditorValue;
    footerLeading?: ReactNode;
    onClose: () => void;
    onConfirm: (result: IFormulaBindingEditorResult) => void;
}
export declare function FormulaBindingEditorDialog(props: IFormulaBindingEditorDialogProps): import("react").JSX.Element | null;
