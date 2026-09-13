import type { IShapeRect } from '@univerjs-pro/engine-shape';
import type { IDocumentData, Nullable } from '@univerjs/core';
import type { DocumentSkeleton } from '@univerjs/engine-render';
import type { CSSProperties } from 'react';
import type { IShapeTextEditingParams, IShapeTextEditorAdapter, IShapeTextEditorModel } from './types';
import { HorizontalAlign, VerticalAlign } from '@univerjs/core';
export interface IResolveShapeTextVerticalOffsetOptions {
    contentHeight: number;
    verticalAlign?: VerticalAlign;
    viewportHeight: number;
}
export interface IShapeTextDocumentRenderLayout {
    clipHeight: number;
    clipTop: number;
    contentHeight: number;
    contentVerticalOffset: number;
    marginTop: number;
    verticalOffset: number;
}
export interface IResolveShapeTextDocumentRenderLayoutOptions extends IResolveShapeTextVerticalOffsetOptions {
    opticalVerticalOffset?: number;
    verticalOffset?: number;
}
export declare function normalizeShapeTextRect(textRect: IShapeRect, fallbackRect: IShapeRect): IShapeRect;
export declare function isShapeTextOpticalVerticalAlignEnabled(value: unknown): boolean;
export declare function getShapeTextVisibleInkHeight(skeleton: DocumentSkeleton): number | undefined;
export declare function resolveShapeTextVerticalOffset(options: IResolveShapeTextVerticalOffsetOptions): number;
export declare function resolveShapeTextDocumentRenderLayout(options: IResolveShapeTextDocumentRenderLayoutOptions): IShapeTextDocumentRenderLayout;
export declare function getShapeTextContentHeight(skeleton: DocumentSkeleton, fallbackHeight?: number): number;
export declare function getShapeTextOpticalVerticalOffset(skeleton: DocumentSkeleton, targetHeight: number, verticalAlign?: VerticalAlign): number;
export interface IContentLayout {
    documentMarginTop: number;
    editorLeft: number;
    editorTop: number;
    editorWidth: number;
    editorHeight: number;
    editorSurfaceWidth?: number;
}
export declare function resolveShapeTextEditingContentHeight(measuredContentHeight: number, caretHeight?: number): number;
export declare function getShapeTextEditingCaretHeight(activeRange?: {
    getAbsolutePosition(): Nullable<{
        height?: number;
    }>;
}): number | undefined;
export declare function areShapeTextEditorLayoutsEqual(a: IContentLayout, b: IContentLayout): boolean;
interface IShapeTextEditorLayoutOptions {
    actualHeight: number;
    contentWidth?: number;
    scaleX: number;
    scaleY: number;
    textRect: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    verticalAlign: VerticalAlign;
    opticalVerticalOffset?: number;
}
interface IShapeTextEditorLayout {
    documentMarginTop: number;
    editorLeft: number;
    editorTop: number;
    editorWidth: number;
    editorHeight: number;
    pageHeight: number;
}
interface IShapeTextEditorHostHeightOptions {
    hostHeight: number;
    textRect: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    contentHeight: number;
}
interface IShapeTextEditorHostSizeOptions {
    hostWidth: number;
    hostHeight: number;
    textRect: {
        left: number;
        top: number;
        width: number;
        height: number;
    };
    contentWidth: number;
    contentHeight: number;
    allowShrink?: boolean;
}
interface IShapeTextEditorHostSizeChangeOptions {
    nextWidth: number;
    nextHeight: number;
    baselineWidth: number;
    baselineHeight: number;
    tolerance?: number;
}
export declare function resolveShapeTextEditorTextRect(options: {
    shapeModel: Pick<IShapeTextEditorModel, 'getShapeTextRect'>;
    hostRect: IShapeRect;
}): IShapeRect;
export declare function resolveShapeTextEditorRenderScale(options: {
    ancestorScale?: {
        scaleX?: number;
        scaleY?: number;
    };
    canvasClientWidth: number;
    declaredCanvasWidth: number;
    fallbackScaleX: number;
    fallbackScaleY: number;
}): {
    scaleAdjust: number;
    renderScaleX: number;
    renderScaleY: number;
};
export declare function resolveShapeTextEditorEmptyTextBoxMinSize(options: {
    isHorizontal: boolean;
    placeholderWidth: number;
}): {
    width: number;
    height: number;
};
export declare function measureShapeTextEditorPlaceholderWidth(documentData: IDocumentData, placeholder: string): number;
export declare function resolveShapeTextEditorMeasurePageWidth(options: {
    autoFitNoWrap: boolean;
    maxAutoFitWidth?: number;
    textRectWidth: number;
}): number;
export declare function measureShapeTextEditorNoWrapContentWidth(documentData: IDocumentData | null | undefined): number;
export declare function resolveShapeTextEditorRenderedContentWidth(options: {
    actualWidth: number;
    autoFitNoWrap: boolean;
    measuredContentWidth?: number;
    textRectWidth: number;
}): number;
export declare function resolveShapeTextEditorHostContentWidth(options: {
    actualWidth: number;
    allowShrink: boolean;
    autoFitNoWrap: boolean;
    measuredContentWidth?: number;
    renderedContentWidth: number;
}): number;
export declare function resolveShapeTextEditorFinalPageWidth(options: {
    autoFitNoWrap: boolean;
    measurePageWidth?: number;
    renderedContentWidth: number;
    textRectWidth: number;
}): number;
export declare function resolveShapeTextEditorRenderSurfaceWidth(options: {
    autoFitNoWrap: boolean;
    editorWidth: number;
    measurePageWidth: number;
    renderedContentWidth?: number;
    scaleX: number;
}): number;
export declare function hasShapeTextEditorHostSizeChanged(options: IShapeTextEditorHostSizeChangeOptions): boolean;
export declare function resolveShapeTextEditorShouldShrinkHostSize(options: {
    adapter: Pick<IShapeTextEditorAdapter, 'allowHostSizeShrink' | 'updateHostSize'>;
    editingParams: Nullable<IShapeTextEditingParams>;
}): boolean;
export declare function shouldDeferShapeTextEditorHostSizeUpdateDuringEditing(options: {
    adapter: Pick<IShapeTextEditorAdapter, 'deferHostSizeUpdateDuringEditing'>;
    editingParams: Nullable<IShapeTextEditingParams>;
}): boolean;
export declare function resolveShapeTextEditorDocumentVerticalAlign(options: {
    opticalVerticalAlign: boolean;
    verticalAlign: VerticalAlign;
}): VerticalAlign;
export declare function resolveShapeTextEditorLayout(options: IShapeTextEditorLayoutOptions): IShapeTextEditorLayout;
export declare function resolveShapeTextEditorPlaceholderLayout(options: {
    documentMarginTop: number;
    editorLeft: number;
    editorSurfaceWidth?: number;
    editorTop: number;
    editorWidth: number;
    horizontalAlign: HorizontalAlign;
}): {
    left: number;
    textAlign: 'center' | 'left' | 'right';
    top: number;
    width: number;
};
export declare function resolveShapeTextEditorHostHeight(options: IShapeTextEditorHostHeightOptions): number;
export declare function resolveShapeTextEditorHostSize(options: IShapeTextEditorHostSizeOptions): {
    width: number;
    height: number;
};
export declare function resolveShapeTextEditorPhysicalContentSize(options: {
    crossAxisLength: number;
    flowAxis: 'width' | 'height';
    flowAxisLength: number;
}): {
    height: number;
    width: number;
};
export declare function getShapeTextEditorContentStyle(leftOrWidth: number, topOrHeight: number, width?: number, height?: number): CSSProperties;
export declare function applyShapeTextEditorContentLayout(element: HTMLElement | null | undefined, layout: IContentLayout): void;
export declare function applyShapeTextEditorCanvasTransparency(renderer: {
    engine?: {
        getCanvasElement?: () => HTMLElement | null;
    };
} | null | undefined | void): void;
export declare function resetShapeTextEditorDocumentMargins(renderer: {
    mainComponent?: unknown;
    components?: {
        forEach?: (callback: (component: unknown) => void) => void;
    };
} | null | undefined | void): void;
export declare function refreshShapeTextEditorRenderer(renderer: {
    mainComponent?: unknown;
    scene?: unknown;
} | null | undefined | void): void;
export {};
