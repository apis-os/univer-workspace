import type { IChartResourceDataSource, IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import type { ISlidePageElement } from '@univerjs-pro/slides';
import type { ISlideClipboardPreparedResourcePaste, ISlideClipboardResourceAdapter } from '@univerjs-pro/slides-ui';
import { SlideChartResourceService } from '@univerjs-pro/slides-chart';
export declare const SLIDE_CHART_CLIPBOARD_RESOURCE_KEY = "slide-chart";
interface ISlideChartClipboardPayload {
    charts: Record<string, IChartResourceSnapshot>;
    dataSources: Record<string, IChartResourceDataSource>;
    chartIdByElementId: Record<string, string>;
}
export declare class SlideChartClipboardAdapter implements ISlideClipboardResourceAdapter {
    private readonly _resourceService;
    readonly key = "slide-chart";
    constructor(_resourceService: SlideChartResourceService);
    collect(params: {
        unitId: string;
        subUnitId: string;
        elements: ISlidePageElement[];
    }): ISlideChartClipboardPayload | null;
    preparePaste(params: {
        targetUnitId: string;
        targetSubUnitId: string;
        payload: unknown;
        elementIdMap: ReadonlyMap<string, string>;
        elements: ISlidePageElement[];
    }): ISlideClipboardPreparedResourcePaste | null;
}
export {};
