import type { ICommand } from '@univerjs/core';
import type { ISlidePageElement } from '../../slide.type';
import { PageTypeEnum } from '../../slide.enum';
export interface IAddSlideElementCommandParams {
    unitId: string;
    subUnitId: string;
    element: ISlidePageElement;
    nameBase?: string;
    sourcePageType?: PageTypeEnum;
    insertIndex?: number;
    focus?: boolean;
}
export declare const AddSlideElementCommand: ICommand<IAddSlideElementCommandParams>;
