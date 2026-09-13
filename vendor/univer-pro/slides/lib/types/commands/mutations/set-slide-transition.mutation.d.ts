import type { IMutation } from '@univerjs/core';
import type { ISlideTransition } from '../../slide.type';
export interface ISetSlideTransitionMutationParams {
    unitId: string;
    transitionRecords?: Record<string, ISlideTransition>;
    slideTransitionRefs?: Record<string, string>;
}
export declare const SetSlideTransitionMutation: IMutation<ISetSlideTransitionMutationParams>;
