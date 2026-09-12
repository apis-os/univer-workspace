import type { UniverInstanceType } from '@univerjs/core';
import type { IEmbedChildViewContribution } from '../types/embed-ui';
export declare class EmbedChildViewRegistryService {
    private readonly _contributions;
    register(contribution: IEmbedChildViewContribution): void;
    get(childType: UniverInstanceType): IEmbedChildViewContribution | undefined;
    list(): IEmbedChildViewContribution[];
}
