import type { DocsTableBorderPreset, IDocsTableMetadata } from '@univerjs-pro/docs-table';
import type { ITable, ITableCellBorder } from '@univerjs/core';
export interface IDocsTableFindQuery {
    tableId?: string;
    text?: string;
    headerText?: string;
    titleText?: string;
}
export interface IDocsTableInfo {
    id: string;
    rowCount: number;
    columnCount: number;
    metadata?: IDocsTableMetadata;
    source?: ITable;
}
export interface IDocsTableDescription {
    id: string;
    rowCount: number;
    columnCount: number;
    headerRowCount: number;
    titleRow: boolean;
    columns: Array<{
        index: number;
        type?: string;
        width?: number;
    }>;
    sampleRows: string[][];
}
export interface IDocsTableCellStyle {
    backgroundColor?: string;
}
export interface IDocsTableCellContentRange {
    startOffset: number;
    endOffset: number;
    segmentId: string;
}
export interface IDocsTableBorderOptions {
    preset?: DocsTableBorderPreset;
    border?: ITableCellBorder;
    color?: string;
    width?: number;
}
export interface IDocsTableStyle {
    backgroundColor?: string;
    border?: IDocsTableBorderOptions;
}
