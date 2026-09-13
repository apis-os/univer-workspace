import type { IBoardPageElement } from '@univerjs-pro/boards';
import type { IDisposable, IMutationInfo } from '@univerjs/core';
import type { IBoardClipboardPayload } from '../utils/board-clipboard.util';
export interface IBoardClipboardStandardContent {
    html?: string;
    plainText?: string;
}
export interface IBoardExternalClipboardParseParams {
    html: string;
    point: {
        x: number;
        y: number;
    };
    unitId: string;
    subUnitId: string;
}
export interface IBoardExternalClipboardTextParseParams {
    text: string;
    point: {
        x: number;
        y: number;
    };
    unitId: string;
    subUnitId: string;
}
export interface IBoardClipboardResourceAdapter {
    readonly key: string;
    collect(params: {
        unitId: string;
        subUnitId: string;
        elements: IBoardPageElement[];
    }): unknown | null;
    serialize?(params: {
        unitId: string;
        subUnitId: string;
        elements: IBoardPageElement[];
    }): IBoardClipboardStandardContent | null;
    parseExternalHtml?(params: IBoardExternalClipboardParseParams): IBoardClipboardPayload | null;
    parseExternalPlainText?(params: IBoardExternalClipboardTextParseParams): IBoardClipboardPayload | null;
    preparePaste(params: {
        targetUnitId: string;
        targetSubUnitId: string;
        payload: unknown;
        elementIdMap: ReadonlyMap<string, string>;
        elements: IBoardPageElement[];
    }): IBoardClipboardPreparedResourcePaste | null;
}
export interface IBoardClipboardPreparedResourcePaste {
    elements: IBoardPageElement[];
    redoMutations: IMutationInfo[];
    undoMutations: IMutationInfo[];
}
export interface IBoardClipboardResourceAdapterService {
    registerAdapter(adapter: IBoardClipboardResourceAdapter): IDisposable;
    collect(params: {
        unitId: string;
        subUnitId: string;
        elements: IBoardPageElement[];
    }): Record<string, unknown> | undefined;
    serialize(params: {
        unitId: string;
        subUnitId: string;
        elements: IBoardPageElement[];
    }): IBoardClipboardStandardContent;
    parseExternalHtml(params: IBoardExternalClipboardParseParams): IBoardClipboardPayload | null;
    parseExternalPlainText(params: IBoardExternalClipboardTextParseParams): IBoardClipboardPayload | null;
    preparePaste(params: {
        targetUnitId: string;
        targetSubUnitId: string;
        resources: Record<string, unknown> | undefined;
        elementIdMap: ReadonlyMap<string, string>;
        elements: IBoardPageElement[];
    }): IBoardClipboardPreparedResourcePaste | null;
}
export declare const IBoardClipboardResourceAdapterService: import("@wendellhu/redi").IdentifierDecorator<IBoardClipboardResourceAdapterService>;
export declare class BoardClipboardResourceAdapterService implements IBoardClipboardResourceAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: IBoardClipboardResourceAdapter): IDisposable;
    collect(params: {
        unitId: string;
        subUnitId: string;
        elements: IBoardPageElement[];
    }): Record<string, unknown> | undefined;
    serialize(params: {
        unitId: string;
        subUnitId: string;
        elements: IBoardPageElement[];
    }): IBoardClipboardStandardContent;
    parseExternalHtml(params: IBoardExternalClipboardParseParams): IBoardClipboardPayload | null;
    parseExternalPlainText(params: IBoardExternalClipboardTextParseParams): IBoardClipboardPayload | null;
    preparePaste(params: {
        targetUnitId: string;
        targetSubUnitId: string;
        resources: Record<string, unknown> | undefined;
        elementIdMap: ReadonlyMap<string, string>;
        elements: IBoardPageElement[];
    }): IBoardClipboardPreparedResourcePaste | null;
}
