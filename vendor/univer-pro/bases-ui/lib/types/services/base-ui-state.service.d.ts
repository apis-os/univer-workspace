import type { BaseSelection, RecordId, ViewId } from '@univerjs/core';
import type { Observable } from 'rxjs';
import { Disposable, ILocalStorageService, UserManagerService } from '@univerjs/core';
import { BehaviorSubject } from 'rxjs';
export interface IScrollState {
    x: number;
    y: number;
}
export interface IBaseUIStateEmitOptions {
    defer?: boolean;
}
export interface IActivateBaseViewOptions {
    preserveDashboard?: boolean;
}
export interface IBaseHierarchyCollapseScope {
    unitId: string;
    tableId: string;
    viewId: string;
    fieldId: string;
}
export interface IBaseDraftRecordDetailState {
    mode: 'draft';
    values: Record<string, unknown>;
}
export interface IBaseExistingRecordDetailState {
    mode: 'existing';
    recordId: RecordId;
    tableId: string;
    viewId?: ViewId;
    siblingRecordIds: RecordId[];
    scrollState?: IScrollState;
    navigationStack?: IBaseRecordDetailLocation[];
}
export interface IBaseRecordDetailLocation {
    tableId: string;
    recordId: RecordId;
    viewId?: ViewId;
    siblingRecordIds: RecordId[];
    scrollState?: IScrollState;
}
export type BaseRecordDetailState = IBaseDraftRecordDetailState | IBaseExistingRecordDetailState;
export type BaseVirtualRecordReason = 'regrouped' | 'resorted' | 'moved' | 'filtered-out' | 'deleted';
export interface IBaseVirtualRecordState {
    tableId: string;
    viewId: ViewId;
    viewType: 'grid' | 'gantt';
    recordId: RecordId;
    values: Record<string, unknown>;
    sourceLogicalY: number;
    actualLogicalY?: number;
    rowNumber: number;
    surfaceX?: number;
    surfaceWidth?: number;
    reason: BaseVirtualRecordReason;
    warningLabel: string;
    createdAt: number;
}
export interface IBaseVirtualRecordScope {
    tableId?: string;
    viewId?: ViewId;
    recordId?: RecordId;
}
export interface IBaseCalendarRecordPopoverState {
    mode: 'existing' | 'draft' | 'more';
    viewId: ViewId;
    recordId?: RecordId;
    recordIds?: RecordId[];
    items?: Array<{
        recordId: RecordId;
        title: string;
        color: string;
        continuesBefore?: boolean;
        continuesAfter?: boolean;
    }>;
    values?: Record<string, unknown>;
    anchor: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    dateMs?: number;
}
export interface IBaseUIState {
    activeTableId?: string;
    activeViewId?: string;
    activeDashboardId?: string;
    selection?: BaseSelection | null;
    scrollState: Record<ViewId, IScrollState>;
    zoomState: Record<ViewId, number>;
    calendarAnchorState: Record<ViewId, number>;
    calendarAllDayScrollState: Record<ViewId, number>;
    collapsedGroupPaths: Record<ViewId, Set<string>>;
    kanbanColumnScrollState: Record<ViewId, Record<string, number>>;
    ganttLeftPaneScrollState: Record<ViewId, number>;
    virtualRecords: IBaseVirtualRecordState[];
    search: {
        open: boolean;
        query: string;
        activeIndex: number | null;
    };
    openPanels: {
        recordDetail?: BaseRecordDetailState;
        calendarRecordPopover?: IBaseCalendarRecordPopoverState;
        calendarMoreRecordPopover?: IBaseCalendarRecordPopoverState;
        fieldConfig?: string;
        viewSettings?: ViewId;
    };
    sidebars: {
        left?: boolean;
        right?: boolean;
    };
    layout: {
        leftPanelWidth?: number;
        rightPanelWidth: Record<ViewId, number>;
        rightPanelFullscreen: Record<ViewId, boolean>;
    };
}
export interface IScrollToRecordOptions {
    viewId?: ViewId;
    x?: number;
    y?: number;
}
export interface IOpenRecordDetailOptions {
    preserveCalendarPopover?: boolean;
    siblingRecordIds?: readonly RecordId[];
}
export interface IOpenLinkedRecordDetailInput {
    tableId: string;
    recordId: RecordId;
    sourceSiblingRecordIds: readonly RecordId[];
    targetSiblingRecordIds: readonly RecordId[];
}
export interface IBaseUIStateService {
    readonly state$: BehaviorSubject<IBaseUIState>;
    readonly inlineEditorCommitRequested$: Observable<void>;
    getState(): IBaseUIState;
    requestInlineEditorCommit(): void;
    activateTable(tableId: string): void;
    activateView(viewId: string, options?: IActivateBaseViewOptions): void;
    activateDashboard(dashboardId: string): void;
    setVirtualRecord(record: IBaseVirtualRecordState): void;
    clearVirtualRecords(scope?: IBaseVirtualRecordScope): void;
    getVirtualRecords(scope?: IBaseVirtualRecordScope): IBaseVirtualRecordState[];
    setSelection(selection: BaseSelection | null): void;
    setScrollState(viewId: ViewId, scrollState: IScrollState, options?: IBaseUIStateEmitOptions): void;
    setZoom(viewId: ViewId, zoom: number): void;
    setCalendarAnchorDate(viewId: ViewId, anchorMs: number): void;
    setCalendarAllDayScroll(viewId: ViewId, scrollY: number, options?: IBaseUIStateEmitOptions): void;
    getCollapsedGroupPaths(viewId: ViewId): ReadonlySet<string>;
    toggleCollapsedGroupPath(viewId: ViewId, groupPath: string): void;
    ensureHierarchyCollapseState(scope: IBaseHierarchyCollapseScope, validRecordIds: ReadonlySet<string>): void;
    toggleCollapsedHierarchyRecord(scope: IBaseHierarchyCollapseScope, recordId: string, validRecordIds: ReadonlySet<string>): void;
    setKanbanColumnScroll(viewId: ViewId, groupKey: string, scrollY: number, options?: IBaseUIStateEmitOptions): void;
    setKanbanColumnScrollMap(viewId: ViewId, scrollMap: Record<string, number>, options?: IBaseUIStateEmitOptions): void;
    setGanttLeftPaneScrollX(viewId: ViewId, scrollX: number, options?: IBaseUIStateEmitOptions): void;
    openSearch(): void;
    closeSearch(): void;
    setSearchQuery(query: string): void;
    setSearchActiveIndex(index: number | null): void;
    openRecordDetail(recordId: RecordId, options?: IOpenRecordDetailOptions): void;
    openLinkedRecordDetail(input: IOpenLinkedRecordDetailInput): void;
    navigateSiblingRecordDetail(recordId: RecordId): void;
    navigateBackRecordDetail(): void;
    openDraftRecordDetail(values?: Record<string, unknown>): void;
    updateDraftRecordDetailField(fieldId: string, value: unknown): void;
    closeRecordDetail(): void;
    openCalendarRecordPopover(popover: IBaseCalendarRecordPopoverState): void;
    updateCalendarRecordPopoverField(fieldId: string, value: unknown): void;
    closeCalendarRecordPopover(): void;
    closeCalendarMoreRecordPopover(): void;
    setLeftSidebarVisible(visible: boolean): void;
    setRightSidebarVisible(visible: boolean): void;
    setLeftPanelWidth(width: number): void;
    setRightPanelWidth(viewId: ViewId, width: number): void;
    setRightPanelFullscreen(viewId: ViewId, fullscreen: boolean): void;
    openFieldConfig(fieldId: string): void;
    closeFieldConfig(): void;
    toSnapshotPatch(): Record<string, never>;
}
export declare const IBaseUIStateService: import("@wendellhu/redi").IdentifierDecorator<IBaseUIStateService>;
export declare class BaseUIStateService extends Disposable implements IBaseUIStateService {
    private readonly _localStorageService?;
    private readonly _userManagerService?;
    private _deferredEmitHandle;
    private _lastOpenedRecordDetailId;
    private readonly _loadedHierarchyCollapseKeys;
    private readonly _hierarchyPersistTimers;
    constructor(_localStorageService?: ILocalStorageService | undefined, _userManagerService?: UserManagerService | undefined);
    private readonly _state;
    readonly state$: BehaviorSubject<IBaseUIState>;
    private readonly _inlineEditorCommitRequested$;
    readonly inlineEditorCommitRequested$: Observable<void>;
    getState(): IBaseUIState;
    requestInlineEditorCommit(): void;
    getLastOpenedRecordDetailId(): RecordId | null;
    activateTable(tableId: string): void;
    activateView(viewId: string, options?: IActivateBaseViewOptions): void;
    activateDashboard(dashboardId: string): void;
    setVirtualRecord(record: IBaseVirtualRecordState): void;
    clearVirtualRecords(scope?: IBaseVirtualRecordScope): void;
    getVirtualRecords(scope?: IBaseVirtualRecordScope): IBaseVirtualRecordState[];
    setSelection(selection: BaseSelection | null): void;
    dispose(): void;
    setScrollState(viewId: ViewId, scrollState: IScrollState, options?: IBaseUIStateEmitOptions): void;
    setZoom(viewId: ViewId, zoom: number): void;
    setCalendarAnchorDate(viewId: ViewId, anchorMs: number): void;
    setCalendarAllDayScroll(viewId: ViewId, scrollY: number, options?: IBaseUIStateEmitOptions): void;
    getCollapsedGroupPaths(viewId: ViewId): ReadonlySet<string>;
    toggleCollapsedGroupPath(viewId: ViewId, groupPath: string): void;
    ensureHierarchyCollapseState(scope: IBaseHierarchyCollapseScope, validRecordIds: ReadonlySet<string>): void;
    toggleCollapsedHierarchyRecord(scope: IBaseHierarchyCollapseScope, recordId: string, validRecordIds: ReadonlySet<string>): void;
    private _hierarchyPathPrefix;
    private _hierarchyStorageKey;
    private _pruneHierarchyPaths;
    private _scheduleHierarchyPersist;
    setKanbanColumnScroll(viewId: ViewId, groupKey: string, scrollY: number, options?: IBaseUIStateEmitOptions): void;
    setKanbanColumnScrollMap(viewId: ViewId, scrollMap: Record<string, number>, options?: IBaseUIStateEmitOptions): void;
    setGanttLeftPaneScrollX(viewId: ViewId, scrollX: number, options?: IBaseUIStateEmitOptions): void;
    openSearch(): void;
    closeSearch(): void;
    setSearchQuery(query: string): void;
    setSearchActiveIndex(index: number | null): void;
    openRecordDetail(recordId: RecordId, options?: IOpenRecordDetailOptions): void;
    openLinkedRecordDetail(input: IOpenLinkedRecordDetailInput): void;
    navigateSiblingRecordDetail(recordId: RecordId): void;
    navigateBackRecordDetail(): void;
    openDraftRecordDetail(values?: Record<string, unknown>): void;
    updateDraftRecordDetailField(fieldId: string, value: unknown): void;
    closeRecordDetail(): void;
    openCalendarRecordPopover(popover: IBaseCalendarRecordPopoverState): void;
    updateCalendarRecordPopoverField(fieldId: string, value: unknown): void;
    closeCalendarRecordPopover(): void;
    closeCalendarMoreRecordPopover(): void;
    setLeftSidebarVisible(visible: boolean): void;
    setRightSidebarVisible(visible: boolean): void;
    setLeftPanelWidth(width: number): void;
    setRightPanelWidth(viewId: ViewId, width: number): void;
    setRightPanelFullscreen(viewId: ViewId, fullscreen: boolean): void;
    openFieldConfig(fieldId: string): void;
    closeFieldConfig(): void;
    toSnapshotPatch(): Record<string, never>;
    private _emit;
    private _emitOrDefer;
    private _scheduleDeferredEmit;
    private _cancelDeferredEmit;
    private _resetSearchState;
    private _cloneVirtualRecord;
    private _cloneRecordDetailLocation;
    private _cloneRecordDetailState;
    private _syncOpenRecordDetailFromCalendarPopover;
}
