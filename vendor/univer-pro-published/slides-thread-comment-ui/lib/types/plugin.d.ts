import type { IUniverSlidesThreadCommentUIConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverSlidesThreadCommentUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _renderManagerService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSlidesThreadCommentUIConfig> | undefined, _injector: Injector, _configService: IConfigService, _renderManagerService: IRenderManagerService);
    onStarting(): void;
    onRendered(): void;
}
