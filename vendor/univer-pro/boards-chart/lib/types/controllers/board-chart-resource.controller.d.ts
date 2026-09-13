import { Disposable, IResourceManagerService } from '@univerjs/core';
import { BoardChartModelService } from '../services/board-chart-model.service';
import { BoardChartResourceService } from '../services/board-chart-resource.service';
export declare class BoardChartResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _resourceService;
    private readonly _modelService;
    private _resourceDisposable;
    constructor(_resourceManagerService: IResourceManagerService, _resourceService: BoardChartResourceService, _modelService: BoardChartModelService);
    private _initResource;
}
