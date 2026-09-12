import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { RxDisposable } from '@univerjs/core';
import { IContextMenuService, IMenuManagerService } from '@univerjs/ui';
import { ISlideDrawingStateService } from '../services/slide-drawing-state.service';
import { SlideHitTestService } from '../services/slide-hit-test.service';
import { SlideTextEditingService } from '../slide-editor/services/slide-text-editing.service';
export declare class SlideContextMenuRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _hitTestService;
    private readonly _contextMenuService;
    private readonly _menuManagerService;
    private readonly _drawingStateService;
    private readonly _slideTextEditingService;
    constructor(_renderContext: IRenderContext<UnitModel>, _hitTestService: SlideHitTestService, _contextMenuService: IContextMenuService, _menuManagerService: IMenuManagerService, _drawingStateService: ISlideDrawingStateService, _slideTextEditingService: SlideTextEditingService);
    private _hasMenuSchema;
    private _openMenuAt;
    private readonly _handleKeyboardContextMenu;
    private _init;
}
