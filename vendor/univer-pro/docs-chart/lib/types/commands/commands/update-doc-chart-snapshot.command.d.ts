import type { IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import type { ICommand } from '@univerjs/core';
export interface IUpdateDocChartSnapshotCommandParams {
    unitId: string;
    chartId: string;
    patch: Partial<Omit<IChartResourceSnapshot, 'id'>>;
}
export declare const UpdateDocChartSnapshotCommand: ICommand<IUpdateDocChartSnapshotCommandParams>;
