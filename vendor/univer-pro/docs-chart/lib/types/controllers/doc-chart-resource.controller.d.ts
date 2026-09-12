import { ChartResourceRepository } from '@univerjs-pro/engine-chart';
import { Disposable, IResourceManagerService } from '@univerjs/core';
import { DocChartModelService } from '../services/doc-chart-model.service';
export declare class DocChartResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _resourceService;
    private readonly _modelService;
    private _resourceDisposable;
    constructor(_resourceManagerService: IResourceManagerService, _resourceService: ChartResourceRepository, _modelService: DocChartModelService);
    private _initResource;
}
