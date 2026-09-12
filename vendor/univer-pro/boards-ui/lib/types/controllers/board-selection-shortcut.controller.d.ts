import { ICommandService, RxDisposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare const BOARD_SELECTION_SHORTCUT_OPERATION_ID = "board.operation.selection-shortcut";
export declare class BoardSelectionShortcutController extends RxDisposable {
    private readonly _commandService;
    private readonly _shortcutService;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService);
}
