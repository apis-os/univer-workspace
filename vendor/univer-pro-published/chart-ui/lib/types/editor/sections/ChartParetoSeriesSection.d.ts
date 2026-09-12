import type { LinePointShape } from '@univerjs-pro/engine-chart';
import type { ChartNumberFormatFieldComponent } from '../atoms/common/ChartNumberFormatAtom';
import { ChartBorderDashType, LabelContentType, SeriesLabelPosition } from '@univerjs-pro/engine-chart';
export type ChartParetoSeriesTarget = 'barStyle' | 'cumulativeLineStyle';
export interface IChartParetoDefaultValues {
    borderDashType: ChartBorderDashType;
    borderOpacity: number;
    borderWidth: number;
    includeZeroValues: boolean;
    labelContentType: LabelContentType;
    labelPosition: SeriesLabelPosition;
    labelVisible: boolean;
    lineDashType: ChartBorderDashType;
    lineOpacity: number;
    lineWidth: number;
    pointShape: LinePointShape;
    pointSize: number;
    textColor: string;
}
export declare const DEFAULT_CHART_PARETO_VALUES: IChartParetoDefaultValues;
export declare function ChartParetoSeriesSection(props: {
    defaultValues: IChartParetoDefaultValues;
    NumberFormatField?: ChartNumberFormatFieldComponent;
    showDataPointEditor: boolean;
    target: ChartParetoSeriesTarget;
}): import("react").JSX.Element | null;
