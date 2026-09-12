import type { IMutation } from '@univerjs/core';
import type { ISlideTableSnapshot, ISlideTableThemeSnapshot } from '../../types';
export interface ISetSlideTableMutationParams {
    unitId: string;
    table: ISlideTableSnapshot;
    theme?: ISlideTableThemeSnapshot;
}
export declare const SetSlideTableMutation: IMutation<ISetSlideTableMutationParams>;
