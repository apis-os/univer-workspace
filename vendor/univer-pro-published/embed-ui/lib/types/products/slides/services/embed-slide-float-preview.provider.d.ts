import type { EmbedFloatPreviewRenderResult, IEmbedChildContainerContext, IEmbedFloatPreviewProvider, IEmbedFloatPreviewRenderRequest } from '../../../types/embed-ui';
import { IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export interface ISlideEmbedFloatViewState {
    unitId: string;
    pageId: string;
    scaleMode: 'fit' | 'custom';
    zoomRatio?: number;
}
export declare class SlideEmbedFloatPreviewProvider implements IEmbedFloatPreviewProvider<ISlideEmbedFloatViewState> {
    private readonly _instanceService;
    private readonly _renderManagerService;
    readonly childType = UniverInstanceType.UNIVER_SLIDE;
    constructor(_instanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService);
    collectViewState(context: IEmbedChildContainerContext): ISlideEmbedFloatViewState;
    restoreViewState(context: IEmbedChildContainerContext, state: ISlideEmbedFloatViewState): void;
    renderPreview(request: IEmbedFloatPreviewRenderRequest<ISlideEmbedFloatViewState>): EmbedFloatPreviewRenderResult | undefined;
    private _getSlideModel;
    private _getOrCreateRender;
}
export interface ICenteredAspectCrop {
    sx: number;
    sy: number;
    sWidth: number;
    sHeight: number;
}
export declare function resolveCenteredAspectCrop(sourceWidth: number, sourceHeight: number, aspectRatio: number): ICenteredAspectCrop;
export interface ISlidePageRectLike {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
}
export declare function resolveSlidePageCanvasCrop(sourceWidth: number, sourceHeight: number, pageRect: ISlidePageRectLike, scaleX: number, scaleY: number): ICenteredAspectCrop | undefined;
