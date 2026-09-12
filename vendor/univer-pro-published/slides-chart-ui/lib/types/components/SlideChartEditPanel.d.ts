import type { IChartEditPanelRoute } from '@univerjs-pro/chart-ui';
import { ChartEditPanelSection } from '@univerjs-pro/chart-ui';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export declare const SLIDE_CHART_EDIT_PANEL_COMPONENT = "slide-chart.edit-panel";
export declare const SLIDE_CHART_EDITOR_DEFAULT_VALUES: {
    readonly axis: {
        readonly primaryGridLineVisible: true;
        readonly secondaryGridLineVisible: true;
        readonly color: string;
        readonly dateAxisRotation: number;
        readonly gridlineWidth: number;
        readonly labelFontSize: number;
        readonly labelRotation: number;
        readonly labelVisible: boolean;
        readonly reverse: boolean;
        readonly tickLength: string;
        readonly tickPosition: import("@univerjs-pro/engine-chart").ChartAxisTickPosition;
        readonly tickVisible: boolean;
        readonly tickWidth: string;
    };
    readonly indicatorLine: import("@univerjs-pro/chart-ui").IChartIndicatorLineDefaultValues;
    readonly legend: import("@univerjs-pro/chart-ui").IChartLegendDefaultValues;
    readonly pareto: import("@univerjs-pro/chart-ui").IChartParetoDefaultValues;
    readonly pie: import("@univerjs-pro/chart-ui").IChartPieDefaultValues;
    readonly series: import("@univerjs-pro/chart-ui").IChartSeriesDefaultValues;
    readonly style: import("@univerjs-pro/chart-ui").IChartStyleDefaultValues;
    readonly titles: import("@univerjs-pro/chart-ui").IChartTitleDefaultValues;
    readonly waterfall: {
        readonly useSubtotal: true;
        readonly stackType: import("@univerjs-pro/engine-chart").WaterfallStackTypeEnum;
    };
    readonly waterfallStyle: import("@univerjs-pro/chart-ui").IChartWaterfallStyleDefaultValues;
    readonly wordCloud: import("@univerjs-pro/chart-ui").IChartWordCloudDefaultValues;
};
export interface ISlideChartEditPanelProps {
    unitId: string;
    subUnitId?: string;
    drawingId?: string;
    chartId: string;
}
export declare function getSlideStyleSectionIds(chartType: ChartTypeBits, hasRightAxis?: boolean): ChartEditPanelSection[];
export declare function SlideStylePanel(props: {
    unitId: string;
    subUnitId?: string;
    drawingId?: string;
    route?: IChartEditPanelRoute | null;
}): import("react").JSX.Element;
export declare function SlideChartEditPanel(props: ISlideChartEditPanelProps): import("react").JSX.Element | null;
