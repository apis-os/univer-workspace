import type { IChartDataSourceInput } from '@univerjs-pro/engine-chart';
import type { ICommand } from '@univerjs/core';
export interface IChangeBoardChartDataSourceCommandParams {
    unitId: string;
    chartId: string;
    dataSource: IChartDataSourceInput;
    name?: string;
    duplicateDataSourceId?: string;
}
export declare const ChangeBoardChartDataSourceCommand: ICommand<IChangeBoardChartDataSourceCommandParams>;
