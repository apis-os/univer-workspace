import { ChartTypeBits } from './enum';
export declare const chartBitsUtils: {
    has(bit: number, attribute: number): boolean;
    baseOn(bit: number, base: number): boolean;
    remove(bit: number, attribute: number): number;
    chartBitToString(bit: ChartTypeBits): "" | "line" | "bar" | "pie" | "radar" | "scatter" | "combination" | "wordCloud" | "funnel" | "sankey" | "heatmap" | "boxplot" | "candlestick" | "treemap" | "sunburst" | "gauge" | "chord" | "graph";
};
export declare function mergeChartConfig<T extends object>(current: T | undefined, update: Partial<T>): T;
export declare const setProperty: (data: Record<string, any>, propertyPath: string, value: any) => void;
/**
 * Set graphic element to data.
 * because we use graphic element to draw watermark title, so we need to set it to data.
 */
export declare const setGraphicToSpec: (spec: Record<string, any>, graphicElements: unknown[]) => void;
export declare const translateAngleToRadian: (angle: number) => number;
/**
 * We define the chart type can use trend line. In excel it also can use for combined chart ro bar chart.
 * @param {ChartTypeBits} chartType The test chart type.
 * @returns {boolean} If the chart type can use trend line, return true, otherwise return false.
 */
export declare const chartTypeCanUseTrendLine: (chartType: ChartTypeBits) => boolean;
export declare function isNegativeRedCached(fmt: string): boolean | undefined;
