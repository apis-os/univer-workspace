import type { ReactNode } from 'react';
export interface IChartNumberFieldProps {
    allowClear?: boolean;
    allowEmpty?: boolean;
    disabled?: boolean;
    emptyLabel?: string;
    error?: ReactNode;
    help?: ReactNode;
    label: ReactNode;
    max?: number;
    min?: number;
    onChange: (value: number | null) => void;
    precision?: number;
    step?: number;
    value: number | null;
}
export declare function ChartNumberField(props: IChartNumberFieldProps): import("react").JSX.Element;
