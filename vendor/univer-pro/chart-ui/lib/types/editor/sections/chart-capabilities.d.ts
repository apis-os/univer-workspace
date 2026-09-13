import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export declare enum ChartEditorCapability {
    Axes = 1,
    GeneralSeries = 2,
    IndicatorLine = 4,
    Legend = 8
}
export declare function chartTypeAllowsCategoryClear(chartType: ChartTypeBits): boolean;
export declare function chartTypeSupportsCapability(chartType: ChartTypeBits, capability: ChartEditorCapability): boolean;
export declare function chartTypeSupportsLineAndAreaStyle(chartType: ChartTypeBits): boolean;
export declare function chartTypeSupportsPlotArea(chartType: ChartTypeBits): boolean;
