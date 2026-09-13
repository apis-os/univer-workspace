import type { IBaseDashboardWidget } from '@univerjs-pro/bases-dashboard';
import type { IChartModelBinding } from '@univerjs-pro/engine-chart';
import type { BaseDataModel, ImageSourceType } from '@univerjs/core';
import type { ISelectedDashboardBackgroundImage } from './DashboardFormulaShapeInspector';
export interface ISelectedDashboardImage {
    name: string;
    source: string;
    sourceType: ImageSourceType;
}
export interface IDashboardInspectorProps {
    base: BaseDataModel;
    chartRuntime?: IChartModelBinding;
    onChange: (widget: IBaseDashboardWidget) => Promise<unknown>;
    onClose: () => void;
    onSelectBackgroundImage: () => Promise<ISelectedDashboardBackgroundImage | null>;
    onSelectImage: () => Promise<ISelectedDashboardImage | null>;
    unitId: string;
    widget: IBaseDashboardWidget;
}
export declare function DashboardInspector({ base, chartRuntime, onChange, onClose, onSelectBackgroundImage, onSelectImage, unitId, widget }: IDashboardInspectorProps): import("react").JSX.Element;
