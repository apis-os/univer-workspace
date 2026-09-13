import type { IInsertDocChartCommandResult } from '@univerjs-pro/docs-chart';
import type { ChartDataSourceValue, ChartStyle, ChartTypeBits, IChartDataAggregation, IChartDataSourceInput, IChartResourceContext } from '@univerjs-pro/engine-chart';
import type { ITextRangeParam } from '@univerjs/core';
import { ICommandService, IUniverInstanceService } from '@univerjs/core';
import { DocContentInsertService, DocSelectionManagerService } from '@univerjs/docs';
export interface IDocChartInsertOptions {
    context?: IChartResourceContext;
    dataSource?: IChartDataSourceInput;
    dataAggregation?: IChartDataAggregation;
    style?: ChartStyle;
    insertRange?: ITextRangeParam;
    width?: number;
    height?: number;
    focus?: boolean;
}
export interface IDocChartInsertResult extends IInsertDocChartCommandResult {
    unitId: string;
}
export declare class DocChartInsertService {
    private readonly _instanceService;
    private readonly _commandService;
    private readonly _docSelectionManagerService;
    private readonly _docContentInsertService;
    constructor(_instanceService: IUniverInstanceService, _commandService: ICommandService, _docSelectionManagerService: DocSelectionManagerService, _docContentInsertService: DocContentInsertService);
    insertChartFromText(text: string, chartType: ChartTypeBits, options?: IDocChartInsertOptions): IDocChartInsertResult | false;
    insertChart(values: ChartDataSourceValue[][], chartType: ChartTypeBits, options?: IDocChartInsertOptions): IDocChartInsertResult | false;
    private _resolveInsertPosition;
    private _prepareStandaloneInsertLine;
}
