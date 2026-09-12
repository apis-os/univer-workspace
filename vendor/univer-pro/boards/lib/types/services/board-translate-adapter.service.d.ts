import type { IDisposable } from '@univerjs/core';
import type { IBeginBoardTranslateOperationParams } from '../commands/operations/begin-board-translate.operation';
export interface IBoardTranslateAdapter {
    beginTranslate(params: IBeginBoardTranslateOperationParams): boolean;
}
export interface IBoardTranslateAdapterService {
    registerAdapter(adapter: IBoardTranslateAdapter): IDisposable;
    beginTranslate(params: IBeginBoardTranslateOperationParams): boolean;
}
export declare const IBoardTranslateAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardTranslateAdapterService>;
export declare class BoardTranslateAdapterService implements IBoardTranslateAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardTranslateAdapter): IDisposable;
    beginTranslate(params: IBeginBoardTranslateOperationParams): boolean;
}
