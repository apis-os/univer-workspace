import type { Observable } from 'rxjs';
import type { IChartDataSourceRuntimeService, IChartDataSourceRuntimeState } from '../resource/chart-data-source-runtime.service';
import type { IChartResourceDataSource } from '../resource/chart-resource-repository';
import { ChartDataSource } from '../../../source/chart-source';
export declare const INLINE_DATA_SOURCE_REFRESH_ERROR = "Only a hosted referenced Chart datasource can be refreshed.";
export interface IChartResourceSourceProjection {
    headerRow: number;
    isRowDirection: boolean;
}
export declare class ChartResourceDataSourceRuntime<TDataSource extends IChartResourceDataSource> extends ChartDataSource {
    private readonly _dataSourceRuntimeService;
    private readonly _state$;
    private _handle;
    private _handleSubscription;
    private _isDisposed;
    private _projection;
    private _projector;
    private _table?;
    private _values?;
    private _descriptor;
    readonly state$: Observable<IChartDataSourceRuntimeState>;
    constructor(descriptor: TDataSource, _dataSourceRuntimeService: IChartDataSourceRuntimeService, projection: IChartResourceSourceProjection);
    get descriptor(): TDataSource;
    get state(): IChartDataSourceRuntimeState;
    refresh(): Promise<void>;
    markUnavailable(error: unknown): void;
    setDescriptorAndProjection(descriptor: TDataSource, projection: IChartResourceSourceProjection): void;
    dispose(): void;
    private _acceptState;
    private _setValues;
    private _publishProjectedTable;
    private _releaseHandle;
}
