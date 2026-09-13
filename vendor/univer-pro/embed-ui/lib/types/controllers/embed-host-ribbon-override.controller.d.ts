import { Disposable, Injector } from '@univerjs/core';
import { IRibbonOverrideService, IUIPartsService } from '@univerjs/ui';
import { EmbedBlockRegistryService } from '../services/embed-block-registry.service';
import { EmbedHostMenuOverrideService } from '../services/embed-host-menu-override.service';
export declare class EmbedHostRibbonOverrideController extends Disposable {
    private readonly _menuOverrideService;
    private readonly _blockRegistry;
    private readonly _ribbonOverrideService;
    private readonly _injector;
    private _current;
    private _currentOverride;
    constructor(_menuOverrideService: EmbedHostMenuOverrideService, _blockRegistry: EmbedBlockRegistryService, _ribbonOverrideService: IRibbonOverrideService, uiPartsService: IUIPartsService, _injector: Injector);
    private _registerRibbonOwnership;
    dispose(): void;
}
