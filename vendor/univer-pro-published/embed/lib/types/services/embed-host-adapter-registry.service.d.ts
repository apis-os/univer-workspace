import type { IGroupBaseBound, Injector, UniverInstanceType } from '@univerjs/core';
import type { EmbedHostEntry, IEmbedDescriptor } from '../types/embed';
import type { IEmbedHostAdapterContribution, IEmbedHostAnchorMutationPlan, IEmbedHostAnchorRemoveMutationPlan, IEmbedHostMutationPlan } from '../types/host-adapter';
import type { IEmbedHostAnchorRecord } from '../types/host-anchor';
import type { EmbedHostContext } from '../types/host-context';
export declare class EmbedHostAdapterRegistryService {
    private readonly _contributions;
    register(contribution: IEmbedHostAdapterContribution): void;
    get(hostType: UniverInstanceType, entry: EmbedHostEntry): IEmbedHostAdapterContribution | undefined;
    list(): IEmbedHostAdapterContribution[];
    readContext(descriptor: IEmbedDescriptor): EmbedHostContext;
    createBoundsUpdatePlan(descriptor: IEmbedDescriptor, bounds: IGroupBaseBound): IEmbedHostMutationPlan;
    createAnchor(params: {
        embedId: string;
        hostUnitId: string;
        hostType: UniverInstanceType;
        entry: EmbedHostEntry;
        requestedAnchorId?: string;
        hostContext?: Record<string, unknown>;
    }): string;
    createAnchorPlan(params: {
        embedId: string;
        hostUnitId: string;
        hostType: UniverInstanceType;
        entry: EmbedHostEntry;
        requestedAnchorId?: string;
        hostContext?: Record<string, unknown>;
        descriptor?: IEmbedDescriptor;
    }): IEmbedHostAnchorMutationPlan;
    removeAnchor(params: {
        embedId: string;
        hostUnitId: string;
        hostType: UniverInstanceType;
        entry: EmbedHostEntry;
        hostAnchorId: string;
    }): void;
    afterCreateAnchor(params: {
        embedId: string;
        hostUnitId: string;
        hostType: UniverInstanceType;
        entry: EmbedHostEntry;
        hostAnchorId: string;
        hostContext?: Record<string, unknown>;
        descriptor: IEmbedDescriptor;
    }): void;
    afterRemoveAnchor(params: {
        embedId: string;
        hostUnitId: string;
        hostType: UniverInstanceType;
        entry: EmbedHostEntry;
        hostAnchorId: string;
        hostContext?: Record<string, unknown>;
        descriptor?: IEmbedDescriptor;
    }): void;
    activateAnchor(params: {
        embedId: string;
        hostUnitId: string;
        hostType: UniverInstanceType;
        entry: EmbedHostEntry;
        hostAnchorId: string;
        hostContext?: Record<string, unknown>;
        descriptor: IEmbedDescriptor;
    }): void;
    restoreAnchor(params: {
        embedId: string;
        hostUnitId: string;
        hostType: UniverInstanceType;
        entry: EmbedHostEntry;
        hostAnchorId: string;
        hostContext?: Record<string, unknown>;
        descriptor: IEmbedDescriptor;
    }): IEmbedHostAnchorRecord;
    removeAnchorPlan(params: {
        embedId: string;
        hostUnitId: string;
        hostType: UniverInstanceType;
        entry: EmbedHostEntry;
        hostAnchorId: string;
        descriptor?: IEmbedDescriptor;
    }): IEmbedHostAnchorRemoveMutationPlan;
    private _key;
}
export declare function registerEmbedHostAdapterContributions(injector: Pick<Injector, 'get' | 'has'>, contributions: readonly IEmbedHostAdapterContribution[]): void;
export declare function flushPendingEmbedHostAdapterContributions(injector: Pick<Injector, 'get' | 'has'>): void;
