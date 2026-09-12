import type { IUniverPdfsConfig } from './config/config';
import { ICommandService, IConfigService, Injector, IUniverInstanceService, Plugin, UniverInstanceType } from '@univerjs/core';
/** Core plugin that registers the formal PDF Unit and durable commands. */
export declare class UniverPdfsPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _commandService;
    private readonly _configService;
    private readonly _univerInstanceService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverPdfsConfig> | undefined, _injector: Injector, _commandService: ICommandService, _configService: IConfigService, _univerInstanceService: IUniverInstanceService);
    onStarting(): void;
}
