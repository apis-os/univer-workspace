import type { ICommand } from '@univerjs/core';
import type { ISlideBackgroundData, ISlideMasterPage } from '../../slide.type';
export interface IUpdateSlidePageBackgroundPatch {
    unitId: string;
    pageId: string;
    background?: ISlideBackgroundData;
    showMasterSp?: boolean;
}
export interface IUpdateSlidePageBackgroundCommandParams {
    patches: IUpdateSlidePageBackgroundPatch[];
    ensureMasterPage?: ISlideMasterPage;
}
export declare const UpdateSlidePageBackgroundCommand: ICommand<IUpdateSlidePageBackgroundCommandParams>;
