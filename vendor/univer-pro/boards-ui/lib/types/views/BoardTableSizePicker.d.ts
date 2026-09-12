export interface IBoardTableSize {
    rows: number;
    columns: number;
}
export interface IBoardTableSizePickerProps {
    initialRows?: number;
    initialColumns?: number;
    maxGridRows?: number;
    maxGridColumns?: number;
    minRows?: number;
    minColumns?: number;
    maxRows?: number;
    maxColumns?: number;
    direction?: 'ltr' | 'rtl';
    onConfirm: (size: IBoardTableSize) => void;
}
export declare function normalizeBoardTableSizeValue(value: number, min: number, max: number): number;
export declare function BoardTableSizePicker(props: IBoardTableSizePickerProps): import("react").JSX.Element;
