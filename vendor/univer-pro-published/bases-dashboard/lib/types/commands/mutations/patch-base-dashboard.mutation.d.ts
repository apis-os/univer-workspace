import type { IMutation } from '@univerjs/core';
import type { BaseDashboardHistoryAction, BaseDashboardWidgetType, IBaseDashboardWidget } from '../../types';
export interface IBaseDashboardPatch {
    name?: string;
    widgetOrder?: string[];
    widgets?: Record<string, IBaseDashboardWidget | null>;
}
export interface IPatchBaseDashboardMutationParams {
    unitId: string;
    dashboardId: string;
    historyAction?: BaseDashboardHistoryAction;
    historyActions?: BaseDashboardHistoryAction[];
    historyWidgetType?: BaseDashboardWidgetType;
    historyWidgetTypes?: BaseDashboardWidgetType[];
    patch: IBaseDashboardPatch;
}
export declare const PatchBaseDashboardMutation: IMutation<IPatchBaseDashboardMutationParams>;
