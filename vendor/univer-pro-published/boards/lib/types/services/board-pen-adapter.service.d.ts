import type { IDisposable } from '@univerjs/core';
import type { IBeginBoardPenOperationParams } from '../commands/operations/begin-board-pen.operation';
export interface IBoardPenAdapter {
    beginPenMode(params: IBeginBoardPenOperationParams): boolean;
}
export interface IBoardPenAdapterService {
    registerAdapter(adapter: IBoardPenAdapter): IDisposable;
    beginPenMode(params: IBeginBoardPenOperationParams): boolean;
}
export declare const IBoardPenAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardPenAdapterService>;
export declare class BoardPenAdapterService implements IBoardPenAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardPenAdapter): IDisposable;
    beginPenMode(params: IBeginBoardPenOperationParams): boolean;
}
