import type { ChartDataSourceValue, IChartCreateConfig, IChartDataSourceInput, IChartInfo, IChartResourceContext } from '@univerjs-pro/engine-chart';
export interface IBoardChartCreateSpec extends IChartCreateConfig {
    id?: string;
    elementId?: string;
    data: ChartDataSourceValue[][] | {
        values: ChartDataSourceValue[][];
        name?: string;
    };
    dataSource?: IChartDataSourceInput;
    position?: {
        x: number;
        y: number;
    };
    size?: {
        width?: number;
        height?: number;
    };
    parentId?: string;
    laneId?: string;
    insertIndex?: number;
    context?: IChartResourceContext;
}
export interface IBoardChartInfo extends IChartInfo<IChartDataSourceInput> {
    containerId?: string;
    laneId?: string;
    zOrder?: number;
}
