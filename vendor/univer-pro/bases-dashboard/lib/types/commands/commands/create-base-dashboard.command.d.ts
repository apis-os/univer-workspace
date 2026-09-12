import type { ICommand } from '@univerjs/core';
import type { IBaseDashboardSnapshot } from '../../types';
export interface ICreateBaseDashboardCommandParams {
    unitId: string;
    dashboard: IBaseDashboardSnapshot;
    index?: number;
}
export declare const CreateBaseDashboardCommand: ICommand<ICreateBaseDashboardCommandParams>;
