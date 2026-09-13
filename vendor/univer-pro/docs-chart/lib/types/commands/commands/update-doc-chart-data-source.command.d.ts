import type { ChartDataSourceValue } from '@univerjs-pro/engine-chart';
import type { ICommand } from '@univerjs/core';
export interface IUpdateDocChartDataSourceCommandParams {
    unitId: string;
    dataSourceId: string;
    values: ChartDataSourceValue[][];
    name?: string;
}
export declare const UpdateDocChartDataSourceCommand: ICommand<IUpdateDocChartDataSourceCommandParams>;
