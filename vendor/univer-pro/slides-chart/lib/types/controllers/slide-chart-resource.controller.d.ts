import { Disposable, IResourceManagerService } from '@univerjs/core';
import { SlideChartModelService } from '../services/slide-chart-model.service';
import { SlideChartResourceService } from '../services/slide-chart-resource.service';
export declare class SlideChartResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _resourceService;
    private readonly _modelService;
    private _resourceDisposable;
    constructor(_resourceManagerService: IResourceManagerService, _resourceService: SlideChartResourceService, _modelService: SlideChartModelService);
    private _initResource;
}
