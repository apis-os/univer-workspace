import type { IBasePivotViewConfig } from '@univerjs-pro/bases-dashboard';
import type { IChartModelBinding } from '@univerjs-pro/engine-chart';
import type { ITableSnapshot } from '@univerjs/core';
export interface IBasePivotInspectorProps {
    config: IBasePivotViewConfig;
    runtime: IChartModelBinding | null;
    table: ITableSnapshot;
    onChange: (patch: Partial<IBasePivotViewConfig>) => void;
}
export declare function BasePivotInspector({ config, onChange, runtime, table }: IBasePivotInspectorProps): import("react").JSX.Element;
