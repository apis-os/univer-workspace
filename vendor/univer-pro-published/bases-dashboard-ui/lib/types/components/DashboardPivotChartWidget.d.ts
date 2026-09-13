import type { IBaseDashboardPivotChartWidget } from '@univerjs-pro/bases-dashboard';
import type { IChartModelBinding } from '@univerjs-pro/engine-chart';
import type { IFilterConfig } from '@univerjs/core';
export interface IDashboardPivotChartWidgetProps {
    filters: Array<IFilterConfig | null>;
    onRuntimeChange?: (widgetId: string, runtime: IChartModelBinding | null) => void;
    unitId: string;
    widget: IBaseDashboardPivotChartWidget;
}
export declare function DashboardPivotChartWidget({ filters, onRuntimeChange, unitId, widget }: IDashboardPivotChartWidgetProps): import("react").JSX.Element;
