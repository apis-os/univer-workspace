import type { IDisposable } from '@univerjs/core';
import type { IBeginBoardMindMapOperationParams } from '../commands/operations/begin-board-mind-map.operation';
export interface IBoardMindMapAdapter {
    beginMindMapMode(params: IBeginBoardMindMapOperationParams): boolean;
}
export interface IBoardMindMapAdapterService {
    registerAdapter(adapter: IBoardMindMapAdapter): IDisposable;
    beginMindMapMode(params: IBeginBoardMindMapOperationParams): boolean;
}
export declare const IBoardMindMapAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardMindMapAdapterService>;
export declare class BoardMindMapAdapterService implements IBoardMindMapAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardMindMapAdapter): IDisposable;
    beginMindMapMode(params: IBeginBoardMindMapOperationParams): boolean;
}
