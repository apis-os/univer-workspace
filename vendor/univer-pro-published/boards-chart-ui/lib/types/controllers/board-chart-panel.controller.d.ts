import type { UnitModel } from '@univerjs/core';
import type { IRenderContext, IRenderModule } from '@univerjs/engine-render';
import { BoardChartModelService } from '@univerjs-pro/boards-chart';
import { IBoardSidePanelService } from '@univerjs-pro/boards-ui';
import { Disposable, LocaleService } from '@univerjs/core';
import { BoardChartEditSessionService } from '../services/board-chart-edit-session.service';
import { BoardChartRenderService } from '../services/board-chart-render.service';
import { IBoardChartUIService } from '../services/board-chart-ui.service';
export declare class BoardChartPanelController extends Disposable implements IRenderModule {
    private readonly _renderContext;
    private readonly _editSessionService;
    private readonly _sidePanelService;
    private readonly _modelService;
    private readonly _renderService;
    private readonly _chartUIService;
    private readonly _localeService;
    private _activePanelKey;
    private _activePanelDisposable;
    private _activeEditOverlay;
    constructor(_renderContext: IRenderContext<UnitModel>, _editSessionService: BoardChartEditSessionService, _sidePanelService: IBoardSidePanelService, _modelService: BoardChartModelService, _renderService: BoardChartRenderService, _chartUIService: IBoardChartUIService, _localeService: LocaleService);
    dispose(): void;
    private _syncPanel;
    private _closeActivePanel;
    private _setActiveEditOverlay;
    private _clearActiveEditOverlay;
}
