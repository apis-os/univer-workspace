import type { ICxnShapeData } from '@univerjs-pro/engine-shape';
import type { ISlideConnectorElement } from '@univerjs-pro/slides';
import { PageElementTypeEnum } from '@univerjs-pro/slides';
import { SlideDrawingBase } from './slide-drawing-base';
/**
 * Runtime drawing wrapper for connector elements ({@link ISlideConnectorElement}).
 *
 * Connectors are a specialised shape (`<p:cxnSp>` in OOXML) that carry optional
 * start/end attachment relations, bend points, and arrow decorations on top of
 * the base {@link IBasicShapeData} fields.
 */
export declare class SlideConnectorDrawing extends SlideDrawingBase<ISlideConnectorElement> {
    readonly elementType = PageElementTypeEnum.Connector;
    getConnectorData(): ICxnShapeData;
    updateConnectorData(changes: Partial<ICxnShapeData>): void;
}
