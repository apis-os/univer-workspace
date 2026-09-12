import type { ChartColor, IChartLinearGradient } from '../../../../chart-builder/chart-color';
declare const ECHARTS_LINEAR_GRADIENT_TYPE = "linear";
export interface IEChartsLinearGradientColor {
    type: typeof ECHARTS_LINEAR_GRADIENT_TYPE;
    x: number;
    y: number;
    x2: number;
    y2: number;
    global: false;
    colorStops: Array<{
        offset: number;
        color: string;
    }>;
}
export type ChartRenderColor = string | IEChartsLinearGradientColor;
type RenderColorResolver = (color: string) => string;
type AutoGradientFactory = (color: string) => IChartLinearGradient;
export declare const keepRenderColor: RenderColorResolver;
export declare function getChartColorRepresentative(color: ChartColor): string;
export declare function toEChartsColor(color: ChartColor, getRenderColor: RenderColorResolver): ChartRenderColor;
export declare function resolveChartColor(color: ChartColor, autoGradientFill: boolean, createAutoGradient: AutoGradientFactory, getRenderColor: RenderColorResolver): ChartRenderColor;
export declare function resolveChartColorRepresentative(color: ChartColor, getRenderColor: RenderColorResolver): string;
export {};
