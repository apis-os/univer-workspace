import type { IUniverBoardsConfig } from './config/config';
import { ICommandService, IConfigService, Injector, IUniverInstanceService, Plugin, UniverInstanceType } from '@univerjs/core';
export declare const BOARDS_PLUGIN_NAME = "UNIVER_BOARDS_PLUGIN";
export declare class UniverBoardsPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _commandService;
    private readonly _configService;
    private readonly _univerInstanceService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverBoardsConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService, _univerInstanceService: IUniverInstanceService);
    onStarting(): void;
}
