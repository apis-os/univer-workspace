import type { IMutation } from '@univerjs/core';
import type { BoardContainerKind } from '../../board.type';
import { BoardElementType } from '../../board.type';
export interface IRemoveBoardElementMutationParams {
    unitId: string;
    subUnitId: string;
    elementId: string;
    elementType?: BoardElementType;
    containerKind?: BoardContainerKind;
    allowLockedParent?: boolean;
    allowLockedTarget?: boolean;
}
export declare const RemoveBoardElementMutation: IMutation<IRemoveBoardElementMutationParams>;
