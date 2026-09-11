import type { IUniverEditHistoryConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
export declare class UniverEditHistoryPlugin extends Plugin {
    private readonly _config;
    protected _injector: Injector;
    private readonly _configService;
    private readonly _commandService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: IUniverEditHistoryConfig | undefined, _injector: Injector, _configService: IConfigService, _commandService: ICommandService);
    onStarting(): void;
}
