import type { IMutation } from '@univerjs/core';
import type { ISlidePageElement } from '../../slide.type';
import { PageTypeEnum } from '../../slide.enum';
export interface IAddSlideElementMutationParams {
    unitId: string;
    subUnitId: string;
    element: ISlidePageElement;
    nameBase?: string;
    sourcePageType?: PageTypeEnum;
    insertIndex?: number;
}
export declare const AddSlideElementMutation: IMutation<IAddSlideElementMutationParams>;
