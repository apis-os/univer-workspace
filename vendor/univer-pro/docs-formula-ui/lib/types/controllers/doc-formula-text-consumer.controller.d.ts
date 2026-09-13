import { DocFormulaDisplayTextService, DocFormulaModel } from '@univerjs-pro/docs-formula';
import { Disposable } from '@univerjs/core';
import { DocHtmlExportService, IDocClipboardPasteAdapterService, IDocClipboardService } from '@univerjs/docs-ui';
/**
 * Connects the core display-text projection to browser text consumers.
 *
 * Internal clipboard fragments keep Formula object semantics. Plain-text and
 * HTML clipboard flavors use formatted display text and never expose U+FFFC.
 */
export declare class DocFormulaTextConsumerController extends Disposable {
    private readonly _displayTextService;
    private readonly _model;
    constructor(clipboardService: IDocClipboardService, pasteAdapterService: IDocClipboardPasteAdapterService, htmlExportService: DocHtmlExportService, _displayTextService: DocFormulaDisplayTextService, _model: DocFormulaModel);
    private _appendFormulaResource;
    private _degradeCrossDocumentPaste;
    private _getPasteMutationInfos;
}
