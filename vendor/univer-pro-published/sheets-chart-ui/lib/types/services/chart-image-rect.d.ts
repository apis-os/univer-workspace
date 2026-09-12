import type { ChartImageSource } from '@univerjs-pro/engine-chart';
import type { IRectProps, IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import { Rect } from '@univerjs/engine-render';
export declare class ChartImageRect extends Rect {
    private readonly _getImage;
    private readonly _shouldSuppressRender;
    private readonly _disposeImage;
    private _urlImage;
    private _url;
    private _requestedUrl;
    private _pendingUrlImage;
    constructor(key: string, config: IRectProps, _getImage: () => ChartImageSource | undefined, _shouldSuppressRender?: () => boolean, _disposeImage?: () => void);
    dispose(): void;
    render(mainCtx: UniverRenderingContext, bounds?: IViewportInfo): this;
    protected _draw(ctx: UniverRenderingContext, _bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
    private _drawChartFrame;
    isHit(coord: Vector2): boolean;
    private _drawChartImage;
    private _getDrawable;
    private _loadUrlImage;
    private _clearPendingUrlImage;
}
