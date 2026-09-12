import type { IShapePoint } from '@univerjs-pro/engine-shape';
import type { ISlideConnectorElement, SlideModel } from '@univerjs-pro/slides';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { ISlideDrawingService } from '@univerjs-pro/slides';
import { ICommandService, Injector, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { SlideShapeAdjustController } from './slide-shape-adjust.controller';
export interface ISlideConnectorConnectionTarget {
    shapeId: string;
    cxnIndex: number;
    worldPoint: IShapePoint;
    angle: number;
}
export interface ISlideConnectorDrawingContext {
    unitId: string;
    subUnitId: string;
    drawingId?: string;
}
export interface ISlidePendingConnectorLayoutParams {
    unitId: string;
    subUnitId: string;
    element: ISlideConnectorElement;
    startWorldPoint: IShapePoint;
    endWorldPoint: IShapePoint;
    startTarget: ISlideConnectorConnectionTarget | null;
    endTarget: ISlideConnectorConnectionTarget | null;
    pageOffset: {
        left: number;
        top: number;
    };
}
/**
 * Slide connector controller.
 *
 * - Focus line shape (Connector or Shape with connector shapeType) → show start/end endpoint handles.
 * - Drag endpoint → detect nearby shape connection sites and snap (blue ring highlight).
 * - Mouse up → persist via UpdateSlideDrawingCommand (relation + routed points + bounding rect).
 */
export declare class SlideConnectorEndpointController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _injector;
    private readonly _instanceSrv;
    private readonly _slideDrawingService;
    private readonly _commandService;
    private readonly _adjustController;
    private _handles;
    private _connectionSites;
    private _activeFocusedDrawing;
    private _activeTargetShapeId;
    private _highlightedSiteIndex;
    private _currentConnectionTarget;
    private _isEndpointDragging;
    private _refreshScheduled;
    /** Guard to prevent re-entrant connector-follow updates when we update connectors. */
    private _isUpdatingConnectors;
    constructor(_renderContext: IRenderContext<SlideModel>, _injector: Injector, _instanceSrv: IUniverInstanceService, _slideDrawingService: ISlideDrawingService, _commandService: ICommandService, _adjustController: SlideShapeAdjustController);
    updatePendingInsertConnectionTarget(worldPoint: IShapePoint, context: ISlideConnectorDrawingContext, pageOffset: {
        left: number;
        top: number;
    }): ISlideConnectorConnectionTarget | null;
    clearPendingInsertConnectionTargets(): void;
    resolvePendingInsertConnectorElement(params: ISlidePendingConnectorLayoutParams): ISlideConnectorElement | null;
    private _init;
    private _getDrawingRenderObject;
    private _isSlideDrawingTarget;
    private _getRenderTransformInfo;
    private _applyRenderTransformToLocalPoint;
    private _transformConnectionSiteAngle;
    private _isPointInDrawingBounds;
    private _getConnectionPointBounds;
    private _subscribeToShapeMoveForConnectorFollow;
    private _resolveNextElementTransform;
    private _followConnectorsForMovedShape;
    private _buildConnectorFollowPatch;
    private _buildReroutePatchForBothConnected;
    private _buildReroutePatchForSingleConnected;
    private _buildTranslatedConnectorPatch;
    private _isConnectorFollowSourceElement;
    private _isPositionOnlyTransformChange;
    private _isTinyLineBodyMove;
    private _isLineBodyPositionOnlyOrUnchanged;
    private _neutralizeLineBodyMovePatch;
    /**
     * Hook into the scene transformer so that when the focused connector is moved
     * (dragged as a whole, not via an endpoint handle), the endpoint handles track
     * the connector's visual position in real time.
     *
     * Mirror of SlideDrawingTransformController._subscribeToTransformer — the
     * transformer may not exist yet if SlideDrawingSelectionController hasn't run,
     * so we defer one microtask when needed.
     */
    private _subscribeToTransformer;
    /**
     * Reads the connector's CURRENT VISUAL transform from the scene object
     * (which the transformer updates live during a drag) and repositions the
     * endpoint handles accordingly.
     *
     * For all drawing elements, flip is always center-based:
     *   - flipX: worldX = rect.left + rect.width - localX
     *   - flipY: worldY = rect.top  + rect.height - localY
     * ConnectorCoordinateTransform.localToWorld already implements this when
     * the rect is passed with flipX/flipY flags.
     */
    private _updateHandlePositionsFromVisualObject;
    private _subscribeToSceneLayoutChanges;
    private _scheduleRefreshActiveHandlesWithFollowUp;
    private _scheduleRefreshActiveHandles;
    private _refreshActiveHandles;
    private _createHandles;
    private _attachHandleEvent;
    private _applyConnectorRouteLayoutToVisualObject;
    private _hasMeaningfulPointerDrag;
    private _resolvePointerScenePoint;
    private _updateConnectionDetection;
    private _findTargetShapeAtPoint;
    private _showConnectionSites;
    private _findNearestConnectionSite;
    private _commitEndpointMove;
    /**
     * Commit using a pre-computed routeLayout (from the last drag moveSub).
     * This guarantees the stored state exactly matches what was shown visually during drag.
     */
    private _commitEndpointMoveWithLayout;
    private _buildUpdatedRelation;
    private _buildUpdatedElement;
    private _buildRouteLayout;
    private _createFreePointInfo;
    private _createTargetPointInfo;
    private _getConnectPointInfo;
    private _resolveConnectionSiteDefs;
    private _getEndpointWorldPoints;
    private _resolveConnectorLocalPoints;
    clearHandles(): void;
    private _clearHandles;
    private _clearConnectionSites;
    private _isLineShapeDrawing;
    private _isLineShapeElement;
    private _isTransformOnlyLinePatch;
    private _buildDisconnectedLineElement;
    private _getConnectorData;
    private _adjustAngleForFlipAndRotation;
    private _normalizeAngle;
    private _calculateFreeEndpointAngle;
    private _getPageOffset;
    private _safePositiveNumber;
}
