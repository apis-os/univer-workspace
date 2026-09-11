import { Disposable, ICommandService, Injector, IUniverInstanceService } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IMenuManagerService, IShortcutService, IUIPartsService } from '@univerjs/ui';
import { ISheetPrintDialogService } from '../services/sheet-print-dialog.service';
import { ISheetPrintManagerService } from '../services/sheet-print-manager.service';
import { SheetPrintClientService } from '../services/sheet-print.service';
export declare class SheetPrintController extends Disposable {
    private readonly _printDialogService;
    private readonly _commandService;
    private readonly _sheetPrintManagerService;
    private readonly _sheetPrintClientService;
    protected readonly _menuManagerService: IMenuManagerService;
    private readonly _shortcutService;
    private readonly _injector;
    private readonly _univerInstanceService;
    private readonly _renderManagerService;
    private readonly _uiPartsService;
    constructor(_printDialogService: ISheetPrintDialogService, _commandService: ICommandService, _sheetPrintManagerService: ISheetPrintManagerService, _sheetPrintClientService: SheetPrintClientService, _menuManagerService: IMenuManagerService, _shortcutService: IShortcutService, _injector: Injector, _univerInstanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService, _uiPartsService: IUIPartsService);
    private _initCommands;
    private _initUIParts;
    private _initShortcuts;
    private _initMenus;
    private _initConfigChangeListener;
    private _print;
    private _initCommandListener;
    private _initMutationListener;
}
