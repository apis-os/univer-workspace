import type { ICommand } from '@univerjs/core';
export interface IDuplicateSlideChartDataSourceCommandParams {
    unitId: string;
    chartId: string;
    duplicateDataSourceId?: string;
}
export declare const DuplicateSlideChartDataSourceCommand: ICommand<IDuplicateSlideChartDataSourceCommandParams>;
