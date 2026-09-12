import type { IBaseCellEditorCommonProps } from './editor-types';
export declare function shouldCommitDateTimeBlur(editor: HTMLElement | null, relatedTarget: EventTarget | null, activeElement: Element | null, nativeTimePointerInteraction: boolean): boolean;
export declare function isBaseDateCellEditorCalendarHeaderDropdownTarget(target: EventTarget | null): boolean;
export declare function isBaseDateCellEditorFloatingTarget(target: EventTarget | null): boolean;
export declare function BaseDateCellEditor({ value: propValue, valueRef, focusRef, includeTime: includeTimeProp, onCommit, onTabCommit, onFloatingInteractionStart, showInput: showInputProp, }: IBaseCellEditorCommonProps<number> & {
    includeTime?: boolean;
    onCommit: () => void;
    onTabCommit?: (shiftKey: boolean) => void;
    onFloatingInteractionStart?: () => void;
    showInput?: boolean;
}): import("react").JSX.Element;
