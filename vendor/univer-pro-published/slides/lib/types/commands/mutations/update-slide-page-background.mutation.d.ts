import type { IMutation } from '@univerjs/core';
import type { ISlideBackgroundData } from '../../slide.type';
export interface IUpdateSlidePageBackgroundMutationParams {
    unitId: string;
    pageId: string;
    background?: ISlideBackgroundData;
    showMasterSp?: boolean;
}
export declare const UpdateSlidePageBackgroundMutation: IMutation<IUpdateSlidePageBackgroundMutationParams>;
