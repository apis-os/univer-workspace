import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { RxDisposable } from '@univerjs/core';
import { SlideCanvasPopManagerService } from '../../services/slide-canvas-pop-manager.service';
import { ISlideDrawingStateService } from '../../services/slide-drawing-state.service';
export declare class SlideSmartArtTextPaneRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _slideCanvasPopManagerService;
    private readonly _slideDrawingStateService;
    private readonly _slideDrawingService;
    private _popupDisposable;
    private _popupKey;
    constructor(_renderContext: IRenderContext<UnitModel>, _slideCanvasPopManagerService: SlideCanvasPopManagerService, _slideDrawingStateService: ISlideDrawingStateService, _slideDrawingService: ISlideDrawingService);
    dispose(): void;
    private _syncPopup;
    private _attachPopup;
    private _clearPopup;
}
