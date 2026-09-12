import type { IMutation } from '@univerjs/core';
import type { ISlidePresentationBackgroundGraphic } from '../../slide.type';
export interface ISetPresentationBackgroundGraphicsMutationParams {
    unitId: string;
    masterPageId: string;
    graphics: ISlidePresentationBackgroundGraphic[];
}
export declare const SetPresentationBackgroundGraphicsMutation: IMutation<ISetPresentationBackgroundGraphicsMutationParams>;
