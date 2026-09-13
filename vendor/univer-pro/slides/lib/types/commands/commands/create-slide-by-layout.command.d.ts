import type { ICommand } from '@univerjs/core';
import type { SlidePageLayoutTypeEnum } from '../../slide.enum';
export interface ICreateSlideByLayoutCommandParams {
    unitId: string;
    layoutType: SlidePageLayoutTypeEnum;
    /** Insert position in the slide order. Defaults to after the active slide. */
    insertIndex?: number;
}
/**
 * Data-layer command that:
 * 1. Ensures the document contains the default master / layout pages.
 * 2. Creates a new {@link ISlidePage} bound to the requested layout.
 * 3. Dispatches {@link AddSlidePageMutation} (with undo support).
 */
export declare const CreateSlideByLayoutCommand: ICommand<ICreateSlideByLayoutCommandParams>;
