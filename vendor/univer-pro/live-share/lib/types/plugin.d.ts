import type { IUniverLiveShareConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverLiveSharePlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: IUniverLiveShareConfig | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onRendered(): void;
}
