import type { IBeginBoardContainerOperationParams, IBeginBoardSwimlaneOperationParams, IBoardContainerAdapter } from '@univerjs-pro/boards';
import { IBoardContainerAdapterService } from '@univerjs-pro/boards';
import { Disposable } from '@univerjs/core';
import { IBoardUIStateService } from './board-ui-state.service';
export declare class BoardContainerToolService extends Disposable implements IBoardContainerAdapter {
    private readonly _containerAdapterService;
    private readonly _uiStateService;
    private readonly _adapterDisposable;
    constructor(_containerAdapterService: IBoardContainerAdapterService, _uiStateService: IBoardUIStateService);
    beginContainerMode(_params: IBeginBoardContainerOperationParams): boolean;
    beginSwimlaneMode(params: IBeginBoardSwimlaneOperationParams): boolean;
}
