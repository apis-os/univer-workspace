import type { ChartDataSourceValue, ChartPendingConfig, IChartData, IChartDataSourceInput, IChartDescription, IChartHostConfigAdapter, IChartLiveAdapter, IChartResourceDataSource, IResourceRefChartDataSourceInput, IUniverDataSet } from '@univerjs-pro/engine-chart';
import type { SlideModel } from '@univerjs-pro/slides';
import type { ArrangeTypeEnum, Injector } from '@univerjs/core';
import type { ISlideChartDescriptionExtension } from './slide-chart-description';
import type { ISlideChartInfo } from './types';
/** Slide-owned changes committed alongside engine chart configuration. */
export type SlideChartHostPatch = Partial<Omit<ISlideChartDescriptionExtension, 'zOrder'>> & {
    data?: ChartDataSourceValue[][];
    zOrder?: number;
};
/** Persistence seam required by a Slide chart builder. */
export interface ISlideChartConfigAdapter extends IChartHostConfigAdapter<ISlideChartDescriptionExtension, ChartDataSourceValue, SlideChartHostPatch> {
}
/** Stable Slide identity and services used by the builder adapter. */
export interface ISlideChartConfigAdapterContext {
    unitId: string;
    subUnitId: string;
    chartId: string;
    elementId: string;
    slideModel: SlideModel;
    injector: Injector;
}
/** Commits Slide chart changes using raw identity and package-owned commands. */
export declare class SlideChartConfigAdapter implements ISlideChartConfigAdapter, IChartLiveAdapter<ChartDataSourceValue[][] | IResourceRefChartDataSourceInput, ISlideChartInfo> {
    private readonly _context;
    constructor(_context: ISlideChartConfigAdapterContext);
    describe(config?: ChartPendingConfig, dataSet?: IUniverDataSet): IChartDescription & ISlideChartDescriptionExtension;
    getInfo(): ISlideChartInfo;
    getData(): ChartDataSourceValue[][] | null;
    getDataSource(): IChartResourceDataSource | null;
    commitDataSource(input: IChartDataSourceInput): Promise<void>;
    commitChanges(dataSource: IChartDataSourceInput | undefined, config: ChartPendingConfig, host: SlideChartHostPatch, replaceConfig?: boolean): Promise<void>;
    refreshDataSource(): Promise<void>;
    commit(configChange: ChartPendingConfig): void;
    update(info: ISlideChartInfo): Promise<void>;
    private _replaceConfig;
    setDataSource(source: ChartDataSourceValue[][] | IResourceRefChartDataSourceInput): Promise<void>;
    setAbsolutePosition(x: number, y: number): void;
    setSize(width: number, height: number): void;
    arrange(type: ArrangeTypeEnum): void;
    setZOrder(index: number): void;
    resolveData(configChange: ChartPendingConfig, dataSet?: IUniverDataSet): IChartData;
    resolveDataSet(data: ChartDataSourceValue[][]): IUniverDataSet;
    commitHost(patch: SlideChartHostPatch): void;
    remove(): boolean;
    private _commitDataSource;
    private _commitZOrder;
}
