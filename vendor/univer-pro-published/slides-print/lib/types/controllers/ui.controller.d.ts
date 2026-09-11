import { Disposable, ICommandService, Injector } from '@univerjs/core';
import { IMenuManagerService, IUIPartsService } from '@univerjs/ui';
export declare class SlidesPrintUIController extends Disposable {
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _uiPartsService;
    private readonly _injector;
    constructor(_commandService: ICommandService, _menuManagerService: IMenuManagerService, _uiPartsService: IUIPartsService, _injector: Injector);
    private _initCommands;
    private _initUIParts;
    private _initMenus;
}
