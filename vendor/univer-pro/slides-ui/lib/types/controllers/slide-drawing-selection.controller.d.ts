import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import type { ISlideEmbedFloatingActivation } from '../services/slide-embed-integration.service';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { ICommandService, Injector, IPermissionService, IUniverInstanceService, RxDisposable, ThemeService } from '@univerjs/core';
import { ISlideEmbedFocusOwnerService } from '../embed-focus-owner';
import { ISlideDrawingStateService } from '../services/slide-drawing-state.service';
import { ISlideEmbedActivationService, ISlideEmbedFloatingActiveService } from '../services/slide-embed-integration.service';
import { SlideHitTestService } from '../services/slide-hit-test.service';
import { ISlideTransformerVisibilityService } from '../services/slide-transformer-visibility.service';
import { SlideTextEditingService } from '../slide-editor/services/slide-text-editing.service';
/**
 * SlideDrawingSelectionController v2
 *
 * Owns:
 * 1. Transformer initialization and per-object attachment.
 * 2. Routing pointer events (sourced from SlideHitTestService) into
 *    SlideDrawingStateService to update selection / focus states.
 * 3. Keeping the engine-render Transformer in sync with the service state
 *    (both directions, with circular-update guard).
 * 4. Implementing marquee / box-selection by subscribing to scene drag events.
 *
 * Selection modes handled:
 *   - Single click       -> select & focus one drawing.
 *   - Ctrl+click         -> toggle the drawing in the current selection.
 *   - Shift+click        -> range-select (z-order span between last focused and clicked).
 *   - Background click   -> clear selection.
 *   - Ctrl+A (shortcut)  -> delegate to SlideSelectAllOperation.
 *   - Tab / Shift+Tab    -> delegate to SlideTabSelectOperation.
 *   - Marquee drag       -> box-select (AABB overlap with scene objects).
 *   - Group child click  -> select parent group (native Transformer group behaviour).
 *   - Page change        -> clear selection.
 */
export declare class SlideDrawingSelectionController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _injector;
    private readonly _instanceSrv;
    private readonly _hitTestSrv;
    private readonly _stateSrv;
    private readonly _slideDrawingSrv;
    private readonly _transformerVisibilityService;
    private readonly _slideTextEditingService;
    private readonly _commandService;
    private readonly _permissionService;
    private readonly _themeService;
    private readonly _embedFocusOwnerService?;
    private readonly _embedFloatingActiveService?;
    private readonly _embedActivationService?;
    /** Prevents the circular path: service.focus$ -> transformer sync -> changeStart$ -> service. */
    private _isSyncingTransformer;
    /**
     * Native transformer pointer handlers may emit changeStart/changeEnd after
     * our Ctrl/Meta click has already toggled selection. Suppress that short
     * click echo so deselect stays deselected.
     */
    private _ignoreTransformerEventsUntil;
    private _attachScheduled;
    /** Preserve the native hidden-controls phase while a move, resize, or rotate gesture is active. */
    private _isTransformerGestureActive;
    private _marqueeRect;
    private _handledDrawingPointerDownEvent;
    private _pendingModifierToggleSubscriptions;
    constructor(_renderContext: IRenderContext<UnitModel>, _injector: Injector, _instanceSrv: IUniverInstanceService, _hitTestSrv: SlideHitTestService, _stateSrv: ISlideDrawingStateService, _slideDrawingSrv: ISlideDrawingService, _transformerVisibilityService: ISlideTransformerVisibilityService, _slideTextEditingService: SlideTextEditingService, _commandService: ICommandService, _permissionService: IPermissionService, _themeService: ThemeService, _embedFocusOwnerService?: ISlideEmbedFocusOwnerService | undefined, _embedFloatingActiveService?: ISlideEmbedFloatingActiveService | undefined, _embedActivationService?: ISlideEmbedActivationService | undefined);
    private _init;
    private _wirePointerEvents;
    private _wireSmartArtPartSelection;
    private _wireTransformerToState;
    private _syncFromTransformer;
    private _wireStateToTransformer;
    private _syncToTransformer;
    private _shouldShowTransformer;
    private _isSelectableDrawing;
    private _canEditDrawing;
    private _wireTextEditingGuard;
    private _wirePermissionChanges;
    private _wireMarqueeSelection;
    private _wireLifecycleEvents;
    private _scheduleAttach;
    private _scheduleAttachWithFollowUp;
    private _collectGroupChildIds;
    private _attachTransformerToDrawings;
    private _syncSelectionAfterDrawingAvailabilityChange;
    private _rangeSelect;
    private _getExistingMultiSelectionIds;
    private _deferModifierToggle;
    private _cancelPendingModifierToggle;
    private _handleBackgroundPointerDown;
    private _applyPointerSelection;
    private _focusUnitIfAllowed;
    private _clearActiveFloatingForHostDrawing;
    private _isNonFullscreenFloatingEmbedChildUnit;
    private _shouldIgnoreTransformerEvents;
    private _markDrawingPointerDownHandled;
    private _isHandledDrawingPointerDown;
    private _isPointerOnSelectedTransformerControl;
    private _isPointNearTransformerControl;
    private _clearTransformerSelection;
    private _normalizeRect;
    private _toScenePoint;
    private _getMarqueeHitIds;
    private _resolveMarqueeSelectionIds;
    private _getSceneObjectBounds;
    private _rectIntersects;
    private _rectContains;
    private _updateMarqueeRect;
    private _removeMarqueeRect;
    private _applyMarqueeRectStyle;
    private _applyTransformerConfig;
    dispose(): void;
}
export declare function getActiveSlideFloatingEmbedIdForHost(active: ISlideEmbedFloatingActivation | null | undefined, hostUnitId: string): string | null;
