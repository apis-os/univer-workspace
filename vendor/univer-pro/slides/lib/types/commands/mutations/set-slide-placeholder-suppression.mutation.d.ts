import type { IMutation } from '@univerjs/core';
export interface ISetSlidePlaceholderSuppressionMutationParams {
    unitId: string;
    subUnitId: string;
    placeholderKey: string;
    suppressed: boolean;
}
export declare const SetSlidePlaceholderSuppressionMutation: IMutation<ISetSlidePlaceholderSuppressionMutationParams>;
