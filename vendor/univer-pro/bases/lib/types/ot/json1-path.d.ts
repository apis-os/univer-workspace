import type { FieldId, RecordId, TableId, ViewId } from '@univerjs/core';
export declare const baseJson1Path: {
    table: (tableId: TableId) => string[];
    field: (tableId: TableId, fieldId: FieldId) => string[];
    fieldOrder: (tableId: TableId, index: number) => (string | number)[];
    record: (tableId: TableId, recordId: RecordId) => string[];
    cell: (tableId: TableId, recordId: RecordId, fieldId: FieldId) => string[];
    cellData: (tableId: TableId, row: number, col: number) => string[];
    attachmentSet: (tableId: TableId, key: string) => string[];
    attachment: (tableId: TableId, attachmentId: string) => string[];
    view: (tableId: TableId, viewId: ViewId) => string[];
    viewFieldHidden: (tableId: TableId, viewId: ViewId, fieldId: FieldId) => string[];
};
