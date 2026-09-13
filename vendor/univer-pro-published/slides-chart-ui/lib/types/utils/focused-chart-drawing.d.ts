import type { IAccessor } from '@univerjs/core';
export interface IFocusedSlideChartDrawing {
    unitId: string;
    subUnitId: string;
    drawingId: string;
}
export declare function resolveFocusedSlideChartDrawing(accessor: IAccessor): IFocusedSlideChartDrawing | null;
