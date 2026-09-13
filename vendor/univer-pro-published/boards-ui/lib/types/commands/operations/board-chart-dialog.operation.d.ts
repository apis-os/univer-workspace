import type { IInsertBoardChartCommandParams } from '@univerjs-pro/boards';
import type { ICommand } from '@univerjs/core';
export declare const BOARD_INSERT_CHART_PANEL_COMPONENT = "board-chart.insert-panel";
export declare const BOARD_INSERT_CHART_DIALOG_ID = "board.insert-chart.dialog";
export type IOpenBoardInsertChartDialogOperationParams = Omit<IInsertBoardChartCommandParams, 'options'>;
export declare const OpenBoardInsertChartDialogOperation: ICommand<IOpenBoardInsertChartDialogOperationParams>;
