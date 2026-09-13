import type { IMutation } from '@univerjs/core';
import type { ISlideDrawing } from '../../services/slide-drawing.service';
export interface IInsertDrawingObjectMutationParams {
    unitId: string;
    subUnitId: string;
    drawings: ISlideDrawing[];
    insertIndex?: number;
}
export declare const InsertDrawingObjectMutation: IMutation<IInsertDrawingObjectMutationParams>;
