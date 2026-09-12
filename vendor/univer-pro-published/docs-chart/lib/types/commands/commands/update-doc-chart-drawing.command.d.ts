import type { ICommand, PositionedObjectLayoutType } from '@univerjs/core';
export interface IDocChartDrawingLayoutPatch {
    width?: number;
    height?: number;
    layoutType?: PositionedObjectLayoutType;
    position?: {
        x: number;
        y: number;
    };
}
export interface IUpdateDocChartDrawingCommandParams {
    unitId: string;
    drawingId: string;
    chartId?: string;
    layout: IDocChartDrawingLayoutPatch;
}
export declare const UpdateDocChartDrawingCommand: ICommand<IUpdateDocChartDrawingCommandParams>;
