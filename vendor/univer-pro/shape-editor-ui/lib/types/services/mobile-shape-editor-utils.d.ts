import type { IShapeData, IShapeRef, ShapeHostType } from '@univerjs-pro/engine-shape';
import type { IDocumentData, IDrawingParam } from '@univerjs/core';
export declare function didMobileKeyboardDismiss(wasVisible: boolean, keyboardInset: number): boolean;
export declare function resolveMobileShapeRef(drawing: IDrawingParam | undefined, hostType: ShapeHostType): IShapeRef | null;
export declare function buildMobileShapeTextUpdate(shapeData: IShapeData, documentData: IDocumentData): IShapeData;
export declare function buildMobileShapeFormulaUpdate(shapeData: IShapeData, formula: string): IShapeData | null;
export declare function removeMobileShapeFormulaBinding(shapeData: IShapeData): IShapeData;
export declare function insertMobileEditorText(source: string, start: number, end: number, value: string): {
    cursor: number;
    value: string;
};
