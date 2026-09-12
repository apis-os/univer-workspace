import type { IBaseDashboardFormulaShapeWidget, IBaseDashboardWidget } from '@univerjs-pro/bases-dashboard';
import type { BaseDataModel, ImageSourceType } from '@univerjs/core';
export interface ISelectedDashboardBackgroundImage {
    source: string;
    sourceType: ImageSourceType;
}
export interface IDashboardFormulaShapeInspectorProps {
    base: BaseDataModel;
    onChange: (widget: IBaseDashboardWidget) => Promise<unknown>;
    onSelectBackgroundImage: () => Promise<ISelectedDashboardBackgroundImage | null>;
    widget: IBaseDashboardFormulaShapeWidget;
}
export declare function DashboardFormulaShapeInspector({ base, onChange, onSelectBackgroundImage, widget }: IDashboardFormulaShapeInspectorProps): import("react").JSX.Element;
