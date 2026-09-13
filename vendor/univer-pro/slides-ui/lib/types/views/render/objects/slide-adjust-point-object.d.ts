import type { IObjectFullState } from '@univerjs/engine-render';
import { Rect } from '@univerjs/engine-render';
/** Size of the diamond handle in px (half-edge). */
export declare const SLIDE_ADJ_HANDLE_SIZE = 4;
export interface ISlideAdjustPointObjectProps extends IObjectFullState {
    /** Name of the adjust variable this handle controls (e.g. "adj", "adj1"). */
    adjName: string;
}
/**
 * Small diamond-shaped handle for a shape's geometric adjustment point.
 *
 * Rendered as a rotated Rect so no custom `_draw` is required.
 */
export declare class SlideAdjustPointObject extends Rect {
    readonly adjName: string;
    constructor(key: string, props: ISlideAdjustPointObjectProps);
}
