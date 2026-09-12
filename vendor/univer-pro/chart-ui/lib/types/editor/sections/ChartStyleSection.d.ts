import type { ReactNode } from 'react';
export interface IChartStyleSectionProps {
    defaultValues: IChartStyleDefaultValues;
    hostBorder?: ReactNode;
}
export interface IChartStyleDefaultValues {
    backgroundColor: string;
    borderColor: string;
}
export declare const DEFAULT_CHART_STYLE_VALUES: IChartStyleDefaultValues;
export declare function ChartStyleSection(props: IChartStyleSectionProps): import("react").JSX.Element;
