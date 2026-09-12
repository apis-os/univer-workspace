import type { EmbedHostEntry } from '@univerjs-pro/embed';
import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { IEmbedFloatingMenuContribution } from '../types/embed-ui';
export declare class EmbedFloatingMenuRegistryService {
    private readonly _contributions;
    register(contribution: IEmbedFloatingMenuContribution): IDisposable;
    get(hostType: UniverInstanceType, entry: EmbedHostEntry, childType?: UniverInstanceType): IEmbedFloatingMenuContribution | undefined;
    hasExact(hostType: UniverInstanceType, entry: EmbedHostEntry, childType?: UniverInstanceType): boolean;
    list(): IEmbedFloatingMenuContribution[];
    private _key;
}
