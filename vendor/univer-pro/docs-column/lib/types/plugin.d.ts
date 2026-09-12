import type { IUniverDocsColumnConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare const DOCS_COLUMN_PLUGIN = "DOCS_COLUMN_PLUGIN";
export declare class UniverDocsColumnPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _configService;
    private readonly _commandService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverDocsColumnConfig> | undefined, _injector: Injector, _configService: IConfigService, _commandService: ICommandService);
    onStarting(): void;
}
