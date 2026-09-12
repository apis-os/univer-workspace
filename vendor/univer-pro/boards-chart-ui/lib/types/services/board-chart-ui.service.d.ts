import type { IUpdateBoardChartConfigCommandParams } from '@univerjs-pro/boards-chart';
import type { IChartContext, IChartDataAggregation, IChartModelBinding } from '@univerjs-pro/engine-chart';
import { BoardChartModelService, BoardChartResourceService } from '@univerjs-pro/boards-chart';
import { ChartUIService, ChartViewStateRegistry } from '@univerjs-pro/chart-ui';
import { ICommandService } from '@univerjs/core';
type BoardChartUpdateConfigParams = Omit<IUpdateBoardChartConfigCommandParams, 'unitId' | 'chartId'> & {
    unitId?: string;
    chartId?: string;
    context?: Partial<IChartContext>;
    dataAggregation?: Partial<IChartDataAggregation>;
};
export type IBoardChartUIService = BoardChartUIService;
export declare const IBoardChartUIService: import("@wendellhu/redi").IdentifierDecorator<BoardChartUIService>;
export declare class BoardChartUIService extends ChartUIService<IChartModelBinding, BoardChartUpdateConfigParams> {
    private readonly _modelService;
    private readonly _resourceService;
    private readonly _commandService;
    constructor(_modelService: BoardChartModelService, _resourceService: BoardChartResourceService, _commandService: ICommandService, viewStates: ChartViewStateRegistry);
    get activeRuntimeModel(): IChartModelBinding | null;
    get activeRuntimeModel$(): import("rxjs").Observable<IChartModelBinding | null>;
    get resourceService(): BoardChartResourceService;
    executeChartUpdateConfig(params: BoardChartUpdateConfigParams): void;
}
export {};
