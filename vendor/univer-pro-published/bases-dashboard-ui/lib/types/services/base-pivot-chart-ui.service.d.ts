import type { IChartModelBinding } from '@univerjs-pro/engine-chart';
import { ChartUIService, ChartViewStateRegistry } from '@univerjs-pro/chart-ui';
export declare class BasePivotChartUIService extends ChartUIService<IChartModelBinding, never> {
    readonly activeRuntimeModel: null;
    constructor(viewStates: ChartViewStateRegistry);
    executeChartUpdateConfig(_params: never): void;
}
