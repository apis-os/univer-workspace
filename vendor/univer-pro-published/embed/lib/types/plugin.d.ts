import type { IUniverEmbedPluginConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverEmbedPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _commandService;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverEmbedPluginConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService);
    onStarting(): void;
    private _registerReferencedUnitSources;
    private _registerDependencies;
    onReady(): void;
    private _flushPendingContributions;
}
