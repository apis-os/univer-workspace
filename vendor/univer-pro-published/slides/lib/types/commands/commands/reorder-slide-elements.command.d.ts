import type { ICommand } from '@univerjs/core';
export interface IReorderSlideElementsCommandParams {
    unitId: string;
    subUnitId: string;
    drawingIds: string[];
}
export declare const ReorderSlideElementsCommand: ICommand<IReorderSlideElementsCommandParams>;
