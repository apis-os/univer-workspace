import type { HorizontalAlign, ITextStyle, VerticalAlign } from '@univerjs/core';
import type { IToolbarDropdownOption, ShapeTextUpdateHandler } from './shape-floating-toolbar-types';
export declare function TextFillButton(props: {
    solidOnly?: boolean;
    title: string;
    textStyle: ITextStyle;
    fallbackColor: string;
    dropdownSide?: 'top' | 'bottom';
    onChange: (textStyle: ITextStyle) => void;
}): import("react").JSX.Element;
export declare function TextBackgroundColorButton(props: {
    title: string;
    color: string;
    dropdownSide?: 'top' | 'bottom';
    onApply: () => void;
    onReset?: () => void;
    onChange: (color: string) => void;
}): import("react").JSX.Element;
export declare function TypographyPanelButton(props: {
    title: string;
    fontFamily: string;
    textStyle: {
        isBold: boolean;
        isItalic: boolean;
        isUnderline: boolean;
        isStrike: boolean;
    };
    horizontalAlign: HorizontalAlign;
    verticalAlign: VerticalAlign;
    horizontalAlignOptions: Array<IToolbarDropdownOption<HorizontalAlign>>;
    verticalAlignOptions: Array<IToolbarDropdownOption<VerticalAlign>>;
    dropdownSide?: 'top' | 'bottom';
    onUpdateText: ShapeTextUpdateHandler;
}): import("react").JSX.Element;
