import type { ICommand } from '@univerjs/core';
export interface ISetActiveSlideCommandParams {
    unitId: string;
    subUnitId: string;
}
export declare const SetActiveSlideCommand: ICommand<ISetActiveSlideCommandParams>;
