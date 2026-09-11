import type { IOperation, UniverInstanceType } from '@univerjs/core';
import type { IRemoteUnitPresenceState } from '@univerjs/ui';
export declare enum UnitPresenceUpdateType {
    SET = "set",
    REMOVE = "remove",
    CLEAR = "clear"
}
export interface ISetRemoteUnitPresenceUpdate {
    type: UnitPresenceUpdateType.SET;
    state: IRemoteUnitPresenceState;
}
export interface IRemoveRemoteUnitPresenceUpdate {
    type: UnitPresenceUpdateType.REMOVE;
    unitId: string;
    memberId: string;
}
export interface IClearRemoteUnitPresenceUpdate {
    type: UnitPresenceUpdateType.CLEAR;
    unitId: string;
}
export interface IUpdateRemoteUnitPresenceOperationParams {
    unitType: UniverInstanceType;
    update: ISetRemoteUnitPresenceUpdate | IRemoveRemoteUnitPresenceUpdate | IClearRemoteUnitPresenceUpdate;
}
export declare const UpdateRemoteUnitPresenceOperation: IOperation<IUpdateRemoteUnitPresenceOperationParams>;
