import type { UniverInstanceType } from '@univerjs/core';
import type { IEmbedReadonlyPreviewProvider } from '../types/embed-ui';
export declare class EmbedReadonlyPreviewRegistryService {
    private readonly _providers;
    register(provider: IEmbedReadonlyPreviewProvider<any>): void;
    get(childType: UniverInstanceType): IEmbedReadonlyPreviewProvider<any> | undefined;
    list(): IEmbedReadonlyPreviewProvider<any>[];
}
