import type { ISlideTableBorder } from '@univerjs-pro/slides-table';
import type { HorizontalAlign, VerticalAlign } from '@univerjs/core';
import type { ReactNode } from 'react';
import type { LocaleKey } from '../../locale/types';
import type { ISlideTableToolbarCellValues } from '../../utils/slide-table-toolbar-values';
import { SlideTableBorderPresetEnum } from '@univerjs-pro/slides-table';
export declare const FONT_SIZE_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const SLIDE_TABLE_BORDER_PRESETS: Array<{
    labelKey: LocaleKey;
    preset: SlideTableBorderPresetEnum;
}>;
export interface IToolbarLocaleOption<T extends string | number> {
    icon: ReactNode;
    labelKey: LocaleKey;
    value: T;
}
export declare function ToolbarGroup(props: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function ToolbarIconButton(props: {
    children: ReactNode;
    'data-toolbar-item'?: string;
    title: string;
    onClick: () => void;
}): import("react").JSX.Element;
export declare function TextFormatPanelDropdownButton(props: {
    horizontalAlignOptions: Array<IToolbarLocaleOption<HorizontalAlign>>;
    open: boolean;
    values: ISlideTableToolbarCellValues;
    verticalAlignOptions: Array<IToolbarLocaleOption<VerticalAlign>>;
    onHorizontalAlign: (value: HorizontalAlign) => void;
    onOpenChange: (open: boolean) => void;
    onToggleStyle: (patch: Record<string, unknown>) => void;
    onVerticalAlign: (value: VerticalAlign) => void;
}): import("react").JSX.Element;
export declare function TableThemeDropdownButton(props: {
    children: ReactNode;
    icon?: ReactNode;
    label?: string;
    ribbon?: boolean;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}): import("react").JSX.Element;
export declare function SlideBorderPanelDropdownButton(props: {
    direction: 'ltr' | 'rtl';
    presets: Array<{
        labelKey: LocaleKey;
        preset: SlideTableBorderPresetEnum;
    }>;
    color: string;
    width: number;
    dash: NonNullable<ISlideTableBorder['dash']>;
    open: boolean;
    mixed?: boolean;
    label?: string;
    onOpenChange: (open: boolean) => void;
    onSelectPreset: (preset: SlideTableBorderPresetEnum) => void;
    onChangeColor: (color: string) => void;
    onChangeWidth: (width: number) => void;
    onChangeDash: (dash: NonNullable<ISlideTableBorder['dash']>) => void;
}): import("react").JSX.Element;
export declare function SlideFloatingColorPickerButton(props: {
    'data-toolbar-item': string;
    color: string;
    icon: 'font' | 'bucket';
    open: boolean;
    mixed?: boolean;
    title: string;
    onChange: (color: string) => void;
    onOpenChange: (open: boolean) => void;
}): import("react").JSX.Element;
export declare function SelectControl(props: {
    title: string;
    value: string;
    widthClassName: string;
    options: Array<{
        label: string;
        value: string;
    }>;
    onChange: (value: string) => void;
}): import("react").JSX.Element;
