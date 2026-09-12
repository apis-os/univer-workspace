import type { BaseCellValue, IFieldSnapshot, ITableSnapshot } from '@univerjs/core';
export declare enum BaseFieldKeyEnum {
    Id = "id",
    Name = "name",
    Auto = "auto"
}
export declare function isPublicBaseField(field: IFieldSnapshot | undefined): field is IFieldSnapshot;
export declare function resolveBaseFieldValues(table: ITableSnapshot, values: Record<string, BaseCellValue> | undefined, fieldKey?: BaseFieldKeyEnum): Record<string, BaseCellValue>;
export declare function normalizeBaseFieldValueForWrite(field: IFieldSnapshot | undefined, value: BaseCellValue): BaseCellValue;
export declare function resolveBaseFieldKey(table: ITableSnapshot, key: string, fieldKey: BaseFieldKeyEnum): string;
