import type { IDisposable } from '@univerjs/core';
import type { IBeginBoardResourcesOperationParams } from '../commands/operations/begin-board-resources.operation';
export interface IBoardResourcesAdapter {
    beginResourcesPanel(params: IBeginBoardResourcesOperationParams): boolean;
}
export interface IBoardResourcesAdapterService {
    registerAdapter(adapter: IBoardResourcesAdapter): IDisposable;
    beginResourcesPanel(params: IBeginBoardResourcesOperationParams): boolean;
}
export declare const IBoardResourcesAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardResourcesAdapterService>;
export declare class BoardResourcesAdapterService implements IBoardResourcesAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardResourcesAdapter): IDisposable;
    beginResourcesPanel(params: IBeginBoardResourcesOperationParams): boolean;
}
