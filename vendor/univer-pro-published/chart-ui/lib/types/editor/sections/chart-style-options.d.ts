import { ChartBorderDashType, LinePointShape } from '@univerjs-pro/engine-chart';
export declare const CHART_BORDER_DASH_OPTION_DEFINITIONS: readonly [{
    readonly value: ChartBorderDashType.Solid;
    readonly labelKey: "chart-ui.series.solid";
}, {
    readonly value: ChartBorderDashType.Dashed;
    readonly labelKey: "chart-ui.common.dashed";
}, {
    readonly value: ChartBorderDashType.Dotted;
    readonly labelKey: "chart-ui.common.dotted";
}];
export declare const CHART_POINT_SHAPE_OPTION_DEFINITIONS: readonly [{
    readonly value: LinePointShape.Circle;
    readonly labelKey: "chart-ui.common.circle";
}, {
    readonly value: LinePointShape.Square;
    readonly labelKey: "chart-ui.series.square";
}, {
    readonly value: LinePointShape.Triangle;
    readonly labelKey: "chart-ui.common.triangle";
}, {
    readonly value: LinePointShape.Diamond;
    readonly labelKey: "chart-ui.common.diamond";
}, {
    readonly value: LinePointShape.Rect;
    readonly labelKey: "chart-ui.series.rect";
}, {
    readonly value: LinePointShape.RoundRect;
    readonly labelKey: "chart-ui.series.roundRect";
}, {
    readonly value: LinePointShape.Pin;
    readonly labelKey: "chart-ui.series.pin";
}, {
    readonly value: LinePointShape.Arrow;
    readonly labelKey: "chart-ui.common.arrow";
}, {
    readonly value: LinePointShape.None;
    readonly labelKey: "chart-ui.common.none";
}, {
    readonly value: LinePointShape.EmptyCircle;
    readonly labelKey: "chart-ui.series.emptyCircle";
}, {
    readonly value: LinePointShape.EmptySquare;
    readonly labelKey: "chart-ui.series.emptySquare";
}, {
    readonly value: LinePointShape.EmptyTriangle;
    readonly labelKey: "chart-ui.series.emptyTriangle";
}, {
    readonly value: LinePointShape.EmptyDiamond;
    readonly labelKey: "chart-ui.series.emptyDiamond";
}, {
    readonly value: LinePointShape.EmptyRect;
    readonly labelKey: "chart-ui.series.emptyRect";
}, {
    readonly value: LinePointShape.EmptyRoundRect;
    readonly labelKey: "chart-ui.series.emptyRoundRect";
}, {
    readonly value: LinePointShape.EmptyPin;
    readonly labelKey: "chart-ui.series.emptyPin";
}, {
    readonly value: LinePointShape.EmptyArrow;
    readonly labelKey: "chart-ui.series.emptyArrow";
}];
export declare const chartGridlineWidthValues: readonly [1, 2, 3];
export declare const CHART_DEFAULT_OPTION_VALUE = "__default__";
export declare const CHART_DEFAULT_AXIS_LABEL_ROTATION = 0;
export declare const CHART_DEFAULT_GRIDLINE_WIDTH = 1;
export declare const CHART_EDITOR_MIN_FONT_SIZE = 8;
export declare const CHART_NON_NEGATIVE_VALUE_MIN = 0;
export declare const CHART_OPACITY_RANGE: {
    readonly max: 1;
    readonly min: 0;
    readonly step: 0.1;
};
export declare const CHART_PIE_HOLE_VALUES: readonly [0, 0.25, number, 0.75];
export declare function toChartNumberOptionValue(value: number | null | undefined): string;
export declare function fromChartNumberOptionValue(value: string): number | null;
export declare function prependChartDefaultOption<TLabel>(label: TLabel, options: ReadonlyArray<{
    label: TLabel;
    value: string;
}>): Array<{
    label: TLabel;
    value: string;
}>;
export declare function buildChartAxisLabelRotationOptions(defaultLabel: string): {
    label: string;
    value: string;
}[];
export declare function buildChartTrendlineOrderOptions(): {
    label: string;
    value: string;
}[];
export declare function buildChartGridlineWidthOptions(values?: readonly number[]): {
    label: string;
    value: string;
}[];
