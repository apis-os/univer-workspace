import type { IBoardConnectorElement, IBoardConnectorLabel, IBoardConnectorPoint, IBoardElementData } from '@univerjs-pro/boards';
import type { LocaleService } from '@univerjs/core';
import type { IObjectFullState, IViewportInfo, UniverRenderingContext, Vector2 } from '@univerjs/engine-render';
import type { IBoardConnectorLabelRect } from '../utils/board-connector-label.util';
import type { IBoardConnectorRenderGeometry } from '../utils/board-connector-render-geometry.util';
import type { BoardConnectorPathCommand, BoardConnectorRoutingCache } from '../utils/board-connector-routing.util';
import type { IBoardConnectorLabelMeasuredLayout } from './board-connector-label-layout.util';
import { BaseObject } from '@univerjs/engine-render';
import { resolveBoardConnectorPathBounds, resolveBoardConnectorPathCommands, resolveBoardConnectorRoutePoints } from '../utils/board-connector-routing.util';
export interface IBoardConnectorObjectProps {
    left: number;
    top: number;
    width: number;
    height: number;
    angle?: number;
    zIndex?: number;
    visible?: boolean;
    evented?: boolean;
    element: IBoardConnectorElement;
    elementData?: Record<string, IBoardElementData>;
    lineJumpCache?: BoardConnectorLineJumpCache;
    routingCache?: BoardConnectorRoutingCache;
    localeService?: LocaleService;
}
export interface IBoardConnectorRouteCache {
    routePoints: ReturnType<typeof resolveBoardConnectorRoutePoints>;
    pathCommands: ReturnType<typeof resolveBoardConnectorPathCommands>;
    bounds: ReturnType<typeof resolveBoardConnectorPathBounds>;
    renderGeometry: IBoardConnectorRenderGeometry | null;
}
export interface IBoardConnectorObjectUpdateOptions {
    preserveLineJumpCache?: boolean;
    preserveRouteCache?: boolean;
    routeCache?: IBoardConnectorRouteCache;
    skipLineJumps?: boolean;
}
interface IBoardConnectorLineJump {
    x: number;
    y: number;
    distance: number;
}
type BoardConnectorRouteResolver = typeof resolveBoardConnectorRoutePoints;
export declare class BoardConnectorLineJumpCache {
    private readonly _resolveRoutePoints;
    private _elementData?;
    private _elementOrderIndexes;
    private readonly _routePointsByConnectorId;
    private readonly _lineJumpsByConnectorId;
    constructor(_resolveRoutePoints?: BoardConnectorRouteResolver);
    invalidate(elementData?: Record<string, IBoardElementData>, options?: {
        force?: boolean;
        elementOrder?: readonly string[];
    }): void;
    resolveLineJumpsForRoute(connectorId: string, routePoints: readonly IBoardConnectorPoint[]): readonly IBoardConnectorLineJump[][];
    private _clear;
    private _getRoutePoints;
    private _resolveLineJumpsForSegment;
    private _shouldJumpOverConnector;
}
export declare class BoardConnectorObject extends BaseObject {
    private _element;
    private _elementData?;
    private readonly _localeService?;
    private readonly _lineJumpCache;
    private readonly _routingCache?;
    private readonly _documentTextRenderCaches;
    private _routeCache;
    private _labelGeometryCache;
    private _routeStabilityHint;
    private _animationElapsedMs;
    private _focusHint;
    private _animationPathCache;
    private _isEditingLabel;
    private _editingLabelId;
    private _skipLineJumps;
    isDrawingObject: boolean;
    constructor(key: string, props: IBoardConnectorObjectProps);
    updateElement(element: IBoardConnectorElement, elementData?: Record<string, IBoardElementData>, options?: IBoardConnectorObjectUpdateOptions): void;
    getElement(): IBoardConnectorElement;
    isAnimationEnabled(): boolean;
    setFocusHint(hint: {
        start: number;
        direction: 1 | -1;
        color: string;
    } | null): void;
    setAnimationElapsedMs(elapsedMs: number): void;
    setEditing(isEditing: boolean, labelId?: string): void;
    getRoutePoints(): IBoardConnectorPoint[];
    getCachedRoutePoints(): readonly IBoardConnectorPoint[] | null;
    getPathCommands(): BoardConnectorPathCommand[];
    getRenderBounds(): ReturnType<typeof resolveBoardConnectorPathBounds>;
    getLabelPathPoints(): IBoardConnectorPoint[];
    getLabelRect(labelId?: string): IBoardConnectorLabelRect | null;
    getLabelRects(): ReadonlyMap<string, IBoardConnectorLabelRect>;
    /** Axis-aligned world bounds enclosing the rotated label, shared with diagnostic focus regions. */
    getLabelBounds(labelId: string): IBoardConnectorLabelRect | null;
    /** Resolves an interaction preview through the same measurement and marker-clearance path as rendering. */
    resolveLabelRect(label: IBoardConnectorLabel): IBoardConnectorLabelRect;
    /** Null means no text-layout environment or an unresolved font measurement, not an empty label. */
    getLabelLayout(labelId: string): IBoardConnectorLabelMeasuredLayout | null;
    /** Discards derived text resources only; routing and the persisted connector remain unchanged. */
    invalidateLabelLayout(): void;
    /** Null indicates unavailable measurement, rather than a verified unconstrained placement. */
    isLabelEndpointConstrained(labelId: string): boolean | null;
    private _disposeLabelTextCaches;
    getLabelAngle(labelId?: string): number;
    hitTestLabel(point: IBoardConnectorPoint): string | null;
    isLabelHit(point: IBoardConnectorPoint): boolean;
    private _getRouteCache;
    private _getLabelGeometry;
    private _resolveLabelGeometry;
    private _getRenderBounds;
    private _getCurrentRouteStabilityHint;
    private _shouldUseRouteStabilityHint;
    transformByState(option: IObjectFullState): this;
    isHit(coord: Vector2): boolean;
    hitTest(point: IBoardConnectorPoint): boolean;
    getRenderGeometry(): IBoardConnectorRenderGeometry | null;
    render(ctx: UniverRenderingContext, _bounds: IViewportInfo): this;
    private _drawConnectorPath;
    private _getAnimationPath;
    private _drawAnimation;
    private _drawAnimationParticle;
    private _drawAnimationArrow;
    private _drawGradientAnimation;
    private _clipRouteAroundLabel;
    private _drawRoute;
    private _drawRoundedOrthogonalRoute;
    private _drawRouteWithLineJumps;
    private _drawPathCommands;
    private _drawMarkers;
    private _drawLabel;
    private _drawLabelFrame;
}
export {};
