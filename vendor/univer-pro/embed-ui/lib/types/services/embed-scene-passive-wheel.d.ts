import type { IEmbedPassiveViewportWheelContext } from '../types/embed-ui';
export declare function normalizePassiveWheelDelta(event: WheelEvent, scaleX?: number, scaleY?: number): {
    offsetX: number;
    offsetY: number;
};
export declare function scrollSceneViewportPassive(context: IEmbedPassiveViewportWheelContext, viewport: {
    viewportScrollX?: number;
    viewportScrollY?: number;
    scrollToViewportPos?: (position: Partial<{
        viewportScrollX: number;
        viewportScrollY: number;
    }>) => unknown;
    scrollByViewportDeltaVal?: (delta: {
        viewportScrollX: number;
        viewportScrollY: number;
    }) => unknown;
} | null | undefined, scene?: {
    scaleX?: number;
    scaleY?: number;
    makeDirty?: (force?: boolean) => void;
}): boolean;
