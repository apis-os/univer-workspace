import { Disposable } from '@univerjs/core';
import { IShortcutService } from '@univerjs/ui';
export declare class SlideShortcutController extends Disposable {
    private readonly _shortcutService;
    constructor(_shortcutService: IShortcutService);
    private _init;
}
