import type { ChartModel, ChartTypeBits, IChartSnapshot } from '@univerjs-pro/engine-chart';
import type { Nullable } from '@univerjs/core';
import type { IInitialSheetChartMapping, IInitialSheetChartSourceResult } from '../chart-source/initial-sheet-chart-source-inference';
import type { ISheetChartDataSource, ISheetChartSourceRanges } from '../models/types';
import { Disposable, IResourceManagerService, IUniverInstanceService } from '@univerjs/core';
import { ChartModelService } from './chart-model.service';
import { SheetChartDataSourceManager } from './sheet-chart-data-source-manager';
export declare const SHEET_CHART_PLUGIN = "SHEET_CHART_PLUGIN";
export interface ISheetChartSnapshot extends IChartSnapshot {
    rangeInfo: ISheetChartSourceRanges;
}
type OptionalProperties<T, K extends keyof T> = Omit<T, K> & {
    [P in K]+?: T[P];
};
export type ISheetChartModelOptions = OptionalProperties<ISheetChartSnapshot, 'id'>;
export interface ISheetsChartResource {
    [sheetId: string]: ISheetChartSnapshot[];
}
export declare class SheetsChartService extends Disposable {
    private readonly _resourcesManagerService;
    private readonly _univerInstanceService;
    private readonly _chartModelService;
    private readonly _dataSourceManager;
    private _chartModelIdMap;
    private _dataSourceBindings;
    constructor(_resourcesManagerService: IResourceManagerService, _univerInstanceService: IUniverInstanceService, _chartModelService: ChartModelService, _dataSourceManager: SheetChartDataSourceManager);
    getSubUnitId(unitId: string, chartModelId: string): Nullable<string>;
    getUnitChartModels(unitId: string, subUnitId: string): (ChartModel | undefined)[];
    inferInitialChartMapping(rangeInfo: ISheetChartSourceRanges, chartType: ChartTypeBits, context?: NonNullable<IChartSnapshot['context']>): IInitialSheetChartMapping;
    inferInitialChartSource(rangeInfo: ISheetChartSourceRanges, chartType: ChartTypeBits, context?: NonNullable<IChartSnapshot['context']>): IInitialSheetChartSourceResult;
    private _inferPrimaryDataOrientation;
    private _getInitialDataOrientation;
    private _hasNonNumberCellInSingleRow;
    ensureChartModelCollection(unitId: string, subUnitId: string): Set<string>;
    getChartDataSource(id: string): ISheetChartDataSource | undefined;
    getChartSourceSpec(id: string): ISheetChartSourceRanges | undefined;
    replaceChartDataSource(id: string, rangeInfo: ISheetChartSourceRanges): boolean;
    refreshChartSource(): void;
    createChartModel(unitId: string, subUnitId: string, options: ISheetChartModelOptions, isNew?: boolean): ChartModel;
    private _applyInitialMappingToRangeInfo;
    removeChartModel(id: string): void;
    getChartModel(id: string): ChartModel | undefined;
    private _serializeChartForUnit;
    private _createDataSourceRuntimeBinding;
    private _disposeDataSourceRuntimeBinding;
    private _replaceReconciledContext;
    private _deserializeChartForUnit;
    private _initSnapshot;
    dispose(): void;
}
export {};
