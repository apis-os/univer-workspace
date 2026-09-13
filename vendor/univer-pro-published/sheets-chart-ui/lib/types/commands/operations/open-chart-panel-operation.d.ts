import type { IChartEditPanelRoute } from '@univerjs-pro/chart-ui';
import type { IOperation } from '@univerjs/core';
export interface IChartOpenPanelOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    route?: IChartEditPanelRoute;
}
export declare const ChartOpenPanelOperation: IOperation<IChartOpenPanelOperationParams>;
