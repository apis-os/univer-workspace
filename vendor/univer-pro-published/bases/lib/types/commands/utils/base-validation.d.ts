import type { BaseCellValue, BaseDataModel, IBaseCellData, IFieldSnapshot, IRecordSnapshot } from '@univerjs/core';
export declare function validateBaseIds(base: BaseDataModel, tableId: string, checkIds?: {
    viewIds?: string[];
    fieldIds?: string[];
    recordIds?: string[];
}): boolean;
export declare function validateBaseFieldDefinition(base: BaseDataModel, tableId: string, field: IFieldSnapshot): boolean;
export declare function validateBaseFieldValue(base: BaseDataModel, tableId: string, fieldId: string, value: BaseCellValue | IBaseCellData): boolean;
export declare function validateBaseRecordInput(base: BaseDataModel, tableId: string, record: IRecordSnapshot): boolean;
export declare function materializeBaseRecordIdentity(record: IRecordSnapshot): IRecordSnapshot;
export declare function getBaseWritePrimitive(value: BaseCellValue | IBaseCellData): unknown;
