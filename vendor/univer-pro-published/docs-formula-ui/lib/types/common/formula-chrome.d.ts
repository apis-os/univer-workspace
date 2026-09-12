import type { ITextSelectionStyle } from '@univerjs/engine-render';
import type { IDocFormulaTextMetrics } from '../services/doc-formula-text-render.service';
export declare const DOC_FORMULA_HORIZONTAL_INSET = 2;
export declare const DOC_FORMULA_VERTICAL_INSET = 2;
export declare const DOC_FORMULA_SELECTION_STYLE: ITextSelectionStyle;
export interface IDocFormulaChromeGeometry {
    bottom: number;
    contentRight: number;
    height: number;
    left: number;
    textX: number;
    top: number;
}
export declare function isDocFormulaSelectionStyle(style: ITextSelectionStyle | undefined): boolean;
export declare function getDocFormulaChromeGeometry(originX: number, baselineY: number, metrics: IDocFormulaTextMetrics): IDocFormulaChromeGeometry;
export declare function getDocFormulaLayoutWidth(metrics: Pick<IDocFormulaTextMetrics, 'width'>): number;
export declare function getDocFormulaGlyphWidthEm(metrics: Pick<IDocFormulaTextMetrics, 'width'>, fontSizePx: number): number;
