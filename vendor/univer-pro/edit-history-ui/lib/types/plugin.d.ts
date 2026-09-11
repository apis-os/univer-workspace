import type { IUniverEditHistoryUIConfig } from './config/config';
import { IConfigService, ILogService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverEditHistoryUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _logService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    private _historyViewerController;
    constructor(_config: IUniverEditHistoryUIConfig | undefined, _injector: Injector, _configService: IConfigService, _logService: ILogService);
    onStarting(): void;
    onRendered(): void;
}
