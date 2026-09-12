import type { IBaseCellEditorFocusHandle } from '../../components/editors/cell/editor-types';
import React from 'react';
interface IBaseCanvasTextCellEditorProps {
    active: boolean;
    fieldName?: string;
    initialValue?: string;
    initialValueKey?: string;
    inputComponent?: string;
    maxHeight?: number;
    minHeight?: number;
    onInactiveCompositionStart?: React.CompositionEventHandler<HTMLTextAreaElement>;
    onInactiveKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
    unitId: string;
    valueRef: React.MutableRefObject<unknown>;
    focusRef: IBaseCellEditorFocusHandle;
}
export declare function BaseCanvasTextCellEditor({ active, fieldName, initialValue, initialValueKey, inputComponent, maxHeight, minHeight, onInactiveCompositionStart, onInactiveKeyDown, unitId, valueRef, focusRef, }: IBaseCanvasTextCellEditorProps): React.JSX.Element;
export {};
