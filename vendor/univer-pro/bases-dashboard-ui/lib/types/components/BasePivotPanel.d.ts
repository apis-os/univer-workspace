import type { IBasePivotViewConfig } from '@univerjs-pro/bases-dashboard';
import type { PivotTable } from '@univerjs-pro/engine-pivot';
import type { ITableSnapshot } from '@univerjs/core';
import { PivotTableFiledAreaEnum } from '@univerjs-pro/engine-pivot';
export interface IBasePivotPanelProps {
    config: IBasePivotViewConfig;
    table: ITableSnapshot;
    onChange: (patch: Partial<IBasePivotViewConfig>) => void;
}
export declare function BasePivotPanel(props: IBasePivotPanelProps): import("react").JSX.Element;
export declare function addBasePivotSourceField(pivotTable: PivotTable, dataFieldId: string, area: PivotTableFiledAreaEnum, index: number): void;
