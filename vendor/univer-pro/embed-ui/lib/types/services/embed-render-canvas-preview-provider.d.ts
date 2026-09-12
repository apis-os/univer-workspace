import type { DependencyIdentifier, Injector, UniverInstanceType } from '@univerjs/core';
import type { IEmbedChildContainerContext, IEmbedFloatPreviewProvider } from '../types/embed-ui';
import { IRenderManagerService } from '@univerjs/engine-render';
export interface ICreateEmbedRenderCanvasPreviewProviderOptions {
    childType: UniverInstanceType;
    renderManagerService: DependencyIdentifier<IRenderManagerService>;
}
export declare function createEmbedRenderCanvasPreviewProvider(injector: Injector, options: ICreateEmbedRenderCanvasPreviewProviderOptions): IEmbedFloatPreviewProvider;
export declare function waitForEmbedContextCanvasPreviewReady(context: IEmbedChildContainerContext, renderCurrentFrame?: boolean): Promise<void>;
