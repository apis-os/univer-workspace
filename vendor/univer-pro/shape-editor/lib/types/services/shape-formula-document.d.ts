import type { IDocumentData } from '@univerjs/core';
import type { IShapeFormulaPresentation } from './shape-formula-presentation';
/** Builds transient render data without changing the shape's persisted rich text. */
export declare function createShapeFormulaDocument(documentData: IDocumentData, presentation: IShapeFormulaPresentation | undefined): IDocumentData;
