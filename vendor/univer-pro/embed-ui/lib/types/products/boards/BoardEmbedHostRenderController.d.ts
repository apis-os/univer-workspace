import type { BoardModel } from '@univerjs-pro/boards';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { BoardDomLayerService, IBoardElementStateService, IBoardUIStateService } from '@univerjs-pro/boards-ui';
import { EmbedModelService } from '@univerjs-pro/embed';
import { Disposable, ICommandService, IConfigService } from '@univerjs/core';
export declare class BoardEmbedHostRenderController extends Disposable implements IRenderModule {
    private readonly _context;
    private readonly _embedModelService;
    private readonly _domLayerService;
    private readonly _boardElementService;
    private readonly _boardElementStateService;
    private readonly _boardUIStateService;
    private readonly _configService;
    private readonly _commandService;
    private readonly _items;
    private _activeDragCleanup;
    constructor(_context: IRenderContext<BoardModel>, _embedModelService: EmbedModelService, _domLayerService: BoardDomLayerService, _boardElementService: IBoardElementService, _boardElementStateService: IBoardElementStateService, _boardUIStateService: IBoardUIStateService, _configService: IConfigService, _commandService: ICommandService);
    dispose(): void;
    private _sync;
    private _itemId;
    private readonly _routeWheelToHost;
    private readonly _resolveHostWheelGestureRoot;
    private _selectAnchor;
    private _setAnchorTransformerVisible;
    private _handleDragStart;
    private _clearItems;
}
