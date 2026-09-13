import type { IChartEditPanelRoute } from '@univerjs-pro/chart-ui';
import { ChartEditPanelSection } from '@univerjs-pro/chart-ui';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export declare const BOARD_CHART_EDIT_PANEL_COMPONENT = "board-chart.edit-panel";
export declare const BOARD_CHART_EDITOR_DEFAULT_VALUES: {
    readonly axis: {
        readonly primaryGridLineVisible: false;
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
    readonly legend: import("@univerjs-pro/chart-ui").IChartLegendDefaultValues;
    readonly lineAndArea: import("@univerjs-pro/chart-ui").IChartLineAndAreaDefaultValues;
    readonly pareto: import("@univerjs-pro/chart-ui").IChartParetoDefaultValues;
    readonly funnel: import("@univerjs-pro/chart-ui").IChartFunnelDefaultValues;
    readonly heatmap: import("@univerjs-pro/chart-ui").IChartHeatmapDefaultValues;
    readonly indicatorLine: import("@univerjs-pro/chart-ui").IChartIndicatorLineDefaultValues;
    readonly pie: {
        readonly doughnutHole: 0;
        readonly pieHole: 0;
        readonly borderColor: string;
        readonly hasPaddingAngle: boolean;
        readonly isHalfPie: boolean;
        readonly labelContentType: import("@univerjs-pro/engine-chart").LabelContentType;
        readonly labelPosition: import("@univerjs-pro/engine-chart").PieLabelPosition;
        readonly labelVisible: boolean;
        readonly rosePie: boolean;
        readonly showLabelLine: boolean;
        readonly textColor: string;
        readonly valueScale: number;
    };
    readonly relation: {
        readonly useValueAsSymbolSize: true;
        readonly circularLabelRotation: boolean;
        readonly emphasisEnabled: boolean;
        readonly force: {
            gravity: number;
            repulsion: number;
        };
        readonly layout: import("@univerjs-pro/engine-chart").RelationChartLayoutEnum;
        readonly nodeShape: import("@univerjs-pro/engine-chart").LinePointShape;
    };
    readonly radar: import("@univerjs-pro/chart-ui").IChartRadarDefaultValues;
    readonly series: {
        readonly radarFillOpacity: 1;
        readonly rightAxis: {
            readonly ltr: false;
            readonly rtl: false;
        };
        readonly borderDashType: import("@univerjs-pro/engine-chart").ChartBorderDashType;
        readonly borderOpacity: number;
        readonly borderWidth: number;
        readonly color: string;
        readonly labelContentType: import("@univerjs-pro/engine-chart").LabelContentType;
        readonly labelFontSize: number;
        readonly labelPosition: import("@univerjs-pro/engine-chart").SeriesLabelPosition;
        readonly labelVisible: boolean;
        readonly lineOrAreaBorderWidth: number;
        readonly pointShape: import("@univerjs-pro/engine-chart").LinePointShape;
        readonly pointSize: number;
        readonly radarBorderWidth: number;
        readonly scatterPointSize: number;
        readonly seriesFillOpacity: number;
    };
    readonly style: import("@univerjs-pro/chart-ui").IChartStyleDefaultValues;
    readonly titles: import("@univerjs-pro/chart-ui").IChartTitleDefaultValues;
    readonly trendline: import("@univerjs-pro/chart-ui").IChartTrendlineDefaultValues;
    readonly waterfall: {
        readonly useSubtotal: false;
        readonly stackType: import("@univerjs-pro/engine-chart").WaterfallStackTypeEnum;
    };
    readonly waterfallStyle: import("@univerjs-pro/chart-ui").IChartWaterfallStyleDefaultValues;
    readonly wordCloud: import("@univerjs-pro/chart-ui").IChartWordCloudDefaultValues;
};
export interface IBoardChartEditPanelProps {
    unitId: string;
    subUnitId: string;
    elementId: string;
    chartId: string;
}
export declare function getBoardStyleSectionIds(chartType: ChartTypeBits, hasRightAxis: boolean): ChartEditPanelSection[];
export declare function BoardStylePanel(props: {
    route?: IChartEditPanelRoute;
}): import("react").JSX.Element;
export declare function BoardChartEditPanel({ unitId, subUnitId, elementId, chartId }: IBoardChartEditPanelProps): import("react").JSX.Element | null;
