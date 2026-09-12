import type { IChartDataSourceInput, IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import type { ICommand, ITextRangeParam } from '@univerjs/core';
import type { IDocChartDrawing } from '../../types';
export type IInsertDocChartSnapshot = Required<Pick<IChartResourceSnapshot, 'chartType'>> & Partial<Omit<IChartResourceSnapshot, 'chartType' | 'dataSourceId'>>;
export interface IInsertDocChartCommandParams {
    unitId: string;
    chart: IInsertDocChartSnapshot;
    dataSource?: IChartDataSourceInput & {
        id?: string;
        name?: string;
    };
    drawing?: Partial<IDocChartDrawing>;
    textRange?: ITextRangeParam;
    width?: number;
    height?: number;
    position?: {
        x: number;
        y: number;
    };
    focus?: boolean;
}
export interface IInsertDocChartCommandResult {
    chartId: string;
    dataSourceId: string;
    drawingId: string;
}
export declare const InsertDocChartCommand: ICommand<IInsertDocChartCommandParams, IInsertDocChartCommandResult | false>;
