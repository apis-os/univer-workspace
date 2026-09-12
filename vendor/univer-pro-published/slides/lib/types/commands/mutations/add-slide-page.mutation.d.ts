import type { IMutation } from '@univerjs/core';
import type { ISlidePage } from '../../slide.type';
export interface IAddSlidePageMutationParams {
    unitId: string;
    slide: ISlidePage;
    insertIndex?: number;
    setActive?: boolean;
}
export declare const AddSlidePageMutation: IMutation<IAddSlidePageMutationParams>;
