import type { ISlideTableCell, ISlideTableCellRange, ISlideTableRow } from '../types';
export declare function normalizeSlideTableCellRange(range: ISlideTableCellRange): ISlideTableCellRange;
export declare function isSlideTableMultiCellRange(range: ISlideTableCellRange): boolean;
export declare function forEachSlideTableCellInRange(range: ISlideTableCellRange, callback: (row: number, column: number) => void): void;
export declare function iterateSelectedSlideTableCells(rows: ISlideTableRow[], sourceRange: ISlideTableCellRange, iterator: (cell: ISlideTableCell, rowIndex: number, columnIndex: number) => void): void;
