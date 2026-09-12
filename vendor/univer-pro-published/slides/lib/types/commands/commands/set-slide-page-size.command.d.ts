import type { ICommand } from '@univerjs/core';
import type { ISlidePageSize } from '../../slide.type';
export interface ISetSlidePageSizeCommandParams {
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
     * Page size input. Provide width/height for explicit dimensions, preset for a canonical
     * preset size, or one dimension plus preset to derive the missing dimension.
     * If omitted for a specific page, it clears the custom page size and falls back to the
     * presentation default.
     */
    pageSize?: Partial<ISlidePageSize>;
}
export declare const SetSlidePageSizeCommand: ICommand<ISetSlidePageSizeCommandParams>;
