import type { ReactNode } from 'react';
import type { IChartFieldControlProps } from './ChartField';
export interface IChartMultiSelectFieldOption<T extends string> {
    disabled?: boolean;
    label: ReactNode;
    value: T;
}
export interface IChartMultiSelectFieldProps<T extends string> {
    disabled?: boolean;
    error?: ReactNode;
    help?: ReactNode;
    label: ReactNode;
    onChange: (value: T[]) => void;
    options: ReadonlyArray<IChartMultiSelectFieldOption<T>>;
    value: T[];
}
export interface IChartMultiSelectControlProps<T extends string> {
    controlProps?: IChartFieldControlProps;
    disabled?: boolean;
    onChange: (value: T[]) => void;
    options: ReadonlyArray<IChartMultiSelectFieldOption<T>>;
    value: T[];
}
export declare function ChartMultiSelectControl<T extends string>(props: IChartMultiSelectControlProps<T>): import("react").JSX.Element;
export declare function ChartMultiSelectField<T extends string>(props: IChartMultiSelectFieldProps<T>): import("react").JSX.Element;
