import { ChartTypeBits } from '../enum';
export type ChartStarterCellValue = string | number;
/** Returns fresh starter rows for chart types with specialized table semantics. */
export declare function createChartStarterRows(chartType: ChartTypeBits): ChartStarterCellValue[][] | undefined;
