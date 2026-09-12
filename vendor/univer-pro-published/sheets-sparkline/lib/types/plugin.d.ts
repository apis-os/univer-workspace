import type { IUniverSheetsSparklineConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetSparklinePlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    private readonly _commandService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsSparklineConfig> | undefined, _injector: Injector, _configService: IConfigService, _commandService: ICommandService);
    private _initDependencies;
    onReady(): void;
    private _initRegisterCommand;
}
