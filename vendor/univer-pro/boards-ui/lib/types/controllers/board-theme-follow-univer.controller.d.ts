import { IUniverInstanceService, RxDisposable, ThemeService } from '@univerjs/core';
import { BoardSettingsService } from '../services/board-settings.service';
export declare class BoardThemeFollowUniverController extends RxDisposable {
    private readonly _instanceService;
    private readonly _themeService;
    private readonly _settingsService;
    constructor(_instanceService: IUniverInstanceService, _themeService: ThemeService, _settingsService: BoardSettingsService);
    private _init;
    private _getCurrentBoardModel;
}
