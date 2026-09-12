import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { IBoardElementService } from '@univerjs-pro/boards';
import { IBoardElementStateService, IBoardUIStateService } from '@univerjs-pro/boards-ui';
import { IUniverInstanceService, RxDisposable } from '@univerjs/core';
import { BoardChartEditSessionService } from '../services/board-chart-edit-session.service';
export declare class BoardChartOpenEditController extends RxDisposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _instanceService;
    private readonly _boardElementService;
    private readonly _elementStateService;
    private readonly _uiStateService;
    private readonly _editSessionService;
    private _attachScheduled;
    private _objectDblclickDisposables;
    constructor(_renderContext: IRenderContext<UnitModel>, _instanceService: IUniverInstanceService, _boardElementService: IBoardElementService, _elementStateService: IBoardElementStateService, _uiStateService: IBoardUIStateService, _editSessionService: BoardChartEditSessionService);
    private _init;
    private _scheduleAttachObjectDoubleClicks;
    private _attachObjectDoubleClicks;
    private _openEditSession;
}
