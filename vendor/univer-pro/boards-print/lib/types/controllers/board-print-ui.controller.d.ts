import { IBoardSettingsMenuContributionService } from '@univerjs-pro/boards-ui';
import { Disposable, ICommandService, Injector, LocaleService } from '@univerjs/core';
import { IUIPartsService } from '@univerjs/ui';
export declare class BoardPrintUIController extends Disposable {
    private readonly _commandService;
    private readonly _localeService;
    private readonly _settingsMenuContributionService;
    private readonly _uiPartsService;
    private readonly _injector;
    constructor(_commandService: ICommandService, _localeService: LocaleService, _settingsMenuContributionService: IBoardSettingsMenuContributionService, _uiPartsService: IUIPartsService, _injector: Injector);
}
