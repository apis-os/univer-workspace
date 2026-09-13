import type { IBeginBoardPenOperationParams, IBoardPenAdapter } from '@univerjs-pro/boards';
import type { IBeginInkModeParams, ICreateInkCustomShapeParams, IInkHostAdapter } from '@univerjs-pro/ink';
import { IBoardPenAdapterService } from '@univerjs-pro/boards';
import { IInkHostAdapterService } from '@univerjs-pro/ink';
import { IInkUIStateService, InkUIService } from '@univerjs-pro/ink-ui';
import { Disposable } from '@univerjs/core';
import { BoardElementInsertService } from './board-element-insert.service';
import { IBoardUIStateService } from './board-ui-state.service';
export declare class BoardInkPenAdapterService extends Disposable implements IBoardPenAdapter, IInkHostAdapter {
    private readonly _penAdapterService;
    private readonly _inkHostAdapterService;
    private readonly _uiStateService;
    private readonly _inkUIService;
    private readonly _insertService;
    private readonly _inkStateService;
    private readonly _penAdapterDisposable;
    private readonly _inkHostAdapterDisposable;
    constructor(_penAdapterService: IBoardPenAdapterService, _inkHostAdapterService: IInkHostAdapterService, _uiStateService: IBoardUIStateService, _inkUIService: InkUIService, _insertService: BoardElementInsertService, _inkStateService: IInkUIStateService);
    beginPenMode(params: IBeginBoardPenOperationParams): boolean;
    beginInkMode(params: IBeginInkModeParams): boolean;
    createCustomShape(params: ICreateInkCustomShapeParams): Promise<boolean>;
}
