import type { IDisposable } from '@univerjs/core';
import type { IBeginBoardExportOperationParams } from '../commands/operations/begin-board-export.operation';
export interface IBoardExportAdapter {
    beginExport(params: IBeginBoardExportOperationParams): boolean;
}
export interface IBoardExportAdapterService {
    registerAdapter(adapter: IBoardExportAdapter): IDisposable;
    beginExport(params: IBeginBoardExportOperationParams): boolean;
}
export declare const IBoardExportAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardExportAdapterService>;
export declare class BoardExportAdapterService implements IBoardExportAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardExportAdapter): IDisposable;
    beginExport(params: IBeginBoardExportOperationParams): boolean;
}
