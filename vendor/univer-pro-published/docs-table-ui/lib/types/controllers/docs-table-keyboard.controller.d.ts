import { Disposable, ICommandService } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare class DocsTableKeyboardController extends Disposable {
    private readonly _commandService;
    private readonly _shortcutService;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService);
}
