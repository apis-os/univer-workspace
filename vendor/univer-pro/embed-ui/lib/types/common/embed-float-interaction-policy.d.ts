import type { EmbedFloatingStage, EmbedInteractionFlow } from '../types/embed-ui';
export interface IEmbedFloatInteractionPolicy {
    allowHostBodyDrag: boolean;
    disableLiveHostPointerEvents: boolean;
    passThroughInteractionGate: boolean;
    runtimeOwnsInteraction: boolean;
}
export declare function resolveEmbedFloatInteractionPolicy(params: {
    stage: EmbedFloatingStage;
    interactionFlow: EmbedInteractionFlow;
}): IEmbedFloatInteractionPolicy;
