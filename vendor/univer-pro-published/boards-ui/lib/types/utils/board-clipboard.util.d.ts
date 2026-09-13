import type { IBoardElementData, IUpdateBoardElementsCommandItem } from '@univerjs-pro/boards';
export type BoardClipboardElement = IBoardElementData['element'];
export interface IBoardClipboardPayload {
    elements: BoardClipboardElement[];
    resources?: Record<string, unknown>;
}
export type BoardElementStylePayloadKind = 'shape' | 'connector' | 'text';
export interface IBoardElementStylePayload {
    kind: BoardElementStylePayloadKind;
    shapeData?: Record<string, unknown>;
    connectorStyle?: Record<string, unknown>;
    textStyle?: Record<string, unknown>;
}
export interface ICreateBoardElementClipboardPayloadOptions {
    selectedIds: string[];
    elementOrder: string[];
    elementData: Record<string, IBoardElementData>;
}
export interface ICreateBoardPasteElementsOptions {
    payload: IBoardClipboardPayload;
    offset: {
        x: number;
        y: number;
    };
    targetParentId?: string;
    createId?: (sourceId: string) => string;
}
export interface ICreateBoardPasteElementsWithIdMapResult {
    elements: BoardClipboardElement[];
    elementIdMap: Map<string, string>;
}
export interface ICreateBoardElementStyleUpdatesOptions {
    payload: IBoardElementStylePayload;
    selectedIds: string[];
    elementData: Record<string, IBoardElementData>;
}
export declare function createBoardElementClipboardPayload(options: ICreateBoardElementClipboardPayloadOptions): IBoardClipboardPayload | null;
export declare function createBoardElementStylePayload(element: BoardClipboardElement | undefined): IBoardElementStylePayload | null;
export declare function createBoardElementStyleUpdates(options: ICreateBoardElementStyleUpdatesOptions): IUpdateBoardElementsCommandItem[];
export declare function createBoardPasteElementsWithIdMap(options: ICreateBoardPasteElementsOptions): ICreateBoardPasteElementsWithIdMapResult;
