import type { IChartResourceDataSource } from '@univerjs-pro/engine-chart';
import type { IMutation } from '@univerjs/core';
export interface ISetSlideChartDataSourceMutationParams {
    unitId: string;
    dataSource: IChartResourceDataSource;
}
export declare const SetSlideChartDataSourceMutation: IMutation<ISetSlideChartDataSourceMutationParams>;
