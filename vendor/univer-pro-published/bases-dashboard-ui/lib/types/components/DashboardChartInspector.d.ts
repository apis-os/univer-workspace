import type { IBaseDashboardPivotChartWidget, IBaseDashboardWidget, IBasePivotChartConfig } from '@univerjs-pro/bases-dashboard';
import type { IChartModelBinding } from '@univerjs-pro/engine-chart';
export interface IDashboardChartInspectorProps {
    onChange: (widget: IBaseDashboardWidget) => Promise<unknown>;
    onEditData: () => void;
    runtime: IChartModelBinding;
    sourceChart: IBasePivotChartConfig;
    sourceName: string;
    widget: IBaseDashboardPivotChartWidget;
}
export declare function DashboardChartInspector({ onChange, onEditData, runtime, sourceChart, sourceName, widget }: IDashboardChartInspectorProps): import("react").JSX.Element;
