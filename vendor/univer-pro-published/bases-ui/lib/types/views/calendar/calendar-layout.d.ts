import type { IBaseRect, IBaseViewport, ICalendarProjection, RecordId } from '@univerjs/core';
export type CalendarLayoutMode = 'day' | 'week' | 'month';
export interface ICalendarLayoutOptions {
    anchorMs?: number;
    nowMs?: number;
    draftEvent?: ICalendarDraftEvent | null;
    timeScrollY?: number;
    allDayScrollY?: number;
}
export interface ICalendarDraftEvent {
    id: string;
    title: string;
    startMs: number;
    endMs?: number;
    color?: string;
}
export interface ICalendarLayoutColumn {
    key: string;
    label: string;
    dateLabel: string;
    startMs: number;
    endMs: number;
    rect: IBaseRect;
    headerRect: IBaseRect;
    isToday: boolean;
}
export interface ICalendarLayoutEvent {
    recordId: RecordId;
    title: string;
    color: string;
    rect: IBaseRect;
    columnKey: string;
    allDay: boolean;
    continuesBefore?: boolean;
    continuesAfter?: boolean;
}
export interface ICalendarLayoutMore {
    key: string;
    dateMs: number;
    count: number;
    rect: IBaseRect;
    items: ICalendarLayoutMoreItem[];
}
export interface ICalendarLayoutMoreItem {
    recordId: RecordId;
    title: string;
    color: string;
    continuesBefore?: boolean;
    continuesAfter?: boolean;
}
export interface ICalendarTempLayoutEvent {
    id: string;
    title: string;
    color: string;
    rect: IBaseRect;
    rects?: IBaseRect[];
}
export interface ICalendarCurrentTimeIndicator {
    y: number;
    dotX: number;
    lineStartX: number;
    lineEndX: number;
    columnKey: string;
}
export interface ICalendarLayout {
    mode: CalendarLayoutMode;
    headerHeight: number;
    contentRect: IBaseRect;
    dayHeaderRect?: IBaseRect;
    allDayRect?: IBaseRect;
    timeBodyRect?: IBaseRect;
    allDayContentHeight?: number;
    timeContentHeight?: number;
    timeScaleHeight?: number;
    timeTopPadding?: number;
    timeBottomPadding?: number;
    title: string;
    columns: ICalendarLayoutColumn[];
    timeSlots: Array<{
        label: string;
        y: number;
    }>;
    events: ICalendarLayoutEvent[];
    moreEvents: ICalendarLayoutMore[];
    currentTimeIndicator?: ICalendarCurrentTimeIndicator;
    tempEvent?: ICalendarTempLayoutEvent;
}
export declare function buildCalendarLayout(projection: ICalendarProjection, viewport: IBaseViewport, options?: ICalendarLayoutOptions): ICalendarLayout;
