import type { BoardModel } from '@univerjs-pro/boards';
import type { IBoardSettings } from '../config/config';
import { ICommandService, ThemeService } from '@univerjs/core';
export declare class BoardSettingsService {
    private readonly _commandService;
    private readonly _themeService;
    constructor(_commandService: ICommandService, _themeService: ThemeService);
    setSettings(boardModel: BoardModel | null | undefined, settings: Partial<IBoardSettings>): Promise<boolean>;
    setTheme(boardModel: BoardModel | null | undefined, themeId: string): Promise<boolean>;
    syncFollowUniverTheme(boardModel: BoardModel | null | undefined): Promise<boolean>;
}
