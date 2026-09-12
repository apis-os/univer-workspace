import type { IUniverThreadCommentResourceConfig } from './config/config';
import { IConfigService, Injector, Plugin } from '@univerjs/core';
export declare class UniverThreadCommentResourcePlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: Partial<IUniverThreadCommentResourceConfig> | undefined, _injector: Injector, _configService: IConfigService);
    onStarting(): void;
}
