import type { IBasePivotChartConfig, IBasePivotViewConfig } from '@univerjs-pro/bases-dashboard';
import type { IChartModelBinding, IChartModelUpdate } from '@univerjs-pro/engine-chart';
export interface IBasePivotChartEditorProps {
    config: IBasePivotViewConfig;
    runtime: IChartModelBinding;
    tableName: string;
    onChange: (patch: Partial<IBasePivotViewConfig>) => void;
}
export declare const BASE_PIVOT_CHART_DEFAULT_VALUES: {
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
    readonly funnel: import("@univerjs-pro/chart-ui").IChartFunnelDefaultValues;
    readonly heatmap: import("@univerjs-pro/chart-ui").IChartHeatmapDefaultValues;
    readonly indicatorLine: import("@univerjs-pro/chart-ui").IChartIndicatorLineDefaultValues;
    readonly legend: import("@univerjs-pro/chart-ui").IChartLegendDefaultValues;
    readonly lineAndArea: import("@univerjs-pro/chart-ui").IChartLineAndAreaDefaultValues;
    readonly pareto: import("@univerjs-pro/chart-ui").IChartParetoDefaultValues;
    readonly pie: import("@univerjs-pro/chart-ui").IChartPieDefaultValues;
    readonly radar: import("@univerjs-pro/chart-ui").IChartRadarDefaultValues;
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
    readonly series: {
        readonly radarFillOpacity: 0.2;
        readonly rightAxis: {
            readonly ltr: false;
            readonly rtl: boolean;
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
        readonly useSubtotal: true;
        readonly stackType: import("@univerjs-pro/engine-chart").WaterfallStackTypeEnum;
    };
    readonly waterfallStyle: import("@univerjs-pro/chart-ui").IChartWaterfallStyleDefaultValues;
    readonly wordCloud: import("@univerjs-pro/chart-ui").IChartWordCloudDefaultValues;
};
export declare function BasePivotChartEditor(props: IBasePivotChartEditorProps): import("react").JSX.Element;
export declare function applyBasePivotChartConfigUpdate(chart: IBasePivotChartConfig, update: IChartModelUpdate): IBasePivotChartConfig;
export declare function BasePivotGradientFillField(): import("react").JSX.Element;
export declare function BasePivotChartStylePanel(): import("react").JSX.Element;
