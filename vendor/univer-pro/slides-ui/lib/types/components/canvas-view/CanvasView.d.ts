import type { CSSProperties } from 'react';
export interface ISlideRulerViewState {
    width: number;
    height: number;
    originX: number;
    originY: number;
    pageScaleX: number;
    pageScaleY: number;
    pageLeft: number;
    pageTop: number;
    pageWidth: number;
    pageHeight: number;
    sceneWidth?: number;
    sceneHeight?: number;
    sceneScaleX?: number;
    sceneScaleY?: number;
    viewportScrollX?: number;
    viewportScrollY?: number;
    canvasOffsetLeft?: number;
    canvasOffsetTop?: number;
    pageSceneLeft?: number;
    pageSceneTop?: number;
    pageSceneWidth?: number;
    pageSceneHeight?: number;
    horizontalMajorStep: number;
    verticalMajorStep: number;
}
interface ISlidePageRectLike {
    left?: number;
    top?: number;
    width?: number;
    height?: number;
    onTransformChange$?: {
        subscribeEvent: (listener: () => void) => {
            unsubscribe: () => void;
        };
    };
}
interface ISlideRulerRenderLike {
    engine: {
        mount: (container: HTMLDivElement) => void;
        resize: () => void;
        getCanvasElement?: () => HTMLCanvasElement | undefined;
    };
    components?: {
        forEach: (callback: (component: {
            makeForceDirty?: (dirty: boolean) => void;
            makeDirty?: (dirty?: boolean) => void;
        }) => void) => void;
    };
    mainComponent?: {
        makeDirty?: (dirty?: boolean) => void;
    } | null | void;
    scene?: {
        makeDirty?: (dirty?: boolean) => void;
        render?: () => void;
    };
}
export interface ISlideRulerCursorState {
    x: number;
    y: number;
}
export declare function resolveSlideRulerCursorPosition(rect: Pick<DOMRect, 'left' | 'top'>, clientX: number, clientY: number): ISlideRulerCursorState;
export declare function createSlideRulerRefreshScheduler(refresh: () => void, requestFrame?: (callback: FrameRequestCallback) => number, cancelFrame?: (handle: number) => void): {
    schedule: () => void;
    dispose: () => void;
};
export declare function createSlideRulerLayoutRefreshHandler(options: {
    getRender: () => ISlideRulerRenderLike | null | undefined;
    getContainer: () => HTMLDivElement | null | undefined;
    scheduleRefresh: () => void;
}): () => void;
export declare function attachSlideRenderToCanvasHost(render: ISlideRulerRenderLike, container: HTMLDivElement): void;
export declare function refreshSlideRenderAfterAttach(render: ISlideRulerRenderLike): void;
export declare function subscribeSlideRulerPageRectTransform(pageRect: Pick<ISlidePageRectLike, 'onTransformChange$'> | null | undefined, listener: () => void): (() => void) | null;
export declare function getSlideCanvasHostStyle(_rulerVisible?: boolean): CSSProperties;
export declare const SLIDE_CANVAS_HOST_STYLE: CSSProperties;
export declare function shouldCaptureSlideWheelZoom(target: EventTarget | null): boolean;
export declare function captureSlideCanvasWheelZoom(params: {
    currentRatio: number;
    event: Pick<globalThis.WheelEvent, 'ctrlKey' | 'deltaMode' | 'deltaX' | 'deltaY' | 'metaKey' | 'preventDefault' | 'stopImmediatePropagation'> & {
        wheelDelta?: number;
    };
    onZoomRatio: (zoomRatio: number) => void;
}): boolean;
export declare function shouldStartSlideSpacePanShortcut(params: {
    event: Pick<globalThis.KeyboardEvent, 'altKey' | 'code' | 'ctrlKey' | 'defaultPrevented' | 'key' | 'metaKey' | 'repeat'>;
    root: HTMLElement;
    pointerTarget: EventTarget | null;
    activeElement: Element | null;
    hasScrollableViewport: boolean;
    ownsKeyboard: boolean;
}): boolean;
/**
 * Main canvas container for slide editing.
 *
 * Attaches the engine-render Engine canvas to an inner host `<div>` so the
 * surrounding DOM layer can reserve editor chrome space for the slide rulers.
 */
export interface ISlideCanvasViewProps {
    previewMode?: boolean;
    embedMode?: boolean;
    unitId?: string;
}
export declare function SlideCanvasView(props?: ISlideCanvasViewProps): import("react").JSX.Element;
export {};
