import type { ChartDataSourceValue, IChartResourceSnapshot, IResourceRefChartDataSourceReference } from '@univerjs-pro/engine-chart';
import type { ISlideChartElement } from '@univerjs-pro/slides';
import type { ICommand } from '@univerjs/core';
export type IInsertSlideChartSnapshot = Required<Pick<IChartResourceSnapshot, 'chartType'>> & Partial<Omit<IChartResourceSnapshot, 'chartType'>>;
export type IInsertSlideChartDataSource = {
    id?: string;
    name?: string;
    values?: ChartDataSourceValue[][];
    source?: never;
} | {
    id?: string;
    name?: string;
    source: IResourceRefChartDataSourceReference;
    values?: never;
};
export interface IInsertSlideChartCommandParams {
    unitId: string;
    subUnitId: string;
    chart: IInsertSlideChartSnapshot;
    dataSource?: IInsertSlideChartDataSource;
    element?: Partial<ISlideChartElement>;
    replaceElementId?: string;
    insertIndex?: number;
    focus?: boolean;
}
export declare const InsertSlideChartCommand: ICommand<IInsertSlideChartCommandParams>;
