import type { IDisposable, IMutationInfo } from '@univerjs/core';
import type { IBoardTableElement } from '../board.type';
import type { IInsertBoardTableOperationParams } from '../commands/operations/insert-board-table.operation';
export interface IBoardTableAdapter {
    insertTable(params: IInsertBoardTableOperationParams): boolean;
    getRemoveTableMutationInfos?: (params: IBoardRemoveTableMutationInfoParams) => IBoardTableMutationInfos | null | undefined;
    getSearchEntries?: (params: IBoardTableSearchEntriesParams) => readonly IBoardTableSearchEntry[] | null | undefined;
}
export interface IBoardRemoveTableMutationInfoParams {
    unitId: string;
    subUnitId: string;
    element: IBoardTableElement;
}
export interface IBoardTableSearchEntriesParams {
    unitId: string;
    subUnitId: string;
    element: IBoardTableElement;
}
export interface IBoardTableSearchEntry {
    row: number;
    column: number;
    text: string;
}
export interface IBoardTableMutationInfos {
    redoMutations: IMutationInfo[];
    undoMutations: IMutationInfo[];
}
export interface IBoardTableAdapterService {
    registerAdapter(adapter: IBoardTableAdapter): IDisposable;
    insertTable(params: IInsertBoardTableOperationParams): boolean;
    getRemoveTableMutationInfos(params: IBoardRemoveTableMutationInfoParams): IBoardTableMutationInfos;
    getSearchEntries(params: IBoardTableSearchEntriesParams): IBoardTableSearchEntry[];
}
export declare const IBoardTableAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardTableAdapterService>;
export declare class BoardTableAdapterService implements IBoardTableAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardTableAdapter): IDisposable;
    insertTable(params: IInsertBoardTableOperationParams): boolean;
    getRemoveTableMutationInfos(params: IBoardRemoveTableMutationInfoParams): IBoardTableMutationInfos;
    getSearchEntries(params: IBoardTableSearchEntriesParams): IBoardTableSearchEntry[];
}
