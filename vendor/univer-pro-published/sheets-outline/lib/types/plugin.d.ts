import type { IUniverSheetsOutlineConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsOutlinePlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _commandService;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsOutlineConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService);
    onStarting(): void;
    private _initRegisterCommand;
}
