import type { ReactNode } from 'react';
import type { IChartSelectFieldOption } from './ChartSelectField';
export interface IChartFontValue<T extends string = string> {
    align?: T;
    bold: boolean;
    color: string | null;
    fontSize: number | null;
    italic: boolean;
}
export interface IChartFontFieldProps<T extends string = string> {
    alignLabel?: ReactNode;
    alignOptions?: ReadonlyArray<IChartSelectFieldOption<T>>;
    boldLabel: ReactNode;
    colorEmptyLabel: ReactNode;
    colorLabel: ReactNode;
    colorPickerFallbackValue: string;
    colorResetLabel: ReactNode;
    disabled?: boolean;
    error?: ReactNode;
    fontSizeEmptyLabel: ReactNode;
    fontSizeLabel: ReactNode;
    fontSizeOptions?: readonly number[];
    help?: ReactNode;
    italicLabel: ReactNode;
    label: ReactNode;
    onChange: <K extends keyof IChartFontValue<T>>(key: K, value: IChartFontValue<T>[K]) => void;
    value: IChartFontValue<T>;
}
export declare function ChartFontField<T extends string = string>(props: IChartFontFieldProps<T>): import("react").JSX.Element;
