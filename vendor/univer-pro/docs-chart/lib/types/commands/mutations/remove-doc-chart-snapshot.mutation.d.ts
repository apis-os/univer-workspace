import type { IMutation } from '@univerjs/core';
export interface IRemoveDocChartSnapshotMutationParams {
    unitId: string;
    chartId: string;
    cleanupDataSource?: boolean;
}
export declare const RemoveDocChartSnapshotMutation: IMutation<IRemoveDocChartSnapshotMutationParams>;
