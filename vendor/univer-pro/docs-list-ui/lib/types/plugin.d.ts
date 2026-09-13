import type { IUniverDocsListUIConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverDocsListUIPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _renderManagerService;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverDocsListUIConfig> | undefined, _injector: Injector, _renderManagerService: IRenderManagerService, _configService: IConfigService);
    onStarting(): void;
    onRendered(): void;
}
