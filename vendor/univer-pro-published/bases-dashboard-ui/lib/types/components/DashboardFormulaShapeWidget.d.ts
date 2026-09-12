import type { IBaseDashboardFormulaShapeWidget } from '@univerjs-pro/bases-dashboard';
export interface IDashboardFormulaShapeWidgetProps {
    dashboardId: string;
    unitId: string;
    widget: IBaseDashboardFormulaShapeWidget;
}
export declare function DashboardFormulaShapeWidget({ dashboardId, unitId, widget }: IDashboardFormulaShapeWidgetProps): import("react").JSX.Element;
