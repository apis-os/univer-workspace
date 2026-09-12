import type { ChartRuntimeStyle, ChartStyle, EChartRenderSpecOperator, IChartConfig, IChartPlotArea } from '../../../../types';
export interface IResolvedCartesianGrid {
    left: number;
    right: number;
    top: number;
    bottom: number;
    containLabel: boolean;
}
export declare function resolveAutomaticCartesianGrid(style: ChartRuntimeStyle, config: IChartConfig): IResolvedCartesianGrid;
/** Returns authored automatic geometry as a stable manual-editing seed. */
export declare function resolveChartPlotAreaForEditing(style: ChartStyle, config: IChartConfig): IChartPlotArea;
export declare const gridStyleOperator: EChartRenderSpecOperator;
