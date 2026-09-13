import type { ICommand } from '@univerjs/core';
import type { ISlideTransition } from '../../slide.type';
export interface ISetSlideTransitionCommandParams {
    unitId: string;
    subUnitIds?: string[];
    applyToAll?: boolean;
    transition?: ISlideTransition;
}
export declare const SetSlideTransitionCommand: ICommand<ISetSlideTransitionCommandParams>;
