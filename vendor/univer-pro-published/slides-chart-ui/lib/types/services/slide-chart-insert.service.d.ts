import type { ChartDataSourceValue, ChartStyle, ChartTypeBits, IChartDataSourceInput } from '@univerjs-pro/engine-chart';
import type { ISlideDrawing } from '@univerjs-pro/slides';
import { ISlideDrawingStateService } from '@univerjs-pro/slides-ui';
import { ICommandService, IUniverInstanceService } from '@univerjs/core';
export interface ISlideChartInsertOptions {
    dataSource?: IChartDataSourceInput;
    placeholderDrawing?: ISlideDrawing;
    style?: ChartStyle;
}
export declare class SlideChartInsertService {
    private readonly _instanceService;
    private readonly _commandService;
    private readonly _drawingStateService;
    constructor(_instanceService: IUniverInstanceService, _commandService: ICommandService, _drawingStateService: ISlideDrawingStateService);
    insertChartFromText(text: string, chartType: ChartTypeBits, options?: ISlideChartInsertOptions): boolean;
    insertChart(values: ChartDataSourceValue[][], chartType: ChartTypeBits, options?: ISlideChartInsertOptions): boolean;
    private _insertChartIntoPlaceholder;
}
