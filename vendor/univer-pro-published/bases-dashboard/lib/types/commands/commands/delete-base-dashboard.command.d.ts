import type { ICommand } from '@univerjs/core';
export interface IDeleteBaseDashboardCommandParams {
    unitId: string;
    dashboardId: string;
}
export declare const DeleteBaseDashboardCommand: ICommand<IDeleteBaseDashboardCommandParams>;
