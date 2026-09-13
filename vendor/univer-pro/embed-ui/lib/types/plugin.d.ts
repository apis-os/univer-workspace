import type { IUniverEmbedUIPluginConfig } from './config/config';
import { IConfigService, Injector, IUniverInstanceService, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverEmbedUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _univerInstanceService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverEmbedUIPluginConfig> | undefined, _injector: Injector, _configService: IConfigService, _univerInstanceService: IUniverInstanceService);
    onStarting(): void;
    onReady(): void;
    private _registerServices;
    private _registerProductMenus;
    private _registerProductUIContributions;
    private _registerLateProductUIContributions;
    private _flushPendingContributions;
    private _registerFloatingMenus;
    private _touchServices;
    private _registerDefaultHostToolbar;
    private _enableEmbedUnitLeasePolicy;
}
