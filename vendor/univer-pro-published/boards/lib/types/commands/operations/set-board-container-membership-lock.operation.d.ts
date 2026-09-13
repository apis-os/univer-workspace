import type { IOperation } from '@univerjs/core';
export interface ISetBoardContainerMembershipLockOperationParams {
    unitId: string;
    subUnitId: string;
    containerId: string;
    membershipLocked: boolean;
}
export declare const SetBoardContainerMembershipLockOperation: IOperation<ISetBoardContainerMembershipLockOperationParams>;
