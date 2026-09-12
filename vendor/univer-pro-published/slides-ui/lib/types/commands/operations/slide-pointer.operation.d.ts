import type { IOperation } from '@univerjs/core';
import type { IUnitPresencePoint } from '@univerjs/ui';
export interface ISetSlidePointerOperationParams {
    unitId: string;
    subUnitId: string;
    pointer: IUnitPresencePoint | null;
}
export declare const SetSlidePointerOperation: IOperation<ISetSlidePointerOperationParams>;
