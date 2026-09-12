import type { ISlideTableCellEditorLayout, ISlideTableCellEditorSession } from '@univerjs-pro/slides-table-ui';
import { Vector2 } from '@univerjs/engine-render';
interface IBoardTableCellEditorLayoutSceneLike {
    getAncestorScale?: () => {
        scaleX?: number;
        scaleY?: number;
    };
    getViewport?: (key: string) => {
        getAbsoluteVector?: (point: Vector2) => {
            x: number;
            y: number;
        } | null | undefined;
    } | null | undefined;
}
export interface IResolveBoardTableCellEditorLayoutOptions {
    canvasOffset?: {
        left: number;
        top: number;
    };
    canvasScale?: number;
    scene: IBoardTableCellEditorLayoutSceneLike;
}
export interface IBoardTableCellEditorVisualRect {
    height: number;
    left: number;
    top: number;
    width: number;
}
export declare function resolveBoardTableCellEditorLayout(state: ISlideTableCellEditorSession | null, options: IResolveBoardTableCellEditorLayoutOptions): ISlideTableCellEditorLayout | null;
export declare function resolveBoardTableCellEditorVisualRect(layout: Pick<ISlideTableCellEditorLayout, 'rect' | 'scale'>): IBoardTableCellEditorVisualRect;
export declare function resolveBoardTableCellEditorCanvasOffset(canvasElement: Element | null | undefined, positionRoot: Element | null | undefined): {
    left: number;
    top: number;
} | undefined;
export {};
