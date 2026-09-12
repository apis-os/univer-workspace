import type { BaseCellValue, IBaseCellData, IFieldSnapshot, ITableSnapshot, RecordId } from '@univerjs/core';
export declare function ensureBaseTableCellLayout(table: ITableSnapshot): ITableSnapshot;
export declare function syncBaseRecordValuesFromCellData(table: ITableSnapshot): ITableSnapshot;
export declare function syncBaseRecordValuesFromCellDataRange(table: ITableSnapshot, cells: Array<{
    row: number;
    col: number;
}>): ITableSnapshot;
export declare function getBaseCellLayoutPosition(table: ITableSnapshot, recordId: RecordId, fieldId: string): {
    row: number;
    col: number;
} | null;
export declare function getBaseCell(table: ITableSnapshot, recordId: RecordId, fieldId: string): IBaseCellData | undefined;
export declare function getBaseCellValue(table: ITableSnapshot, recordId: RecordId, fieldId: string): BaseCellValue;
export declare function getBaseCellFormulaValue(table: ITableSnapshot, recordId: RecordId, fieldId: string): IBaseCellData['v'];
export declare function setBaseCell(table: ITableSnapshot, recordId: RecordId, fieldId: string, value: BaseCellValue | IBaseCellData): void;
export declare function toBaseCellData(value: BaseCellValue | IBaseCellData, field?: IFieldSnapshot): IBaseCellData;
export declare function fromBaseCellData(cell: IBaseCellData | undefined, field?: IFieldSnapshot, table?: ITableSnapshot, recordId?: RecordId): BaseCellValue;
export declare function toBaseRecordValue(value: BaseCellValue | IBaseCellData, cell: IBaseCellData, field?: IFieldSnapshot, table?: ITableSnapshot, recordId?: RecordId): BaseCellValue;
export declare function getBaseAttachmentResourceKey(fieldId: string, recordId: RecordId): string;
export declare function writeAttachmentResources(table: ITableSnapshot, recordId: RecordId, fieldId: string, value: unknown): void;
export declare function readAttachmentResources(table: ITableSnapshot, recordId: RecordId, fieldId: string): Record<string, unknown>[] | null;
export declare function normalizeAttachmentValue(value: unknown): Record<string, unknown>[];
