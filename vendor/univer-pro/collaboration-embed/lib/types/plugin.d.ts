import type { IUniverCollaborationEmbedPluginConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverCollaborationEmbedPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: Partial<IUniverCollaborationEmbedPluginConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
