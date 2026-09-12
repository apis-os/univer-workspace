import type { IMutation } from '@univerjs/core';
export interface ISetSlideGroupMutationParams {
    unitId: string;
    subUnitId: string;
    drawingIds: string[];
    groupId?: string;
}
/**
 * Group drawings by adding one group element with a stable baseBound.
 * baseBound is persisted in local slide coordinates and should not be
 * mutated by later move/scale/rotate operations.
 */
export declare const SetSlideGroupMutation: IMutation<ISetSlideGroupMutationParams>;
export interface ICancelSlideGroupMutationParams {
    unitId: string;
    subUnitId: string;
    drawingIds: string[];
}
export declare const CancelSlideGroupMutation: IMutation<ICancelSlideGroupMutationParams>;
