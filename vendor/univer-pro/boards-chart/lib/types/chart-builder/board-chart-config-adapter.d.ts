import type { BoardModel } from '@univerjs-pro/boards';
import type { ChartDataSourceValue, ChartPendingConfig, IChartData, IChartDataSourceInput, IChartDescription, IChartHostConfigAdapter, IChartLiveAdapter, IChartResourceDataSource, IResourceRefChartDataSourceInput, IUniverDataSet } from '@univerjs-pro/engine-chart';
import type { Injector } from '@univerjs/core';
import type { IBoardChartDescriptionExtension } from './board-chart-description';
import type { IBoardChartInfo } from './types';
import { ArrangeTypeEnum } from '@univerjs/core';
/** Board-owned changes committed alongside engine chart configuration. */
export interface IBoardChartHostPatch {
    data?: ChartDataSourceValue[][];
    position?: {
        x: number;
        y: number;
    };
    size?: {
        width: number;
        height: number;
    };
    containerId?: string | null;
    laneId?: string | null;
    zOrder?: number;
}
/** Persistence seam required by a Board chart builder. */
export interface IBoardChartConfigAdapter extends IChartHostConfigAdapter<IBoardChartDescriptionExtension, ChartDataSourceValue, IBoardChartHostPatch> {
}
/** Stable Board identity and services used by the builder adapter. */
export interface IBoardChartConfigAdapterContext {
    unitId: string;
    pageId: string;
    chartId: string;
    elementId: string;
    boardModel: BoardModel;
    injector: Injector;
}
/** Commits Board chart changes using raw identity and package-owned commands. */
export declare class BoardChartConfigAdapter implements IBoardChartConfigAdapter, IChartLiveAdapter<ChartDataSourceValue[][] | IResourceRefChartDataSourceInput, IBoardChartInfo> {
    private readonly _context;
    constructor(_context: IBoardChartConfigAdapterContext);
    describe(config?: ChartPendingConfig, dataSet?: IUniverDataSet): IChartDescription & IBoardChartDescriptionExtension;
    getInfo(): IBoardChartInfo;
    getData(): ChartDataSourceValue[][] | null;
    getDataSource(): IChartResourceDataSource | null;
    commitDataSource(input: IChartDataSourceInput): Promise<void>;
    commitChanges(dataSource: IChartDataSourceInput | undefined, config: ChartPendingConfig, host: IBoardChartHostPatch, replaceConfig?: boolean): Promise<void>;
    refreshDataSource(): Promise<void>;
    commit(configChange: ChartPendingConfig): void;
    update(info: IBoardChartInfo): Promise<void>;
    private _replaceConfig;
    setDataSource(source: ChartDataSourceValue[][] | IResourceRefChartDataSourceInput): Promise<void>;
    setAbsolutePosition(x: number, y: number): void;
    setSize(width: number, height: number): void;
    arrange(type: ArrangeTypeEnum): void;
    setZOrder(index: number): void;
    resolveData(configChange: ChartPendingConfig, dataSet?: IUniverDataSet): IChartData;
    resolveDataSet(data: ChartDataSourceValue[][]): IUniverDataSet;
    commitHost(patch: IBoardChartHostPatch): void;
    remove(): boolean;
    private _commitData;
    private _commitDataSource;
    private _commitElement;
    private _commitZOrder;
}
