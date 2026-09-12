import type { PieSecondaryPlotType } from '@univerjs-pro/engine-chart';
import type { IChartSelectOption } from '../../components/ChartTypeOptions';
import { ChartTypeBits } from '@univerjs-pro/engine-chart';
interface IChartTypeFieldPieState {
    composite?: {
        enabled?: boolean | null;
        secondaryPlot?: {
            type?: PieSecondaryPlotType | null;
        } | null;
    } | null;
}
export interface IChartTypeFieldState {
    setValue: (value: string) => ChartTypeBits;
    value: string;
}
export declare function useChartTypeState(defaultValue?: ChartTypeBits): [ChartTypeBits, (value: ChartTypeBits) => void];
/** Resolves the selector value from composite Pie configuration to identify Pie-of-Pie and Bar-of-Pie types. */
export declare function resolveChartTypeFieldValue(chartType: ChartTypeBits, pie: IChartTypeFieldPieState | null | undefined, options: readonly IChartSelectOption[]): string;
export declare function useChartTypeFieldState(options: readonly IChartSelectOption[]): IChartTypeFieldState;
export {};
