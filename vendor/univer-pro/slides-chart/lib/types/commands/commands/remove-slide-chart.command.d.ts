import type { ICommand } from '@univerjs/core';
export interface IRemoveSlideChartCommandParams {
    unitId: string;
    subUnitId: string;
    chartId: string;
    elementId: string;
}
export declare const RemoveSlideChartCommand: ICommand<IRemoveSlideChartCommandParams>;
