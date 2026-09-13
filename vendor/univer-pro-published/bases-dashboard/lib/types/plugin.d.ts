import type { IUniverBaseDashboardConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { DataSyncPrimaryController } from '@univerjs/rpc';
export declare class UniverBaseDashboardPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _commandService;
    private readonly _configService;
    private readonly _dataSyncPrimaryController?;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: IUniverBaseDashboardConfig | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService, _dataSyncPrimaryController?: DataSyncPrimaryController | undefined);
    onStarting(): void;
    private _registerCommands;
}
export declare class UniverRemoteBaseDashboardPlugin extends Plugin {
    protected readonly _injector: Injector;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: Readonly<Record<string, never>> | undefined, _injector: Injector, commandService: ICommandService);
    onStarting(): void;
}
