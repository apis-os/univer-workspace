import type { EmbedModelService, IEmbedDescriptor } from '@univerjs-pro/embed';
import type { ISlideEmbedPresentationMountParams } from '@univerjs-pro/slides-ui';
import type { EmbedActivationService } from '../../../services/embed-activation.service';
import type { EmbedBlockRegistryService } from '../../../services/embed-block-registry.service';
import type { EmbedFloatPreviewService } from '../../../services/embed-float-preview.service';
import type { EmbedHostRestoreService } from '../../../services/embed-host-restore.service';
import type { EmbedPassiveViewportRegistryService } from '../../../services/embed-passive-viewport-registry.service';
import type { EmbedPassiveWheelHandlerRegistryService } from '../../../services/embed-passive-wheel-handler-registry.service';
import type { EmbedRuntimeHostLeaseService } from '../../../services/embed-runtime-host-lease.service';
import type { EmbedSceneCanvasCaptureService } from '../../../services/embed-scene-canvas-capture.service';
import type { EmbedFloatPreviewRenderResult } from '../../../types/embed-ui';
import { UniverInstanceType } from '@univerjs/core';
export interface ISlidePresentationEmbedDependencies {
    activationService: EmbedActivationService;
    blockRegistry: EmbedBlockRegistryService;
    embedModelService: EmbedModelService;
    restoreService: EmbedHostRestoreService;
    previewService: EmbedFloatPreviewService;
    runtimeHostLeaseService: EmbedRuntimeHostLeaseService;
    passiveViewportRegistry: EmbedPassiveViewportRegistryService;
    passiveWheelHandlerRegistry: EmbedPassiveWheelHandlerRegistryService;
    sceneCanvasCaptureService: EmbedSceneCanvasCaptureService | undefined;
}
/**
 * Mounts the real Embed runtime for Slides presentation when available. Input is
 * intentionally presentation-local: wheel is routed through the existing passive
 * contributions, while activation and editing gestures terminate at the gate.
 * Static preview rendering remains only as a runtime-unavailable fallback.
 */
export declare function mountSlidesPresentationEmbed(dependencies: ISlidePresentationEmbedDependencies, mountParams: ISlideEmbedPresentationMountParams): import("@wendellhu/redi").IDisposable;
export declare function createSlidesPresentationPreviewDescriptor(params: {
    hostUnitId: string;
    embedId: string;
    hostAnchorId: string;
    childUnitId?: string;
    childType?: UniverInstanceType;
    entry: 'slides-floating-object' | 'slides-page-list-block';
}): IEmbedDescriptor | undefined;
export declare function normalizePresentationPreviewResult(result: EmbedFloatPreviewRenderResult): string | undefined;
