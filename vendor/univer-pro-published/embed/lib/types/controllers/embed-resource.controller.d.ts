import { Disposable, IResourceManagerService } from '@univerjs/core';
import { EmbedModelService } from '../services/embed-model.service';
import { EmbedUnitLeaseService } from '../services/embed-unit-lease.service';
import { IReferencedUnitManagerService } from '../types/referenced-unit';
export declare class EmbedResourceController extends Disposable {
    private readonly _resourceManagerService;
    private readonly _referencedUnitManagerService;
    private readonly _embedModelService;
    private readonly _unitLeaseService;
    constructor(_resourceManagerService: IResourceManagerService, _referencedUnitManagerService: IReferencedUnitManagerService, _embedModelService: EmbedModelService, _unitLeaseService: EmbedUnitLeaseService);
    private _initResource;
    private _unloadUnit;
}
