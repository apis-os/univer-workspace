import type { ChartDataSourceValue, ChartTypeBits, IChartDataSourceInput, IChartResourceDataSource } from '@univerjs-pro/engine-chart';
import { BoardChartModelService, BoardChartResourceService } from '@univerjs-pro/boards-chart';
import { Disposable, ICommandService } from '@univerjs/core';
export interface IBoardChartDataEditState {
    chartId: string;
    chartType: ChartTypeBits;
    dataSource: IChartResourceDataSource;
    sharingCount: number;
    unitId: string;
}
export interface IBoardChartUpdateDataOptions {
    chartId: string;
    name?: string;
    unitId: string;
    updateShared?: boolean;
    values: ChartDataSourceValue[][];
}
export declare class BoardChartDataEditService extends Disposable {
    private readonly _resourceService;
    private readonly _modelService;
    private readonly _commandService;
    constructor(_resourceService: BoardChartResourceService, _modelService: BoardChartModelService, _commandService: ICommandService);
    getDataEditState(unitId: string, chartId: string): IBoardChartDataEditState | null;
    updateDataForChart(options: IBoardChartUpdateDataOptions): Promise<boolean>;
    changeDataSource(unitId: string, chartId: string, dataSource: IChartDataSourceInput): Promise<boolean>;
}
