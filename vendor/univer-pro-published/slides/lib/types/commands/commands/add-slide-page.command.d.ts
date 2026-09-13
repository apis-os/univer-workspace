import type { ICommand } from '@univerjs/core';
import type { ISlidePage } from '../../slide.type';
export interface IAddSlidePageCommandParams {
    unitId: string;
    slide: ISlidePage;
    insertIndex?: number;
    setActive?: boolean;
}
export declare const AddSlidePageCommand: ICommand<IAddSlidePageCommandParams>;
