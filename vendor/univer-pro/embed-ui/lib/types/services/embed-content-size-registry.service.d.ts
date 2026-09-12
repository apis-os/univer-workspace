import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { IEmbedContentSize, IEmbedContentSizeMeasureContext, IEmbedContentSizeProvider } from '../types/embed-ui';
import { Disposable } from '@univerjs/core';
export declare class EmbedContentSizeRegistryService extends Disposable {
    private readonly _providers;
    private readonly _providerChanged$;
    readonly providerChanged$: import("rxjs").Observable<UniverInstanceType>;
    private readonly _contentSizeChanged$;
    readonly contentSizeChanged$: import("rxjs").Observable<{
        embedId: string;
        hostUnitId: string;
    }>;
    register(provider: IEmbedContentSizeProvider): IDisposable;
    get(childType: UniverInstanceType): IEmbedContentSizeProvider | undefined;
    list(): IEmbedContentSizeProvider[];
    measureContentSize(context: IEmbedContentSizeMeasureContext): IEmbedContentSize | undefined;
    notifyContentSizeChanged(hostUnitId: string, embedId: string): void;
    dispose(): void;
}
