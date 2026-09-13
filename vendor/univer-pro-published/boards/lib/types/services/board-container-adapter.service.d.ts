import type { IDisposable } from '@univerjs/core';
import type { IBeginBoardContainerOperationParams } from '../commands/operations/begin-board-container.operation';
import type { IBeginBoardSwimlaneOperationParams } from '../commands/operations/begin-board-swimlane.operation';
export interface IBoardContainerAdapter {
    beginContainerMode(params: IBeginBoardContainerOperationParams): boolean;
    beginSwimlaneMode?(params: IBeginBoardSwimlaneOperationParams): boolean;
}
export interface IBoardContainerAdapterService {
    registerAdapter(adapter: IBoardContainerAdapter): IDisposable;
    beginContainerMode(params: IBeginBoardContainerOperationParams): boolean;
    beginSwimlaneMode(params: IBeginBoardSwimlaneOperationParams): boolean;
}
export declare const IBoardContainerAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardContainerAdapterService>;
export declare class BoardContainerAdapterService implements IBoardContainerAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardContainerAdapter): IDisposable;
    beginContainerMode(params: IBeginBoardContainerOperationParams): boolean;
    beginSwimlaneMode(params: IBeginBoardSwimlaneOperationParams): boolean;
}
