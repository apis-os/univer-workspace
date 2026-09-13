import type { IDisposable } from '@univerjs/core';
import type { ChartViewStateName, IChartViewStateDefinition, IChartViewStateMap } from './chart-view-state';
import { Disposable } from '@univerjs/core';
import { ChartViewStateRegistry } from './chart-view-state-registry';
export interface IChartUIService<TRuntimeModel = unknown, TUpdateConfigParams = never> {
    readonly activeRuntimeModel: TRuntimeModel | null;
    executeChartUpdateConfig(params: TUpdateConfigParams): void;
    registerViewState<K extends ChartViewStateName>(key: K, definition: IChartViewStateDefinition<IChartViewStateMap[K]>): IDisposable;
    getViewState<K extends ChartViewStateName>(key: K): IChartViewStateDefinition<IChartViewStateMap[K]>;
}
export declare const IChartUIService: import("@wendellhu/redi").IdentifierDecorator<IChartUIService<unknown, never>>;
export declare abstract class ChartUIService<TRuntimeModel, TUpdateConfigParams> extends Disposable implements IChartUIService<TRuntimeModel, TUpdateConfigParams> {
    abstract readonly activeRuntimeModel: TRuntimeModel | null;
    abstract executeChartUpdateConfig(params: TUpdateConfigParams): void;
    private readonly _viewStates;
    constructor(viewStates: ChartViewStateRegistry);
    registerViewState<K extends ChartViewStateName>(key: K, definition: IChartViewStateDefinition<IChartViewStateMap[K]>): IDisposable;
    getViewState<K extends ChartViewStateName>(key: K): IChartViewStateDefinition<IChartViewStateMap[K]>;
}
