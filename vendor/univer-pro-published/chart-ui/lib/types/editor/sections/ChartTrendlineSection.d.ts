import type { IChartTrendlineSpec } from '@univerjs-pro/engine-chart';
import { ChartTrendlineType } from '@univerjs-pro/engine-chart';
export interface IChartTrendlineDefaultValues {
    color: string;
    dashType: NonNullable<IChartTrendlineSpec['dashType']>;
    opacity: number;
    order: number;
    period: number;
    showFormula: boolean;
    showR2: boolean;
    textColor: string;
    type: ChartTrendlineType;
    width: number;
}
export declare const DEFAULT_CHART_TRENDLINE_VALUES: IChartTrendlineDefaultValues;
export declare function ChartTrendlineSection(props: {
    defaultValues: IChartTrendlineDefaultValues;
}): import("react").JSX.Element;
