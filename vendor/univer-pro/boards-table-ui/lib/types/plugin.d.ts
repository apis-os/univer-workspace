import type { Dependency } from '@univerjs/core';
import type { IUniverBoardsTableUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, LocaleService, Plugin, ThemeService, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IMenuManagerService, IShortcutService } from '@univerjs/ui';
export declare const BOARDS_TABLE_UI_PLUGIN_NAME = "UNIVER_BOARDS_TABLE_UI_PLUGIN";
export declare class UniverBoardsTableUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _renderManagerService;
    private readonly _localeService;
    private readonly _themeService;
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _shortcutService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    static readonly scopedDependencies: readonly Dependency[];
    private _adapter;
    constructor(_config: Partial<IUniverBoardsTableUIConfig> | undefined, _injector: Injector, _configService: IConfigService, _renderManagerService: IRenderManagerService, _localeService: LocaleService, _themeService: ThemeService, _commandService: ICommandService, _menuManagerService: IMenuManagerService, _shortcutService: IShortcutService);
    onStarting(): void;
    onReady(): void;
    private _appendRenderAdapter;
    private _removeRenderAdapter;
    private _getBoardsUIConfig;
}
