import type { Injector } from '@univerjs/core';
import { EmbedModelService } from '@univerjs-pro/embed';
import { ISlideEmbedRuntimeService } from '@univerjs-pro/slides-ui';
import { IUniverInstanceService } from '@univerjs/core';
import { EmbedActivationService } from '../../services/embed-activation.service';
import { EmbedBlockRegistryService } from '../../services/embed-block-registry.service';
import { EmbedFloatPreviewService } from '../../services/embed-float-preview.service';
import { EmbedHostRestoreService } from '../../services/embed-host-restore.service';
import { EmbedMountService } from '../../services/embed-mount.service';
import { EmbedPassiveViewportRegistryService } from '../../services/embed-passive-viewport-registry.service';
import { EmbedPassiveWheelHandlerRegistryService } from '../../services/embed-passive-wheel-handler-registry.service';
import { EmbedRuntimeHostLeaseService } from '../../services/embed-runtime-host-lease.service';
import { EmbedSceneCanvasCaptureService } from '../../services/embed-scene-canvas-capture.service';
export declare function registerSlidesEmbedUIContributions(injector: Injector): void;
interface ISlidesEmbedRuntimeServiceDependencies {
    embedModelService: EmbedModelService;
    mountService: EmbedMountService;
    activationService: EmbedActivationService;
    blockRegistry: EmbedBlockRegistryService;
    restoreService: EmbedHostRestoreService;
    previewService: EmbedFloatPreviewService;
    runtimeHostLeaseService: EmbedRuntimeHostLeaseService;
    passiveViewportRegistry: EmbedPassiveViewportRegistryService;
    passiveWheelHandlerRegistry: EmbedPassiveWheelHandlerRegistryService;
    univerInstanceService?: IUniverInstanceService;
    sceneCanvasCaptureService: EmbedSceneCanvasCaptureService | undefined;
}
export declare function createSlidesEmbedRuntimeService(params: ISlidesEmbedRuntimeServiceDependencies): ISlideEmbedRuntimeService;
export {};
