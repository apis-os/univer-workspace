import type { ICustomRange, IDocumentBody } from '@univerjs/core';
import type { IDocCustomRangeChromeTheme } from '@univerjs/docs-ui';
import type { IDocsLatexFormulaHitRect } from '../common/latex-formula-hit-test';
import type { DocsLatexRenderService } from '../services/ratex-render.service';
export interface IDocsLatexFormulaRenderState {
    clearFormulaHitRects: () => void;
    getBody: () => IDocumentBody | undefined;
    getChromeTheme?: () => IDocCustomRangeChromeTheme;
    getLatex: (range: ICustomRange) => string;
    isHovered?: (rangeId: string) => boolean;
    makeDirty: () => void;
    setFormulaHitRect: (rect: IDocsLatexFormulaHitRect) => void;
    renderService: DocsLatexRenderService;
}
