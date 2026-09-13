import type { ChartDataSourceValue, IChartDataSourceInput, IChartResourceDataSource } from '@univerjs-pro/engine-chart';
import type { SlideChartDataEditorSubmitMode } from '../components/SlideChartDataEditor';
import { SlideChartResourceService } from '@univerjs-pro/slides-chart';
import { ICommandService } from '@univerjs/core';
export interface ISlideChartDataEditorState {
    unitId: string;
    chartId: string;
    dataSourceId: string;
    dataSource: IChartResourceDataSource;
    values: ChartDataSourceValue[][];
    sharingCount: number;
}
export declare class SlideChartDataEditService {
    private readonly _commandService;
    private readonly _resourceService;
    constructor(_commandService: ICommandService, _resourceService: SlideChartResourceService);
    getEditorState(unitId: string, chartId: string): ISlideChartDataEditorState | null;
    updateDataFromText(unitId: string, chartId: string, text: string, mode: SlideChartDataEditorSubmitMode): boolean;
    updateData(unitId: string, chartId: string, values: ChartDataSourceValue[][], _mode: SlideChartDataEditorSubmitMode): boolean;
    changeDataSource(unitId: string, chartId: string, dataSource: IChartDataSourceInput): boolean;
}
