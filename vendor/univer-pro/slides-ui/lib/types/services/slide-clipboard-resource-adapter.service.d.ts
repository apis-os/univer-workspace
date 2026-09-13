import type { ISlidePageElement } from '@univerjs-pro/slides';
import type { IDisposable, IMutationInfo } from '@univerjs/core';
import { Disposable } from '@univerjs/core';
export interface ISlideClipboardResourceAdapter {
    readonly key: string;
    collect(params: {
        unitId: string;
        subUnitId: string;
        elements: ISlidePageElement[];
    }): unknown | null;
    serialize?(params: {
        unitId: string;
        subUnitId: string;
        elements: ISlidePageElement[];
    }): ISlideClipboardStandardContent | null;
    preparePaste(params: {
        targetUnitId: string;
        targetSubUnitId: string;
        payload: unknown;
        elementIdMap: ReadonlyMap<string, string>;
        elements: ISlidePageElement[];
    }): ISlideClipboardPreparedResourcePaste | null;
}
export interface ISlideClipboardStandardContent {
    html?: string;
    plainText?: string;
}
export interface ISlideClipboardPreparedResourcePaste {
    elements: ISlidePageElement[];
    redoMutations: IMutationInfo[];
    undoMutations: IMutationInfo[];
}
export interface ISlideClipboardResourceAdapterService {
    registerAdapter(adapter: ISlideClipboardResourceAdapter): IDisposable;
    collect(params: {
        unitId: string;
        subUnitId: string;
        elements: ISlidePageElement[];
    }): Record<string, unknown> | undefined;
    serialize(params: {
        unitId: string;
        subUnitId: string;
        elements: ISlidePageElement[];
    }): ISlideClipboardStandardContent | null;
    preparePaste(params: {
        targetUnitId: string;
        targetSubUnitId: string;
        resources: Record<string, unknown> | undefined;
        elementIdMap: ReadonlyMap<string, string>;
        elements: ISlidePageElement[];
    }): ISlideClipboardPreparedResourcePaste | null;
}
export declare const ISlideClipboardResourceAdapterService: import("@wendellhu/redi").IdentifierDecorator<ISlideClipboardResourceAdapterService>;
export declare class SlideClipboardResourceAdapterService extends Disposable implements ISlideClipboardResourceAdapterService {
    private readonly _adapters;
    registerAdapter(adapter: ISlideClipboardResourceAdapter): IDisposable;
    collect(params: {
        unitId: string;
        subUnitId: string;
        elements: ISlidePageElement[];
    }): Record<string, unknown> | undefined;
    serialize(params: {
        unitId: string;
        subUnitId: string;
        elements: ISlidePageElement[];
    }): ISlideClipboardStandardContent | null;
    preparePaste(params: {
        targetUnitId: string;
        targetSubUnitId: string;
        resources: Record<string, unknown> | undefined;
        elementIdMap: ReadonlyMap<string, string>;
        elements: ISlidePageElement[];
    }): ISlideClipboardPreparedResourcePaste | null;
    dispose(): void;
}
