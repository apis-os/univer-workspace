import type { IDocumentBlockRange, IMultiCommand } from '@univerjs/core';
import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { DocAutoFormatService } from '@univerjs/docs-ui';
import { IMenuManagerService } from '@univerjs/ui';
interface IDocsCodeDeleteCurrentParagraphCommandParams {
    unitId?: string;
    blockRange?: IDocumentBlockRange;
}
export declare const DocsCodeDeleteCurrentParagraphCommand: IMultiCommand<IDocsCodeDeleteCurrentParagraphCommandParams>;
export declare class DocsCodeUIController extends Disposable {
    private readonly _docAutoFormatService;
    private readonly _docSelectionManagerService;
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _menuManagerService;
    constructor(_docAutoFormatService: DocAutoFormatService, _docSelectionManagerService: DocSelectionManagerService, _commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _menuManagerService: IMenuManagerService);
    private _initBoundaryDeleteGuard;
    private _initCancelEmptyCodeParagraphAutoFormat;
    private _initStyleCommandGuard;
    private _isSelectionInCodeBlock;
}
export {};
