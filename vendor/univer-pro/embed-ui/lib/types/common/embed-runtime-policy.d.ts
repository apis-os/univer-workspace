import type { IEmbedDescriptor } from '@univerjs-pro/embed';
import type { EmbedFloatingStage, IEmbedFloatingActivation } from '../types/embed-ui';
export type EmbedRuntimeMountGate = 'deferred' | 'ready';
export type EmbedFloatingMenuStage = 'inactive' | 'stage2';
export declare function shouldDeferEmbedRuntimeMount(descriptor: Pick<IEmbedDescriptor, 'hostType' | 'childType' | 'sourceMeta'> | undefined, stage: EmbedFloatingStage): boolean;
export declare function resolveEmbedRuntimeMountGate(descriptor: Pick<IEmbedDescriptor, 'hostType' | 'childType' | 'sourceMeta'> | undefined, stage: EmbedFloatingStage): EmbedRuntimeMountGate;
export declare function resolveEmbedFloatingMenuStage(params: {
    embedId: string;
    active: IEmbedFloatingActivation | null;
    fullscreen?: boolean;
    usesDomFloatingStage: boolean;
    renderScopeActive: boolean;
}): EmbedFloatingMenuStage;
