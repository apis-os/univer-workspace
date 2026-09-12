import type { IChartResource } from '@univerjs-pro/engine-chart';
import type { IDocumentData } from '@univerjs/core';
import { ChartResourceRepository } from '@univerjs-pro/engine-chart';
import { Disposable } from '@univerjs/core';
import { IDocClipboardPasteAdapterService, IDocClipboardService } from '@univerjs/docs-ui';
export declare const DOC_CHART_CLIPBOARD_RESOURCE_KEY = "__docsChartResource";
export interface IDocChartClipboardDocData extends Partial<IDocumentData> {
    [DOC_CHART_CLIPBOARD_RESOURCE_KEY]?: IChartResource;
}
export declare class DocChartClipboardController extends Disposable {
    private readonly _docClipboardService;
    private readonly _pasteAdapterService;
    private readonly _resourceService;
    constructor(_docClipboardService: IDocClipboardService, _pasteAdapterService: IDocClipboardPasteAdapterService, _resourceService: ChartResourceRepository);
    private _initClipboardHooks;
    private _appendChartResources;
    private _getPasteMutationInfos;
    private _getOrCreatePastedDataSourceId;
    private _isDocChartDrawing;
}
