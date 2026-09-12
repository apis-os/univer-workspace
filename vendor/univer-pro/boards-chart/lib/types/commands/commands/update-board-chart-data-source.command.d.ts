import type { ChartDataSourceValue } from '@univerjs-pro/engine-chart';
import type { ICommand } from '@univerjs/core';
export interface IUpdateBoardChartDataSourceCommandParams {
    unitId: string;
    dataSourceId: string;
    values: ChartDataSourceValue[][];
    name?: string;
}
export declare const UpdateBoardChartDataSourceCommand: ICommand<IUpdateBoardChartDataSourceCommandParams>;
