import type { ICustomRange, ITextRangeParam } from '@univerjs/core';
export interface IDocFormulaHitRect {
    bottom: number;
    contentRight: number;
    left: number;
    range: ICustomRange;
    right: number;
    segmentId?: string;
    segmentPage?: number;
    top: number;
}
export declare function findDocFormulaHitRect(rects: readonly IDocFormulaHitRect[], x: number, y: number): IDocFormulaHitRect | null;
export declare function isDocFormulaSelectionFocused(range: Pick<ICustomRange, 'endIndex' | 'startIndex'>, selection: Pick<ITextRangeParam, 'collapsed' | 'endOffset' | 'startOffset'>): boolean;
export declare function isDocFormulaSelectionOverlapping(range: Pick<ICustomRange, 'endIndex' | 'startIndex'>, selection: Pick<ITextRangeParam, 'collapsed' | 'endOffset' | 'startOffset'>): boolean;
export declare function transformDocFormulaPointerOffset(offsetX: number, offsetY: number, scaleX: number, scaleY: number, scrollX?: number, scrollY?: number): {
    x: number;
    y: number;
};
