import type { IUniverInkConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare const INK_PLUGIN_NAME = "UNIVER_INK_PLUGIN";
export declare class UniverInkPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _commandService;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverInkConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService);
    onStarting(): void;
}
