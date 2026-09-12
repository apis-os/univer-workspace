import type { IUniverSheetsChartUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsChartUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _commandService;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    private readonly _resolvedConfig;
    constructor(_config: Partial<IUniverSheetsChartUIConfig> | undefined, _injector: Injector, _configService: IConfigService, _commandService: ICommandService);
    onStarting(): void;
    onRendered(): void;
    private _initCommands;
}
