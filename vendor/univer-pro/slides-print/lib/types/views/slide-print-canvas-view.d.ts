import type { ISlideDrawingService, SlideModel, SlidePage } from '@univerjs-pro/slides';
import type { Injector } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export declare class SlidePrintCanvasView extends Disposable {
    private readonly _injector;
    private readonly _slideDrawingService;
    private readonly _slideModel;
    private readonly _slidePage;
    private readonly _autoRender;
    private _container;
    private _root;
    private _engine;
    private _scene;
    private _objectProvider;
    private _renderObjectMap;
    private readonly _drawingTransformService;
    get container(): HTMLDivElement;
    get root(): HTMLDivElement;
    private get _pageSize();
    constructor(_injector: Injector, _slideDrawingService: ISlideDrawingService, _slideModel: SlideModel, _slidePage: SlidePage, _autoRender?: boolean);
    private _initRenderer;
    private _renderSlidePage;
    prepare(): void;
    render(): void;
    private _requestRender;
}
