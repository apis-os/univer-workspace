export type FormulaBindingNumberFormatType = 'general' | 'accounting' | 'currency' | 'date' | 'number' | 'custom';
export type FormulaBindingNumberFormatMenuEntry = {
    kind: 'format';
    key: string;
    pattern: string;
} | {
    kind: 'separator';
    key: string;
} | {
    kind: 'more';
};
export declare function createFormulaBindingNumberFormatMenuEntries(currencySymbol: string): FormulaBindingNumberFormatMenuEntry[];
export declare function resolveFormulaBindingNumberFormatType(pattern: string): FormulaBindingNumberFormatType;
export declare function FormulaBindingNumberFormatMenu(props: {
    onSelect: (pattern: string) => void;
    onMore: () => void;
}): import("react").JSX.Element;
export declare function FormulaBindingNumberFormatDialog(props: {
    open: boolean;
    pattern: string;
    onClose: () => void;
    onConfirm: (pattern: string) => void;
}): import("react").JSX.Element;
