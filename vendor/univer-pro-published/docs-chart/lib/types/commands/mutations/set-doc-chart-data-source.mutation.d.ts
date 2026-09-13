import type { IChartResourceDataSource } from '@univerjs-pro/engine-chart';
import type { IMutation } from '@univerjs/core';
export interface ISetDocChartDataSourceMutationParams {
    unitId: string;
    dataSource: IChartResourceDataSource;
}
export declare const SetDocChartDataSourceMutation: IMutation<ISetDocChartDataSourceMutationParams>;
