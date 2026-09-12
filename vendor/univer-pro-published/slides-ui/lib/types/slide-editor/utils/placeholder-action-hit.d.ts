import type { ISlideDrawing } from '@univerjs-pro/slides';
import { Vector2 } from '@univerjs/engine-render';
export interface ISlidePlaceholderActionHitTarget {
    resolveIconKeyByCoord(coord: Vector2): string | null;
}
export interface ISlidePlaceholderActionPointerEvent {
    offsetX: number;
    offsetY: number;
    button?: number;
}
export interface ISlidePlaceholderActionPointOptions {
    sceneScale?: number;
    viewportScrollX?: number;
    viewportScrollY?: number;
}
export declare function resolvePlaceholderActionPoint(evt: ISlidePlaceholderActionPointerEvent, options?: ISlidePlaceholderActionPointOptions): Vector2;
export declare function resolvePlaceholderActionIconKey(drawing: ISlideDrawing, target: ISlidePlaceholderActionHitTarget, point: Vector2): string | null;
export declare function shouldTriggerPlaceholderActionOnPointerUp(down: ISlidePlaceholderActionPointerEvent | null | undefined, up: ISlidePlaceholderActionPointerEvent | null | undefined, tolerance?: number): boolean;
