import type { IChartModelBinding } from '@univerjs-pro/engine-chart';
import type { IBasePivotCalculationResult, IBasePivotChartConfig } from '../types';
import type { IBaseChartDataScope } from './base-chart-data-source';
import { Disposable, Injector, IUniverInstanceService } from '@univerjs/core';
import { BasePivotRPCService } from './base-pivot-rpc.service';
export declare class BaseChartRuntimeService extends Disposable {
    private readonly _injector;
    private readonly _rpcService;
    private readonly _instanceService;
    private readonly _records;
    constructor(_injector: Injector, _rpcService: BasePivotRPCService, _instanceService: IUniverInstanceService);
    acquireChartRuntime(chartId: string, scope: IBaseChartDataScope, chartConfig?: IBasePivotChartConfig): IChartModelBinding | undefined;
    getChartRuntime(unitId: string, chartId: string): IChartModelBinding | undefined;
    refreshChartRuntime(unitId: string, chartId: string, scope: IBaseChartDataScope, chartConfig?: IBasePivotChartConfig): Promise<IBasePivotCalculationResult | undefined>;
    releaseChartRuntime(unitId: string, chartId: string): boolean;
    removeUnit(unitId: string): void;
    dispose(): void;
    private _updateRecord;
    private _replaceGeneratedContext;
    private _getPivotView;
    private _getRecord;
    private _getOrCreateUnitRecords;
    private _removeRecord;
}
