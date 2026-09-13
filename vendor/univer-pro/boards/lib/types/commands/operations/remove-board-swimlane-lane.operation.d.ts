import type { IOperation } from '@univerjs/core';
export type BoardSwimlaneLaneRemoveContentPolicy = 'reject' | 'promote-to-pool' | 'move-to-lane' | 'delete-content';
export interface IRemoveBoardSwimlaneLaneOperationParams {
    unitId: string;
    subUnitId: string;
    containerId: string;
    laneId: string;
    contentPolicy?: BoardSwimlaneLaneRemoveContentPolicy;
    targetLaneId?: string;
}
export declare const RemoveBoardSwimlaneLaneOperation: IOperation<IRemoveBoardSwimlaneLaneOperationParams>;
