import type { IMutation } from '@univerjs/core';
import type { PageElementTypeEnum } from '../../slide.enum';
export interface IRemoveSlideElementMutationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    elementType?: PageElementTypeEnum;
}
export declare const RemoveSlideElementMutation: IMutation<IRemoveSlideElementMutationParams>;
