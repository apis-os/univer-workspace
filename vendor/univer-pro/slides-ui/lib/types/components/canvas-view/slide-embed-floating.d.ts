import type { ISlideTextElement, SlideModel } from '@univerjs-pro/slides';
import type { IUniverInstanceService } from '@univerjs/core';
import type { IRenderManagerService } from '@univerjs/engine-render';
import type { ISlideDrawingStateService } from '../../services/slide-drawing-state.service';
import type { ISlideRulerViewState } from './CanvasView';
export interface ISlideEmbedFloatDragHandlePointerDownDetail {
    embedId?: string;
    hostUnitId?: string;
    hostAnchorId?: string;
    pointerId?: number;
    clientX?: number;
    clientY?: number;
    button?: number;
}
export interface ISlideFloatingDragTransform {
    left: number;
    top: number;
}
export interface ISlideFloatingResizeTransform {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface ISlideFloatingResizeHandle {
    id: string;
    x: -1 | 0 | 1;
    y: -1 | 0 | 1;
    cursor: string;
}
export interface ISlideFloatingHostFrame {
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare const SLIDE_FLOATING_HOST_TRANSFORMER_SPACING = 4;
export declare const SLIDE_FLOATING_RESIZE_HANDLE_SIZE = 18;
export declare const SLIDE_FLOATING_RESIZE_HANDLES: ISlideFloatingResizeHandle[];
export declare function shouldStartSlideFloatingHostDrag(detail: ISlideEmbedFloatDragHandlePointerDownDetail | undefined, host: {
    embedId: string;
    hostUnitId: string;
    hostAnchorId: string;
}): detail is ISlideEmbedFloatDragHandlePointerDownDetail & {
    clientX: number;
    clientY: number;
};
export declare function shouldHandleSlideFloatingHostWheel(stage: 'inactive' | 'stage1' | 'stage2', phase: 'capture' | 'bubble', event: Pick<globalThis.WheelEvent, 'ctrlKey' | 'defaultPrevented' | 'metaKey'>): boolean;
export declare function resolveSlideDomWorldTransform(state: {
    scaleX: number;
    scaleY: number;
    scrollX: number;
    scrollY: number;
    offsetLeft?: number;
    offsetTop?: number;
}): string;
export declare function syncSlideFloatingHostSelection(params: {
    stage: 'inactive' | 'stage1' | 'stage2';
    slideModel: SlideModel;
    hostUnitId: string;
    hostAnchorId: string;
    instanceService: IUniverInstanceService;
    drawingStateService: ISlideDrawingStateService;
}): void;
export declare function clearSlideFloatingHostSelection(params: {
    hostUnitId: string;
    subUnitId: string;
    hostAnchorId: string;
    drawingStateService: ISlideDrawingStateService;
}): boolean;
export declare function resolveSlideFloatingDragTransform(state: {
    startClientX: number;
    startClientY: number;
    startLeft: number;
    startTop: number;
    scale: {
        scaleX: number;
        scaleY: number;
    };
}, event: Pick<globalThis.PointerEvent, 'clientX' | 'clientY'>): ISlideFloatingDragTransform;
export declare function resolveSlideFloatingResizeTransform(state: {
    startClientX: number;
    startClientY: number;
    startTransform: ISlideFloatingResizeTransform;
    scale: {
        scaleX: number;
        scaleY: number;
    };
    handle: Pick<ISlideFloatingResizeHandle, 'x' | 'y'>;
}, event: Pick<globalThis.PointerEvent, 'clientX' | 'clientY'>): ISlideFloatingResizeTransform;
export declare function isSlideFloatingHostSelection(snapshot: ReturnType<ISlideDrawingStateService['getSnapshot']>, target: {
    unitId: string;
    subUnitId: string;
    drawingId: string;
}): boolean;
export declare function projectSlideFloatingElementFrame(slideModel: SlideModel, transform: ISlideTextElement['transform'] | undefined, rulerState: ISlideRulerViewState | null): {
    left: number;
    top: number;
    width: number;
    height: number;
};
export declare function resolveSlideFloatingElementScale(slideModel: SlideModel, rulerState: ISlideRulerViewState | null): {
    scaleX: number;
    scaleY: number;
};
export declare function syncSlideFloatingHostRenderObjectTransform(params: {
    renderManagerService: IRenderManagerService;
    slideModel: SlideModel;
    hostUnitId: string;
    subUnitId: string;
    hostAnchorId: string;
    transform: ISlideFloatingResizeTransform;
}): boolean;
export declare function isPointOnSlideFloatingHostTransformerFrame(point: {
    x: number;
    y: number;
}, frame: ISlideFloatingHostFrame): boolean;
