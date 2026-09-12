import type { ISlideTableBorder } from '@univerjs-pro/slides-table';
import type { ISlideTableToolbarCellValues } from '@univerjs-pro/slides-table-ui';
import type { HorizontalAlign, VerticalAlign } from '@univerjs/core';
import type { ReactNode } from 'react';
import type { LocaleKey } from '../../locale/types';
import { SlideTableBorderPresetEnum } from '@univerjs-pro/slides-table';
export declare const FONT_SIZE_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const TOOLBAR_DROPDOWN_BUTTON_CLASS = "\n  univer-flex univer-h-6 univer-min-w-9 univer-items-center univer-justify-center univer-gap-1\n  univer-rounded-md univer-border-none univer-bg-transparent univer-px-1.5 univer-text-sm\n  univer-text-gray-700 univer-transition-colors\n  hover:univer-bg-gray-100\n  dark:!univer-text-gray-100\n  dark:hover:!univer-bg-gray-700\n";
export declare const TOOLBAR_ACTIVE_BUTTON_CLASS = "univer-bg-gray-100 univer-text-primary-600 dark:!univer-bg-gray-700 dark:!univer-text-primary-300";
export declare const BOARD_TABLE_BORDER_PRESETS: Array<{
    labelKey: LocaleKey;
    preset: SlideTableBorderPresetEnum;
}>;
export interface IToolbarLocaleOption<T extends string | number> {
    icon: ReactNode;
    labelKey: LocaleKey;
    value: T;
}
export declare function TableThemeDropdownButton(props: {
    children: ReactNode;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}): import("react").JSX.Element;
export declare function ToolbarGroup(props: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function ToolbarIconButton(props: {
    children: ReactNode;
    'data-toolbar-item'?: string;
    title: string;
    onClick: () => void;
}): import("react").JSX.Element;
export declare function BoardFloatingColorPickerButton(props: {
    'data-toolbar-item': string;
    color: string;
    icon: 'font' | 'bucket';
    open: boolean;
    title: string;
    onChange: (color: string) => void;
    onOpenChange: (open: boolean) => void;
}): import("react").JSX.Element;
export declare function BoardBorderPanelDropdownButton(props: {
    'data-toolbar-item': string;
    presets: Array<{
        labelKey: LocaleKey;
        preset: SlideTableBorderPresetEnum;
    }>;
    color: string;
    width: number;
    dash: NonNullable<ISlideTableBorder['dash']>;
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSelectPreset: (preset: SlideTableBorderPresetEnum) => void;
    onChangeColor: (color: string) => void;
    onChangeWidth: (width: number) => void;
    onChangeDash: (dash: NonNullable<ISlideTableBorder['dash']>) => void;
}): import("react").JSX.Element;
export declare function TextFormatPanelDropdownButton(props: {
    'data-toolbar-item': string;
    horizontalAlignOptions: Array<IToolbarLocaleOption<HorizontalAlign>>;
    open: boolean;
    values: ISlideTableToolbarCellValues;
    verticalAlignOptions: Array<IToolbarLocaleOption<VerticalAlign>>;
    onHorizontalAlign: (value: HorizontalAlign) => void;
    onOpenChange: (open: boolean) => void;
    onToggleStyle: (patch: Record<string, unknown>) => void;
    onVerticalAlign: (value: VerticalAlign) => void;
}): import("react").JSX.Element;
export declare function SelectControl(props: {
    'data-toolbar-item': string;
    title: string;
    value: string;
    widthClassName: string;
    options: Array<{
        label: string;
        value: string;
    }>;
    onChange: (value: string) => void;
}): import("react").JSX.Element;
