import { DocsCodeModel } from '@univerjs-pro/docs-code';
import { Disposable } from '@univerjs/core';
import { IDocClipboardPasteAdapterService, IDocClipboardService } from '@univerjs/docs-ui';
export declare class DocsCodeClipboardController extends Disposable {
    private readonly _clipboardService;
    private readonly _pasteAdapterService;
    private readonly _model;
    constructor(_clipboardService: IDocClipboardService, _pasteAdapterService: IDocClipboardPasteAdapterService, _model: DocsCodeModel);
    private _appendConfig;
    private _getPasteMutationInfos;
}
