import type { IUniverDocsColumnUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IMenuManagerService } from '@univerjs/ui';
export declare const DOCS_COLUMN_UI_PLUGIN = "DOCS_COLUMN_UI_PLUGIN";
export declare class UniverDocsColumnUIPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _configService;
    private readonly _commandService;
    private readonly _menuManagerService;
    private readonly _renderManagerService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverDocsColumnUIConfig> | undefined, _injector: Injector, _configService: IConfigService, _commandService: ICommandService, _menuManagerService: IMenuManagerService, _renderManagerService: IRenderManagerService);
    onStarting(): void;
    onRendered(): void;
}
