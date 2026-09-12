import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { ISlideDrawingStateService } from '../services/slide-drawing-state.service';
import { SlideHitTestService } from '../services/slide-hit-test.service';
/**
 * Controller for text editing on slide drawings.
 *
 * Handles:
 * - Double-click detection on drawing objects
 * - Entering and exiting text edit mode
 * - Delegating actual editor interactions to the editor service
 *
 * Text editing is a distinct mode from selection:
 * - When in edit mode, keyboard input is consumed by the editor
 * - Selection state is preserved but transformer should not be active
 * - ESC or click outside exits edit mode
 */
export declare class SlideTextEditorController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _instanceSrv;
    private readonly _hitTestSrv;
    private readonly _stateSrv;
    private readonly _slideDrawingSrv;
    constructor(_renderContext: IRenderContext<UnitModel>, _instanceSrv: IUniverInstanceService, _hitTestSrv: SlideHitTestService, _stateSrv: ISlideDrawingStateService, _slideDrawingSrv: ISlideDrawingService);
    private _init;
}
