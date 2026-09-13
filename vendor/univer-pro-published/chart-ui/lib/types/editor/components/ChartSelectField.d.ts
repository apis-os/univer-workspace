import type { ReactNode } from 'react';
import type { IChartFieldControlProps } from './ChartField';
export interface IChartSelectFieldOption<T extends string> {
    disabled?: boolean;
    label: ReactNode;
    value: T;
}
export interface IChartSelectFieldProps<T extends string> {
    allowClear?: boolean;
    clearLabel?: string;
    disabled?: boolean;
    error?: ReactNode;
    help?: ReactNode;
    label: ReactNode;
    onChange: (value: T) => void;
    onClear?: () => void;
    options: ReadonlyArray<IChartSelectFieldOption<T>>;
    value: T;
}
export interface IChartSelectControlProps<T extends string> {
    allowClear?: boolean;
    clearLabel?: string;
    controlProps?: IChartFieldControlProps;
    disabled?: boolean;
    onChange: (value: T) => void;
    onClear?: () => void;
    options: ReadonlyArray<IChartSelectFieldOption<T>>;
    value: T;
}
export declare function ChartSelectControl<T extends string>(props: IChartSelectControlProps<T>): import("react").JSX.Element;
export declare function ChartSelectField<T extends string>(props: IChartSelectFieldProps<T>): import("react").JSX.Element;
