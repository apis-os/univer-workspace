import type { ChartDataSourceValue, ChartTypeBits } from '@univerjs-pro/engine-chart';
import type { DrawingTypeEnum, IDocDrawingBase } from '@univerjs/core';
export declare enum DocChartDataEditMode {
    DuplicateIfShared = "duplicateIfShared",
    UpdateShared = "updateShared",
    RejectIfShared = "rejectIfShared"
}
export interface IDocChartDrawing extends IDocDrawingBase {
    drawingType: typeof DrawingTypeEnum.DRAWING_CHART;
    chartId: string;
}
export interface ICreateDocChartInput {
    unitId: string;
    values: ChartDataSourceValue[][];
    chartType: ChartTypeBits;
    width?: number;
    height?: number;
}
