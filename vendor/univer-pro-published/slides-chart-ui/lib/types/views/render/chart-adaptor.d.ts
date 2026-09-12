import type { IShapeLineStyle } from '@univerjs-pro/engine-shape';
import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { IRenderConvertContext } from '@univerjs-pro/slides-ui';
import type { Nullable } from '@univerjs/core';
import type { BaseObject, IViewportInfo, UniverRenderingContext } from '@univerjs/engine-render';
import { ObjectAdaptor, SlideImageObject } from '@univerjs-pro/slides-ui';
import { SlideChartHostProviderService } from '../../services/slide-chart-host-provider.service';
type SlideChartImageObjectProps = ConstructorParameters<typeof SlideImageObject>[1];
export declare class SlideChartImageObject extends SlideImageObject {
    private _chartStroke?;
    private _hideImage;
    constructor(key: string, props: SlideChartImageObjectProps);
    setChartStroke(stroke?: IShapeLineStyle): void;
    setImageHidden(hidden: boolean): void;
    changeChartSource(url: string): void;
    protected _draw(ctx: UniverRenderingContext, bounds?: IViewportInfo, renderWidth?: number, renderHeight?: number): void;
    private _drawChartStroke;
    private _notifyScene;
    private _attachNativeLoadHandlers;
}
export declare class SlideChartObjectAdaptor extends ObjectAdaptor {
    private readonly _hostProvider;
    zIndex: number;
    constructor(_hostProvider: SlideChartHostProviderService);
    check(drawing: ISlideDrawing): boolean;
    convert(drawing: ISlideDrawing, ctx: IRenderConvertContext): Nullable<BaseObject>;
}
export {};
