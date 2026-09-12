import type { UniverRenderingContext } from '@univerjs/engine-render';
import { Disposable, LocaleService } from '@univerjs/core';
export interface IDocFormulaTextMetrics {
    ascent: number;
    descent: number;
    width: number;
}
export declare class DocFormulaTextRenderService extends Disposable {
    private readonly _localeService;
    private readonly _layouts;
    constructor(_localeService: LocaleService);
    getMetrics(text: string, color: string | undefined, fontSizePx: number): IDocFormulaTextMetrics;
    draw(ctx: UniverRenderingContext, text: string, color: string | undefined, fontSizePx: number, baselineX: number, baselineY: number): IDocFormulaTextMetrics;
    dispose(): void;
    private _getLayout;
}
