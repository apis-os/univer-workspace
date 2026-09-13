import type { IChartModelBinding, IChartResource, IChartResourceDataSource, IChartResourceSnapshot } from '@univerjs-pro/engine-chart';
import { ChartResourceRuntimeService, IChartDataSourceRuntimeService } from '@univerjs-pro/engine-chart';
import { Injector } from '@univerjs/core';
import { SlideChartResourceService } from './slide-chart-resource.service';
export declare class SlideChartModelService extends ChartResourceRuntimeService<IChartResourceDataSource, IChartResourceSnapshot, IChartResource> {
    private readonly _chartDataUpdated$;
    readonly chartDataUpdated$: import("rxjs").Observable<string>;
    constructor(resourceService: SlideChartResourceService, injector: Injector, dataSourceRuntimeService: IChartDataSourceRuntimeService);
    dispose(): void;
    protected _beforeRuntimeRefresh(runtime: IChartModelBinding): void;
}
