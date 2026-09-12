import type { Nullable } from '@univerjs/core';
import type { Scene } from '@univerjs/engine-render';
import type { ReactNode } from 'react';
import type { IShapeTextEditingParams, IShapeTextEditorPositionOptions } from './types';
import { IRenderManagerService } from '@univerjs/engine-render';
export interface IShapePositionWrapperProps {
    children: ReactNode;
    editingParams: Nullable<IShapeTextEditingParams>;
    positionOptions: IShapeTextEditorPositionOptions;
    onPositionUpdate?: (position: {
        width: number;
        height: number;
        scaleX: number;
        scaleY: number;
    }) => void;
}
interface IShapeObjectLike {
    left: number;
    top: number;
    width: number;
    height: number;
    angle?: number;
    onTransformChange$?: {
        subscribeEvent: (listener: () => void) => {
            unsubscribe: () => void;
        };
    };
}
interface IShapeTextEditorPointerBounds {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export declare function isShapeTextEditorPositionReady(editingParams: Nullable<IShapeTextEditingParams>, position: {
    left: number;
    top: number;
    width?: number;
    height?: number;
    angle?: number;
    scaleX?: number;
    scaleY?: number;
}): boolean;
export declare function isShapeTextEditorPointerInsidePositionBounds(event: Pick<MouseEvent | PointerEvent, 'clientX' | 'clientY'>, rect: IShapeTextEditorPointerBounds): boolean;
export declare function isShapeTextEditorPointerInsideContent(target: EventTarget | null, editorElement: HTMLElement | null): boolean;
export declare function resolveShapeTextEditorPositionTransform(options: {
    editingParams: Nullable<IShapeTextEditingParams>;
    positionOptions: IShapeTextEditorPositionOptions;
    renderUnit: Nullable<ReturnType<IRenderManagerService['getRenderUnitById']>>;
    scene: Nullable<Scene>;
}): Nullable<IShapeObjectLike>;
export declare function resolveShapeTextEditorPositionRoot(editorElement: HTMLElement | null): Element | null;
export declare function resolveEmbeddedShapeTextEditorPositionOffset(canvasElement: Element | null | undefined, positionRoot: Element | null): {
    left: number;
    top: number;
} | null;
/**
 * Position wrapper component that handles shape positioning in DOM.
 * This is the first layer DOM that tracks shape position with scroll.
 */
export declare const ShapeTextPositionWrapper: import("react").MemoExoticComponent<(props: IShapePositionWrapperProps) => import("react").JSX.Element>;
export {};
