import { ICommandService, RxDisposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare const BOARD_VIEW_SHORTCUT_OPERATION_ID = "board.operation.view-shortcut";
export declare class BoardViewShortcutController extends RxDisposable {
    private readonly _commandService;
    private readonly _shortcutService;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService);
}
