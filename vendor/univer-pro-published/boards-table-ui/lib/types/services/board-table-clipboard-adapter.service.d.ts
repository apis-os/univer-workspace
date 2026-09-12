import type { IBoardPageElement } from '@univerjs-pro/boards';
import type { IBoardClipboardPayload, IBoardClipboardPreparedResourcePaste, IBoardClipboardResourceAdapter, IBoardClipboardStandardContent, IBoardExternalClipboardParseParams, IBoardExternalClipboardTextParseParams } from '@univerjs-pro/boards-ui';
import type { ISlideTableSnapshot, ISlideTableThemeSnapshot } from '@univerjs-pro/slides-table';
import { SlideTableResourceService } from '@univerjs-pro/slides-table';
export declare const BOARD_TABLE_CLIPBOARD_RESOURCE_KEY = "board-table";
interface IBoardTableClipboardPayload {
    tablesByElementId: Record<string, ISlideTableSnapshot>;
    themes: Record<string, ISlideTableThemeSnapshot>;
}
export declare class BoardTableClipboardAdapter implements IBoardClipboardResourceAdapter {
    private readonly _resourceService;
    readonly key = "board-table";
    constructor(_resourceService: SlideTableResourceService);
    collect(params: {
        unitId: string;
        subUnitId: string;
        elements: IBoardPageElement[];
    }): IBoardTableClipboardPayload | null;
    serialize(params: {
        unitId: string;
        subUnitId: string;
        elements: IBoardPageElement[];
    }): IBoardClipboardStandardContent | null;
    parseExternalHtml(params: IBoardExternalClipboardParseParams): IBoardClipboardPayload | null;
    parseExternalPlainText(params: IBoardExternalClipboardTextParseParams): IBoardClipboardPayload | null;
    preparePaste(params: {
        targetUnitId: string;
        targetSubUnitId: string;
        payload: unknown;
        elementIdMap: ReadonlyMap<string, string>;
        elements: IBoardPageElement[];
    }): IBoardClipboardPreparedResourcePaste | null;
}
export {};
