import type { ReactNode } from 'react';
export interface IChartCheckboxFieldProps {
    checked: boolean;
    disabled?: boolean;
    error?: ReactNode;
    help?: ReactNode;
    inlineLabel?: boolean;
    label: ReactNode;
    onChange: (checked: boolean) => void;
}
export declare function ChartCheckboxField(props: IChartCheckboxFieldProps): import("react").JSX.Element;
