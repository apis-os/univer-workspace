import type { IDisposable, Injector, UniverInstanceType } from '@univerjs/core';
import type { EmbedProductMenuSurface, IEmbedProductMenuContribution, IEmbedProductMenuMountContext } from '../types/embed-ui';
export declare function registerEmbedProductMenuContribution(injector: Pick<Injector, 'get' | 'has'>, contribution: IEmbedProductMenuContribution): IDisposable | undefined;
export declare function flushPendingEmbedProductMenuContributions(injector: Pick<Injector, 'get' | 'has'>): void;
export declare class EmbedProductMenuRegistryService {
    private readonly _contributions;
    private _nextIndex;
    constructor();
    register(contribution: IEmbedProductMenuContribution): IDisposable;
    get(childType: UniverInstanceType): IEmbedProductMenuContribution | undefined;
    getAll(childType: UniverInstanceType, surface?: EmbedProductMenuSurface): readonly IEmbedProductMenuContribution[];
    getMergedMenuSchema(childType: UniverInstanceType, surface?: EmbedProductMenuSurface): unknown | undefined;
    mountMenu(context: Omit<IEmbedProductMenuMountContext, 'menuSchema'>): IDisposable | undefined;
}
