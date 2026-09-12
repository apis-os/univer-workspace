import type { IMutation } from '@univerjs/core';
import type { IBoardPageElement } from '../../board.type';
export interface IAddBoardElementMutationParams {
    unitId: string;
    subUnitId: string;
    element: IBoardPageElement;
    insertIndex?: number;
    allowLockedParent?: boolean;
    allowEmbedAnchor?: boolean;
}
export declare const AddBoardElementMutation: IMutation<IAddBoardElementMutationParams>;
