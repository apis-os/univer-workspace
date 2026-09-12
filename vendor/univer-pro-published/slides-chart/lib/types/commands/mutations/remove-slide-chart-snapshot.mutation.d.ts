import type { IMutation } from '@univerjs/core';
export interface IRemoveSlideChartSnapshotMutationParams {
    unitId: string;
    chartId: string;
    cleanupDataSource?: boolean;
}
export declare const RemoveSlideChartSnapshotMutation: IMutation<IRemoveSlideChartSnapshotMutationParams>;
