import type { ReactNode } from 'react';
export interface IChartColorFieldProps {
    disabled?: boolean;
    emptyLabel: ReactNode;
    error?: ReactNode;
    help?: ReactNode;
    label: ReactNode;
    onChange: (value: string | null) => void;
    pickerFallbackValue: string;
    resetLabel?: ReactNode;
    transparentLabel?: ReactNode;
    value: string | null;
}
export declare function ChartColorField(props: IChartColorFieldProps): import("react").JSX.Element;
