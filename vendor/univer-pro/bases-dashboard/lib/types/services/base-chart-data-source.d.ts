import type { IFilterConfig, IUniverInstanceService } from '@univerjs/core';
import type { Observable } from 'rxjs';
import type { IBasePivotCalculationResult } from '../types';
import type { BasePivotRPCService } from './base-pivot-rpc.service';
import { StaticChartSource } from '@univerjs-pro/engine-chart';
export interface IBaseChartDataScope {
    unitId: string;
    tableId: string;
    viewId: string;
    filters: Array<IFilterConfig | null>;
}
export declare const BaseChartDataSourceStatus: {
    readonly Loading: "loading";
    readonly Ready: "ready";
    readonly Error: "error";
};
export interface IBaseChartDataSourceState {
    status: typeof BaseChartDataSourceStatus[keyof typeof BaseChartDataSourceStatus];
    error?: unknown;
}
export declare class BaseChartDataSource extends StaticChartSource {
    private readonly _rpcService;
    private readonly _instanceService;
    private readonly _scope$;
    private readonly _state$;
    private readonly _result$;
    private _requestGeneration;
    private _isDisposed;
    readonly scope$: Observable<IBaseChartDataScope>;
    readonly state$: Observable<IBaseChartDataSourceState>;
    readonly result$: Observable<IBasePivotCalculationResult | null>;
    constructor(scope: IBaseChartDataScope, isRowDirection: boolean, _rpcService: BasePivotRPCService, _instanceService: IUniverInstanceService);
    get scope(): IBaseChartDataScope;
    get state(): IBaseChartDataSourceState;
    get result(): IBasePivotCalculationResult | null;
    setScope(scope: IBaseChartDataScope): void;
    setRowDirection(isRowDirection: boolean): void;
    refresh(): Promise<void>;
    dispose(): void;
    private _getPivotView;
    private _publishError;
    private _isCurrentRequest;
}
