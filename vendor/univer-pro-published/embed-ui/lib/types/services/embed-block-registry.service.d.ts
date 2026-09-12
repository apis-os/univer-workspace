import type { IDisposable, UniverInstanceType } from '@univerjs/core';
import type { IEmbedBlockContribution } from '../types/embed-ui';
export declare class EmbedBlockRegistryService {
    private readonly _contributions;
    register(contribution: IEmbedBlockContribution): IDisposable;
    get(childType: UniverInstanceType): IEmbedBlockContribution | undefined;
    list(): IEmbedBlockContribution[];
}
