import { RadarShape } from '@univerjs-pro/engine-chart';
export interface IChartRadarDefaultValues {
    fill: boolean;
    shape: RadarShape;
}
export declare const DEFAULT_CHART_RADAR_VALUES: IChartRadarDefaultValues;
export declare function ChartRadarStyleSection(props: {
    defaultValues: IChartRadarDefaultValues;
}): import("react").JSX.Element | null;
