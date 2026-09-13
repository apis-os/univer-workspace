import { ICommandService, RxDisposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare class BoardHistoryShortcutController extends RxDisposable {
    private readonly _shortcutService;
    constructor(_shortcutService: IShortcutService, commandService: ICommandService);
}
