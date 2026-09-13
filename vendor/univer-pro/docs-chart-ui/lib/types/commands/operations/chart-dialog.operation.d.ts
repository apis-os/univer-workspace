import type { IChartEditPanelRoute } from '@univerjs-pro/chart-ui';
import type { ChartTypeBits } from '@univerjs-pro/engine-chart';
import type { IOperation, ITextRangeParam } from '@univerjs/core';
export interface IOpenDocChartInsertDialogOperationParams {
    value?: ChartTypeBits;
    defaultChartType?: ChartTypeBits;
    defaultTableText?: string;
    insertRange?: ITextRangeParam;
}
export interface IOpenDocChartEditorDialogOperationParams {
    unitId: string;
    chartId: string;
    drawingId?: string;
    route?: IChartEditPanelRoute;
}
export declare const OpenDocChartInsertDialogOperation: IOperation<IOpenDocChartInsertDialogOperationParams>;
export declare const OpenDocChartEditorDialogOperation: IOperation<IOpenDocChartEditorDialogOperationParams>;
