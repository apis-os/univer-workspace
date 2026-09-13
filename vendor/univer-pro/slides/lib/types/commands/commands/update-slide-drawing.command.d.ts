import type { ICommand } from '@univerjs/core';
import type { ISlideDrawing } from '../../services/slide-drawing.service';
export interface IUpdateSlideDrawingPatch {
    unitId: string;
    subUnitId: string;
    drawingId: string;
    element?: ISlideDrawing['element'];
    transform?: ISlideDrawing['transform'];
}
export interface IUpdateSlideDrawingCommandParams {
    patches: IUpdateSlideDrawingPatch[];
    preserveConnectorRelations?: boolean;
}
export declare const UpdateSlideDrawingCommand: ICommand<IUpdateSlideDrawingCommandParams>;
