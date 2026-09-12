import { Disposable } from '@univerjs/core';
import { IMenuManagerService } from '@univerjs/ui';
export declare class SheetsSparklineMenuController extends Disposable {
    protected readonly _menuManagerService: IMenuManagerService;
    constructor(_menuManagerService: IMenuManagerService);
    private _initMenu;
}
