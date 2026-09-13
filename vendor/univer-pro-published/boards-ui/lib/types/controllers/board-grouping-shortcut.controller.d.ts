import { ICommandService, RxDisposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare const BOARD_GROUPING_SHORTCUT_OPERATION_ID = "board.operation.grouping-shortcut";
export declare class BoardGroupingShortcutController extends RxDisposable {
    private readonly _commandService;
    private readonly _shortcutService;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService);
}
