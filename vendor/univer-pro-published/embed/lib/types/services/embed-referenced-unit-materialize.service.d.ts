import type { ICreateUnitOptions } from '@univerjs/core';
import type { IEmbedDescriptor } from '../types/embed';
import { IUniverInstanceService } from '@univerjs/core';
import { IReferencedUnitManagerService } from '../types/referenced-unit';
import { EmbedModelService } from './embed-model.service';
import { EmbedUnitLeasePolicyService } from './embed-unit-lease-policy.service';
import { EmbedUnitLeaseService } from './embed-unit-lease.service';
export interface IEmbedDescriptorMaterializeContext {
    descriptor: IEmbedDescriptor;
    createOptions?: ICreateUnitOptions;
    signal?: AbortSignal;
}
export declare class EmbedReferencedUnitMaterializeService {
    private readonly _modelService;
    private readonly _unitLeaseService;
    private readonly _unitLeasePolicyService;
    private readonly _referencedUnitManager;
    private readonly _univerInstanceService;
    private readonly _materializingDescriptors;
    constructor(_modelService: EmbedModelService, _unitLeaseService: EmbedUnitLeaseService, _unitLeasePolicyService: EmbedUnitLeasePolicyService, _referencedUnitManager: IReferencedUnitManagerService, _univerInstanceService: IUniverInstanceService);
    materializeDescriptor(context: IEmbedDescriptorMaterializeContext): Promise<IEmbedDescriptor>;
    private _loadAndCommitDescriptor;
    private _loadDescriptor;
    private _commitMaterializedDescriptor;
    private _leaseMaterializedDescriptor;
    private _getLoadedDescriptorState;
    private _getMaterializeKey;
    private _getDescriptorOwner;
}
