import type { SlideModel } from '@univerjs-pro/slides';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { ICommandService, Injector, IUniverInstanceService, RxDisposable } from '@univerjs/core';
/**
 * Shows geometric-adjustment handles (调节点) for the currently focused slide Shape.
 *
 * When a Shape element is selected (focused via `ISlideDrawingService.focus$`) and that
 * shape has adjustment handles defined in its preset geometry, this controller:
 *
 * 1. Reads the adjustment-handle positions from `ShapeModel.getDrawingPoints()`.
 * 2. Creates a `SlideAdjustPointObject` for each handle in the scene.
 * 3. On pointer-drag of a handle, recomputes all bound values via `ShapeModel.calcAdjValues()`
 *    and updates the drawing data in `ISlideDrawingService`.
 *
 * The controller also handles Image elements — when an image has a `prstGeom` set (for
 * shape-based clipping) the same adjustment handles apply to the clip shape.
 */
export declare class SlideShapeAdjustController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _injector;
    private readonly _instanceSrv;
    private readonly _slideDrawingService;
    private readonly _commandService;
    private _handles;
    private _activeFocusedDrawing;
    private _isAdjustHandleDragging;
    private _suspendHandleDisplay;
    private _refreshScheduled;
    constructor(_renderContext: IRenderContext<SlideModel>, _injector: Injector, _instanceSrv: IUniverInstanceService, _slideDrawingService: ISlideDrawingService, _commandService: ICommandService);
    private _init;
    private _createHandlesForDrawing;
    private _toLocalAdjustPoint;
    private _resolvePointerScenePoint;
    private _attachHandleEvent;
    private _subscribeToTransformerVisibility;
    private _subscribeToSceneLayoutChanges;
    private _scheduleRefreshActiveHandlesWithFollowUp;
    private _scheduleRefreshActiveHandles;
    private _refreshActiveHandles;
    private _hideHandlesForExternalAction;
    private _restoreHandlesAfterExternalAction;
    private _commitAdjValueUpdate;
    private _previewAdjValueUpdate;
    clearHandles(): void;
    /** Suspend adjustment-handle display (e.g. while a connector endpoint is being dragged). */
    suspendHandles(): void;
    /** Restore adjustment handles after a suspension (e.g. after connector endpoint drag ends). */
    restoreHandles(): void;
    private _clearHandles;
    private _getShapeModel;
    private _getOrCreateShapeModel;
    private _getPageOffset;
    private _createCoordTransform;
    private _safePositiveNumber;
}
