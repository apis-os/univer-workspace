import type { IUniverChartConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
/** Registers the shared chart rendering runtime used by every chart host. */
export declare class UniverChartPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    private readonly _resolvedConfig;
    constructor(_config: IUniverChartConfig | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
