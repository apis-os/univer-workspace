import { ICommandService, RxDisposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare const BOARD_SETTINGS_SHORTCUT_OPERATION_ID = "board.operation.settings-shortcut";
export declare class BoardSettingsShortcutController extends RxDisposable {
    private readonly _commandService;
    private readonly _shortcutService;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService);
}
