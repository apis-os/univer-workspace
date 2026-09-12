import type { IBaseDashboardLayout, IBaseDashboardSnapshot, IBaseDashboardWidget } from '@univerjs-pro/bases-dashboard';
import type { ReactNode } from 'react';
export interface IDashboardGridProps {
    dashboard: IBaseDashboardSnapshot;
    dragLabel: string;
    editable?: boolean;
    selectedWidgetId?: string;
    renderWidget: (widget: IBaseDashboardWidget) => ReactNode;
    renderWidgetActions?: (widget: IBaseDashboardWidget) => ReactNode;
    resizeLabel: string;
    widgetLabel: (widget: IBaseDashboardWidget) => string;
    onLayoutsCommit: (layouts: ReadonlyMap<string, IBaseDashboardLayout>) => void;
    onSelectWidget?: (widgetId?: string) => void;
}
export declare function DashboardGrid({ dashboard, dragLabel, editable, onLayoutsCommit, onSelectWidget, renderWidget, renderWidgetActions, resizeLabel, selectedWidgetId, widgetLabel }: IDashboardGridProps): import("react").JSX.Element;
