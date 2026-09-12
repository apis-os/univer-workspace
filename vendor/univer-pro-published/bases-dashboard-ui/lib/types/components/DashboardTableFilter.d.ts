import type { IBaseMenuFieldItem } from '@univerjs-pro/bases-ui';
import type { IFilterConfig } from '@univerjs/core';
export interface IDashboardFilterWidgetProps {
    disabled?: boolean;
    fields: IBaseMenuFieldItem[];
    filter: IFilterConfig | null | undefined;
    onChange: (filter: IFilterConfig) => void;
}
export interface IDashboardFilterInspectorProps extends IDashboardFilterWidgetProps {
    onClear: () => void;
}
export declare function DashboardFilterWidget({ disabled, fields, filter, onChange }: IDashboardFilterWidgetProps): import("react").JSX.Element;
export declare function DashboardFilterInspector({ fields, filter, onChange, onClear }: IDashboardFilterInspectorProps): import("react").JSX.Element;
