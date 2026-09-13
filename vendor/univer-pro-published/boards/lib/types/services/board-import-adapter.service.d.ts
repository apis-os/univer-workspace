import type { IDisposable } from '@univerjs/core';
import type { IBeginBoardImportOperationParams } from '../commands/operations/begin-board-import.operation';
export interface IBoardImportAdapter {
    beginImport(params: IBeginBoardImportOperationParams): boolean;
}
export interface IBoardImportAdapterService {
    registerAdapter(adapter: IBoardImportAdapter): IDisposable;
    beginImport(params: IBeginBoardImportOperationParams): boolean;
}
export declare const IBoardImportAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardImportAdapterService>;
export declare class BoardImportAdapterService implements IBoardImportAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardImportAdapter): IDisposable;
    beginImport(params: IBeginBoardImportOperationParams): boolean;
}
