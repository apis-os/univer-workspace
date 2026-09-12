import type { ICommand } from '@univerjs/core';
import { ArrangeTypeEnum } from '@univerjs/core';
export interface ISlideDrawingArrangeOperationParams {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    arrangeType: ArrangeTypeEnum;
}
export declare const SlideDrawingArrangeOperation: ICommand<ISlideDrawingArrangeOperationParams>;
