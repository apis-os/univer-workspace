import type { BaseViewProjection, IBaseConditionalColorRule, IBaseRect, IBaseViewport, ImageSourceType, IProjectedField } from '@univerjs/core';
import type { ICanvasColorService } from '@univerjs/engine-render';
import type { IBaseResolvedRecordLink } from '../services/base-record-link-resolver.service';
import type { BaseVirtualRecordReason } from '../services/base-ui-state.service';
import type { BaseCanvasHitTestResult, CanvasDrawCommand, IBaseCanvas2DContext, IBaseCanvasHitRegion } from './canvas-draw-command';
import { BaseViewType } from '@univerjs/core';
export interface IBaseRenderContext {
    unitId: string;
    tableId: string;
    viewId: string;
    disableEdit?: boolean;
    canvasColorService?: ICanvasColorService;
    interactionColors?: IBaseCanvasInteractionColors;
    surfaceColors?: IBaseCanvasSurfaceColors;
    darkMode?: boolean;
    viewport?: IBaseViewport;
    canvas?: HTMLCanvasElement;
    onImageLoad?: () => void;
    imageSourceResolver?: (source: string, sourceType: ImageSourceType) => Promise<string>;
    activeRecordId?: string | null;
    recordActionIds?: readonly string[];
    recordActionBadgeCounts?: ReadonlyMap<string, number>;
    recordActionFocusedRecordId?: string;
    collapsedGroupPaths?: ReadonlySet<string>;
    gridCollapsedHierarchyRecordIds?: ReadonlySet<string>;
    gridFillPreview?: IBaseGridFillPreviewState | null;
    gridColumnResizeDragX?: number | null;
    gridFreezeDragX?: number | null;
    gridFreezeHoverY?: number | null;
    gridFieldDrag?: IBaseGridFieldDragState | null;
    gridHoverAddField?: boolean;
    gridHoverAddRecordRow?: IBaseGridAddRecordHoverState | null;
    gridHoverFieldId?: string | null;
    gridHoverFieldMenuFieldId?: string | null;
    gridHoverFieldDescriptionFieldId?: string | null;
    gridHoverCellRecordId?: string | null;
    gridHoverCellFieldId?: string | null;
    gridHoverLinkActionRecordId?: string | null;
    gridHoverLinkActionFieldId?: string | null;
    gridHoverOpenRecordId?: string | null;
    gridSelectOptionRemoveHover?: IBaseGridSelectOptionRemoveHoverState | null;
    gridRecordLinkTooltip?: IBaseGridRecordLinkTooltipState | null;
    gridAttachmentDropTarget?: IBaseGridAttachmentDropTargetState | null;
    gridHoverRowHeaderRecordId?: string | null;
    gridHoverRowDragDisabledRecordId?: string | null;
    gridHoverRecordId?: string | null;
    gridVirtualRows?: IBaseGridVirtualRowState[];
    gridOpenRecordId?: string | null;
    gridOpenRecordLabel?: string;
    gridCloseRecordLabel?: string;
    gridAddRecordLabel?: string;
    gridRecordLabel?: string;
    gridRecordCountLabel?: string;
    gridCalculateLabel?: string;
    recordLinkResolver?: (field: IProjectedField, value: unknown, limit?: number) => readonly IBaseResolvedRecordLink[];
    recordLinkTitleResolver?: (fieldId: string, value: unknown, limit?: number) => readonly IBaseResolvedRecordLink[] | null;
    gridAttachmentDropLabel?: string;
    calendarTodayLabel?: string;
    calendarDayLabel?: string;
    calendarWeekLabel?: string;
    calendarMonthLabel?: string;
    calendarMoreLabel?: (count: number) => string;
    ganttFieldsLabel?: string;
    ganttTodayLabel?: string;
    ganttWeekLabel?: string;
    ganttMonthLabel?: string;
    ganttQuarterLabel?: string;
    ganttYearLabel?: string;
    gridRatingHover?: IBaseGridRatingHoverState | null;
    gridProgressDrag?: IBaseGridProgressDragState | null;
    gridRowDrag?: IBaseGridRowDragState | null;
    gridRowDragDisabled?: boolean;
    gridRowDragDisabledLabel?: string;
    kanbanColumnScroll?: Record<string, number>;
    kanbanLaneScrollbarVisibleKeys?: ReadonlySet<string>;
    kanbanLaneScrollbarHoverKey?: string | null;
    kanbanLaneScrollbarDraggingKey?: string | null;
    kanbanCardDrag?: IBaseKanbanCardDragState | null;
    kanbanHoverRecordId?: string | null;
    kanbanHoverAddRecordGroupKey?: string | null;
    kanbanHoverAddGroup?: boolean;
    kanbanAddRecordLabel?: string;
    kanbanMoveRecordLabel?: string;
    gridRowHeight?: number;
    gridFieldIndicators?: Record<string, BaseGridFieldIndicator[]>;
    gridStatLabels?: Record<string, string>;
    gridSelection?: IBaseGridSelectionState | null;
    gridTextVirtualScroll?: IBaseGridTextVirtualScrollState | null;
    gridSearchMatches?: IBaseGridSearchMatchState[];
    gridSearchActiveMatch?: IBaseGridSearchMatchState | null;
    conditionalColoringRules?: IBaseConditionalColorRule[];
    summaryBarHovered?: boolean;
    scrollX?: number;
    scrollY?: number;
    ganttLeftPaneScrollX?: number;
    overscanRows?: number;
    scrollbar?: IBaseCanvasScrollbarState | null;
    kanbanSearchRecordIds?: string[];
    kanbanSearchActiveRecordId?: string | null;
    galleryHoverRecordId?: string | null;
    galleryCardDrag?: IBaseGalleryCardDragState | null;
    gallerySearchRecordIds?: string[];
    gallerySearchActiveRecordId?: string | null;
    calendarAnchorDate?: number;
    calendarSearchRecordIds?: string[];
    calendarSearchActiveRecordId?: string | null;
    calendarAllDayScrollY?: number;
    calendarHover?: IBaseCalendarHoverState | null;
    calendarEventDrag?: IBaseCalendarEventDragState | null;
    calendarKeyboardFocus?: IBaseCalendarKeyboardFocusState | null;
    ganttSearchRecordIds?: string[];
    ganttSearchActiveRecordId?: string | null;
    ganttHover?: IBaseGanttHoverState | null;
    ganttBarDrag?: IBaseGanttBarDragState | null;
}
export interface IBaseGridTextVirtualScrollState {
    viewId: string;
    recordId: string;
    fieldId: string;
    offset: number;
}
export interface IBaseCanvasInteractionColors {
    primary: string;
    primaryHover: string;
    primarySoft: string;
    primarySofter: string;
    primaryStrongSoft: string;
    primaryDragSoft: string;
    primaryBorder: string;
    primaryBorderHover: string;
    primaryBorderSoft: string;
    danger: string;
    dangerHover: string;
    dangerSoft: string;
    dangerStrongSoft: string;
    dangerBorder: string;
    dangerBorderHover: string;
    fieldFilterIndicator: string;
    fieldSortIndicator: string;
    onPrimary: string;
    tooltipSurface: string;
}
export interface IBaseCanvasSurfaceColors {
    workspace: string;
    content: string;
    elevated: string;
    header: string;
    rowAlt: string;
    lane: string;
    rowHover: string;
    group: string;
    mutedArea: string;
    chip: string;
    nonWorkingOverlay: string;
}
export interface IBaseGridRecordLinkTooltipState {
    viewId: string;
    recordId: string;
    fieldId: string;
    label: string;
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare const BASE_CANVAS_INTERACTION_COLORS: {
    readonly primary: "base-canvas-interaction:primary";
    readonly primaryHover: "base-canvas-interaction:primaryHover";
    readonly primarySoft: "base-canvas-interaction:primarySoft";
    readonly primarySofter: "base-canvas-interaction:primarySofter";
    readonly primaryStrongSoft: "base-canvas-interaction:primaryStrongSoft";
    readonly primaryDragSoft: "base-canvas-interaction:primaryDragSoft";
    readonly primaryBorder: "base-canvas-interaction:primaryBorder";
    readonly primaryBorderHover: "base-canvas-interaction:primaryBorderHover";
    readonly primaryBorderSoft: "base-canvas-interaction:primaryBorderSoft";
    readonly danger: "base-canvas-interaction:danger";
    readonly dangerHover: "base-canvas-interaction:dangerHover";
    readonly dangerSoft: "base-canvas-interaction:dangerSoft";
    readonly dangerStrongSoft: "base-canvas-interaction:dangerStrongSoft";
    readonly dangerBorder: "base-canvas-interaction:dangerBorder";
    readonly dangerBorderHover: "base-canvas-interaction:dangerBorderHover";
    readonly fieldFilterIndicator: "base-canvas-interaction:fieldFilterIndicator";
    readonly fieldSortIndicator: "base-canvas-interaction:fieldSortIndicator";
    readonly onPrimary: "base-canvas-interaction:onPrimary";
    readonly tooltipSurface: "base-canvas-interaction:tooltipSurface";
};
export declare const BASE_CANVAS_SURFACE_COLORS: {
    readonly workspace: "base-canvas-surface:workspace";
    readonly content: "base-canvas-surface:content";
    readonly elevated: "base-canvas-surface:elevated";
    readonly header: "base-canvas-surface:header";
    readonly rowAlt: "base-canvas-surface:rowAlt";
    readonly lane: "base-canvas-surface:lane";
    readonly rowHover: "base-canvas-surface:rowHover";
    readonly group: "base-canvas-surface:group";
    readonly mutedArea: "base-canvas-surface:mutedArea";
    readonly chip: "base-canvas-surface:chip";
    readonly nonWorkingOverlay: "base-canvas-surface:nonWorkingOverlay";
};
export type BaseCanvasLayerRole = 'background' | 'structure' | 'content' | 'interaction' | 'overlay';
export interface IBaseCanvasRenderLayer {
    role: BaseCanvasLayerRole;
    commands: CanvasDrawCommand[];
    hitRegions?: IBaseCanvasHitRegion[];
}
export interface IBaseCanvasLayeredRenderState {
    layers: IBaseCanvasRenderLayer[];
    commands: CanvasDrawCommand[];
    hitRegions: IBaseCanvasHitRegion[];
}
export declare const BASE_CANVAS_LAYER_ORDER: BaseCanvasLayerRole[];
export type BaseCanvasScrollbarAxis = 'x' | 'y';
export type BaseCanvasScrollbarTarget = 'main' | 'gantt-left';
export interface IBaseCanvasScrollbarState {
    visible: boolean;
    hoverAxis?: BaseCanvasScrollbarAxis | null;
    draggingAxis?: BaseCanvasScrollbarAxis | null;
    hoverTarget?: BaseCanvasScrollbarTarget | null;
    draggingTarget?: BaseCanvasScrollbarTarget | null;
}
export interface IBaseCalendarHoverState {
    type: string;
    recordId?: string | null;
    mode?: 'day' | 'week' | 'month' | null;
    direction?: 'prev' | 'next' | null;
    dateMs?: number | null;
    edge?: 'start' | 'end' | null;
}
export interface IBaseCalendarEventDragState {
    viewId: string;
    recordId: string;
    rect: IBaseRect;
    rects?: IBaseRect[];
    color: string;
    title: string;
    edge?: 'start' | 'end';
}
export interface IBaseCalendarKeyboardFocusState {
    viewId: string;
    start: number;
    end: number;
    mode: 'timed' | 'allDay' | 'month';
}
export interface IBaseGanttHoverState {
    type: string;
    recordId?: string | null;
    scale?: 'week' | 'month' | 'quarter' | 'year' | null;
    direction?: 'prev' | 'next' | null;
    start?: number | null;
    end?: number | null;
}
export interface IBaseGanttBarDragState {
    viewId: string;
    recordId: string;
    edge?: 'start' | 'end';
    x: number;
    y: number;
    start: number;
    end: number;
}
export type BaseGridFieldIndicator = 'filter' | 'sort';
export interface IBaseGridSelectionState {
    viewId: string;
    mode: 'cell' | 'row' | 'column';
    anchorRecordId: string;
    focusRecordId: string;
    anchorFieldId: string;
    focusFieldId: string;
    selectedRecordIds?: string[];
    showBorder?: boolean;
}
export interface IBaseGridSearchMatchState {
    recordId: string;
    fieldId: string;
}
export interface IBaseGridFillPreviewState {
    viewId: string;
    targetRecordId?: string;
}
export interface IBaseGridRatingHoverState {
    viewId: string;
    recordId: string;
    fieldId: string;
    value: number;
    x: number;
    y: number;
}
export interface IBaseGridProgressDragState {
    viewId: string;
    recordId: string;
    fieldId: string;
    value: number;
}
export interface IBaseGridAddRecordHoverState {
    viewId: string;
    y: number;
}
export interface IBaseGridSelectOptionRemoveHoverState {
    viewId: string;
    recordId: string;
    fieldId: string;
    optionValue: string;
}
export interface IBaseGridRowDragState {
    viewId: string;
    recordId: string;
    targetRecordId?: string;
    before?: boolean;
    /** Border target means reparent; an insertion line means reorder. */
    mode?: 'reorder' | 'child';
}
export interface IBaseKanbanCardDragState {
    viewId: string;
    recordId: string;
    sourceGroupKey: string;
    targetGroupKey?: string;
    x: number;
    y: number;
}
export interface IBaseGalleryCardDragState {
    viewId: string;
    recordId: string;
    x: number;
    y: number;
    targetRecordId?: string | null;
    before?: boolean;
}
export interface IBaseGridAttachmentDropTargetState {
    viewId: string;
    recordId: string;
    fieldId: string;
    fileName?: string;
}
export interface IBaseGridVirtualRowState {
    viewId: string;
    recordId: string;
    values: Record<string, unknown>;
    actualLogicalY?: number;
    logicalY: number;
    rowNumber: number;
    surfaceX: number;
    surfaceWidth: number;
    reason: BaseVirtualRecordReason;
    warningLabel: string;
}
export interface IBaseGridFieldDragState {
    viewId: string;
    fieldId: string;
    targetFieldId?: string;
    before?: boolean;
}
export declare abstract class BaseViewRenderController<TProjection extends BaseViewProjection = BaseViewProjection> {
    abstract readonly viewType: BaseViewType | 'invalid';
    abstract mount(ctx: IBaseRenderContext): void;
    abstract unmount(): void;
    abstract updateProjection(projection: TProjection): void;
    abstract hitTest(x: number, y: number): BaseCanvasHitTestResult | null;
    abstract invalidate(region?: IBaseRect): void;
}
export declare abstract class CanvasBaseViewRenderController<TProjection extends BaseViewProjection = BaseViewProjection> extends BaseViewRenderController<TProjection> {
    readonly viewType: BaseViewType | 'invalid';
    private _projection;
    private _context;
    private _layers;
    private _commands;
    private _hitRegions;
    private _canvas;
    constructor(viewType: BaseViewType | 'invalid');
    mount(ctx: IBaseRenderContext): void;
    unmount(): void;
    updateProjection(projection: TProjection): void;
    invalidate(): void;
    attachCanvas(canvas: HTMLCanvasElement): void;
    getProjection(): TProjection | null;
    getDrawCommands(): CanvasDrawCommand[];
    getRenderLayers(): IBaseCanvasRenderLayer[];
    getHitRegions(): IBaseCanvasHitRegion[];
    paint(ctx?: IBaseCanvas2DContext): void;
    hitTest(x: number, y: number): BaseCanvasHitTestResult;
    protected get context(): IBaseRenderContext | null;
    protected get viewport(): IBaseViewport;
    protected abstract buildRenderLayers(projection: TProjection): IBaseCanvasRenderLayer[];
    private _rebuild;
}
export declare function getRecordActionFocusCommands(viewType: BaseViewProjection['type'] | 'invalid', hitRegions: readonly IBaseCanvasHitRegion[], recordId: string | undefined): CanvasDrawCommand[];
export declare function resolveBaseCanvasColor(color: string, interactionColors: IBaseCanvasInteractionColors | undefined, surfaceColors: IBaseCanvasSurfaceColors | undefined, darkMode?: boolean): {
    color: string;
    skipCanvasColorService?: boolean;
} | string;
export declare function createBaseCanvasLayer(role: BaseCanvasLayerRole): IBaseCanvasRenderLayer;
export declare function createBaseCanvasLayersFromCommands(commands: CanvasDrawCommand[], hitRegions?: IBaseCanvasHitRegion[]): IBaseCanvasRenderLayer[];
