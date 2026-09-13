import type { ChartStyle, PieSecondaryPlotType as PieSecondaryPlotTypeValue } from '@univerjs-pro/engine-chart';
import type { ChartInlineCellValue } from '../components/ChartInlineTableEditor';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
export type ChartTypeOptionId = string;
export interface IChartCreationIntent {
    chartType: ChartTypeBits;
    pieSecondaryPlotType?: PieSecondaryPlotTypeValue;
}
export declare enum InlineChartCreationIssueCode {
    UnknownOption = "unknownOption",
    EmptyData = "emptyData",
    InvalidCandlestickData = "invalidCandlestickData"
}
export interface IInlineChartCreationIssue {
    code: InlineChartCreationIssueCode;
}
export type InlineChartDataPreparationResult<T extends ChartInlineCellValue = ChartInlineCellValue> = {
    ok: true;
    values: T[][];
} | {
    ok: false;
    issue: IInlineChartCreationIssue;
};
export interface IInlineChartCreationInput<T extends ChartInlineCellValue = ChartInlineCellValue> {
    optionId: ChartTypeOptionId;
    values: T[][];
}
export interface IInlineChartCreationPlan<T extends ChartInlineCellValue = ChartInlineCellValue> {
    chartType: ChartTypeBits;
    style?: ChartStyle;
    values: T[][];
}
export type InlineChartCreationResult<T extends ChartInlineCellValue = ChartInlineCellValue> = {
    ok: true;
    plan: IInlineChartCreationPlan<T>;
} | {
    ok: false;
    issue: IInlineChartCreationIssue;
};
export declare function resolveChartCreationIntent(optionId: ChartTypeOptionId): IChartCreationIntent | undefined;
export declare function tryPrepareInlineChartData<T extends ChartInlineCellValue>(chartType: ChartTypeBits, values: T[][]): InlineChartDataPreparationResult<T>;
export declare function tryBuildInlineChartCreationPlan<T extends ChartInlineCellValue>(input: IInlineChartCreationInput<T>): InlineChartCreationResult<T>;
