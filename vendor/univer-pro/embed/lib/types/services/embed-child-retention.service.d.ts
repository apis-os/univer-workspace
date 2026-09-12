import type { ResourceRefInput } from '../common/resource-ref';
import { EmbedModelService } from './embed-model.service';
export interface IEmbedChildRetentionState {
    hostUnitId: string;
    ref: ResourceRefInput;
    childUnitIds: readonly string[];
    totalReferences: number;
    activeReferences: number;
    softDeletedReferences: number;
    shouldDisposeNow: false;
    eligibleForCleanup: boolean;
}
export declare class EmbedChildRetentionService {
    private readonly _modelService;
    constructor(_modelService: EmbedModelService);
    getRetentionState(hostUnitId: string, ref: ResourceRefInput): IEmbedChildRetentionState;
    listCleanupCandidates(hostUnitId: string): IEmbedChildRetentionState[];
    private _toState;
}
