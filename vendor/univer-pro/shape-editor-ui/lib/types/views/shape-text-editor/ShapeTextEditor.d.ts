import type { Nullable } from '@univerjs/core';
import type { IShapeTextEditingParams, IShapeTextEditingService, IShapeTextEditorAdapter } from './types';
export { resolveShapeTextEditorBehaviorShapeData, resolveShapeTextEditorWrapStrategy, shouldAllowShapeTextEditorHostSizeShrink, shouldAutoFitShapeTextEditorNoWrap, } from './shape-text-behavior';
export interface IShapeTextEditorProps {
    adapter: IShapeTextEditorAdapter;
    containerWidth: number;
    containerHeight: number;
    editingParams: Nullable<IShapeTextEditingParams>;
    editingService: IShapeTextEditingService;
    editorUnitId: string;
    scaleX: number;
    scaleY: number;
    verticalAlignCommandId?: string;
}
export declare const ShapeTextEditor: (props: IShapeTextEditorProps) => import("react").JSX.Element;
