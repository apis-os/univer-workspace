import type { IMutation } from '@univerjs/core';
import type { ISlidePageSize } from '../../slide.type';
export interface ISetSlidePageSizeMutationParams {
    /**
     * The unitId of the presentation to set page size, it is required.
     */
    unitId: string;
    /**
     * If pageId is undefined, it means to set the default page size of the presentation.
     * Otherwise, it means to set the page size for the specific page, and it will override the default page size.
     */
    pageId: string | undefined;
    /**
     * If pageSize is undefined, it means to clear the custom page size and fallback to default page size.
     * But if want to set the default page size of the presentation, pageSize should not be undefined, it will return false and do nothing.
     */
    pageSize: ISlidePageSize | undefined;
}
export declare const SetSlidePageSizeMutation: IMutation<ISetSlidePageSizeMutationParams>;
