import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { UnitModel } from '@univerjs/core';
import type { IMouseEvent, IPointerEvent, IRenderContext, IRenderModule } from '@univerjs/engine-render';
import type { Observable } from 'rxjs';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { IPermissionService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
export declare const SLIDE_DRAWING_OBJECT_KEY_PREFIX = "slide-drawing-";
export declare function buildDrawingOKey(unitId: string, subUnitId: string, drawingId: string): string;
export declare function parseDrawingOKey(oKey: string, unitId: string, subUnitId: string): string | null;
export interface ISlideDrawingPointerEvent {
    drawing: ISlideDrawing;
    oKey: string;
    /** Raw canvas-space offset (scene coordinates). */
    offsetX: number;
    offsetY: number;
    ctrlKey: boolean;
    shiftKey: boolean;
    metaKey: boolean;
    altKey: boolean;
    /** The original engine-render pointer event for advanced consumers. */
    nativeEvent: IPointerEvent | IMouseEvent;
    smartArtPart?: ISlideSmartArtPartHit;
}
export interface ISlideSmartArtPartHit {
    presentationShapeId: string;
    nodeId?: string;
}
export interface ISlideDrawingHoverEvent {
    drawing: ISlideDrawing | null;
    oKey: string | null;
}
export interface ISlideDrawingDoubleClickEvent {
    drawing: ISlideDrawing;
    oKey: string;
    offsetX: number;
    offsetY: number;
    nativeEvent: IPointerEvent | IMouseEvent;
    smartArtPart?: ISlideSmartArtPartHit;
}
/**
 * Per-render-context hit-test service for slide drawing elements.
 *
 * Acts as the **single authoritative source** for:
 * 1. The `oKey <-> ISlideDrawing` map for the currently rendered page.
 * 2. Typed pointer events on drawing objects (other controllers subscribe here
 *    instead of wiring raw scene / object events separately).
 * 3. The ordered list of top-level drawings for Tab-cycle navigation.
 *
 * Other render controllers **must not** build their own oKey maps; they should
 * inject this service and use `getByOKey()` or `getOrderedTopLevelDrawings()`.
 */
export interface ISlideHitTestService {
    /** Fires when a pointer-down event lands on a drawing object. */
    readonly onPointerDown$: Observable<ISlideDrawingPointerEvent>;
    /** Fires when the pointer enters a drawing object (hover). */
    readonly onPointerEnter$: Observable<ISlideDrawingHoverEvent>;
    /** Fires when the pointer leaves a drawing object (hover end). */
    readonly onPointerLeave$: Observable<ISlideDrawingHoverEvent>;
    /** Fires when a drawing is double-clicked. */
    readonly onDoubleClick$: Observable<ISlideDrawingDoubleClickEvent>;
    /** O(1) drawing lookup by canvas object key. Returns null if not found. */
    getByOKey(oKey: string): ISlideDrawing | null;
    /**
     * Returns the top-level drawings for the active page in z-order
     * (bottom-to-top). Group children are excluded from the list.
     */
    getOrderedTopLevelDrawings(): ISlideDrawing[];
    /** Hit-test a canvas-space point. Returns the topmost drawing or null. */
    hitTest(x: number, y: number): {
        drawing: ISlideDrawing;
        oKey: string;
    } | null;
    /** Hit-test for a context menu without requiring edit permission. */
    hitTestForContextMenu(x: number, y: number): {
        drawing: ISlideDrawing;
        oKey: string;
    } | null;
    /** Returns the oKey prefix for the current unit/active page. */
    getOKeyPrefix(): string;
    /** Returns the current active slide id. */
    getActiveSubUnitId(): string | null;
}
export declare const ISlideHitTestService: import("@wendellhu/redi").IdentifierDecorator<ISlideHitTestService>;
export declare class SlideHitTestService extends RxDisposable implements ISlideHitTestService, IRenderModule {
    private readonly _renderContext;
    private readonly _instanceSrv;
    private readonly _slideDrawingService;
    private readonly _permissionService;
    /** oKey <-> ISlideDrawing for the currently active page. */
    private readonly _oKeyMap;
    /** Ordered list of top-level drawing IDs (z-order, bottom-to-top). */
    private _orderedTopLevelIds;
    /** Set of drawingIds that are group children (not top-level). */
    private readonly _groupChildIds;
    /** oKey -> object reference that has already been event-wired. */
    private readonly _wiredObjectRefs;
    private readonly _onPointerDown$;
    private readonly _onPointerEnter$;
    private readonly _onPointerLeave$;
    private readonly _onDoubleClick$;
    readonly onPointerDown$: Observable<ISlideDrawingPointerEvent>;
    readonly onPointerEnter$: Observable<ISlideDrawingHoverEvent>;
    readonly onPointerLeave$: Observable<ISlideDrawingHoverEvent>;
    readonly onDoubleClick$: Observable<ISlideDrawingDoubleClickEvent>;
    constructor(_renderContext: IRenderContext<UnitModel>, _instanceSrv: IUniverInstanceService, _slideDrawingService: ISlideDrawingService, _permissionService: IPermissionService);
    dispose(): void;
    getByOKey(oKey: string): ISlideDrawing | null;
    getOrderedTopLevelDrawings(): ISlideDrawing[];
    hitTest(x: number, y: number): {
        drawing: ISlideDrawing;
        oKey: string;
    } | null;
    hitTestForContextMenu(x: number, y: number): {
        drawing: ISlideDrawing;
        oKey: string;
    } | null;
    private _hitTest;
    private _resolveHitByOKey;
    private _hitTestDrawingObjectsIncludeInGroup;
    getOKeyPrefix(): string;
    getActiveSubUnitId(): string | null;
    private _init;
    private _rebuildScheduled;
    private _scheduleRebuild;
    private _getSceneObjectByKey;
    private _rebuildMap;
    private _lastClickTime;
    private _lastClickedOKey;
    private readonly _doubleClickThreshold;
    private _lastDispatchedPointerEvent;
    private _wirePointerEvents;
    private _triggerGroupParentPointerDown;
    private _dispatchPointerDown;
    private _stopPointerObservers;
    private _resolveSmartArtPart;
    private _isObjectPointerHit;
    private _toScenePoint;
    private _resolveDeepestHitFromGroup;
    private _resolveTopGroupSelectionTarget;
    private _isSelectableDrawing;
    private _canHitDrawing;
    private _getLatestDrawingForOKey;
    private _resolveParentGroupId;
    private _collectGroupDescendantIds;
}
