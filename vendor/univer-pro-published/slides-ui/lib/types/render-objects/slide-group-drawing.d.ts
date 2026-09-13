import type { ISlideGroupElement } from '@univerjs-pro/slides';
import { PageElementTypeEnum } from '@univerjs-pro/slides';
import { SlideDrawingBase } from './slide-drawing-base';
/**
 * Runtime drawing wrapper for group elements ({@link ISlideGroupElement}).
 *
 * A group is a logical container — it only stores the ordered list of child
 * element IDs.  The {@link SlidePage} (or renderer) is responsible for resolving
 * IDs to concrete {@link SlideDrawingBase} instances.
 *
 * NOTE: Group rendering / interaction will be reimplemented in a dedicated layer.
 */
export declare class SlideGroupDrawing extends SlideDrawingBase<ISlideGroupElement> {
    readonly elementType = PageElementTypeEnum.Group;
    /** Ordered list of child element IDs belonging to this group. */
    getChildIds(): string[];
    setChildIds(children: string[]): void;
}
