import type { ChartPendingConfig, IChartBuilderAdapter, IChartCreateConfig, IChartData, IChartDescription, IChartLiveAdapter, IUniverDataSet } from '@univerjs-pro/engine-chart';
import type { ArrangeTypeEnum, Injector } from '@univerjs/core';
import type { ISheetChartDescriptionExtension } from './sheet-chart-description';
import type { ChartSourceSpec, IChartLayoutPatch, ISheetChartInfo } from './types';
/** Sheet-owned changes committed alongside engine chart configuration. */
export interface ISheetChartHostPatch {
    source?: ChartSourceSpec;
    layout?: IChartLayoutPatch;
}
/** Persistence seam required by a Sheet chart builder. */
export interface ISheetChartConfigAdapter extends IChartBuilderAdapter<ISheetChartDescriptionExtension> {
    commitHost(patch: ISheetChartHostPatch): void;
    resolveData(config: ChartPendingConfig, source?: ChartSourceSpec): IChartData;
    resolveSource(source: ChartSourceSpec): {
        dataSet: IUniverDataSet;
        isRowDirection: boolean;
    };
}
/** Stable Sheet identity and services used by the builder adapter. */
export interface ISheetChartConfigAdapterContext {
    unitId: string;
    subUnitId: string;
    chartId: string;
    injector: Injector;
}
/** Commits Sheet chart changes using raw identity and package-owned commands. */
export declare class SheetChartConfigAdapter implements ISheetChartConfigAdapter, IChartLiveAdapter<ChartSourceSpec, ISheetChartInfo> {
    private readonly _context;
    private readonly _injector;
    constructor(_context: ISheetChartConfigAdapterContext);
    describe(config?: ChartPendingConfig, dataSet?: IUniverDataSet): IChartDescription & ISheetChartDescriptionExtension;
    getInfo(): ISheetChartInfo;
    commit(configChange: ChartPendingConfig): void;
    update(info: ISheetChartInfo): Promise<void>;
    commitChanges(source: ChartSourceSpec, config: IChartCreateConfig, layout: IChartLayoutPatch): Promise<void>;
    private _replaceConfig;
    setDataSource(source: ChartSourceSpec): void;
    setAbsolutePosition(x: number, y: number): void;
    setSize(width: number, height: number): void;
    arrange(type: ArrangeTypeEnum): void;
    setZOrder(zOrder: number): void;
    resolveData(configChange: ChartPendingConfig, source?: ChartSourceSpec): IChartData;
    resolveSource(source: ChartSourceSpec): {
        dataSet: IUniverDataSet;
        isRowDirection: boolean;
    };
    commitHost(patch: ISheetChartHostPatch): void;
    remove(): Promise<boolean>;
    private _resolveSourceRange;
    private _getChartModel;
}
