import type { IBaseSnapshot, IFieldSnapshot, IRecordLinkFieldConfig, IValidationResult } from '@univerjs/core';
export interface IRecordLinkReference {
    tableId: string;
    fieldId: string;
}
export declare function getRecordLinkFieldConfig(field: IFieldSnapshot): IRecordLinkFieldConfig | null;
export declare function parseRecordLinkIds(value: unknown): string[];
export declare function serializeRecordLinkIds(recordIds: readonly string[]): string;
export declare function validateCanonicalRecordLinkValue(value: unknown, multiple: boolean): IValidationResult;
export declare function validateRecordLinkField(snapshot: IBaseSnapshot, field: IFieldSnapshot): IValidationResult;
export declare function validateRecordLinkValue(snapshot: IBaseSnapshot, field: IFieldSnapshot, value: unknown, options?: {
    allowDangling?: boolean;
}): IValidationResult;
export declare function findRecordLinkReferences(snapshot: IBaseSnapshot, targetTableId: string): IRecordLinkReference[];
