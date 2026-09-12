import type { Injector } from '@univerjs/core';
import { EmbedModelService } from '@univerjs-pro/embed';
import { ISheetEmbedRuntimeService } from '@univerjs/sheets-ui';
import { CanvasFloatDomPreviewService } from '@univerjs/ui';
import { Subscription } from 'rxjs';
import { EmbedActivationService } from '../../services/embed-activation.service';
import { EmbedFloatPreviewService } from '../../services/embed-float-preview.service';
import { EmbedHostRestoreService } from '../../services/embed-host-restore.service';
import { EmbedMountService } from '../../services/embed-mount.service';
export declare function registerSheetsEmbedUIContributions(injector: Injector): void;
export declare function createSheetsEmbedRuntimeService(params: {
    embedModelService: EmbedModelService;
    mountService: EmbedMountService;
    activationService: EmbedActivationService;
    restoreService: EmbedHostRestoreService;
}): ISheetEmbedRuntimeService;
export declare function wireSheetsFloatPreviewBridge(params: {
    previewService: EmbedFloatPreviewService;
    embedModelService: EmbedModelService;
    canvasFloatDomPreviewService: CanvasFloatDomPreviewService;
}): Subscription;
export declare function ensureSheetsFloatPreviewBridge(params: {
    injector: Pick<Injector, 'get' | 'has'>;
    previewService: EmbedFloatPreviewService;
    retry?: boolean;
    maxRetries?: number;
    retryDelay?: number;
}): Subscription | undefined;
