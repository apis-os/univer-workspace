import type { EmbedHostEntry } from '@univerjs-pro/embed';
import type { UniverInstanceType } from '@univerjs/core';
import type { IEmbedHostContainerContribution } from '../types/embed-ui';
export declare class EmbedHostContainerRegistryService {
    private readonly _contributions;
    register(contribution: IEmbedHostContainerContribution): void;
    get(hostType: UniverInstanceType, entry: EmbedHostEntry): IEmbedHostContainerContribution | undefined;
    list(): IEmbedHostContainerContribution[];
    supports(hostType: UniverInstanceType, entry: EmbedHostEntry, layout: IEmbedHostContainerContribution['layout']): boolean;
    private _key;
}
