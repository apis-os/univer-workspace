import type { IDisposable } from '@univerjs/core';
import type { ChartViewStateName, IChartViewStateDefinition, IChartViewStateMap } from './chart-view-state';
export interface IChartViewStateRegistry {
    registerViewState<K extends ChartViewStateName>(key: K, definition: IChartViewStateDefinition<IChartViewStateMap[K]>): IDisposable;
    resolve<K extends ChartViewStateName>(key: K): IChartViewStateDefinition<IChartViewStateMap[K]>;
}
export declare class ChartViewStateRegistry implements IChartViewStateRegistry {
    private readonly _definitions;
    registerViewState<K extends ChartViewStateName>(key: K, definition: IChartViewStateDefinition<IChartViewStateMap[K]>): IDisposable;
    resolve<K extends ChartViewStateName>(key: K): IChartViewStateDefinition<IChartViewStateMap[K]>;
}
