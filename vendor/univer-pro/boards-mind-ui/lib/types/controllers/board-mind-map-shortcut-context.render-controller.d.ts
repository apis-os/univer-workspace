import type { BoardModel } from '@univerjs-pro/boards';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { BoardTextEditingService, IBoardElementStateService } from '@univerjs-pro/boards-ui';
import { IContextService, RxDisposable } from '@univerjs/core';
export declare class BoardMindMapShortcutContextRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _boardElementService;
    private readonly _elementStateService;
    private readonly _textEditingService;
    private readonly _contextService;
    private _isActive;
    constructor(_renderContext: IRenderContext<BoardModel>, _boardElementService: IBoardElementService, _elementStateService: IBoardElementStateService, _textEditingService: BoardTextEditingService, _contextService: IContextService);
    private _syncContext;
    dispose(): void;
    private _resetContext;
}
