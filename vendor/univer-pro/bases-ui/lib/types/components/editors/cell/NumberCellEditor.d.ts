import type { IBaseCellEditorCommonProps } from './editor-types';
export declare function BaseNumberCellEditor({ initialQuery, value: propValue, valueRef, focusRef, inputShape, allowNegative, min: minProp, max: maxProp, }: IBaseCellEditorCommonProps<number | string> & {
    allowNegative?: boolean;
    min?: number | null;
    max?: number | null;
}): import("react").JSX.Element;
