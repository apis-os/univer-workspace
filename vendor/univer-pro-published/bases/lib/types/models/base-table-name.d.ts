import type { IBaseSnapshot, IValidationResult } from '@univerjs/core';
export declare const BASE_TABLE_NAME_REQUIREMENTS = "Base table names are exported as Excel worksheet names and must contain 1-31 characters, not start or end with an apostrophe, not contain : \\ / ? * [ ], and be unique (case-insensitive).";
export type BaseTableNameValidationError = 'required' | 'too-long' | 'apostrophe' | 'invalid-characters' | 'duplicate' | 'invalid';
export interface IBaseTableNameValidationResult extends IValidationResult {
    error?: BaseTableNameValidationError;
}
export declare function validateBaseTableName(snapshot: IBaseSnapshot, name: string, currentTableId?: string): IBaseTableNameValidationResult;
export declare function createUniqueBaseTableName(snapshot: IBaseSnapshot, baseName: string): string;
