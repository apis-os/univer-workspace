import { AreaLineStyle, InvalidValueType } from '@univerjs-pro/engine-chart';
export type LineStyleControl = 'segmented' | 'select';
export interface IChartLineAndAreaDefaultValues {
    invalidValueStrategy: InvalidValueType;
    lineStyle: AreaLineStyle;
}
export declare const DEFAULT_CHART_LINE_AND_AREA_VALUES: IChartLineAndAreaDefaultValues;
export declare function ChartLineAndAreaSection(props: {
    defaultValues: IChartLineAndAreaDefaultValues;
    lineStyleControl: LineStyleControl;
}): import("react").JSX.Element | null;
