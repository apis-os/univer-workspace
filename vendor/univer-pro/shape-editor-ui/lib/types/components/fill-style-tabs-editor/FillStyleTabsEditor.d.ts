import type { IGradientValue } from '@univerjs/design';
import type { ReactNode } from 'react';
type ItemValue = string | number;
export type FillStyleType = 'none' | 'solid' | 'gradient' | 'picture';
export interface IFillStyleTypeValues<T extends ItemValue = FillStyleType> {
    none: T;
    solid: T;
    gradient: T;
    picture: T;
}
export interface IFillStyleTabsEditorLabels {
    noFill: string;
    solidFill: string;
    gradientFill: string;
    pictureFill: string;
    color: string;
    transparency: string;
}
export interface IFillStyleTabsEditorProps<T extends ItemValue = FillStyleType> {
    className?: string;
    compact?: boolean;
    disabled?: boolean;
    direction?: 'ltr' | 'rtl';
    value: T;
    typeValues?: IFillStyleTypeValues<T>;
    color?: string;
    transparency?: number;
    gradientValue?: IGradientValue;
    labels: IFillStyleTabsEditorLabels;
    tabLabels?: Partial<Pick<IFillStyleTabsEditorLabels, 'noFill' | 'solidFill' | 'gradientFill' | 'pictureFill'>>;
    noFillEditor?: ReactNode;
    pictureFillEditor?: ReactNode;
    renderColorIcon?: (color: string) => ReactNode;
    /** Keep host text editing active while interacting with the nested color-picker portal. */
    editorInteractionBoundary?: boolean;
    keepColorPickerOpenOnChange?: boolean;
    onChange?: (value: T) => void;
    onColorChange?: (color: string) => void;
    onColorPickerOpenChange?: (open: boolean) => void;
    onTransparencyChange?: (transparency: number) => void;
    onGradientChange?: (value: IGradientValue) => void;
}
export declare function FillStyleTabsEditor<T extends ItemValue = FillStyleType>(props: IFillStyleTabsEditorProps<T>): import("react").JSX.Element;
export {};
