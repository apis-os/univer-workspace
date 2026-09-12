import type { ICommand } from '@univerjs/core';
export interface IDuplicateBoardChartDataSourceCommandParams {
    unitId: string;
    chartId: string;
    duplicateDataSourceId?: string;
}
export interface IDuplicateBoardChartDataSourceCommandResult {
    dataSourceId: string;
}
export declare const DuplicateBoardChartDataSourceCommand: ICommand<IDuplicateBoardChartDataSourceCommandParams>;
