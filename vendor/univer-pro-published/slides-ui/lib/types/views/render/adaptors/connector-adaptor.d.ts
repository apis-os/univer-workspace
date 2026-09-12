import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { Nullable } from '@univerjs/core';
import type { BaseObject } from '@univerjs/engine-render';
import type { IRenderConvertContext } from '../adaptor';
import { ObjectAdaptor } from '../adaptor';
/**
 * Connector rendering adaptor.
 *
 * Connectors are rendered through engine-shape ShapeModel as a specialized
 * line-shape payload (ICxnShapeData), then hosted by SlideShapeObject.
 */
export declare class ConnectorObjectAdaptor extends ObjectAdaptor {
    zIndex: number;
    check(drawing: ISlideDrawing): boolean;
    convert(drawing: ISlideDrawing, ctx: IRenderConvertContext): Nullable<BaseObject>;
}
