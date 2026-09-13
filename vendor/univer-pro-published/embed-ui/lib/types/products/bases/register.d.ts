import type { Injector } from '@univerjs/core';
import { IBaseEmbedRuntimeService } from '@univerjs-pro/bases-ui';
import { EmbedModelService } from '@univerjs-pro/embed';
import { EmbedActivationService } from '../../services/embed-activation.service';
import { EmbedHostRestoreService } from '../../services/embed-host-restore.service';
import { EmbedMountService } from '../../services/embed-mount.service';
export declare function registerBasesEmbedUIContributions(injector: Injector): void;
export declare function registerBasesEmbedContentSizeProvider(injector: Injector): void;
export declare function createBasesEmbedRuntimeService(params: {
    embedModelService: EmbedModelService;
    restoreService: EmbedHostRestoreService;
    mountService: EmbedMountService;
    activationService: EmbedActivationService;
}): IBaseEmbedRuntimeService;
