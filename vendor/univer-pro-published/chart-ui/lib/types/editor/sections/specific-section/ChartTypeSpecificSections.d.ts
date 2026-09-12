import type { ReactNode } from 'react';
export declare function ChartTypeSpecificDataSection(): import("react").JSX.Element | null;
export declare function ChartTypeSpecificSetupSection(): import("react").JSX.Element | null;
export interface IChartCommonDataMappingSectionProps {
    categoryToggleLabel?: string;
    orientationControl?: ReactNode;
}
export declare function ChartCommonDataMappingSection(props: IChartCommonDataMappingSectionProps): import("react").JSX.Element | null;
export declare function ChartTypeSpecificStyleSection(): import("react").JSX.Element | null;
