import type { IBoardElementData, IBoardLayoutAnalysisResult } from '@univerjs-pro/boards';
import type { ICommand } from '@univerjs/core';
export interface IAnalyzeBoardRenderedLayoutCommandParams {
    unitId: string;
    subUnitId: string;
    focusPadding?: number;
}
export declare function analyzeBoardRenderedLayout(unitId: string, elementData: Readonly<Record<string, IBoardElementData>>, elementOrder: readonly string[], resolveRenderObject: (objectKey: string) => unknown, focusPadding?: number): IBoardLayoutAnalysisResult;
export declare const AnalyzeBoardRenderedLayoutCommand: ICommand<IAnalyzeBoardRenderedLayoutCommandParams, IBoardLayoutAnalysisResult | false>;
