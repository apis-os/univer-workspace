import type { IBaseRect, IBaseViewport, IGanttProjection } from '@univerjs/core';
import type { IBaseProjectedRowLayoutItem } from '../base-canvas-render-utils';
export type GanttTimelineScale = IGanttProjection['timeline']['scale'];
export interface IGanttLayoutColumn {
    id: string;
    label: string;
    majorLabel?: string;
    start: number;
    end: number;
    rect: IBaseRect;
    nonWorking?: boolean;
}
export interface IGanttLayoutMajorHeader {
    id: string;
    label: string;
    start: number;
    end: number;
    rect: IBaseRect;
}
export interface IGanttLayoutBar {
    recordId: string;
    title: string;
    start: number;
    end: number;
    color: string;
    progress?: number;
    workingDayCount?: number;
    rect: IBaseRect;
    row: IBaseProjectedRowLayoutItem;
    labelInside: boolean;
}
export interface IGanttLayout {
    leftPane: IBaseRect;
    timeline: IBaseRect;
    timelineHeader: IBaseRect;
    timelineMajorHeader: IBaseRect;
    timelineMinorHeader: IBaseRect;
    timelineBody: IBaseRect;
    collapseButton: IBaseRect;
    controls: {
        scale: Array<{
            scale: GanttTimelineScale;
            rect: IBaseRect;
            active: boolean;
            label: string;
        }>;
        today: IBaseRect;
        prev: IBaseRect;
        next: IBaseRect;
    };
    rowLayout: IBaseProjectedRowLayoutItem[];
    visibleRows: IBaseProjectedRowLayoutItem[];
    columns: IGanttLayoutColumn[];
    majorHeaders: IGanttLayoutMajorHeader[];
    bars: IGanttLayoutBar[];
    totalTimelineWidth: number;
    maxScrollX: number;
    maxScrollY: number;
    headerHeight: number;
}
export interface IGanttLayoutOptions {
    viewport: IBaseViewport;
    rowLayout: IBaseProjectedRowLayoutItem[];
    scrollX?: number;
    scrollY?: number;
    rowOverscanPx?: number;
}
export interface IGanttBarScrollTarget {
    scrollX: number;
    scrollY: number;
}
export interface IGanttInitialScrollOptions {
    rowLayout?: IBaseProjectedRowLayoutItem[];
    scrollY?: number;
}
export declare function getGanttBarsByRecordId(projection: IGanttProjection): Map<string, IGanttProjection['bars'][number]>;
export declare function getGanttBarDisplayEnd(bar: Pick<IGanttProjection['bars'][number], 'start' | 'end'>, _projection: IGanttProjection): number;
export declare function getGanttBarDisplayStart(bar: Pick<IGanttProjection['bars'][number], 'start' | 'end'>): number;
export declare function getGanttFieldRangeFromDisplayRange(start: number, end: number): {
    start: number;
    end: number;
};
export declare function getGanttAllDaySerialRangeFromDisplayRange(rawStartSerial: number, rawEndSerial: number, originalDisplayRange: {
    start: number;
    end: number;
}, nextDisplayRange: {
    start: number;
    end: number;
}): {
    start: number;
    end: number;
};
export declare function buildGanttLayout(projection: IGanttProjection, options: IGanttLayoutOptions): IGanttLayout;
export declare function getGanttLeftPaneWidth(projection: IGanttProjection, viewportWidth: number): number;
export declare function snapGanttTime(value: number, projection: {
    timeline: Pick<IGanttProjection['timeline'], 'scale'>;
}): number;
export declare function getGanttBarDragRange(projection: {
    timeline: Pick<IGanttProjection['timeline'], 'scale'>;
}, options: {
    edge?: 'start' | 'end';
    pointerStartTime: number;
    pointerTime: number;
    originalStart: number;
    originalEnd: number;
}): {
    start: number;
    end: number;
};
export declare function getGanttDragAutoScrollDirection(localX: number, leftBoundary: number, rightBoundary: number, pointerDeltaX: number): -1 | 0 | 1;
export declare function ganttXToTime(x: number, projection: IGanttProjection, timelineX: number, unitWidth: number, scrollX: number): number;
export declare function getGanttBarScrollTarget(projection: IGanttProjection, recordId: string, viewport: IBaseViewport, rowLayout: IBaseProjectedRowLayoutItem[], options?: {
    currentScrollX?: number;
    currentScrollY?: number;
}): IGanttBarScrollTarget | null;
export declare function getGanttInitialScrollX(projection: IGanttProjection, viewport: IBaseViewport, options?: IGanttInitialScrollOptions): number;
export declare function getGanttAnchoredScrollX(previousProjection: IGanttProjection, projection: IGanttProjection, currentScrollX: number, viewport: IBaseViewport): number;
