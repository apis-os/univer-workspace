import type { IChartEditPanelRoute } from '@univerjs-pro/chart-ui';
import type { IOperation } from '@univerjs/core';
export interface ISlideChartPanelOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    route?: IChartEditPanelRoute;
}
export interface ISlideChartDataEditorOperationParams {
    unitId: string;
    chartId: string;
}
export declare const OpenSlideChartPanelOperation: IOperation<ISlideChartPanelOperationParams>;
export declare const CloseSlideChartPanelOperation: IOperation<ISlideChartPanelOperationParams>;
export declare const OpenSlideChartDataEditorOperation: IOperation<ISlideChartDataEditorOperationParams>;
