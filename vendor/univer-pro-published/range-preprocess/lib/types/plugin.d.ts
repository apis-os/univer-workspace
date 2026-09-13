import type { IUniverRangePreprocessConfig } from './config/config';
import { IConfigService, Injector, Plugin } from '@univerjs/core';
export declare class UniverRangePreprocessPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: Partial<IUniverRangePreprocessConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
}
