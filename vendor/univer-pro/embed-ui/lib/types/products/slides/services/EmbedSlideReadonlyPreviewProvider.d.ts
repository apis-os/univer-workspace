import type { IDisposable } from '@univerjs/core';
import type { IEmbedReadonlyPreviewContext, IEmbedReadonlyPreviewProvider, IEmbedReadonlyPreviewWheelContext } from '../../../types/embed-ui';
import type { ISlideEmbedFloatViewState } from './embed-slide-float-preview.provider';
import { IUniverInstanceService, UniverInstanceType } from '@univerjs/core';
import { IRenderManagerService } from '@univerjs/engine-render';
export declare class SlideEmbedReadonlyPreviewProvider implements IEmbedReadonlyPreviewProvider<ISlideEmbedFloatViewState> {
    private readonly _instanceService;
    private readonly _renderManagerService;
    readonly childType = UniverInstanceType.UNIVER_SLIDE;
    readonly supportedLayouts: "aspect-fit"[];
    constructor(_instanceService: IUniverInstanceService, _renderManagerService: IRenderManagerService);
    mount(context: IEmbedReadonlyPreviewContext<ISlideEmbedFloatViewState>): IDisposable | undefined;
    handleWheel(context: IEmbedReadonlyPreviewWheelContext<ISlideEmbedFloatViewState>): boolean;
    private _getSlideModel;
}
