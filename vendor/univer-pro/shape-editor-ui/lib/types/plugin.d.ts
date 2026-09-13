import type { IUniverShapeEditorUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IUIPartsService } from '@univerjs/ui';
export declare class UniverShapeEditorUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _configService;
    private readonly _commandService;
    private readonly _uiPartsService;
    static type: UniverInstanceType;
    static pluginName: string;
    static packageName: string;
    static version: string;
    constructor(_config: IUniverShapeEditorUIConfig | undefined, _injector: Injector, _configService: IConfigService, _commandService: ICommandService, _uiPartsService: IUIPartsService);
    onStarting(): void;
    onReady(): void;
}
