import type { IGroupBaseBound, IMutationInfo, UniverInstanceType } from '@univerjs/core';
import type { EmbedHostEntry, IEmbedDescriptor } from './embed';
import type { IEmbedHostAnchorRecord } from './host-anchor';
import type { EmbedHostContext } from './host-context';
export interface IEmbedHostAnchorContext {
    embedId: string;
    hostUnitId: string;
    hostType: UniverInstanceType;
    entry: EmbedHostEntry;
    requestedAnchorId?: string;
    hostContext?: Record<string, unknown>;
    descriptor?: IEmbedDescriptor;
}
export interface IEmbedHostMutationPlan {
    redoMutations: IMutationInfo[];
    undoMutations: IMutationInfo[];
}
export interface IEmbedHostAnchorMutationPlan extends IEmbedHostMutationPlan {
    hostAnchorId: string;
}
export type IEmbedHostAnchorRemoveMutationPlan = IEmbedHostMutationPlan;
interface IEmbedHostAdapterContributionBase {
    hostType: UniverInstanceType;
    entry: EmbedHostEntry;
    removeAnchor?: (context: IEmbedHostAnchorContext & {
        hostAnchorId: string;
    }) => void;
    removeAnchorPlan?: (context: IEmbedHostAnchorContext & {
        hostAnchorId: string;
    }) => IEmbedHostAnchorRemoveMutationPlan;
    afterCreateAnchor?: (context: IEmbedHostAnchorContext & {
        hostAnchorId: string;
        descriptor: IEmbedDescriptor;
    }) => void;
    afterRemoveAnchor?: (context: IEmbedHostAnchorContext & {
        hostAnchorId: string;
        descriptor?: IEmbedDescriptor;
    }) => void;
    activateAnchor?: (context: IEmbedHostAnchorContext & {
        hostAnchorId: string;
        descriptor: IEmbedDescriptor;
    }) => void;
    restoreAnchor?: (context: IEmbedHostAnchorContext & {
        hostAnchorId: string;
        descriptor: IEmbedDescriptor;
    }) => IEmbedHostAnchorRecord;
    readContext?: (context: IEmbedHostAnchorContext & {
        hostAnchorId: string;
        descriptor: IEmbedDescriptor;
    }) => EmbedHostContext;
    createBoundsUpdatePlan?: (context: IEmbedHostAnchorContext & {
        hostAnchorId: string;
        descriptor: IEmbedDescriptor;
        bounds: IGroupBaseBound;
    }) => IEmbedHostMutationPlan;
}
export type IEmbedHostAdapterContribution = IEmbedHostAdapterContributionBase & ({
    createAnchorPlan: (context: IEmbedHostAnchorContext) => IEmbedHostAnchorMutationPlan;
    createAnchor?: (context: IEmbedHostAnchorContext) => string;
} | {
    createAnchor: (context: IEmbedHostAnchorContext) => string;
    createAnchorPlan?: (context: IEmbedHostAnchorContext) => IEmbedHostAnchorMutationPlan;
});
export {};
