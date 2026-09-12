import type { ICommand } from '@univerjs/core';
export interface IDuplicateDocChartDataSourceCommandParams {
    unitId: string;
    chartId: string;
    duplicateDataSourceId?: string;
}
export declare const DuplicateDocChartDataSourceCommand: ICommand<IDuplicateDocChartDataSourceCommandParams>;
