import type { IBaseViewport, ICalendarProjection, IGalleryProjection, IGanttProjection, IGridProjection, IKanbanProjection } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export interface IBaseLayout {
    viewport: IBaseViewport;
}
export interface IGridLayout extends IBaseLayout {
    rowHeight: number;
    columnWidths: number[];
}
export interface IKanbanLayout extends IBaseLayout {
    laneWidth: number;
}
export interface ICalendarLayout extends IBaseLayout {
    mode: 'month' | 'week' | 'day';
}
export interface IGanttLayout extends IBaseLayout {
    leftPaneWidth: number;
    timelineWidth: number;
}
export interface IGalleryLayout extends IBaseLayout {
    cardWidth: number;
}
export declare const IBaseLayoutService: import("@wendellhu/redi").IdentifierDecorator<BaseLayoutService>;
export declare class BaseLayoutService extends Disposable {
    layoutGrid(projection: IGridProjection, viewport: IBaseViewport): IGridLayout;
    layoutKanban(projection: IKanbanProjection, viewport: IBaseViewport): IKanbanLayout;
    layoutCalendar(_projection: ICalendarProjection, viewport: IBaseViewport): ICalendarLayout;
    layoutGantt(_projection: IGanttProjection, viewport: IBaseViewport): IGanttLayout;
    layoutGallery(_projection: IGalleryProjection, viewport: IBaseViewport): IGalleryLayout;
}
