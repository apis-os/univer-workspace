import type { IBeginBoardLineOperationParams, IBoardLineAdapter } from '@univerjs-pro/boards';
import { IBoardLineAdapterService } from '@univerjs-pro/boards';
import { Disposable } from '@univerjs/core';
import { IBoardUIStateService } from './board-ui-state.service';
export declare class BoardConnectorToolService extends Disposable implements IBoardLineAdapter {
    private readonly _lineAdapterService;
    private readonly _uiStateService;
    private readonly _adapterDisposable;
    constructor(_lineAdapterService: IBoardLineAdapterService, _uiStateService: IBoardUIStateService);
    beginLineMode(params: IBeginBoardLineOperationParams): boolean;
}
