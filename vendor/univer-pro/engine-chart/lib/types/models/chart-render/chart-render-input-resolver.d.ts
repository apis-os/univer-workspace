import type { ChartDirection, IChartRenderModelImageExportInput } from '../../types';
import type { ChartModel } from '../chart-model/chart-model';
export interface IChartRenderInputRuntime {
    chartId: string;
    model: ChartModel;
}
export interface IResolveChartRenderModelImageExportInputParams {
    runtime: IChartRenderInputRuntime;
    direction?: ChartDirection;
    width: number;
    height: number;
}
export declare function resolveChartRenderModelImageExportInput(params: IResolveChartRenderModelImageExportInputParams): IChartRenderModelImageExportInput | null;
