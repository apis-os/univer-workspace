import type { ChartNumberFormatFieldComponent } from '../atoms/common/ChartNumberFormatAtom';
import type { ChartAxisKey } from '../utils/chart-runtime-axis';
import { ChartAxisTickPosition } from '@univerjs-pro/engine-chart';
export interface IChartAxisDefaultValues {
    color: string;
    dateAxisRotation: number;
    gridlineWidth: number;
    labelFontSize: number;
    labelRotation: number;
    labelVisible: boolean;
    primaryGridLineVisible: boolean;
    reverse: boolean;
    secondaryGridLineVisible: boolean;
    tickLength: string;
    tickPosition: ChartAxisTickPosition;
    tickVisible: boolean;
    tickWidth: string;
}
export declare const DEFAULT_CHART_AXIS_VALUES: IChartAxisDefaultValues;
export declare function ChartAxisLineVisibilityField(props: {
    axis: ChartAxisKey;
    defaultValues: IChartAxisDefaultValues;
}): import("react").JSX.Element | null;
export declare function ChartAxisLabelVisibilityField(props: {
    axis: ChartAxisKey;
    defaultValues: IChartAxisDefaultValues;
}): import("react").JSX.Element | null;
export declare function ChartAxisReverseField(props: {
    axis: ChartAxisKey;
    defaultValues: IChartAxisDefaultValues;
}): import("react").JSX.Element | null;
export declare function ChartAxisBoundsFields(props: {
    axis: ChartAxisKey;
}): import("react").JSX.Element | null;
export declare function ChartAxisFormatTextField(props: {
    axis: ChartAxisKey;
}): import("react").JSX.Element | null;
export declare function ChartAxisLabelStyleFields(props: {
    axis: ChartAxisKey;
    defaultValues: IChartAxisDefaultValues;
}): import("react").JSX.Element | null;
export declare function ChartAxisTickVisibilityField(props: {
    axis: ChartAxisKey;
    defaultValues: IChartAxisDefaultValues;
}): import("react").JSX.Element | null;
export declare function ChartGridlineVisibilityField(props: {
    axis: ChartAxisKey;
    defaultValues: IChartAxisDefaultValues;
    label?: string;
}): import("react").JSX.Element | null;
export declare function ChartGridlineWidthField(props: {
    axis: ChartAxisKey;
    defaultValues: IChartAxisDefaultValues;
    label?: string;
}): import("react").JSX.Element | null;
export declare function ChartAxisSection(props: {
    axis: ChartAxisKey;
    defaultValues: IChartAxisDefaultValues;
    NumberFormatField?: ChartNumberFormatFieldComponent;
}): import("react").JSX.Element | null;
export declare function ChartGridlinesAndTicksSection(props: {
    defaultValues: IChartAxisDefaultValues;
}): import("react").JSX.Element;
