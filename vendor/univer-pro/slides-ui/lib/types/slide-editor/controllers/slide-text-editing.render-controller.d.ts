import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { ShapeFormulaService } from '@univerjs-pro/shape-editor';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { ICommandService, IContextService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { SlideHitTestService } from '../../services/slide-hit-test.service';
import { SlideTextEditingService } from '../services/slide-text-editing.service';
export declare class SlideTextEditingRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _instanceService;
    private readonly _slideDrawingService;
    private readonly _hitTestService;
    private readonly _slideTextEditingService;
    private readonly _shapeFormulaService;
    private readonly _contextService;
    private readonly _commandService;
    private _ignoreFocusChangesUntil;
    constructor(_renderContext: IRenderContext<UnitModel>, _instanceService: IUniverInstanceService, _slideDrawingService: ISlideDrawingService, _hitTestService: SlideHitTestService, _slideTextEditingService: SlideTextEditingService, _shapeFormulaService: ShapeFormulaService, _contextService: IContextService, _commandService: ICommandService);
    private _shouldIgnoreFocusChanges;
    private _shouldIgnorePointerFocusChanges;
    private _init;
    private _clearEditingOnObject;
    private _openSmartArtImagePicker;
    private _setEditingOnObject;
    private _enterSmartArtEditing;
    private _enterEditing;
    private _getDrawingByObjectKey;
}
