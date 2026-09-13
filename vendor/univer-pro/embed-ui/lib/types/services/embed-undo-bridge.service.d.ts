import type { IUndoRedoItem } from '@univerjs/core';
import { EmbedFocusOwnerService } from '@univerjs-pro/embed';
import { IUndoRedoService } from '@univerjs/core';
export interface IEmbedUndoBridgeResult {
    stackUnitId: string;
    routedToHost: boolean;
}
export declare class EmbedUndoBridgeService {
    private readonly _focusOwnerService;
    private readonly _undoRedoService;
    constructor(_focusOwnerService: EmbedFocusOwnerService, _undoRedoService: IUndoRedoService);
    pushUndoRedoForChild(item: IUndoRedoItem): IEmbedUndoBridgeResult;
    resolveStackUnitId(childUnitId: string): string;
}
