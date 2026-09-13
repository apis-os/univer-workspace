import { SeriesLabelPosition } from '@univerjs-pro/engine-chart';
export interface IChartHeatmapDefaultValues {
    labelPosition: SeriesLabelPosition;
    labelVisible: boolean;
    textColor: string;
}
export declare const DEFAULT_CHART_HEATMAP_VALUES: IChartHeatmapDefaultValues;
export declare function ChartHeatmapStyleSection(props: {
    defaultValues: IChartHeatmapDefaultValues;
}): import("react").JSX.Element | null;
