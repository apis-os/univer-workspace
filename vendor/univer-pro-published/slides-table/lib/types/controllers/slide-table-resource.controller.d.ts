import { Disposable, IResourceManagerService } from '@univerjs/core';
import { SlideTableModelService } from '../services/slide-table-model.service';
import { SlideTableResourceService } from '../services/slide-table-resource.service';
export declare class SlideTableResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _resourceService;
    private readonly _modelService;
    private _resourceDisposable;
    constructor(_resourceManagerService: IResourceManagerService, _resourceService: SlideTableResourceService, _modelService: SlideTableModelService);
    private _initResource;
}
