import type { ReactElement, ReactNode } from 'react';
export interface IFontFormatStyle {
    fontSize: number;
    color: string;
    bold: boolean;
    italic: boolean;
    underline: boolean;
    strikethrough: boolean;
    align?: string;
    alignControl?: boolean;
}
export type PropertyChangeFunction<T, K extends keyof T = keyof T> = (name: K, value: T[K]) => void;
export interface IFontFormatBarProps extends Partial<IFontFormatStyle> {
    alignOptions?: ReadonlyArray<{
        label: ReactNode;
        value: string;
    }>;
    className?: string;
    colorResetLabel?: ReactNode;
    fontSizeEmptyLabel?: ReactNode;
    fontSizeIsDefault?: boolean;
    fontSizeOptions?: readonly number[];
    onChange?: PropertyChangeFunction<Omit<IFontFormatStyle, 'controls'>>;
    onColorReset?: () => void;
    onFontSizeReset?: () => void;
}
export declare const chartFontSizeValues: readonly [10, 12, 14, 16, 18, 20, 24, 30, 36];
export interface IFontSizeSelectorProps {
    emptyLabel?: ReactNode;
    isDefault?: boolean;
    options?: readonly number[];
    value?: number;
    onChange?: (fontSize: number) => void;
    onReset?: () => void;
}
export declare function FontSizeSelector(props: IFontSizeSelectorProps): ReactElement;
export interface IFontColorSelectorProps {
    color?: string;
    resetLabel?: ReactNode;
    onChange?: (color: string) => void;
    onReset?: () => void;
}
export declare function FontColorSelector(props: IFontColorSelectorProps): ReactElement;
export interface IFontFormatToggleProps {
    active?: boolean;
    type: 'bold' | 'italic';
    onClick?: () => void;
}
export declare function FontFormatToggle(props: IFontFormatToggleProps): ReactElement;
export interface IFontAlignSelectorProps {
    options?: ReadonlyArray<{
        label: ReactNode;
        value: string;
    }>;
    value?: string;
    onChange?: (align: string) => void;
}
export declare function FontAlignSelector(props: IFontAlignSelectorProps): ReactElement;
export declare function FontFormatBar(props: IFontFormatBarProps): ReactElement;
