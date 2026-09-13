import type { ISlideTableCellMargins } from '../types';
import type { ISlideTableResolvedCell } from './style';
export interface ISlideTableCellRect {
    left: number;
    top: number;
    width: number;
    height: number;
}
export interface IResolveSlideTableCellRectOptions {
    cell: ISlideTableResolvedCell;
    tableWidth: number;
    tableHeight: number;
    targetWidth: number;
    targetHeight: number;
    includeMargins?: boolean;
}
export declare const SLIDE_TABLE_DEFAULT_CELL_TEXT_MARGINS: Required<ISlideTableCellMargins>;
export declare function resolveSlideTableCellTextMargins(margins: ISlideTableCellMargins | undefined): Required<ISlideTableCellMargins>;
export declare function resolveSlideTableCellRect(options: IResolveSlideTableCellRectOptions): ISlideTableCellRect;
