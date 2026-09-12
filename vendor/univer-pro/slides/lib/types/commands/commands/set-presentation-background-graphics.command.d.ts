import type { ICommand } from '@univerjs/core';
import type { ISlidePresentationBackgroundGraphic } from '../../slide.type';
import type { SlidePresentationBackgroundGraphicsTargetEnum } from '../../utils/presentation-background-graphics';
export interface ISetPresentationBackgroundGraphicsCommandParams {
    unitId: string;
    target?: SlidePresentationBackgroundGraphicsTargetEnum;
    masterPageIds?: string[];
    graphics: ISlidePresentationBackgroundGraphic[];
}
export declare const SetPresentationBackgroundGraphicsCommand: ICommand<ISetPresentationBackgroundGraphicsCommandParams>;
