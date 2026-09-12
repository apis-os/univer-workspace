import type { IMutation } from '@univerjs/core';
import type { IBaseDashboardSnapshot } from '../../types';
export interface ISetBaseDashboardMutationParams {
    unitId: string;
    dashboard: IBaseDashboardSnapshot;
    index?: number;
}
export declare const SetBaseDashboardMutation: IMutation<ISetBaseDashboardMutationParams>;
