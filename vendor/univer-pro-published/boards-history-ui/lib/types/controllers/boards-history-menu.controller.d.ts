import { IBoardSettingsMenuContributionService } from '@univerjs-pro/boards-ui';
import { Disposable, ICommandService, LocaleService } from '@univerjs/core';
export declare class BoardsHistoryMenuController extends Disposable {
    constructor(commandService: ICommandService, settingsMenuContributionService: IBoardSettingsMenuContributionService, localeService: LocaleService);
}
