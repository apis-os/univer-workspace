import { DocsCalloutModel } from '@univerjs-pro/docs-callout';
import { Disposable } from '@univerjs/core';
import { IDocClipboardPasteAdapterService, IDocClipboardService } from '@univerjs/docs-ui';
export declare class DocsCalloutClipboardController extends Disposable {
    private readonly _clipboardService;
    private readonly _pasteAdapterService;
    private readonly _model;
    constructor(_clipboardService: IDocClipboardService, _pasteAdapterService: IDocClipboardPasteAdapterService, _model: DocsCalloutModel);
    private _appendConfig;
    private _getPasteMutationInfos;
}
