import type { IMutation } from '@univerjs/core';
export interface IRemoveSlidePageMutationParams {
    unitId: string;
    subUnitId: string;
    nextActiveSlideId?: string;
}
export declare const RemoveSlidePageMutation: IMutation<IRemoveSlidePageMutationParams>;
