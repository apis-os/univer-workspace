import type { ReactNode } from 'react';
export interface IChartFieldGroupProps {
    children: ReactNode;
    disabled?: boolean;
    error?: ReactNode;
    help?: ReactNode;
    label: ReactNode;
}
export declare function ChartFieldGroup(props: IChartFieldGroupProps): import("react").JSX.Element;
