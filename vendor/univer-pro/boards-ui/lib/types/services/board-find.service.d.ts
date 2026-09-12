import type { BoardModel } from '@univerjs-pro/boards';
import type { IBoardElementFindResult } from '../utils/board-find.util';
import type { IBoardViewportPoint } from '../utils/board-viewport.util';
import { IBoardElementService, IBoardTableAdapterService } from '@univerjs-pro/boards';
import { LocaleService } from '@univerjs/core';
import { IBoardElementStateService } from './board-element-state.service';
import { IBoardUIStateService } from './board-ui-state.service';
export declare class BoardFindService {
    private readonly _boardElementService;
    private readonly _elementStateService;
    private readonly _uiStateService;
    private readonly _localeService;
    private readonly _tableAdapterService?;
    constructor(_boardElementService: IBoardElementService, _elementStateService: IBoardElementStateService, _uiStateService: IBoardUIStateService, _localeService: LocaleService, _tableAdapterService?: IBoardTableAdapterService | undefined);
    find(boardModel: BoardModel | null | undefined, query: string): IBoardElementFindResult[];
    private _createLocaleTexts;
    private _createTableSearchEntries;
    selectElementResult(boardModel: BoardModel | null | undefined, elementId: string): boolean;
    selectResult(boardModel: BoardModel | null | undefined, elementId: string): boolean;
    focusElementResult(boardModel: BoardModel | null | undefined, elementId: string, viewportPoint: IBoardViewportPoint): boolean;
    getElementViewportPoint(boardModel: BoardModel | null | undefined, elementId: string): IBoardViewportPoint | null;
    focusResult(boardModel: BoardModel | null | undefined, elementId: string, viewportPoint: IBoardViewportPoint): boolean;
}
