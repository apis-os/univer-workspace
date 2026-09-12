import type { IEmbedDescriptor } from '@univerjs-pro/embed';
import type { IEmbedHostMenuOverride } from '../types/embed-ui';
import { EmbedFocusOwnerService, EmbedHostAdapterRegistryService } from '@univerjs-pro/embed';
import { Disposable, IContextService, IUniverInstanceService } from '@univerjs/core';
import { ILayoutService } from '@univerjs/ui';
import { EmbedBlockRegistryService } from './embed-block-registry.service';
import { EmbedFloatingActiveService } from './embed-floating-active.service';
import { EmbedHostMenuOverrideService } from './embed-host-menu-override.service';
import { EmbedMountService } from './embed-mount.service';
export interface IEmbedFloatingActivationOptions {
    portalContainer?: HTMLElement | null;
}
export interface IEmbedFullscreenActivationOptions {
    focusLayout?: boolean;
}
export declare class EmbedActivationService extends Disposable {
    private readonly _univerInstanceService;
    private readonly _focusOwnerService;
    private readonly _hostAdapterRegistry;
    private readonly _menuOverrideService;
    private readonly _mountService;
    private readonly _blockRegistry;
    private readonly _floatingActiveService;
    private readonly _contextService;
    private readonly _layoutService;
    private readonly _previousChildCurrentUnits;
    constructor(_univerInstanceService: IUniverInstanceService, _focusOwnerService: EmbedFocusOwnerService, _hostAdapterRegistry: EmbedHostAdapterRegistryService, _menuOverrideService: EmbedHostMenuOverrideService, _mountService: EmbedMountService, _blockRegistry: EmbedBlockRegistryService, _floatingActiveService: EmbedFloatingActiveService, _contextService: IContextService, _layoutService: ILayoutService);
    activateTab(descriptor: IEmbedDescriptor): IEmbedHostMenuOverride | null;
    activateFloating(descriptor: IEmbedDescriptor, stage?: 'stage1' | 'stage2', _options?: IEmbedFloatingActivationOptions): void;
    focusFloatingRuntime(descriptor: IEmbedDescriptor, options?: IEmbedFloatingActivationOptions): void;
    activateFullscreen(descriptor: IEmbedDescriptor, options?: IEmbedFullscreenActivationOptions): void;
    focusHostForPassiveRuntime(descriptor: IEmbedDescriptor): void;
    clearFullscreen(descriptor: IEmbedDescriptor): void;
    clearFloating(embedId?: string, hostUnitId?: string): void;
    clearTab(embedId?: string): void;
    private _rememberPreviousChildCurrentUnit;
    private _restorePreviousChildCurrentUnit;
    private _getCurrentUnitId;
    private _hasUnit;
    private _findFallbackUnitId;
    private _focusUnit;
    private _restoreStage2ChildFocusWhenHostRefocuses;
    private _scheduleFloatingChildFocus;
    private _setCurrentUnitForType;
    private _focusLayout;
    private _assertResolvedChild;
}
