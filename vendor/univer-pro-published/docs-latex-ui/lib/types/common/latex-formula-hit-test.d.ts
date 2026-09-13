import type { ICustomRange } from '@univerjs/core';
/**
 * Keep the renderer and document layout on the same font-relative geometry.
 * At the default 14pt Docs font this resolves to exactly 2px on each side.
 */
export declare const DOCS_LATEX_FORMULA_HORIZONTAL_INSET_EM: number;
export interface IDocsLatexFormulaHitRect {
    bottom: number;
    left: number;
    range: ICustomRange;
    right: number;
    segmentId?: string;
    segmentPageIndex?: number;
    top: number;
}
export interface IDocsLatexFormulaChromeRect {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
export interface IDocsLatexFormulaDisplayBox {
    depth: number;
    height: number;
    width: number;
}
export interface IDocsLatexFormulaPaintPoint {
    baselineX: number;
    baselineY: number;
    fontSize: number;
}
export declare function getDocsLatexFormulaLayoutWidthEm(displayBox: IDocsLatexFormulaDisplayBox): number;
export declare function getDocsLatexFormulaHorizontalInset(fontSize: number): number;
export declare function createDocsLatexFormulaContentPaintPoint(paintPoint: IDocsLatexFormulaPaintPoint): IDocsLatexFormulaPaintPoint;
export declare function createDocsLatexFormulaHitRect(range: ICustomRange, displayBox: IDocsLatexFormulaDisplayBox, paintPoint: IDocsLatexFormulaPaintPoint, verticalPadding?: number): IDocsLatexFormulaHitRect;
export declare function createDocsLatexFormulaChromeRect(displayBox: IDocsLatexFormulaDisplayBox, paintPoint: IDocsLatexFormulaPaintPoint, verticalInset?: number): IDocsLatexFormulaChromeRect;
export declare function findDocsLatexFormulaHitRect(rects: IDocsLatexFormulaHitRect[], x: number, y: number): IDocsLatexFormulaHitRect | null;
