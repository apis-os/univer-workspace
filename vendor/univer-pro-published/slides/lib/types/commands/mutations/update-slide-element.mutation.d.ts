import type { IShapeFormulaLastValueGuard } from '@univerjs-pro/engine-shape';
import type { IMutation } from '@univerjs/core';
import type { ISlideDrawing } from '../../services/slide-drawing.service';
export interface IUpdateSlideElementMutationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    element: ISlideDrawing['element'];
    transform: ISlideDrawing['transform'];
    isRealtimePreview?: boolean;
    formulaLastValueGuard?: IShapeFormulaLastValueGuard;
}
export declare const UpdateSlideElementMutation: IMutation<IUpdateSlideElementMutationParams>;
