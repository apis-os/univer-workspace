import type { IDisposable, IMutationInfo } from '@univerjs/core';
import type { IBoardChartElement } from '../board.type';
import type { IInsertBoardChartCommandParams } from '../commands/commands/insert-board-chart.command';
export interface IBoardChartAdapter {
    getInsertChartMutationInfos(params: IInsertBoardChartCommandParams): IBoardChartInsertMutationInfos | null | undefined;
    getRemoveChartMutationInfos?: (params: IBoardRemoveChartMutationInfoParams) => IBoardChartMutationInfos | null | undefined;
}
export interface IBoardRemoveChartMutationInfoParams {
    unitId: string;
    subUnitId: string;
    element: IBoardChartElement;
}
export interface IBoardChartMutationInfos {
    redoMutations: IMutationInfo[];
    undoMutations: IMutationInfo[];
}
export interface IBoardChartInsertMutationInfos extends IBoardChartMutationInfos {
    rollbackMutationGroups: IMutationInfo[][];
}
export interface IBoardChartAdapterService {
    registerAdapter(adapter: IBoardChartAdapter): IDisposable;
    getInsertChartMutationInfos(params: IInsertBoardChartCommandParams): IBoardChartInsertMutationInfos | null;
    getRemoveChartMutationInfos(params: IBoardRemoveChartMutationInfoParams): IBoardChartMutationInfos;
}
export declare const IBoardChartAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardChartAdapterService>;
export declare class BoardChartAdapterService implements IBoardChartAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardChartAdapter): IDisposable;
    getInsertChartMutationInfos(params: IInsertBoardChartCommandParams): IBoardChartInsertMutationInfos | null;
    getRemoveChartMutationInfos(params: IBoardRemoveChartMutationInfoParams): IBoardChartMutationInfos;
}
