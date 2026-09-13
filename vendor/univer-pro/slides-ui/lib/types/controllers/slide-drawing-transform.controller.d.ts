import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { ICommandService, Injector, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { SlideTextEditingService } from '../slide-editor/services/slide-text-editing.service';
/**
 * Controller responsible for writing Transformer geometry changes back to
 * the slide drawing data model.
 *
 * Separation of concerns:
 * - `SlideDrawingSelectionController` — owns Transformer init, attachment to
 *   render objects, and focus-state management.
 * - `SlideDrawingTransformController` (this) — listens to `changeEnd$` and
 *   persists the updated geometry into `ISlideDrawingService`.
 */
export declare class SlideDrawingTransformController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _injector;
    private readonly _instanceSrv;
    private readonly _slideDrawingService;
    private readonly _commandService;
    private readonly _slideTextEditingService;
    private _lastRealtimeSyncAt;
    private readonly _realtimeSyncIntervalMs;
    private readonly _transformStartRects;
    constructor(_renderContext: IRenderContext<UnitModel>, _injector: Injector, _instanceSrv: IUniverInstanceService, _slideDrawingService: ISlideDrawingService, _commandService: ICommandService, _slideTextEditingService: SlideTextEditingService);
    private _init;
    private _subscribeToTransformer;
    private _syncTransformToData;
    private _buildTransformPatches;
    private _getActiveCropImageObjectKeys;
    private _buildSingleTransformPatch;
    private _resolveTextBoxResizePolicy;
    private _collectTransformedGroupDescendants;
    private _collectGroupDescendantsRecursively;
    private _applyTransformPatches;
    private _applyRealtimePreviewPatches;
    private _applyRealtimePreviewPatch;
    private _isTransformAlreadyApplied;
    private _updateRealtimeShapeElement;
    private _isConnectorLineElement;
    private _isSmartArtElement;
    private _isTinyConnectorLineBodyMove;
    private _getObjectLocalPosition;
    private _isPositionOnlyObjectTransformChange;
    private _isBelowConnectorBodyMoveThreshold;
    private _getPageOffset;
}
