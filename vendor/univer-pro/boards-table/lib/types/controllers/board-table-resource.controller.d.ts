import { SlideTableModelService, SlideTableResourceService } from '@univerjs-pro/slides-table';
import { Disposable, IResourceManagerService } from '@univerjs/core';
export declare class BoardTableResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _resourceService;
    private readonly _modelService;
    private _resourceDisposable;
    constructor(_resourceManagerService: IResourceManagerService, _resourceService: SlideTableResourceService, _modelService: SlideTableModelService);
    private _initResource;
}
