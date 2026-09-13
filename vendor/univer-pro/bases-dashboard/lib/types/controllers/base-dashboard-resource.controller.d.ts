import type { IBaseDashboardResource } from '../types';
import { Disposable, IResourceManagerService } from '@univerjs/core';
import { BaseDashboardResourceService } from '../services/base-dashboard-resource.service';
export declare class BaseDashboardResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _resourceService;
    constructor(_resourceManagerService: IResourceManagerService, _resourceService: BaseDashboardResourceService);
}
export declare function parseDashboardResource(json: string): IBaseDashboardResource;
