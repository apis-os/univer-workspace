import { Disposable } from '@univerjs/core';
import { IRibbonService } from '@univerjs/ui';
import { DocsLatexPopupService } from '../services/docs-latex-popup.service';
export declare class DocsLatexContextualRibbonController extends Disposable {
    private readonly _ribbonService;
    private readonly _docsLatexPopupService;
    private _visible;
    constructor(_ribbonService: IRibbonService, _docsLatexPopupService: DocsLatexPopupService);
    dispose(): void;
    private _hideFormulaTab;
}
