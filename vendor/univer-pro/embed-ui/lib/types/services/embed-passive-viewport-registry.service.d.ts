import type { EmbedLayout } from '@univerjs-pro/embed';
import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { IEmbedPassiveViewportProvider } from '../types/embed-ui';
export declare class EmbedPassiveViewportRegistryService {
    private readonly _providers;
    register(provider: IEmbedPassiveViewportProvider): IDisposable;
    get(childType: UniverInstanceType, layout?: EmbedLayout): IEmbedPassiveViewportProvider | undefined;
    list(): IEmbedPassiveViewportProvider[];
}
