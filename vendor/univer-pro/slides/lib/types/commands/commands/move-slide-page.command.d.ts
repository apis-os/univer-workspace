import type { ICommand } from '@univerjs/core';
export interface IMoveSlidePageCommandParams {
    unitId: string;
    subUnitId: string;
    toIndex: number;
}
export declare const MoveSlidePageCommand: ICommand<IMoveSlidePageCommandParams>;
