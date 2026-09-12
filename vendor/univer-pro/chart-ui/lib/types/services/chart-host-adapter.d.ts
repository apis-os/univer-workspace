import type { ChartModel, ChartPendingConfig, IChartBuilderAdapter } from '@univerjs-pro/engine-chart';
export declare abstract class IChartHostAdapter {
    abstract getChartModel(): ChartModel;
    abstract commit(config: ChartPendingConfig): void;
}
export declare class ChartHostAdapter extends IChartHostAdapter {
    private readonly _model;
    private readonly _commitTarget;
    constructor(_model: ChartModel, _commitTarget: Pick<IChartBuilderAdapter, 'commit'>);
    getChartModel(): ChartModel;
    commit(config: ChartPendingConfig): void;
}
