import type { IUniverSheetsHistoryUIConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSheetsHistoryUIPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsHistoryUIConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onSteady(): void;
}
