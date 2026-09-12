import type { ReactNode } from 'react';
import type { IChartFontValue } from '../components/ChartFontField';
import { ChartVisualMapType, LegendPositionEnum, SelectModeEnum } from '@univerjs-pro/engine-chart';
export interface IChartLegendDefaultValues {
    font: IChartFontValue & {
        color: string;
        fontSize: number;
    };
    position: LegendPositionEnum;
    selectMode: SelectModeEnum;
    visualMapType: ChartVisualMapType;
    wrap: boolean;
}
export declare const DEFAULT_CHART_LEGEND_VALUES: IChartLegendDefaultValues;
export declare function ChartLegendRoot(props: {
    children: ReactNode;
    defaultValues: IChartLegendDefaultValues;
}): import("react").JSX.Element;
export declare function ChartLegendPositionField(): import("react").JSX.Element;
export declare function ChartLegendWrapField(): import("react").JSX.Element | null;
export declare function ChartLegendVisualMapField(): import("react").JSX.Element | null;
export declare function ChartLegendSelectModeField(): import("react").JSX.Element | null;
export declare function ChartLegendFontFields(): import("react").JSX.Element | null;
export declare function ChartLegendFontSizeField(): import("react").JSX.Element | null;
export declare function ChartLegendSection(props: {
    defaultValues: IChartLegendDefaultValues;
}): import("react").JSX.Element;
