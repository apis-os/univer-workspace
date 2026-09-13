import type { IUniverSlidesTableUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IMenuManagerService, IShortcutService, IUIPartsService } from '@univerjs/ui';
export declare class UniverSlidesTableUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _renderManagerService;
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _shortcutService;
    private readonly _uiPartsService;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: Partial<IUniverSlidesTableUIConfig> | undefined, _injector: Injector, _configService: IConfigService, _renderManagerService: IRenderManagerService, _commandService: ICommandService, _menuManagerService: IMenuManagerService, _shortcutService: IShortcutService, _uiPartsService: IUIPartsService);
    onStarting(): void;
    onReady(): void;
    private _initCommands;
    private _initShortcuts;
}
