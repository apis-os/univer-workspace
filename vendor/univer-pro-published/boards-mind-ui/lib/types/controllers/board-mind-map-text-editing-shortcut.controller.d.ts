import { ICommandService, RxDisposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare const FOCUSING_MIND_MAP_TEXT_EDITOR = "FOCUSING_MIND_MAP_TEXT_EDITOR";
export declare class BoardMindMapTextEditingShortcutController extends RxDisposable {
    private readonly _commandService;
    private readonly _shortcutService;
    constructor(_commandService: ICommandService, _shortcutService: IShortcutService);
    private _init;
    private _createQuoteShortcut;
}
