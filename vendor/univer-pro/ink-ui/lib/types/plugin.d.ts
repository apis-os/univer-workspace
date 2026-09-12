import type { IUniverInkUIConfig } from './config/config';
import { IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IUIPartsService } from '@univerjs/ui';
export declare const INK_UI_PLUGIN_NAME = "UNIVER_INK_UI_PLUGIN";
export declare class UniverInkUIPlugin extends Plugin {
    private readonly _config;
    protected readonly _injector: Injector;
    private readonly _uiPartsService;
    private readonly _configService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverInkUIConfig> | undefined, _injector: Injector, _uiPartsService: IUIPartsService, _configService: IConfigService);
    onStarting(): void;
}
