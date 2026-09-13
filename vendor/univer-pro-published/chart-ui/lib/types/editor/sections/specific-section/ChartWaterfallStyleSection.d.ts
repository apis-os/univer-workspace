import type { ChartNumberFormatFieldComponent } from '../../atoms/common/ChartNumberFormatAtom';
import { ChartBorderDashType, ChartWaterfallStyleTarget, LabelContentType, SeriesLabelPosition } from '@univerjs-pro/engine-chart';
export interface IChartWaterfallStyleDefaultValues {
    borderDashType: ChartBorderDashType;
    borderOpacity: number;
    borderWidth: number;
    connector: boolean;
    fillOpacity: number;
    labelContentType: LabelContentType;
    labelPosition: SeriesLabelPosition;
    labelVisible: boolean;
    textColor: string;
}
export declare const DEFAULT_CHART_WATERFALL_STYLE_VALUES: IChartWaterfallStyleDefaultValues;
export interface IChartWaterfallBucketNameContext {
    isAllSeries: boolean;
    seriesName: string;
    target: ChartWaterfallStyleTarget;
}
export declare function ChartWaterfallStyleSection(props: {
    defaultValues: IChartWaterfallStyleDefaultValues;
    getDefaultBucketName?: (context: IChartWaterfallBucketNameContext) => string;
    NumberFormatField?: ChartNumberFormatFieldComponent;
    selectedSeriesId?: string;
    showBucketName?: (context: IChartWaterfallBucketNameContext) => boolean;
}): import("react").JSX.Element | null;
