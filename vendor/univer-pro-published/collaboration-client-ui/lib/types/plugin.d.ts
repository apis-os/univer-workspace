import type { IUniverCollaborationClientUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class UniverCollaborationClientUIPlugin extends Plugin {
    private readonly _config;
    private readonly _renderManagerService;
    protected _injector: Injector;
    private readonly _configService;
    private readonly _commandService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: Partial<IUniverCollaborationClientUIConfig> | undefined, _renderManagerService: IRenderManagerService, _injector: Injector, _configService: IConfigService, _commandService: ICommandService);
    onStarting(): void;
    onRendered(): void;
    private _registerDependencies;
    private _registerRenderDependencies;
    private _initDependencies;
}
