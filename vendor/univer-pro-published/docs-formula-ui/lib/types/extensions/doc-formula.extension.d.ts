import type { IDocFormulaResult } from '@univerjs-pro/docs-formula';
import type { IDocumentBody, IScale } from '@univerjs/core';
import type { IDocCustomRangeChromeTheme } from '@univerjs/docs-ui';
import type { IDocumentSkeletonGlyph, UniverRenderingContext } from '@univerjs/engine-render';
import type { IDocFormulaHitRect } from '../common/formula-hit-test';
import type { DocFormulaTextRenderService } from '../services/doc-formula-text-render.service';
import { ComponentExtension } from '@univerjs/engine-render';
interface IDocFormulaExtensionState {
    clearHitRects: () => void;
    getBody: () => IDocumentBody | undefined;
    getChromeTheme: () => IDocCustomRangeChromeTheme;
    getResult: (rangeId: string) => IDocFormulaResult | undefined;
    isActive: (rangeId: string) => boolean;
    renderService: DocFormulaTextRenderService;
    setHitRect: (rect: IDocFormulaHitRect) => void;
}
export declare class DocFormulaExtension extends ComponentExtension<IDocumentSkeletonGlyph, 0, unknown> {
    private readonly _state;
    uKey: string;
    type: 0;
    Z_INDEX: number;
    constructor(_state: IDocFormulaExtensionState);
    draw(ctx: UniverRenderingContext, _parentScale: IScale, glyph: IDocumentSkeletonGlyph): void;
    clearCache(): void;
}
export {};
