import type { IUniverSheetsPrintConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverSheetsPrintPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _configService;
    private readonly _renderManagerService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSheetsPrintConfig> | undefined, _injector: Injector, _configService: IConfigService, _renderManagerService: IRenderManagerService);
    onReady(): void;
}
