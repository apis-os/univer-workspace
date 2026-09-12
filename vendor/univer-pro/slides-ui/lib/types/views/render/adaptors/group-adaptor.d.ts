import type { ISlideDrawing } from '@univerjs-pro/slides';
import type { Nullable } from '@univerjs/core';
import type { BaseObject } from '@univerjs/engine-render';
import type { IRenderConvertContext } from '../adaptor';
import { ObjectAdaptor } from '../adaptor';
/**
 * Group rendering adaptor.
 *
 * The actual parent-child relationship is assembled in SlideRenderController
 * after all drawing objects are created.
 */
export declare class GroupObjectAdaptor extends ObjectAdaptor {
    zIndex: number;
    check(drawing: ISlideDrawing): boolean;
    convert(drawing: ISlideDrawing, ctx: IRenderConvertContext): Nullable<BaseObject>;
}
