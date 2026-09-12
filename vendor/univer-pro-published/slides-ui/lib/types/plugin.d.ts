import type { IUniverSlidesUIConfig } from './config/config';
import { ICommandService, IConfigService, Injector, Plugin, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
import { IUIPartsService } from '@univerjs/ui';
import './views/render/adaptors';
/**
 * UI plugin for `@univerjs-pro/slides`.
 *
 * Registers:
 * - {@link SlideRenderService} — creates an engine-render unit for each slide unit
 * - {@link SlideRenderController} — sets up the main canvas scene (viewport, scroll, background)
 * - {@link SlideUIController} — injects thumbnail sidebar and canvas content into the workbench
 */
export declare class UniverSlidesUIPlugin extends Plugin {
    private readonly _config;
    readonly _injector: Injector;
    private readonly _commandService;
    private readonly _renderManagerService;
    private readonly _configService;
    private readonly _uiPartsService;
    static pluginName: string;
    static packageName: string;
    static version: string;
    static type: UniverInstanceType;
    constructor(_config: Partial<IUniverSlidesUIConfig> | undefined, _injector: Injector, _commandService: ICommandService, _renderManagerService: IRenderManagerService, _configService: IConfigService, _uiPartsService: IUIPartsService);
    private _initCommands;
    private _isEditorEnabled;
    onStarting(): void;
    onReady(): void;
    onRendered(): void;
    private _registerEditorRenderModules;
    private _registerUIControllers;
    private _eagerInit;
}
