import type { LinePointShape } from '@univerjs-pro/engine-chart';
import type { ReactNode } from 'react';
import type { IChartEditorSeriesState } from '../../services/chart-view-state';
import type { ChartNumberFormatFieldComponent } from '../atoms/common/ChartNumberFormatAtom';
import { ChartBorderDashType, ChartSeriesTypeString, LabelContentType, SeriesLabelPosition } from '@univerjs-pro/engine-chart';
export interface IChartSeriesDefaultValues {
    borderDashType: ChartBorderDashType;
    borderOpacity: number;
    borderWidth: number;
    color: string;
    labelContentType: LabelContentType;
    labelFontSize: number;
    labelPosition: SeriesLabelPosition;
    labelVisible: boolean;
    lineOrAreaBorderWidth: number;
    pointShape: LinePointShape;
    pointSize: number;
    radarFillOpacity: number;
    radarBorderWidth: number;
    rightAxis: {
        ltr: boolean;
        rtl: boolean;
    };
    scatterPointSize: number;
    seriesFillOpacity: number;
}
export declare const DEFAULT_CHART_SERIES_VALUES: IChartSeriesDefaultValues;
export declare function resolveCombinationSeriesType(series: readonly IChartEditorSeriesState[], selector: number | null): ChartSeriesTypeString | '';
export declare function ChartSeriesDataPointFields(): import("react").JSX.Element | null;
export declare function ChartSeriesSelector(): import("react").JSX.Element;
export declare function ChartSeriesTypeField(props: {
    individualOnly?: boolean;
}): import("react").JSX.Element | null;
export declare function ChartSeriesRightAxisField(): import("react").JSX.Element;
export declare function ChartSeriesFillFields(): import("react").JSX.Element;
export declare function ChartSeriesBorderFields(props: {
    showColor?: boolean;
    showOpacity?: boolean;
}): import("react").JSX.Element;
export declare function ChartSeriesPointFields(props: {
    showColor?: boolean;
}): import("react").JSX.Element;
export declare function ChartSeriesLabelVisibilityField(): import("react").JSX.Element;
export declare function ChartSeriesLabelContentField(): import("react").JSX.Element;
export declare function ChartSeriesLabelPositionField(): import("react").JSX.Element;
export declare function ChartSeriesLabelFormatField(): import("react").JSX.Element;
export declare function ChartSeriesLabelFontFields(): import("react").JSX.Element;
export declare function ChartSeriesLabelFontSizeField(): import("react").JSX.Element;
export declare function ChartSeriesDataLabelFields(): import("react").JSX.Element;
export declare function ChartSeriesRoot(props: {
    children: ReactNode;
    defaultValues: IChartSeriesDefaultValues;
    NumberFormatField?: ChartNumberFormatFieldComponent;
    selectedSeriesId?: string;
}): import("react").JSX.Element;
export declare function ChartSeriesSection(props: {
    defaultValues: IChartSeriesDefaultValues;
    NumberFormatField?: ChartNumberFormatFieldComponent;
    selectedSeriesId?: string;
}): import("react").JSX.Element;
