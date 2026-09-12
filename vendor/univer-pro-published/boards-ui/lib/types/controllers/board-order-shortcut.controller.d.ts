import { ICommandService, RxDisposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare const BOARD_ORDER_SHORTCUT_OPERATION_ID = "board.operation.order-shortcut";
export declare class BoardOrderShortcutController extends RxDisposable {
    private readonly _commandService;
    private readonly _shortcutService;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService);
}
