import type { IMutation } from '@univerjs/core';
export interface IRemoveBoardElementOnlyMutationParams {
    unitId: string;
    subUnitId: string;
    elementId: string;
    allowLockedParent?: boolean;
}
export declare const RemoveBoardElementOnlyMutation: IMutation<IRemoveBoardElementOnlyMutationParams>;
