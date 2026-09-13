import type { IChartResourceDataSource } from '@univerjs-pro/engine-chart';
import type { IMutation } from '@univerjs/core';
export interface ISetBoardChartDataSourceMutationParams {
    unitId: string;
    dataSource: IChartResourceDataSource;
}
export declare const SetBoardChartDataSourceMutation: IMutation<ISetBoardChartDataSourceMutationParams>;
