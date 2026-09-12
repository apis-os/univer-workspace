import type { ChartDataSourceValue, ChartPendingConfig, IChartData, IChartDataSourceInput, IChartDescription, IChartHostConfigAdapter, IChartLiveAdapter, IChartResourceDataSource, IResourceRefChartDataSourceInput, IUniverDataSet } from '@univerjs-pro/engine-chart';
import type { ArrangeTypeEnum, DocumentDataModel, Injector } from '@univerjs/core';
import type { IDocumentChartDescriptionExtension } from './document-chart-description';
import type { DocChartInsertAnchor, IDocChartLayoutSpec, IDocumentChartInfo } from './types';
/** Document-owned changes committed alongside engine chart configuration. */
export interface IDocumentChartHostPatch {
    data?: ChartDataSourceValue[][];
    anchor?: DocChartInsertAnchor;
    layout?: IDocChartLayoutSpec;
}
/** Persistence seam required by a Document chart builder. */
export interface IDocumentChartConfigAdapter extends IChartHostConfigAdapter<IDocumentChartDescriptionExtension, ChartDataSourceValue, IDocumentChartHostPatch> {
}
/** Stable Document identity and services used by the builder adapter. */
export interface IDocumentChartConfigAdapterContext {
    unitId: string;
    chartId: string;
    drawingId: string;
    documentDataModel: DocumentDataModel;
    injector: Injector;
}
/** Commits Document chart changes using raw identity and package-owned commands. */
export declare class DocumentChartConfigAdapter implements IDocumentChartConfigAdapter, IChartLiveAdapter<ChartDataSourceValue[][] | IResourceRefChartDataSourceInput, IDocumentChartInfo> {
    private readonly _context;
    constructor(_context: IDocumentChartConfigAdapterContext);
    describe(config?: ChartPendingConfig, dataSet?: IUniverDataSet): IChartDescription & IDocumentChartDescriptionExtension;
    getInfo(): IDocumentChartInfo;
    getData(): ChartDataSourceValue[][] | null;
    getDataSource(): IChartResourceDataSource | null;
    commitDataSource(input: IChartDataSourceInput): Promise<void>;
    commitChanges(dataSource: IChartDataSourceInput | undefined, config: ChartPendingConfig, host: IDocumentChartHostPatch, replaceConfig?: boolean): Promise<void>;
    refreshDataSource(): Promise<void>;
    commit(configChange: ChartPendingConfig): void;
    update(info: IDocumentChartInfo): Promise<void>;
    private _replaceConfig;
    setDataSource(source: ChartDataSourceValue[][] | IResourceRefChartDataSourceInput): Promise<void>;
    setAbsolutePosition(x: number, y: number): void;
    setSize(width: number, height: number): void;
    arrange(type: ArrangeTypeEnum): void;
    setZOrder(zOrder: number): void;
    resolveData(configChange: ChartPendingConfig, dataSet?: IUniverDataSet): IChartData;
    resolveDataSet(data: ChartDataSourceValue[][]): IUniverDataSet;
    commitHost(patch: IDocumentChartHostPatch): void;
    remove(): boolean;
    private _commitDataSource;
}
