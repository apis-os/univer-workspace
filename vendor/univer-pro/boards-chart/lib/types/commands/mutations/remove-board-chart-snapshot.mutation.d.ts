import type { IMutation } from '@univerjs/core';
export interface IRemoveBoardChartSnapshotMutationParams {
    unitId: string;
    chartId: string;
    cleanupDataSource?: boolean;
}
export declare const RemoveBoardChartSnapshotMutation: IMutation<IRemoveBoardChartSnapshotMutationParams>;
