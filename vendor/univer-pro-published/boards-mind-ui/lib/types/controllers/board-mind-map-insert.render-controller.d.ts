import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { BoardTextEditingService, IBoardElementStateService, IBoardUIStateService } from '@univerjs-pro/boards-ui';
import { ICommandService, IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { BoardMindMapInsertStateService } from '../services/board-mind-map-insert-state.service';
export declare class BoardMindMapInsertRenderController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _instanceSrv;
    private readonly _stateService;
    private readonly _commandService;
    private readonly _insertStateService;
    private readonly _elementStateService;
    private readonly _boardTextEditingService;
    private _previewObject;
    private _lastPoint;
    constructor(_renderContext: IRenderContext<UnitModel>, _instanceSrv: IUniverInstanceService, _stateService: IBoardUIStateService, _commandService: ICommandService, _insertStateService: BoardMindMapInsertStateService, _elementStateService: IBoardElementStateService, _boardTextEditingService: BoardTextEditingService);
    private _init;
    private _syncPreviewObject;
    private _ensurePreviewObject;
    private _removePreviewObject;
    private _getPointFromEvent;
    private _resolveRootTopLeft;
    private _handlePointerMove;
    private _handlePointerDown;
}
