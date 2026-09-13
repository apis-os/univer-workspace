import type { IUniverSlidesChartUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverSlidesChartUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _renderManagerService;
    private readonly _commandService;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: Partial<IUniverSlidesChartUIConfig> | undefined, _injector: Injector, _configService: IConfigService, _renderManagerService: IRenderManagerService, _commandService: ICommandService);
    onStarting(): void;
    onReady(): void;
    private _initCommands;
}
