import type { ChartStyle, IChartPlotArea } from '../../../../types';
export interface IResolvedChartPlotArea {
    left: number;
    top: number;
    width: number;
    height: number;
}
export declare function isValidChartPlotArea(value: Partial<IChartPlotArea> | undefined): value is IChartPlotArea;
export declare function resolveChartPlotArea(style: ChartStyle): IResolvedChartPlotArea | undefined;
export declare function powerPointPieAngleToECharts(value: number): number;
