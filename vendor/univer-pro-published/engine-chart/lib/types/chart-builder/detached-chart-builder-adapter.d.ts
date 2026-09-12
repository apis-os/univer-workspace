import type { Injector } from '@univerjs/core';
import type { IUniverDataSet } from '../types';
import type { IChartBuilderAdapter } from './chart-builder-adapter';
import type { ChartPendingConfig, IChartDescription } from './chart-types';
/** Shared adapter behavior for builders that have not been inserted into a host. */
export declare class DetachedChartBuilderAdapter<THostDescription extends object = object> implements IChartBuilderAdapter<THostDescription> {
    private readonly _description;
    private readonly _commitError;
    /** Creates detached behavior for a description and host-specific commit error. */
    constructor(_description: IChartDescription & THostDescription, _commitError: string, injector: Injector);
    private readonly _localeTexts;
    /** Returns a clone of the detached description. */
    describe(config?: ChartPendingConfig, dataSet?: IUniverDataSet): IChartDescription & THostDescription;
    /** Rejects persistence until the chart has been inserted into a host. */
    commit(): never;
    /** Detached drafts have no hosted materialization lifecycle. */
    resolveData(): never;
    protected rejectCommit(): never;
}
