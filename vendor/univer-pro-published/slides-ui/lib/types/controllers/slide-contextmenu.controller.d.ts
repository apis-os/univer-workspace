import { Disposable } from '@univerjs/core';
import { IMenuManagerService } from '@univerjs/ui';
export declare class SlideContextMenuController extends Disposable {
    private readonly _menuManagerService;
    constructor(_menuManagerService: IMenuManagerService);
    private _init;
}
