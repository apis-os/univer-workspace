import type { BoardToolbarToolConfig } from '@univerjs-pro/boards-ui';
import type { IUniverBoardsChartUIConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare const BOARDS_CHART_UI_PLUGIN_NAME = "UNIVER_BOARDS_CHART_UI_PLUGIN";
export declare class UniverBoardsChartUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _renderManagerService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    private _adapter;
    constructor(_config: Partial<IUniverBoardsChartUIConfig> | undefined, _injector: Injector, _configService: IConfigService, _renderManagerService: IRenderManagerService);
    onStarting(): void;
    onReady(): void;
    private _appendRenderAdapter;
    private _removeRenderAdapter;
    private _getBoardsUIConfig;
}
export declare function enableChartTool(config: BoardToolbarToolConfig | undefined): BoardToolbarToolConfig;
