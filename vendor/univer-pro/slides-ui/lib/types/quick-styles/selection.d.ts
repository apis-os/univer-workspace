import type { ISlideDrawing, ISlideDrawingService } from '@univerjs-pro/slides';
import type { ISlideDrawingStateService } from '../services/slide-drawing-state.service';
import { getShapeQuickStylePresets } from '@univerjs-pro/shape-editor';
type ShapeQuickStyleType = Parameters<typeof getShapeQuickStylePresets>[0];
export interface ISlideQuickStyleSelection {
    type: ShapeQuickStyleType;
    drawings: ISlideDrawing[];
}
export declare function getSlideQuickStyleType(drawing: ISlideDrawing): ShapeQuickStyleType | null;
export declare function resolveFocusedSlideDrawings(slideDrawingService: ISlideDrawingService): ISlideDrawing[];
export declare function resolveSelectedSlideDrawings(slideDrawingService: ISlideDrawingService, slideDrawingStateService: ISlideDrawingStateService): ISlideDrawing[];
export declare function resolveSlideQuickStyleSelection(drawings: ISlideDrawing[]): ISlideQuickStyleSelection | null;
export declare function resolveActiveSlideQuickStylePresetId(selection: ISlideQuickStyleSelection | null): string | null;
export {};
