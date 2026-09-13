import type { ICommand } from '@univerjs/core';
import type { IBaseDashboardWidget } from '../../types';
export interface IUpsertBaseDashboardWidgetCommandParams {
    unitId: string;
    dashboardId: string;
    widget: IBaseDashboardWidget;
    index?: number;
}
export declare const UpsertBaseDashboardWidgetCommand: ICommand<IUpsertBaseDashboardWidgetCommandParams>;
