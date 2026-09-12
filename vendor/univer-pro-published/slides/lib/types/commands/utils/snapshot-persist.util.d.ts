import type { SlideModel } from '../../models/slide-model';
import type { ISlideDrawing } from '../../services/slide-drawing.service';
import type { ISlidePageElement } from '../../slide.type';
export declare function persistAddDrawingToSnapshot(slideModel: SlideModel, drawing: ISlideDrawing, insertIndex?: number): boolean;
export declare function persistUpdateDrawingToSnapshot(slideModel: SlideModel, drawing: ISlideDrawing, element: ISlidePageElement, transform: ISlideDrawing['transform']): boolean;
export declare function persistRemoveDrawingFromSnapshot(slideModel: SlideModel, drawing: ISlideDrawing): boolean;
