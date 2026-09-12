import type { ReactNode } from 'react';
export interface IChartImageSelectOption {
    imageSrc: string;
    label: string;
    value: string;
}
export interface IChartImageSelectFieldProps {
    label: ReactNode;
    options: IChartImageSelectOption[];
    value?: string;
    onChange: (value: string) => void;
}
export declare function ChartImageSelectField(props: IChartImageSelectFieldProps): import("react").JSX.Element | null;
