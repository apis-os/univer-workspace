import type { IUniverEmbedUnitUIPluginConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverEmbedUnitUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverEmbedUnitUIPluginConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
