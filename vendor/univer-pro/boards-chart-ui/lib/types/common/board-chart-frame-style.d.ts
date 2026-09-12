import type { IBoardChartElement } from '@univerjs-pro/boards';
import type { ChartStyle } from '@univerjs-pro/engine-chart';
export declare const BOARD_CHART_LIGHT_FALLBACK_BORDER = "#D1D5DB";
export declare const BOARD_CHART_DARK_FALLBACK_BORDER = "rgba(255, 255, 255, 0.18)";
export declare const BOARD_CHART_DEFAULT_FRAME_RADIUS = 8;
export declare const BOARD_CHART_DEFAULT_FRAME_STROKE_WIDTH = 1;
export declare const BOARD_CHART_SELECTION_OUTLINE_STROKE_WIDTH = 1;
export interface IBoardChartFrameStyle {
    fill: string;
    stroke: string;
    strokeWidth: number;
    radius: number;
}
export interface IResolveBoardChartFrameStyleInput {
    chartStyle?: ChartStyle | null;
    chartElement?: Pick<IBoardChartElement, 'stroke'> | null;
    hostFill?: string;
    themeBorderColor?: string | null;
    isDarkMode?: boolean;
}
export declare function resolveBoardChartFrameStyle(input: IResolveBoardChartFrameStyleInput): IBoardChartFrameStyle;
export declare function getBoardChartContentRect(outer: {
    width: number;
    height: number;
}, frame: IBoardChartFrameStyle): {
    left: number;
    top: number;
    width: number;
    height: number;
};
export declare function getBoardChartFrameStrokeRect(outer: {
    width: number;
    height: number;
}, frame: IBoardChartFrameStyle): {
    left: number;
    top: number;
    width: number;
    height: number;
    radius: number;
};
