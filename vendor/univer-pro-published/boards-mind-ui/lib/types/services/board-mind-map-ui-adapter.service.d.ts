import type { IBeginBoardMindMapOperationParams, IBoardMindMapAdapter } from '@univerjs-pro/boards';
import { IBoardUIStateService } from '@univerjs-pro/boards-ui';
import { IRenderManagerService } from '@univerjs/engine-render';
import { BoardMindMapInsertStateService } from './board-mind-map-insert-state.service';
export declare class BoardMindMapUIAdapter implements IBoardMindMapAdapter {
    private readonly _stateService;
    private readonly _insertStateService;
    private readonly _renderManagerService;
    constructor(_stateService: IBoardUIStateService, _insertStateService: BoardMindMapInsertStateService, _renderManagerService: IRenderManagerService);
    beginMindMapMode(params: IBeginBoardMindMapOperationParams): boolean;
}
