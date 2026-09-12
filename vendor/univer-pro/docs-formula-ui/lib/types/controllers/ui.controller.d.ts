import { Disposable, ICommandService, IUniverInstanceService } from '@univerjs/core';
import { IMenuManagerService, IShortcutService } from '@univerjs/ui';
import { DocFormulaPopupService } from '../services/doc-formula-popup.service';
export declare class DocFormulaUIController extends Disposable {
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _shortcutService;
    private readonly _univerInstanceService;
    private readonly _popupService;
    constructor(_commandService: ICommandService, _menuManagerService: IMenuManagerService, _shortcutService: IShortcutService, _univerInstanceService: IUniverInstanceService, _popupService: DocFormulaPopupService);
    private _hasSelectedFormula;
}
