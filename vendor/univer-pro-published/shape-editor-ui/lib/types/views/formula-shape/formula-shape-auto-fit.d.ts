import type { IShapeData, IShapeRect } from '@univerjs-pro/engine-shape';
import type { IDocumentData } from '@univerjs/core';
export interface IFormulaShapeAutoFitSize {
    width: number;
    height: number;
}
/** Resolves the runtime size implied by the standard OOXML shape-text auto-fit properties. */
export declare function resolveFormulaShapeAutoFitSize(options: {
    documentData: IDocumentData | readonly IDocumentData[];
    height: number;
    shapeData: IShapeData;
    textRect: IShapeRect;
    width: number;
    widthBuffer?: number;
}): IFormulaShapeAutoFitSize | null;
