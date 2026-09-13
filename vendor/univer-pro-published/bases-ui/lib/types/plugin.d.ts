import type { IUniverBaseUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare const BASES_UI_PLUGIN_NAME = "BASES_UI_PLUGIN";
export declare class UniverBasesUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _renderManagerService;
    private readonly _commandService;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverBaseUIConfig> | undefined, _injector: Injector, _renderManagerService: IRenderManagerService, _commandService: ICommandService, _configService: IConfigService);
    onStarting(): void;
    private _disableBuiltinToolbar;
    onReady(): void;
}
