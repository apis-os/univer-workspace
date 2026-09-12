import type { BoardToolShortcutAction } from '../common/board-shortcuts';
import type { BoardShortcutRuntimeService } from '../services/board-shortcut-runtime.service';
import { ICommandService, RxDisposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
import { IBoardUIStateService } from '../services/board-ui-state.service';
export declare const BOARD_TOOL_SHORTCUT_OPERATION_ID = "board.operation.tool-shortcut";
export declare function handleToolShortcut(runtime: BoardShortcutRuntimeService, action: BoardToolShortcutAction | undefined): boolean;
export declare class BoardToolShortcutController extends RxDisposable {
    private readonly _commandService;
    private readonly _shortcutService;
    private readonly _uiStateService?;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService, _uiStateService?: IBoardUIStateService | undefined);
    private _wireEscapeFallback;
}
