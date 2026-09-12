import type { IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import type { IMutation } from '@univerjs/core';
export interface ISetSlideChartSnapshotMutationParams {
    unitId: string;
    chart: IChartResourceSnapshot;
}
export declare const SetSlideChartSnapshotMutation: IMutation<ISetSlideChartSnapshotMutationParams>;
