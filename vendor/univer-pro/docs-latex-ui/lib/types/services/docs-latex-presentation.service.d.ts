import { Disposable } from '@univerjs/core';
export interface IDocsLatexPresentedRect {
    bottom: number;
    left: number;
    rangeId: string;
    right: number;
    top: number;
}
/** Runtime-only readiness state for consumers that need deterministic document captures. */
export declare class DocsLatexPresentationService extends Disposable {
    private readonly _presentedRanges;
    markPresented(unitId: string, rangeId: string, rect?: Omit<IDocsLatexPresentedRect, 'rangeId'>): void;
    clearUnit(unitId: string): void;
    getPresentedCount(unitId: string): number;
    getPresentedRects(unitId: string): readonly IDocsLatexPresentedRect[];
    dispose(): void;
}
