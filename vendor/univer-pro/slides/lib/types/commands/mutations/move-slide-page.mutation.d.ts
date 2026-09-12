import type { IMutation } from '@univerjs/core';
export interface IMoveSlidePageMutationParams {
    unitId: string;
    subUnitId: string;
    toIndex: number;
}
export declare const MoveSlidePageMutation: IMutation<IMoveSlidePageMutationParams>;
