import type { DeepReadonly } from '@univerjs/core';
import type { IChartData, IUniverDataSet } from '../types';
import type { IChartBuilderAdapter } from './chart-builder-adapter';
import type { ChartPendingConfig, IChartDescription } from './chart-types';
import type { IChartConfigOperation } from './configuration/chart-config-operation';
import { ChartTypeString } from './chart-types';
/** Maintains an immutable chart baseline plus pending semantic configuration changes. */
export declare class ChartBuilder<THostDescription extends object = object> {
    readonly id: string;
    readonly adapter: IChartBuilderAdapter<THostDescription>;
    protected _baseline: IChartDescription & THostDescription;
    protected _pending: ChartPendingConfig;
    /** Creates a builder for one chart identity and host adapter. */
    constructor(id: string, baseline: IChartDescription & THostDescription, adapter: IChartBuilderAdapter<THostDescription>);
    /** Returns the chart type fixed by the builder baseline. */
    get type(): ChartTypeString;
    /** Merges a semantic patch into the pending configuration. */
    mergePending(patch: ChartPendingConfig): void;
    /** Applies one typed configuration operation to the pending state. */
    apply(operation: IChartConfigOperation): void;
    /** Returns a frozen description composed from the baseline and pending state. */
    describe(): DeepReadonly<IChartDescription & THostDescription>;
    /** Materializes a fresh deeply read-only engine data result for this hosted builder. */
    resolveData(): DeepReadonly<IChartData>;
    /** Persists pending changes through the host adapter and refreshes the baseline. */
    commit(): void | Promise<void>;
    protected refreshBaseline(): void;
    /** Supplies host-owned pending data when `describe()` needs to refresh source metadata. */
    protected getDescriptionDataSetOverride(): IUniverDataSet | undefined;
    /** Adds host-owned pending fields before the public description is frozen. */
    protected composeHostDescription(description: IChartDescription & THostDescription): IChartDescription & THostDescription;
    private _assertValidPieCompositePatch;
}
