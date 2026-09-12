import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule, IWheelEvent } from '@univerjs/engine-render';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { ICommandService, IConfigService, Injector, IUniverInstanceService, RxDisposable, ThemeService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare const SLIDE_MAIN_VIEWPORT_KEY = "viewMain";
export declare const SLIDE_BG_RECT_KEY = "slide-bg-rect";
export declare const SLIDE_PAGE_RECT_KEY = "slide-page-rect";
export declare function resolveSlideWheelZoomRatio(currentRatio: number, event: Pick<IWheelEvent, 'ctrlKey' | 'metaKey' | 'deltaMode' | 'deltaX' | 'deltaY' | 'wheelDelta'>): number | null;
export declare function shouldInitializeSlideCanvasFitZoom(options: {
    isEmbedCanvasHost: boolean;
    isEmbedPreviewCanvas: boolean;
    canvasHostInitialized: boolean;
    hasPersistedZoomRatio: boolean;
}): boolean;
/**
 * IRenderModule for the slide main canvas.
 *
 * Sets up:
 * - A full-area Viewport with mouse-wheel scrolling
 * - A ScrollBar attached to the viewport
 * - A grey background Rect that fills the scene
 * - A white slide page Rect centred in the scene
 * - The engine render loop
 *
 * The page Rect is repositioned whenever the engine container changes size
 * (via `engine.onTransformChange$`), so the slide stays centred after the
 * canvas div is attached in the React component.
 */
export declare class SlideRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _injector;
    private readonly _instanceSrv;
    private readonly _renderManagerService;
    private readonly _commandService;
    private readonly _configService;
    private readonly _slideDrawingService;
    private readonly _themeService;
    private _pageOffsetLeft;
    private _pageOffsetTop;
    private _pageWidth;
    private _pageHeight;
    private _sceneType;
    private _showPlaceholder;
    private readonly _renderObjectMap;
    private readonly _objectProvider;
    /** True while a real-time transform-preview mutation is in flight. Suppresses full redraws from update$. */
    private _realtimePreviewMode;
    constructor(_renderContext: IRenderContext<UnitModel>, _injector: Injector, _instanceSrv: IUniverInstanceService, _renderManagerService: IRenderManagerService, _commandService: ICommandService, _configService: IConfigService, _slideDrawingService: ISlideDrawingService, _themeService: ThemeService);
    private _init;
    private _isTransformOnlyElementUpdate;
    private _resolveElementTransform;
    private _isEquivalentSlideElement;
    private _normalizeSlideElementForCompare;
    private _isEquivalentDrawingTransform;
    private _normalizeDrawingTransformForCompare;
    private _resolveCurrentPageSize;
    private _shouldRefreshPageSizeChange;
    private _shouldRedrawTableChange;
    private _shouldRedrawOrderChange;
    private _clearRenderedSlideObjects;
    private _renderActiveSlideDrawings;
    dispose(): void;
}
