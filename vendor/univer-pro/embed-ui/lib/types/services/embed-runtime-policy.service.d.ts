import type { IEmbedDescriptor } from '@univerjs-pro/embed';
import type { IDisposable } from '@univerjs/core';
export interface IEmbedRuntimeAncestor {
    hostUnitId: string;
    embedId: string;
    childUnitId: string;
}
export interface IEmbedRuntimeMountDecision {
    allowed: boolean;
    reason?: 'max-depth' | 'cycle';
    ancestry: readonly IEmbedRuntimeAncestor[];
}
export interface IEmbedRuntimePolicyConfig {
    maxDepth?: number;
}
type EmbedRuntimeDescriptor = Pick<IEmbedDescriptor, 'hostUnitId' | 'embedId'> & {
    childUnitId: string;
};
export declare class EmbedRuntimePolicyService {
    private readonly _childUnitAncestry;
    private readonly _maxDepth;
    constructor(config?: IEmbedRuntimePolicyConfig);
    canMount(descriptor: EmbedRuntimeDescriptor): IEmbedRuntimeMountDecision;
    registerMountedRuntime(descriptor: EmbedRuntimeDescriptor): IDisposable;
    getAncestryForHostUnit(hostUnitId: string): readonly IEmbedRuntimeAncestor[];
    getParentEmbedId(hostUnitId: string): string | undefined;
}
export {};
