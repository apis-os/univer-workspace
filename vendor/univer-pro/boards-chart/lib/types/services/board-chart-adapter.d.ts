import type { IBoardChartAdapter, IBoardChartInsertMutationInfos, IBoardChartMutationInfos, IBoardRemoveChartMutationInfoParams, IInsertBoardChartCommandParams } from '@univerjs-pro/boards';
import type { ChartDataSourceValue, ChartStyle, IChartDataAggregation, IChartDataSourceInput, IChartResourceContext, IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import type { IMutationInfo } from '@univerjs/core';
import type { IChangeBoardChartDataSourceCommandParams } from '../commands/commands/change-board-chart-data-source.command';
import { IBoardElementService } from '@univerjs-pro/boards';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
import { ICommandService, IConfigService, IUndoRedoService } from '@univerjs/core';
import { BoardChartResourceService } from './board-chart-resource.service';
export interface IBoardChartAdapterInsertOptions {
    chartType?: ChartTypeBits;
    data?: ChartDataSourceValue[][] | {
        values: ChartDataSourceValue[][];
        name?: string;
    };
    style?: ChartStyle;
    context?: IChartResourceContext;
    state?: IChartResourceSnapshot['state'];
    dataAggregation?: IChartDataAggregation;
    dataSource?: IChartDataSourceInput;
}
export declare class BoardChartAdapter implements IBoardChartAdapter {
    private readonly _commandService;
    private readonly _undoRedoService;
    private readonly _resourceService;
    private readonly _elementService;
    private readonly _configService;
    constructor(_commandService: ICommandService, _undoRedoService: IUndoRedoService, _resourceService: BoardChartResourceService, _elementService: IBoardElementService, _configService: IConfigService);
    changeChartDataSource(params: IChangeBoardChartDataSourceCommandParams): boolean;
    getInsertChartMutationInfos(params: IInsertBoardChartCommandParams): IBoardChartInsertMutationInfos | null;
    getRemoveChartMutationInfos(params: IBoardRemoveChartMutationInfoParams): IBoardChartMutationInfos;
}
export declare function createBoardRollbackMutationGroups(redoMutations: IMutationInfo[], undoMutations: IMutationInfo[]): IMutationInfo[][];
