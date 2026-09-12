import type { IUniverChartUIConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
/** Registers shared chart UI dependencies once for every chart host. */
export declare class UniverChartUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: IUniverChartUIConfig | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
