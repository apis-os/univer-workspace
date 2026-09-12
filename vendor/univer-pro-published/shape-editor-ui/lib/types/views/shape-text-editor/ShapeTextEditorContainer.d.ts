import type { IShapeTextEditingService, IShapeTextEditorAdapter, IShapeTextEditorPositionOptions } from './types';
interface IContainerSize {
    width: number;
    height: number;
    scaleX: number;
    scaleY: number;
}
export declare function areShapeTextEditorContainerSizesEqual(a: IContainerSize, b: IContainerSize): boolean;
export interface IShapeTextEditorContainerProps {
    adapter: IShapeTextEditorAdapter;
    editorUnitId: string;
    editingService: IShapeTextEditingService;
    positionOptions: IShapeTextEditorPositionOptions;
    verticalAlignCommandId?: string;
}
export declare const ShapeTextEditorContainer: import("react").MemoExoticComponent<(props: IShapeTextEditorContainerProps) => import("react").JSX.Element | null>;
export {};
