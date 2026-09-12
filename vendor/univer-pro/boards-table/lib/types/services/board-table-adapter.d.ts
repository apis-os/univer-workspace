import type { IBoardRemoveTableMutationInfoParams, IBoardTableAdapter, IBoardTableMutationInfos, IBoardTableSearchEntriesParams, IBoardTableSearchEntry, IInsertBoardTableOperationParams } from '@univerjs-pro/boards';
import { IBoardElementService } from '@univerjs-pro/boards';
import { SlideTableResourceService } from '@univerjs-pro/slides-table';
import { ICommandService, IUndoRedoService, IUniverInstanceService, ThemeService } from '@univerjs/core';
export declare class BoardTableAdapter implements IBoardTableAdapter {
    private readonly _commandService;
    private readonly _undoRedoService;
    private readonly _resourceService;
    private readonly _elementService;
    private readonly _instanceService;
    private readonly _themeService;
    constructor(_commandService: ICommandService, _undoRedoService: IUndoRedoService, _resourceService: SlideTableResourceService, _elementService: IBoardElementService, _instanceService: IUniverInstanceService, _themeService: ThemeService);
    insertTable(params: IInsertBoardTableOperationParams): boolean;
    private _executeBoardRedoMutations;
    private _rollbackBoardMutations;
    getRemoveTableMutationInfos(params: IBoardRemoveTableMutationInfoParams): IBoardTableMutationInfos;
    getSearchEntries(params: IBoardTableSearchEntriesParams): IBoardTableSearchEntry[];
}
