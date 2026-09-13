import type { IBaseCellEditorCommonProps } from './editor-types';
export declare function BaseTextCellEditor({ fieldName, initialQuery, value: propValue, valueRef, focusRef, inputShape, minHeight, maxHeight, }: IBaseCellEditorCommonProps<string | string[]> & {
    minHeight?: number;
    maxHeight?: number;
}): import("react").JSX.Element;
