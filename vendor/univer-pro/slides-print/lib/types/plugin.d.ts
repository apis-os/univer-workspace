import type { IUniverSlidesPrintConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverSlidesPrintPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSlidesPrintConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
    onReady(): void;
}
