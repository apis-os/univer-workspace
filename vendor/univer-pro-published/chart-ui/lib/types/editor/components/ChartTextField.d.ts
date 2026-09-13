import type { ReactNode } from 'react';
export type ChartTextFieldCommitMode = 'blur' | 'change';
export interface IChartTextFieldProps {
    allowClear?: boolean;
    commitMode: ChartTextFieldCommitMode;
    disabled?: boolean;
    error?: ReactNode;
    help?: ReactNode;
    label: ReactNode;
    onChange: (value: string) => void;
    placeholder?: string;
    value: string;
}
export declare function ChartTextField(props: IChartTextFieldProps): import("react").JSX.Element;
