import type { IUniverBasesConfig, IUniverRemoteBasesConfig } from './config/config';
import { ICommandService, IConfigService, Injector, IUniverInstanceService, Plugin, UniverInstanceType } from '@univerjs/core';
import { DataSyncPrimaryController } from '@univerjs/rpc';
export declare const BASES_PLUGIN_NAME = "BASES_PLUGIN";
export declare const BASE_SYNC_MUTATIONS: readonly [import("@univerjs/core").IMutation<import(".").IApplyBaseJson1MutationParams, boolean>];
export declare class UniverBasesPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _configService;
    private readonly _dataSyncPrimaryController?;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    private readonly _baseSyncDisposables;
    constructor(_config: Partial<IUniverBasesConfig> | undefined, _injector: Injector, _commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _configService: IConfigService, _dataSyncPrimaryController?: DataSyncPrimaryController | undefined);
    onReady(): void;
    private _initDependencies;
    private _initCommands;
    private _initDataSync;
    private _syncBaseUnit;
    private _initRegistries;
}
export declare class UniverRemoteBasesPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _commandService;
    private readonly _configService;
    private readonly _univerInstanceService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverRemoteBasesConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService, _univerInstanceService: IUniverInstanceService);
}
