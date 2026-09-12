import type { ChartImageSource, ChartRuntimeStyle, ChartStyle, IChartHostBorderStyle, IChartHostRect, IChartHostStyle } from '../../types';
type ChartHostStyleInput = ChartStyle & Partial<Pick<ChartRuntimeStyle, 'runtime'>>;
export interface IResolveChartHostFrameStyleInput {
    style: ChartHostStyleInput;
    getRenderColor?: (color: string) => string;
    fallbackStroke?: string | null;
    defaultStrokeWidth?: number;
    defaultRadius?: number;
    enableFallbackStroke?: boolean;
}
/**
 * Shared visual defaults for chart containers across Sheet, Doc, Slide, and Board.
 * Consumers should still prefer a chart's explicit border color.
 */
export declare const CHART_HOST_DEFAULT_BORDER_COLOR = "#D1D5DB";
export declare const CHART_HOST_DEFAULT_BORDER_RADIUS = 8;
export declare const CHART_HOST_DEFAULT_BORDER_WIDTH = 1;
export interface IResolveDefaultChartHostFrameStyleInput {
    style: ChartHostStyleInput;
    getRenderColor?: (color: string) => string;
    fallbackStroke?: string | null;
}
interface IChartHostContentRect extends IChartHostRect {
    left: number;
    top: number;
}
export declare function resolveChartHostFrameStyle(input: IResolveChartHostFrameStyleInput): IChartHostStyle;
/**
 * Resolves the standard chart frame used when an author has not chosen a custom border.
 * `getRenderColor` keeps the fallback frame in sync with the active light or dark theme.
 */
export declare function resolveDefaultChartHostFrameStyle(input: IResolveDefaultChartHostFrameStyleInput): IChartHostStyle;
export declare function getChartHostFrameContentRect(outer: IChartHostRect, hostStyle: IChartHostStyle): IChartHostContentRect;
export declare function shouldComposeChartHostFrame(hostStyle: IChartHostStyle): boolean;
export declare function composeChartHostFrameImage(image: ChartImageSource, outer: IChartHostRect, hostStyle: IChartHostStyle): ChartImageSource;
/**
 * Resolves the canonical border consumed by every chart host frame renderer.
 * Missing or empty colors and non-positive or non-finite widths disable the border.
 */
export declare function resolveChartHostFrameBorder(hostStyle: IChartHostStyle): Required<IChartHostBorderStyle> | undefined;
export {};
