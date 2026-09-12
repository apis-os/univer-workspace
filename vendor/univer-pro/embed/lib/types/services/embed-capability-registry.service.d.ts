import type { Injector } from '@univerjs/core';
import type { EmbedHostEntry, IEmbedCapability, IEmbedSourceMeta } from '../types/embed';
import { UniverInstanceType } from '@univerjs/core';
export declare function createDefaultEmbedCapabilities(): IEmbedCapability[];
export declare function createDefaultEmbedSourceMeta(capability: IEmbedCapability): IEmbedSourceMeta;
export declare class EmbedCapabilityRegistryService {
    private readonly _capabilities;
    register(capability: IEmbedCapability): void;
    registerMany(capabilities: readonly IEmbedCapability[]): void;
    getCapability(params: {
        hostType: UniverInstanceType;
        childType: UniverInstanceType;
        entry: EmbedHostEntry;
    }): IEmbedCapability | undefined;
    list(): IEmbedCapability[];
    private _key;
}
export declare function registerEmbedCapabilities(injector: Pick<Injector, 'get' | 'has'>, capabilities: readonly IEmbedCapability[]): void;
export declare function flushPendingEmbedCapabilities(injector: Pick<Injector, 'get' | 'has'>): void;
