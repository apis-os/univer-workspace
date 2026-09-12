import type { IDocumentData } from '@univerjs/core';
import type { ISlideTableCellStyle, ISlideTableColumn, ISlideTableRow } from '../types';
export interface IBuildSlideTableOptions {
    tableId: string;
    values?: string[][];
    textData?: IDocumentData[][];
    rows?: number;
    columns?: number;
    rowHeight?: number;
    columnWidth?: number;
    cellStyles?: Array<{
        row: number;
        column: number;
        style: ISlideTableCellStyle;
    }>;
}
export interface IResolvedSlideTableBuildOptions {
    rows: number;
    columns: number;
    rowHeight: number;
    columnWidth: number;
}
export declare function resolveSlideTableBuildOptions(options?: Omit<IBuildSlideTableOptions, 'tableId'>): IResolvedSlideTableBuildOptions;
export declare function buildSlideTable(options: IBuildSlideTableOptions): {
    rows: ISlideTableRow[];
    columns: ISlideTableColumn[];
    resolvedOptions: IResolvedSlideTableBuildOptions;
};
