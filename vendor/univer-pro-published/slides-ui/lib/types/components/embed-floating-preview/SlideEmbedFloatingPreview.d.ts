import type { IRender } from '@univerjs/engine-render';
import type { Observable } from 'rxjs';
export interface ISlideFloatPageFrameSize {
    width: number;
    height: number;
}
export declare function resolveSlideFloatPageFrameSize(containerSize: {
    width: number;
    height: number;
}, aspectRatio?: number): ISlideFloatPageFrameSize;
/**
 * Lightweight slide runtime for embed float blocks.
 *
 * Host chrome owns selection, moving, resizing, and menus. This view only owns
 * the slide page content and the minimum editing overlays needed in stage2.
 */
export declare function SlideEmbedFloatingPreview(props?: {
    unitId?: string;
    active$?: Observable<boolean>;
}): import("react").JSX.Element;
export declare function SlideEmbedReadonlyFloatingPreview(props?: {
    unitId?: string;
    render?: IRender;
}): import("react").JSX.Element;
