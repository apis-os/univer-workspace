import type { BoardToolbarToolConfig } from '@univerjs-pro/boards-ui';
import type { IUniverBoardsMindUIConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare const BOARDS_MIND_UI_PLUGIN_NAME = "UNIVER_BOARDS_MIND_UI_PLUGIN";
export declare class UniverBoardsMindUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _renderManagerService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverBoardsMindUIConfig> | undefined, _injector: Injector, _configService: IConfigService, _renderManagerService: IRenderManagerService);
    onStarting(): void;
    onReady(): void;
    private _enableMindMapToolbarTool;
    private _getBoardsUIConfig;
}
export declare function enableMindMapTool(config: BoardToolbarToolConfig | undefined): BoardToolbarToolConfig;
