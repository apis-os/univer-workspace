import type { IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import type { IMutation } from '@univerjs/core';
export interface ISetDocChartSnapshotMutationParams {
    unitId: string;
    chart: IChartResourceSnapshot;
}
export declare const SetDocChartSnapshotMutation: IMutation<ISetDocChartSnapshotMutationParams>;
