import type { IChartContext, IChartModelInit } from '@univerjs-pro/engine-chart';
import type { Nullable } from '@univerjs/core';
import type { IInitialSheetChartMapping } from '../chart-source/initial-sheet-chart-source-inference';
import type { ISheetChartDataSource } from '../models/types';
import { ChartModel } from '@univerjs-pro/engine-chart';
import { Disposable, Injector } from '@univerjs/core';
export declare const SHEET_CHART_PLUGIN = "SHEET_CHART_PLUGIN";
export declare class ChartModelService extends Disposable {
    private readonly _injector;
    private readonly _activeChartModel$;
    private readonly _chartModels;
    private readonly _chartModelAdded$;
    private readonly _chartModelRemoved$;
    readonly activeChartModel$: import("rxjs").Observable<Nullable<ChartModel>>;
    readonly chartModelAdded$: import("rxjs").Observable<ChartModel>;
    readonly chartModelRemoved$: import("rxjs").Observable<string>;
    get activeChartModel(): Nullable<ChartModel>;
    constructor(_injector: Injector);
    setActiveChartModel(chartModel: ChartModel | null): void;
    getActiveChartModel(): Nullable<ChartModel>;
    getChartModel(id: string): ChartModel | undefined;
    createChartModel(id: string, options: IChartModelInit, isNew?: boolean): ChartModel;
    reconcileChartModelContext(id: string): IChartContext | undefined;
    rebuildChartModelContextForDataSource(id: string, dataSource: ISheetChartDataSource, mapping: Pick<IInitialSheetChartMapping, 'categoryIndexes' | 'seriesIndexes'>): IChartContext | undefined;
    removeChartModel(id: string): boolean;
    dispose(): void;
}
