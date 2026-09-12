import type { IBaseCellEditorCommonProps, IBaseCellEditorOption } from './editor-types';
export declare function BaseMultiSelectCellEditor({ value: propValue, valueRef, focusRef, initialQuery, options, optionColor, onLiveCommit, onTabCommit, }: IBaseCellEditorCommonProps<string[]> & {
    options: IBaseCellEditorOption[];
    optionColor?: (value: string, index: number) => string;
    onLiveCommit?: (value: string[]) => void;
    onTabCommit?: (shiftKey: boolean) => void;
}): import("react").JSX.Element;
export declare function shouldRenderMultiSelectActiveOption(index: number, activeIndex: number, showActiveOption: boolean): boolean;
