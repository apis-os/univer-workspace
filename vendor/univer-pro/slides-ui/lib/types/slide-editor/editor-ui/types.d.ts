import type { HorizontalAlign, IDocumentData, Nullable, VerticalAlign } from '@univerjs/core';
export interface IEditorUIRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IEditorUIScale {
    scaleX: number;
    scaleY: number;
}
export interface IEditorUIInsets {
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface IEditorUITransform {
    angle?: number;
    flipX?: boolean;
    flipY?: boolean;
}
export interface IEditorUIDocumentLayout {
    rect: IEditorUIRect;
    scale?: Partial<IEditorUIScale>;
    transform?: IEditorUITransform;
    verticalAlign?: VerticalAlign;
    horizontalAlign?: HorizontalAlign;
    isHorizontal?: boolean;
}
export interface IEditorUILayoutMeasurement {
    width: number;
    minHeight: number;
    actualHeight: number;
    contentHeight: number;
    marginTop: number;
}
export interface IEditorUIPointerEvent {
    buttons?: number;
    clientX: number;
    clientY: number;
    stopTextSelectionDrag?: () => void;
}
export interface IEditorUIKeyboardEvent {
    key: string;
    shiftKey?: boolean;
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    preventDefault: () => void;
    stopPropagation: () => void;
}
export interface IEditorUIOpenOptions<TContext = unknown> {
    editorId: string;
    documentData: IDocumentData;
    layout: IEditorUIDocumentLayout;
    context?: TContext;
    appearance?: 'default' | 'table-cell';
    autoFocus?: boolean;
    isSingle?: boolean;
    cellFillColor?: string;
    hideFloatingToolbarAlignment?: boolean;
    onChange?: (documentData: IDocumentData, context: Nullable<TContext>, measurement: IEditorUILayoutMeasurement) => void;
    onCellFillColorChange?: (color: string, context: Nullable<TContext>) => void;
    onComplete?: (documentData: IDocumentData, context: Nullable<TContext>, measurement: IEditorUILayoutMeasurement) => void;
    onCancel?: (context: Nullable<TContext>) => void;
    onPointerDown?: (event: IEditorUIPointerEvent, context: Nullable<TContext>) => boolean | void;
    onPointerMove?: (event: IEditorUIPointerEvent, context: Nullable<TContext>) => void;
    onPointerUp?: (context: Nullable<TContext>) => void;
    onKeyDown?: (event: IEditorUIKeyboardEvent, context: Nullable<TContext>) => boolean | void;
}
export interface IEditorUISession<TContext = unknown> extends IEditorUIOpenOptions<TContext> {
    editorUnitId: string;
    sessionId: number;
    visible: boolean;
    measurement: IEditorUILayoutMeasurement;
}
