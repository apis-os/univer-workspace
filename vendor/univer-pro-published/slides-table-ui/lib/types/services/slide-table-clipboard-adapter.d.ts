import type { ISlidePageElement } from '@univerjs-pro/slides';
import type { ISlideTableSnapshot, ISlideTableThemeSnapshot } from '@univerjs-pro/slides-table';
import type { ISlideClipboardPreparedResourcePaste, ISlideClipboardResourceAdapter, ISlideClipboardStandardContent } from '@univerjs-pro/slides-ui';
import { SlideTableResourceService } from '@univerjs-pro/slides-table';
export declare const SLIDE_TABLE_CLIPBOARD_RESOURCE_KEY = "slide-table";
interface ISlideTableClipboardPayload {
    tables: Record<string, ISlideTableSnapshot>;
    themes: Record<string, ISlideTableThemeSnapshot>;
    tableIdByElementId: Record<string, string>;
}
export declare class SlideTableClipboardAdapter implements ISlideClipboardResourceAdapter {
    private readonly _resourceService;
    readonly key = "slide-table";
    constructor(_resourceService: SlideTableResourceService);
    collect(params: {
        unitId: string;
        subUnitId: string;
        elements: ISlidePageElement[];
    }): ISlideTableClipboardPayload | null;
    serialize(params: {
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
export {};
