import type { IMutation } from '@univerjs/core';
import type { ISlideMasterPage } from '../../slide.type';
export interface IEnsureSlideMasterPageMutationParams {
    unitId: string;
    masterPage: ISlideMasterPage;
}
export declare const EnsureSlideMasterPageMutation: IMutation<IEnsureSlideMasterPageMutationParams>;
