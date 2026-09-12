import type { IDialogPartMethodOptions } from '@univerjs/ui';
export interface ISlideTableSize {
    rows: number;
    columns: number;
}
export interface ISlideTableSizePickerProps {
    initialRows?: number;
    initialColumns?: number;
    maxGridRows?: number;
    maxGridColumns?: number;
    minRows?: number;
    minColumns?: number;
    maxRows?: number;
    maxColumns?: number;
    variant?: 'card' | 'dropdown';
    direction?: 'ltr' | 'rtl';
    title?: string;
    confirmAction?: 'insert' | 'apply';
    onConfirm: (size: ISlideTableSize) => void;
}
export declare const SLIDE_TABLE_SIZE_DIALOG_COMPONENT = "slide.table-size.dialog";
export declare const SLIDE_TABLE_SIZE_DIALOG_ID = "slide.table-size.dialog";
export declare function normalizeSlideTableSizeValue(value: number, min: number, max: number): number;
export declare function SlideTableSizePicker(props: ISlideTableSizePickerProps): import("react").JSX.Element;
export interface ISlideTableSizeDialogProps {
    unitId: string;
    tableId: string;
    initialRows: number;
    initialColumns: number;
    title?: string;
    onClose?: () => void;
}
export declare function createSlideTableSizeDialogOptions(title: string, unitId: string, tableId: string, initialRows: number, initialColumns: number, onClose: () => void): IDialogPartMethodOptions;
export declare function SlideTableSizeDialog(props: ISlideTableSizeDialogProps): import("react").JSX.Element;
