import type { IDisposable, UniverInstanceType } from '@univerjs/core';
export interface IEmbedUnitLeaseOwner {
    hostUnitId: string;
    embedId: string;
}
export interface IEmbedUnitLeaseRecord extends IEmbedUnitLeaseOwner {
    childUnitId: string;
    childType: UniverInstanceType;
}
export declare class EmbedUnitLeaseService {
    private readonly _leasesByOwner;
    private readonly _leasesByChildUnit;
    acquire(recordInput: IEmbedUnitLeaseRecord): IDisposable;
    hasLease(owner: IEmbedUnitLeaseOwner, childUnitId: string): boolean;
    getLease(childUnitId: string): IEmbedUnitLeaseRecord | undefined;
    release(owner: IEmbedUnitLeaseOwner): void;
    releaseHost(hostUnitId: string): void;
    releaseUnit(unitId: string): void;
    dispose(): void;
    private _releaseState;
    private _createConflictError;
    private _getOwnerKey;
}
