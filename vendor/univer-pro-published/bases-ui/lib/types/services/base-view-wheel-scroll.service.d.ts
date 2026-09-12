import type { BaseViewProjection, IBaseViewport, IDisposable } from '@univerjs/core';
import type { BaseCanvasHitTestResult } from '../render/canvas-draw-command';
import type { IBaseUIStateService } from './base-ui-state.service';
import { Disposable } from '@univerjs/core';
export type CalendarMonthWheelDirection = 'prev' | 'next';
export interface ICalendarMonthWheelGestureState {
    delta: number;
    lockedUntil: number;
}
export interface IBaseWheelEventLike {
    readonly deltaX: number;
    readonly deltaY: number;
    readonly deltaMode: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly shiftKey: boolean;
    readonly viewportScrollY?: number;
}
export interface IBaseWheelTargetRect {
    readonly left: number;
    readonly top: number;
}
export interface IBaseViewWheelScrollContext {
    viewId: string;
    gestureKey?: string;
    projection: BaseViewProjection;
    viewport: IBaseViewport;
    stateService: IBaseUIStateService;
    event: IBaseWheelEventLike;
    viewConfig?: Record<string, unknown>;
    targetRect?: IBaseWheelTargetRect | null;
    hitTest?: (x: number, y: number) => BaseCanvasHitTestResult | null | undefined;
    onBeforeScroll?: () => void;
    onShowScrollbar?: (options?: {
        autoHide?: boolean;
        refresh?: boolean;
    }) => void;
    onShowKanbanLaneScrollbar?: (groupKey: string, options?: {
        autoHide?: boolean;
        refresh?: boolean;
    }) => void;
    onCalendarMonthNavigate?: (direction: CalendarMonthWheelDirection) => void;
}
export interface IBaseViewWheelScrollRuntimeContext {
    unitId: string;
    stateService: IBaseUIStateService;
    getViewId: () => string | null | undefined;
    getProjection: () => BaseViewProjection | null | undefined;
    getViewport: () => IBaseViewport;
    getViewConfig?: () => Record<string, unknown> | undefined;
    getTargetRect?: () => IBaseWheelTargetRect | null | undefined;
    hitTest?: (x: number, y: number) => BaseCanvasHitTestResult | null | undefined;
    onBeforeScroll?: () => void;
    onShowScrollbar?: (options?: {
        autoHide?: boolean;
        refresh?: boolean;
    }) => void;
    onShowKanbanLaneScrollbar?: (groupKey: string, options?: {
        autoHide?: boolean;
        refresh?: boolean;
    }) => void;
    onCalendarMonthNavigate?: (direction: CalendarMonthWheelDirection) => void;
}
export interface IBaseViewWheelScrollService {
    setRuntimeContext(context: IBaseViewWheelScrollRuntimeContext): IDisposable;
    clearRuntimeContext(unitId: string): void;
    getGridProjectionBodyHeight(projection: Extract<BaseViewProjection, {
        type: 'grid' | 'gantt';
    }>, collapsedGroupPaths?: ReadonlySet<string>, rowHeight?: number): number;
    getGalleryProjectionBodyHeight(projection: Extract<BaseViewProjection, {
        type: 'gallery';
    }>, viewportWidth: number): number;
    getKanbanProjectionBodyHeight(projection: Extract<BaseViewProjection, {
        type: 'kanban';
    }>): number;
    handleRegisteredWheel(unitId: string, event: IBaseWheelEventLike): boolean;
    handleWheel(context: IBaseViewWheelScrollContext): boolean;
}
export declare const IBaseViewWheelScrollService: import("@wendellhu/redi").IdentifierDecorator<IBaseViewWheelScrollService>;
export declare class BaseViewWheelScrollService extends Disposable implements IBaseViewWheelScrollService {
    private readonly _runtimeContexts;
    private readonly _calendarMonthWheelGestures;
    private readonly _calendarMonthWheelResetTimers;
    dispose(): void;
    setRuntimeContext(context: IBaseViewWheelScrollRuntimeContext): IDisposable;
    clearRuntimeContext(unitId: string): void;
    getGridProjectionBodyHeight(projection: Extract<BaseViewProjection, {
        type: 'grid' | 'gantt';
    }>, collapsedGroupPaths?: ReadonlySet<string>, rowHeight?: number): number;
    getGalleryProjectionBodyHeight(projection: Extract<BaseViewProjection, {
        type: 'gallery';
    }>, viewportWidth: number): number;
    getKanbanProjectionBodyHeight(projection: Extract<BaseViewProjection, {
        type: 'kanban';
    }>): number;
    handleRegisteredWheel(unitId: string, event: IBaseWheelEventLike): boolean;
    handleWheel(context: IBaseViewWheelScrollContext): boolean;
    private _syncCalendarHostScroll;
    private _syncKanbanHostScroll;
    private _handleCalendarWheel;
    private _handleGanttWheel;
    private _handleGridLikeWheel;
    private _handleCalendarMonthWheel;
    private _clearCalendarMonthWheelResetTimer;
    private _localPoint;
}
export declare function resetCalendarMonthWheelGesture(): ICalendarMonthWheelGestureState;
export declare function advanceCalendarMonthWheelGesture(state: ICalendarMonthWheelGestureState, delta: number, deltaMode: number, now?: number): {
    state: ICalendarMonthWheelGestureState;
    direction: CalendarMonthWheelDirection | null;
};
