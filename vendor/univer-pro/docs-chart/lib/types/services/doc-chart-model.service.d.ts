import type { IChartModelBinding, IChartResource, IChartResourceDataSource, IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import { ChartResourceRepository, ChartResourceRuntimeService, IChartDataSourceRuntimeService } from '@univerjs-pro/engine-chart';
import { Injector } from '@univerjs/core';
export declare class DocChartModelService extends ChartResourceRuntimeService<IChartResourceDataSource, IChartResourceSnapshot, IChartResource, IChartModelBinding> {
    constructor(resourceService: ChartResourceRepository, injector: Injector, dataSourceRuntimeService: IChartDataSourceRuntimeService);
}
