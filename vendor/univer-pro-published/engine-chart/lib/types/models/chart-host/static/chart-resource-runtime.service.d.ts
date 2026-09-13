import type { Injector } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { IChartContext, IUniverDataSet } from '../../../types';
import type { IChartDataSourceRuntimeService, IChartDataSourceRuntimeState } from '../resource/chart-data-source-runtime.service';
import type { ChartResourceRepository, IChartResource, IChartResourceContext, IChartResourceDataSource, IChartResourceSnapshot } from '../resource/chart-resource-repository';
import type { ChartDataSourceValue } from '../resource/inline-chart-table';
import { Disposable } from '@univerjs/core';
import { ChartModel } from '../../chart-model/chart-model';
export interface IChartModelBinding {
    unitId: string;
    chartId: string;
    dataSourceId: string;
    model: ChartModel;
}
export declare class ChartResourceRuntimeService<TDataSource extends IChartResourceDataSource, TChart extends IChartResourceSnapshot<IChartResourceContext, unknown>, TResource extends IChartResource<TDataSource, TChart>, TRuntime extends IChartModelBinding = IChartModelBinding> extends Disposable {
    private readonly _resourceRepository;
    private readonly _injector;
    private readonly _dataSourceRuntimeService;
    private readonly _activeRuntimeModel$;
    readonly activeRuntimeModel$: Observable<TRuntime | null>;
    get activeRuntimeModel(): TRuntime | null;
    private readonly _activeChartModel$;
    readonly activeChartModel$: Observable<ChartModel | null>;
    get activeChartModel(): ChartModel | null;
    private readonly _runtimeModels;
    private readonly _dataSourceBindings;
    private readonly _chartModelAdded$;
    readonly chartModelAdded$: Observable<TRuntime>;
    private readonly _chartModelRemoved$;
    readonly chartModelRemoved$: Observable<TRuntime>;
    /**
     * `_legacyBuildDataSet` preserves the public constructor contract for existing subclasses.
     * Hosted source projection is owned by `ChartResourceDataSourceRuntime` and does not invoke this callback.
     */
    constructor(_resourceRepository: ChartResourceRepository<TDataSource, TChart, TResource>, _injector: Injector, _legacyBuildDataSet: (values: ReadonlyArray<ReadonlyArray<ChartDataSourceValue>>) => IUniverDataSet, _dataSourceRuntimeService: IChartDataSourceRuntimeService);
    ensureChartModel(unitId: string, chartId: string): TRuntime | undefined;
    getChartModel(unitId: string, chartId: string): TRuntime | undefined;
    getDataSourceRuntimeState$(unitId: string, chartId: string): Observable<IChartDataSourceRuntimeState> | undefined;
    getDataSourceRuntimeState(unitId: string, chartId: string): IChartDataSourceRuntimeState | undefined;
    refreshChartDataSource(unitId: string, chartId: string): Promise<void>;
    setActiveChartRuntime(runtime: TRuntime | null): void;
    setActiveChartModel(chartModel: ChartModel | null): void;
    setActiveChartById(unitId: string, chartId: string): TRuntime | null;
    generateChartModelContext(unitId: string, chartId: string): IChartContext | undefined;
    refreshChartModel(unitId: string, chartId: string): TRuntime | undefined;
    refreshChartsByDataSource(unitId: string, dataSourceId: string): TRuntime[];
    removeChartModel(unitId: string, chartId: string): boolean;
    removeUnit(unitId: string): void;
    dispose(): void;
    protected _createStoredRuntime(runtime: IChartModelBinding): TRuntime;
    protected _beforeRuntimeRefresh(_runtime: TRuntime): void;
    private _createDataSource;
    private _createSourceProjection;
    private _handleResourceChange;
    private _setBinding;
    private _refreshRuntimeMetadata;
    private _releaseBindingsByDataSource;
    private _getBinding;
    private _removeBinding;
    private _disposeBinding;
    private _getOrCreateUnitMap;
}
