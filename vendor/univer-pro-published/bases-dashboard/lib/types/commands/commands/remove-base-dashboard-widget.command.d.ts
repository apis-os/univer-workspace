import type { ICommand } from '@univerjs/core';
export interface IRemoveBaseDashboardWidgetCommandParams {
    unitId: string;
    dashboardId: string;
    widgetId: string;
}
export declare const RemoveBaseDashboardWidgetCommand: ICommand<IRemoveBaseDashboardWidgetCommandParams>;
