import type { EmbedLayout } from '@univerjs-pro/embed';
import type { UniverInstanceType } from '@univerjs/core';
import type { IEmbedPassiveViewportProvider } from '../types/embed-ui';
export interface ICreateEmbedDomPassiveViewportProviderOptions {
    childType: UniverInstanceType;
    supportedLayouts?: EmbedLayout[];
}
export declare function createEmbedDomPassiveViewportProvider(options: ICreateEmbedDomPassiveViewportProviderOptions): IEmbedPassiveViewportProvider;
