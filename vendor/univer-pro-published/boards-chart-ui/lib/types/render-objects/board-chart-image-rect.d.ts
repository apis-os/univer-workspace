import type { IBoardChartElement } from '@univerjs-pro/boards';
import type { IImageProps, IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import type { IBoardChartFrameStyle } from '../common/board-chart-frame-style';
import { Image } from '@univerjs/engine-render';
export declare const BOARD_CHART_PLACEHOLDER_URL: string;
export interface IBoardChartImageRectProps extends IImageProps {
    element: IBoardChartElement;
    frameStyle: IBoardChartFrameStyle;
}
export declare class BoardChartImageRect extends Image {
    private _element;
    private _frameStyle;
    constructor(key: string, props: IBoardChartImageRectProps);
    updateElement(element: IBoardChartElement): void;
    updateFrameStyle(frameStyle: IBoardChartFrameStyle): void;
    getElement(): IBoardChartElement;
    getFrameStyle(): IBoardChartFrameStyle;
    changeChartSource(url: string): void;
    protected _draw(ctx: UniverRenderingContext, _bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
    private _drawChartImage;
    private _drawFrameStroke;
    private _notifyScene;
    private _attachNativeLoadHandlers;
}
