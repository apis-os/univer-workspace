import type { DocumentDataModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { Disposable, IPermissionService, ThemeService } from '@univerjs/core';
import { DocSkeletonManagerService } from '@univerjs/docs';
import { DocCanvasPopManagerService } from '@univerjs/docs-ui';
export declare class DocsQuoteRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _docSkeletonManagerService;
    private readonly _docCanvasPopManagerService;
    private readonly _themeService;
    private readonly _permissionService;
    private _hitRects;
    private _toolbarPopoverDisposable;
    constructor(_context: IRenderContext<DocumentDataModel>, _docSkeletonManagerService: DocSkeletonManagerService, _docCanvasPopManagerService: DocCanvasPopManagerService, _themeService: ThemeService, _permissionService: IPermissionService);
    private _initPointer;
    private _initRender;
    private _drawPage;
    private _collectLines;
    private _getQuoteParagraphOwners;
    private _getQuoteLineColor;
    private _openToolbarPopover;
    private _closeToolbarPopover;
    private _canEditBlock;
    private _getQuoteTextColor;
}
