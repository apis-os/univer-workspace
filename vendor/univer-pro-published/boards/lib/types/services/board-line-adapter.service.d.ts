import type { IDisposable } from '@univerjs/core';
import type { IBeginBoardLineOperationParams } from '../commands/operations/begin-board-line.operation';
export interface IBoardLineAdapter {
    beginLineMode(params: IBeginBoardLineOperationParams): boolean;
}
export interface IBoardLineAdapterService {
    registerAdapter(adapter: IBoardLineAdapter): IDisposable;
    beginLineMode(params: IBeginBoardLineOperationParams): boolean;
}
export declare const IBoardLineAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardLineAdapterService>;
export declare class BoardLineAdapterService implements IBoardLineAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardLineAdapter): IDisposable;
    beginLineMode(params: IBeginBoardLineOperationParams): boolean;
}
