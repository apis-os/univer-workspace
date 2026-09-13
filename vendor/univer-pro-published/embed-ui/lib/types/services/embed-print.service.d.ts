import type { IPrintPreparationContext, IPrintPreparationContribution } from '@univerjs-pro/print';
import { EmbedHostAdapterRegistryService, EmbedHostAnchorModelService, EmbedModelService } from '@univerjs-pro/embed';
import { Disposable, ICommandService, IImageIoService, IUniverInstanceService, ThemeService } from '@univerjs/core';
import { EmbedContentSizeRegistryService } from './embed-content-size-registry.service';
import { EmbedFloatPreviewService } from './embed-float-preview.service';
import { EmbedHostRestoreService } from './embed-host-restore.service';
import { EmbedMountService } from './embed-mount.service';
import { EmbedPassiveViewportRegistryService } from './embed-passive-viewport-registry.service';
export interface IEmbedPrintResource {
    canvas?: HTMLCanvasElement;
    height: number;
    source?: string;
    verticalBreaks?: readonly number[];
    width: number;
}
export declare class EmbedPrintService extends Disposable implements IPrintPreparationContribution {
    private readonly _embedModelService;
    private readonly _anchorModelService;
    private readonly _hostAdapterRegistry;
    private readonly _restoreService;
    private readonly _previewService;
    private readonly _mountService;
    private readonly _contentSizeRegistry;
    private readonly _passiveViewportRegistry;
    private readonly _commandService;
    private readonly _univerInstanceService;
    private readonly _themeService;
    private readonly _imageIoService;
    private readonly _resources;
    constructor(_embedModelService: EmbedModelService, _anchorModelService: EmbedHostAnchorModelService, _hostAdapterRegistry: EmbedHostAdapterRegistryService, _restoreService: EmbedHostRestoreService, _previewService: EmbedFloatPreviewService, _mountService: EmbedMountService, _contentSizeRegistry: EmbedContentSizeRegistryService, _passiveViewportRegistry: EmbedPassiveViewportRegistryService, _commandService: ICommandService, _univerInstanceService: IUniverInstanceService, _themeService: ThemeService, _imageIoService: IImageIoService);
    prepare(context: IPrintPreparationContext): Promise<void>;
    getImage(hostUnitId: string, embedId: string): string | undefined;
    getResource(hostUnitId: string, embedId: string): IEmbedPrintResource | undefined;
    private _activateSheetTabForPrint;
    private _activateSlidePageForPrint;
    private _prepareDescriptor;
    private _captureMountedCanvas;
    private _renderMountedScene;
    private _renderCompleteScene;
    private _resolveCompleteCaptureOptions;
    private _measureContentSize;
    private _resolveViewState;
    private _resolveSize;
    private _resolveTabViewportSize;
    private _toDataUrl;
    private _preloadImage;
    private _clearHost;
    private _getKey;
    dispose(): void;
}
export declare function resolveCaptureFrameSlice(scroll: number, viewportSize: number, contentSize: number): {
    size: number;
    sourceOffset: number;
    target: number;
};
