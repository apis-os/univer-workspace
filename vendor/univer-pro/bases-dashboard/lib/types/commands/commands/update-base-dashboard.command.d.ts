import type { ICommand } from '@univerjs/core';
import type { IBaseDashboardSnapshot } from '../../types';
export interface IUpdateBaseDashboardCommandParams {
    unitId: string;
    dashboard: IBaseDashboardSnapshot;
}
export declare const UpdateBaseDashboardCommand: ICommand<IUpdateBaseDashboardCommandParams>;
