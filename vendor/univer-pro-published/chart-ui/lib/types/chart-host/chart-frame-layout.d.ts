import type { IChartHostStyle } from '@univerjs-pro/engine-chart';
/** Controls whether the frame border consumes content space or overlays it. */
export declare enum ChartFrameContentMode {
    /** Insets the chart content by the normalized frame border width. */
    Inset = "inset",
    /** Keeps chart content at the outer bounds and paints the border above it. */
    Overlay = "overlay"
}
/** Immutable rectangle in chart-host logical coordinates. */
interface IChartFrameRect {
    /** Horizontal offset from the chart host origin. */
    readonly left: number;
    /** Vertical offset from the chart host origin. */
    readonly top: number;
    /** Rectangle width. */
    readonly width: number;
    /** Rectangle height. */
    readonly height: number;
}
/** Input consumed by {@link ChartFrameLayout.resolve}. */
interface IChartFrameLayoutInput {
    /** Unscaled chart-host bounds. */
    logicalOuterRect: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    /** Render scale applied independently on each axis. */
    scale: {
        scaleX: number;
        scaleY: number;
    };
    /** Normalized visual style supplied by the owning chart host. */
    hostStyle: IChartHostStyle;
    /** Whether the frame border consumes content space. */
    contentMode: ChartFrameContentMode;
}
/** Immutable geometry returned by {@link ChartFrameLayout.resolve}. */
export interface IChartFrameLayoutResult {
    /** Unscaled outer chart-host bounds. */
    readonly logicalOuterRect: IChartFrameRect;
    /** Unscaled bounds available to chart content. */
    readonly logicalContentRect: IChartFrameRect;
    /** Scaled outer bounds used by the rendered frame. */
    readonly renderedOuterRect: IChartFrameRect;
    /** Scaled bounds available to rendered chart content. */
    readonly renderedContentRect: IChartFrameRect;
    /** Border/content relationship used to resolve the geometry. */
    readonly contentMode: ChartFrameContentMode;
}
/** Resolves immutable logical and rendered rectangles for a chart host frame. */
export declare class ChartFrameLayout {
    /** Resolves frame geometry for the requested scale, border style, and content mode. */
    static resolve(input: IChartFrameLayoutInput): IChartFrameLayoutResult;
}
export {};
