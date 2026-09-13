import type { ICommand } from '@univerjs/core';
export interface IInsertBoardChartCommandParams {
    unitId: string;
    subUnitId: string;
    elementId?: string;
    left: number;
    top: number;
    chartId?: string;
    dataSourceId?: string;
    parentId?: string;
    laneId?: string;
    insertIndex?: number;
    width?: number;
    height?: number;
    options?: unknown;
}
export declare const InsertBoardChartCommand: ICommand<IInsertBoardChartCommandParams>;
