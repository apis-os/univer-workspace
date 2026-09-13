import type { HorizontalAlign, ITransformState } from '@univerjs/core';
import type { CSSProperties, RefObject } from 'react';
import type { IContentLayout } from './shape-text-layout';
export interface IShapeTextEditorSurfaceProps {
    containerRef: RefObject<HTMLDivElement | null>;
    editingContainerStyle?: CSSProperties;
    editorContainerRef: RefObject<HTMLDivElement | null>;
    editorUnitId: string;
    fontSize: number;
    horizontalAlign: HorizontalAlign;
    layout: IContentLayout;
    placeholder: string;
    showPlaceholder: boolean;
    transform: ITransformState;
}
export declare function ShapeTextEditorSurface(props: IShapeTextEditorSurfaceProps): import("react").JSX.Element;
