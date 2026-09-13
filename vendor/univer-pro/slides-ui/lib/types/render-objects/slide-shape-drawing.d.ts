import type { IBasicShapeData } from '@univerjs-pro/engine-shape';
import type { ISlideShapeElement } from '@univerjs-pro/slides';
import { PageElementTypeEnum } from '@univerjs-pro/slides';
import { SlideDrawingBase } from './slide-drawing-base';
/**
 * Runtime drawing wrapper for shape elements ({@link ISlideShapeElement}).
 *
 * Delegates fill / stroke / geometry to engine-shape via {@link IBasicShapeData}.
 * Use `updateShapeData()` to patch individual shape properties; the change is
 * propagated through `data$` so the renderer can react.
 */
export declare class SlideShapeDrawing extends SlideDrawingBase<ISlideShapeElement> {
    readonly elementType = PageElementTypeEnum.Shape;
    getShapeData(): IBasicShapeData;
    updateShapeData(changes: Partial<IBasicShapeData>): void;
}
