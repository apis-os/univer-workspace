import type { IPivotTableSnapshot, IPivotViewJSON } from '@univerjs-pro/engine-pivot';
import { PivotCellStyleTypeEnum } from '@univerjs-pro/engine-pivot';
export interface IBasePivotTableProps {
    pivot: IPivotTableSnapshot;
    view: IPivotViewJSON;
}
export interface IBasePivotTableCell {
    isHeader: boolean;
    isTotal: boolean;
    key: string;
    style?: PivotCellStyleTypeEnum;
    value: string;
}
export interface IBasePivotTableMatrix {
    headerColumnCount: number;
    headerRowCount: number;
    pageRows: IBasePivotTableCell[][];
    rows: IBasePivotTableCell[][];
}
export declare function BasePivotTable({ pivot, view }: IBasePivotTableProps): import("react").JSX.Element;
export declare function createBasePivotTableMatrix(view: IPivotViewJSON, pivot: IPivotTableSnapshot, grandTotalLabel: string): IBasePivotTableMatrix;
