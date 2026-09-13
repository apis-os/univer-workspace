import type { ChartDataSourceValue, IChartDataSourceInput, IChartResourceDataSource } from '@univerjs-pro/engine-chart';
import type { DocChartDataEditorSubmitMode } from '../components/DocChartDataEditor';
import { ChartResourceRepository } from '@univerjs-pro/engine-chart';
import { ICommandService } from '@univerjs/core';
export interface IDocChartDataEditorState {
    unitId: string;
    chartId: string;
    dataSourceId: string;
    dataSource: IChartResourceDataSource;
    values: ChartDataSourceValue[][];
    sharingCount: number;
}
export declare class DocChartDataEditService {
    private readonly _commandService;
    private readonly _resourceService;
    constructor(_commandService: ICommandService, _resourceService: ChartResourceRepository);
    getEditorState(unitId: string, chartId: string): IDocChartDataEditorState | null;
    updateDataFromText(unitId: string, chartId: string, text: string, mode: DocChartDataEditorSubmitMode): boolean;
    updateData(unitId: string, chartId: string, values: ChartDataSourceValue[][], _mode: DocChartDataEditorSubmitMode): boolean;
    changeDataSource(unitId: string, chartId: string, dataSource: IChartDataSourceInput): boolean;
}
