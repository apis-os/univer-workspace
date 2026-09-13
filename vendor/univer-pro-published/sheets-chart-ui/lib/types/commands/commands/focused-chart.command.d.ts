import type { IChartEditPanelRoute } from '@univerjs-pro/chart-ui';
import type { IAccessor, ICommand } from '@univerjs/core';
import type { ISheetDrawing } from '@univerjs/sheets-drawing';
export declare function getFocusedChartDrawing(accessor: IAccessor): ISheetDrawing | null;
export interface IChartOpenFocusedChartPanelCommandParams {
    route?: IChartEditPanelRoute;
}
export declare const ChartOpenFocusedChartPanelCommand: ICommand<IChartOpenFocusedChartPanelCommandParams>;
export declare const ChartCopyFocusedChartCommand: ICommand;
export declare const ChartExportFocusedChartImageCommand: ICommand;
export declare const ChartDeleteFocusedChartCommand: ICommand;
