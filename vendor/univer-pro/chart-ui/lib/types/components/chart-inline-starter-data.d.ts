import type { ChartInlineCellValue } from './ChartInlineTableEditor';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
/** Resolved labels required by shared inline-host chart starter tables. */
export interface IChartInlineStarterDataLabels {
    candlestickClose: string;
    candlestickHigh: string;
    candlestickLow: string;
    candlestickOpen: string;
    category: string;
    chordSource: string;
    chordTarget: string;
    label: string;
    sunburstHierarchy: string;
    value: string;
    valueField: string;
}
/** Returns the editable column floor for inline data owned by a chart type. */
export declare function getChartInlineTableMinColumns(chartType: ChartTypeBits): number;
/**
 * Creates localized starter data shared by inline-table adapters.
 * Row 0 contains field names (`dimensions`); later rows are observations.
 */
export declare function createChartInlineStarterData(chartType: ChartTypeBits, labels: IChartInlineStarterDataLabels): ChartInlineCellValue[][] | undefined;
