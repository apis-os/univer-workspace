import type { IBaseCellEditorCommonProps, IBaseCellEditorOption } from './editor-types';
export declare function BaseSelectCellEditor({ value: propValue, valueRef, focusRef, initialQuery, options, optionColor, onCommit, onTabCommit, }: IBaseCellEditorCommonProps<string> & {
    options: IBaseCellEditorOption[];
    multi?: false;
    optionColor?: (value: string, index: number) => string;
    onCommit: () => void;
    onTabCommit?: (shiftKey: boolean) => void;
}): import("react").JSX.Element;
export declare function shouldRenderSelectActiveOption(index: number, activeIndex: number, showActiveOption: boolean): boolean;
export declare function OptionRow({ id, option, color, selected, active, darkMode, onSelect }: {
    id: string;
    option: IBaseCellEditorOption;
    color?: string;
    selected: boolean;
    active?: boolean;
    darkMode: boolean;
    onSelect: () => void;
}): import("react").JSX.Element;
