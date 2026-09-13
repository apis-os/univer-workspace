import type { ReactNode } from 'react';
export interface IChartFieldControlProps {
    'aria-describedby'?: string;
    'aria-invalid'?: boolean;
    'aria-labelledby'?: string;
    id: string;
}
export interface IChartFieldProps {
    children: ReactNode | ((controlProps: IChartFieldControlProps) => ReactNode);
    disabled?: boolean;
    error?: ReactNode;
    help?: ReactNode;
    label: ReactNode;
}
export declare function ChartField(props: IChartFieldProps): import("react").JSX.Element;
