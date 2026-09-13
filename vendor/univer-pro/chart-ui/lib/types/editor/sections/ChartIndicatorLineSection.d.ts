import type { IChartAxisPointerSpec } from '@univerjs-pro/engine-chart';
export interface IChartIndicatorLineDefaultValues {
    indicatorLabelBackground: string;
    indicatorLabelTextColor: string;
    indicatorLineColor: string;
    indicatorLineType: NonNullable<IChartAxisPointerSpec['indicatorLineType']>;
}
export declare const DEFAULT_CHART_INDICATOR_LINE_VALUES: IChartIndicatorLineDefaultValues;
export declare function ChartIndicatorLineColorField(props: {
    defaultValues: IChartIndicatorLineDefaultValues;
}): import("react").JSX.Element;
export declare function ChartIndicatorLineTypeField(props: {
    defaultValues: IChartIndicatorLineDefaultValues;
}): import("react").JSX.Element;
export declare function ChartIndicatorLabelColorFields(props: {
    defaultValues: IChartIndicatorLineDefaultValues;
}): import("react").JSX.Element;
export declare function ChartIndicatorLineSection(props: {
    defaultValues: IChartIndicatorLineDefaultValues;
}): import("react").JSX.Element;
