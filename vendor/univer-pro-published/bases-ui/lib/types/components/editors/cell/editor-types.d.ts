import type { BaseFieldType } from '@univerjs/core';
import type { MutableRefObject } from 'react';
export interface IBaseCellEditorOption {
    value: string;
    label?: string;
    color?: string;
}
export interface IBaseCellEditorFocusHandle {
    current?: () => void;
}
export type BaseCellEditorInputShape = 'rounded' | 'square';
export interface IBaseLinkCellValue {
    text: string;
    url: string;
}
export interface IBaseCellEditorCommonProps<T> {
    fieldName: string;
    fieldType: BaseFieldType;
    value: T;
    valueRef: MutableRefObject<unknown> | {
        current: unknown;
    };
    focusRef?: IBaseCellEditorFocusHandle;
    initialQuery?: string | null;
    inputShape?: BaseCellEditorInputShape;
}
