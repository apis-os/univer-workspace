import type { IChartModelBinding, IChartResource, IChartResourceDataSource, IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import { ChartResourceRuntimeService, IChartDataSourceRuntimeService } from '@univerjs-pro/engine-chart';
import { Injector } from '@univerjs/core';
import { BoardChartResourceService } from './board-chart-resource.service';
export declare class BoardChartModelService extends ChartResourceRuntimeService<IChartResourceDataSource, IChartResourceSnapshot, IChartResource, IChartModelBinding> {
    constructor(resourceService: BoardChartResourceService, injector: Injector, dataSourceRuntimeService: IChartDataSourceRuntimeService);
}
