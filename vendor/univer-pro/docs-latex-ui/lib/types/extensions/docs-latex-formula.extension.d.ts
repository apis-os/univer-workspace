import type { IScale } from '@univerjs/core';
import type { IDocumentSkeletonGlyph, UniverRenderingContext } from '@univerjs/engine-render';
import type { IDocsLatexFormulaRenderState } from './docs-latex-formula-runtime';
import { ComponentExtension } from '@univerjs/engine-render';
export declare class DocsLatexFormulaExtension extends ComponentExtension<IDocumentSkeletonGlyph, 0, unknown> {
    private readonly _state;
    uKey: string;
    type: 0;
    Z_INDEX: number;
    private readonly _paintStates;
    constructor(_state: IDocsLatexFormulaRenderState);
    draw(ctx: UniverRenderingContext, _parentScale: IScale, glyph: IDocumentSkeletonGlyph): void;
    clearCache(): void;
}
