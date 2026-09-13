import type { IUniverDocsShapeUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverDocsShapeUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _commandService;
    private readonly _configService;
    private readonly _renderManagerService;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: Partial<IUniverDocsShapeUIConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService, _renderManagerService: IRenderManagerService);
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
    private _initCommands;
    private _initUIPart;
}
