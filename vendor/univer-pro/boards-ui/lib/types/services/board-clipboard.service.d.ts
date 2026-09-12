import type { BoardModel } from '@univerjs-pro/boards';
import type { IDocumentData } from '@univerjs/core';
import type { IBoardClipboardPayload, IBoardElementStylePayload } from '../utils/board-clipboard.util';
import type { IBoardSelectionContext } from './board-element-state.service';
import { IBoardElementService } from '@univerjs-pro/boards';
import { ICommandService, IUndoRedoService } from '@univerjs/core';
import { IBoardClipboardResourceAdapterService } from './board-clipboard-resource-adapter.service';
import { BoardElementInsertService } from './board-element-insert.service';
export declare const BOARD_CLIPBOARD_PASTE_OFFSET = 24;
export declare const BOARD_CLIPBOARD_MIME_TYPE = "application/vnd.univer.board+json";
export interface IBoardPastePayloadOptions {
    offset?: {
        x: number;
        y: number;
    };
    targetParentId?: string;
}
export interface IResolveBoardPasteTargetParentOptions {
    selectedIds: string[];
    focusedId?: string | null;
    hoverId?: string | null;
    excludedElementIds?: readonly string[];
}
export interface IBoardCopySelectionAsImageOptions {
    payload?: IBoardClipboardPayload;
    viewport: {
        zoomRatio: number;
        panOffset: {
            x: number;
            y: number;
        };
    };
    zoom?: {
        minZoomRatio?: number;
        maxZoomRatio?: number;
    };
    padding?: number;
}
export declare class BoardClipboardStoreService {
    private _payload;
    private _lastPlainText;
    private _stylePayload;
    setPayload(payload: IBoardClipboardPayload | null | undefined): void;
    getPayload(): IBoardClipboardPayload | null;
    setLastPlainText(text: string | null): void;
    getLastPlainText(): string | null;
    setStylePayload(payload: IBoardElementStylePayload | null | undefined): void;
    getStylePayload(): IBoardElementStylePayload | null;
}
export declare class BoardClipboardService {
    private readonly _boardElementService;
    private readonly _elementInsertService;
    private readonly _resourceAdapterService;
    private readonly _commandService;
    private readonly _undoRedoService;
    private readonly _storeService;
    private _pendingNativeImagePaste;
    constructor(_boardElementService: IBoardElementService, _elementInsertService: BoardElementInsertService, _resourceAdapterService: IBoardClipboardResourceAdapterService, _commandService: ICommandService, _undoRedoService: IUndoRedoService, _storeService: BoardClipboardStoreService);
    setPayload(payload: IBoardClipboardPayload | null | undefined): void;
    getPayload(): IBoardClipboardPayload | null;
    copyToClipboardData(clipboardData: DataTransfer | null, boardModel: BoardModel, context: IBoardSelectionContext, payload: IBoardClipboardPayload): boolean;
    readFromClipboardData(clipboardData: DataTransfer | null): IBoardClipboardPayload | null;
    copyImageToSystemClipboard(payload: IBoardClipboardPayload): Promise<boolean>;
    parseExternalHtml(boardModel: BoardModel, html: string, point: {
        x: number;
        y: number;
    }): IBoardClipboardPayload | null;
    parseExternalPlainText(boardModel: BoardModel, text: string, point: {
        x: number;
        y: number;
    }): IBoardClipboardPayload | null;
    insertRichText(boardModel: BoardModel, documentData: IDocumentData, point: {
        x: number;
        y: number;
    }): Promise<boolean>;
    setStylePayload(payload: IBoardElementStylePayload | null | undefined): void;
    getStylePayload(): IBoardElementStylePayload | null;
    createPayload(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, selectedIds: string[]): IBoardClipboardPayload | null;
    createStylePayload(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, sourceId: string | null | undefined): IBoardElementStylePayload | null;
    createStyleUpdates(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, selectedIds: string[], payload: IBoardElementStylePayload | null | undefined): import("@univerjs-pro/boards").IUpdateBoardElementsCommandItem[];
    copySelectionAsImage(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, selectedIds: string[], sourceCanvas: HTMLCanvasElement | null | undefined, options: IBoardCopySelectionAsImageOptions): Promise<boolean>;
    resolvePasteTargetParentId(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, options: IResolveBoardPasteTargetParentOptions): string | undefined;
    private _resolvePasteTargetCandidate;
    private _resolveUnlockedContainerId;
    pastePayload(boardModel: BoardModel | null | undefined, context: IBoardSelectionContext | null | undefined, payload: IBoardClipboardPayload | null | undefined, options?: IBoardPastePayloadOptions): Promise<IBoardClipboardPayload | null>;
    private _canPastePayloadIntoContainer;
    private _pastePayloadWithResourceMutations;
    private _executeMutations;
    private _createStandardContent;
    private _createClipboardContent;
}
