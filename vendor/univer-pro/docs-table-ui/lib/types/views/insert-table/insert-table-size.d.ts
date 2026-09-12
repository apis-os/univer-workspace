import type { IDocsTableCreateTableOperationParams } from '../../commands/docs-table-create-table.operation';
export declare const DOCS_TABLE_INSERT_TABLE_PICKER_COLUMNS = 14;
export declare const DOCS_TABLE_INSERT_TABLE_PICKER_ROWS = 10;
export declare const DOCS_TABLE_INSERT_TABLE_MIN_SIZE = 1;
export declare const DOCS_TABLE_INSERT_TABLE_MAX_SIZE = 20;
export interface IDocsTableInsertTableSize {
    rowCount: number;
    colCount: number;
}
export declare function encodeDocsTableInsertTableSize(rowCount: number, colCount: number): string;
export declare function normalizeDocsTableInsertTableSize(params?: IDocsTableCreateTableOperationParams | null): IDocsTableInsertTableSize | null;
export declare function clampDocsTableInsertTableSize(value: unknown): number;
