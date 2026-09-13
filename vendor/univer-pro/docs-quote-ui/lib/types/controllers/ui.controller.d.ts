import type { IDocumentBlockRange, IMultiCommand } from '@univerjs/core';
import { Disposable, ICommandService } from '@univerjs/core';
import { DocAutoFormatService } from '@univerjs/docs-ui';
import { IMenuManagerService } from '@univerjs/ui';
interface IDocsQuoteDeleteCurrentParagraphCommandParams {
    unitId?: string;
    blockRange?: IDocumentBlockRange;
}
export declare const DocsQuoteDeleteCurrentParagraphCommand: IMultiCommand<IDocsQuoteDeleteCurrentParagraphCommandParams>;
export declare class DocsQuoteUIController extends Disposable {
    private readonly _docAutoFormatService;
    private readonly _menuManagerService;
    private readonly _commandService;
    constructor(_docAutoFormatService: DocAutoFormatService, _menuManagerService: IMenuManagerService, _commandService: ICommandService);
    private _initExitQuoteAutoFormat;
    private _initCancelEmptyQuoteParagraphAutoFormat;
}
export {};
