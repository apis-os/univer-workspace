import type { Dependency } from '@univerjs/core';
import type { IUniverBoardsUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IMenuManagerService, IUIPartsService } from '@univerjs/ui';
export declare const BOARDS_UI_PLUGIN_NAME = "UNIVER_BOARDS_UI_PLUGIN";
export declare class UniverBoardsUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _renderManagerService;
    private readonly _uiPartsService;
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    private static readonly _runtimeScopedDependencies;
    private static _getRuntimeScopedDependencies;
    static getRuntimeScopedDependencies(injector: Injector): readonly Dependency[];
    static registerRuntimeScopedDependencies(injector: Injector, dependencies: readonly Dependency[]): void;
    constructor(_config: Partial<IUniverBoardsUIConfig> | undefined, _injector: Injector, _renderManagerService: IRenderManagerService, _uiPartsService: IUIPartsService, _commandService: ICommandService, _menuManagerService: IMenuManagerService, _configService: IConfigService);
    onStarting(): void;
    private _disableBuiltinToolbar;
    onReady(): void;
    onRendered(): void;
    private _registerRenderModules;
}
