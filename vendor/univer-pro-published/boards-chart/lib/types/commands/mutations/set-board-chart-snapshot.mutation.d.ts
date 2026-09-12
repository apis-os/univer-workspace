import type { IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import type { IMutation } from '@univerjs/core';
export interface ISetBoardChartSnapshotMutationParams {
    unitId: string;
    chart: IChartResourceSnapshot;
}
export declare const SetBoardChartSnapshotMutation: IMutation<ISetBoardChartSnapshotMutationParams>;
