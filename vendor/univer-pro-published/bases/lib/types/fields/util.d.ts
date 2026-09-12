import type { IFieldSnapshot, ITableSnapshot } from '@univerjs/core';
export declare function uniqueFieldName(table: ITableSnapshot, baseName: string, pendingFields?: IFieldSnapshot[]): string;
export declare function ensureViewFieldOrder(current: string[] | undefined, fieldIds: string[]): string[] | undefined;
