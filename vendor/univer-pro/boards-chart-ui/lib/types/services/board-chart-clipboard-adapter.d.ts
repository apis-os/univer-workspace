import type { IBoardPageElement } from '@univerjs-pro/boards';
import type { IBoardClipboardPreparedResourcePaste, IBoardClipboardResourceAdapter } from '@univerjs-pro/boards-ui';
import type { IChartResourceDataSource, IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import { BoardChartResourceService } from '@univerjs-pro/boards-chart';
export declare const BOARD_CHART_CLIPBOARD_RESOURCE_KEY = "board-chart";
interface IBoardChartClipboardPayload {
    charts: Record<string, IChartResourceSnapshot>;
    dataSources: Record<string, IChartResourceDataSource>;
    chartIdByElementId: Record<string, string>;
}
export declare class BoardChartClipboardAdapter implements IBoardClipboardResourceAdapter {
    private readonly _resourceService;
    readonly key = "board-chart";
    constructor(_resourceService: BoardChartResourceService);
    collect(params: {
        unitId: string;
        subUnitId: string;
        elements: IBoardPageElement[];
    }): IBoardChartClipboardPayload | null;
    preparePaste(params: {
        targetUnitId: string;
        targetSubUnitId: string;
        payload: unknown;
        elementIdMap: ReadonlyMap<string, string>;
        elements: IBoardPageElement[];
    }): IBoardClipboardPreparedResourcePaste | null;
}
export {};
