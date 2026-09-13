import type { ICommand } from '@univerjs/core';
import type { IBoardLayoutAnalysisResult } from '../../utils/board-layout-analysis.util';
export interface IAnalyzeBoardModelLayoutCommandParams {
    unitId: string;
    subUnitId: string;
    focusPadding?: number;
}
export declare const AnalyzeBoardModelLayoutCommand: ICommand<IAnalyzeBoardModelLayoutCommandParams, IBoardLayoutAnalysisResult | false>;
