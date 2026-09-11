import type { IUniverBoardsPrintConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare const BOARDS_PRINT_PLUGIN_NAME = "UNIVER_BOARDS_PRINT_PLUGIN";
export declare class UniverBoardsPrintPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverBoardsPrintConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
}
