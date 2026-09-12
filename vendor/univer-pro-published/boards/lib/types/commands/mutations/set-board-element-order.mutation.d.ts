import type { IMutation } from '@univerjs/core';
export interface ISetBoardElementOrderMutationParams {
    unitId: string;
    subUnitId: string;
    elementIds: string[];
}
export declare const SetBoardElementOrderMutation: IMutation<ISetBoardElementOrderMutationParams>;
