import type { ISlideTableSnapshot, ISlideTableThemeSnapshot } from '@univerjs-pro/slides-table';
import type { IMutation } from '@univerjs/core';
export interface ISetBoardTableMutationParams {
    unitId: string;
    table: ISlideTableSnapshot;
    theme?: ISlideTableThemeSnapshot;
}
export declare const SetBoardTableMutation: IMutation<ISetBoardTableMutationParams>;
