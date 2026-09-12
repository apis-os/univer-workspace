import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { ICommandService, RxDisposable } from '@univerjs/core';
export declare class BoardMindMapAutosizeLayoutRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _boardElementService;
    private readonly _commandService;
    private readonly _nodeSizeByKey;
    private readonly _queuedLayouts;
    private _layoutFlushScheduled;
    constructor(_renderContext: IRenderContext<UnitModel>, _boardElementService: IBoardElementService, _commandService: ICommandService);
    private _init;
    private _seedExistingNodeSizes;
    private _handleElementUpdate;
    private _rememberNodeSize;
    private _resolveNodeSize;
    private _queueLayout;
    private _executeRootAnchoredLayout;
    private _getElementKey;
}
