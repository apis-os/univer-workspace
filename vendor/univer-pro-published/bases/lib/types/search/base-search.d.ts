import type { FieldId, IProjectedRow, ITableSnapshot, RecordId } from '@univerjs/core';
import { BaseFieldType } from '@univerjs/core';
export interface IBaseTableSearchRequest {
    table: ITableSnapshot;
    rows: ReadonlyArray<Pick<IProjectedRow, 'recordId' | 'values'>>;
    query: string;
    fieldIds: ReadonlyArray<FieldId>;
    limit?: number;
}
export interface IBaseTableSearchMatch {
    recordId: RecordId;
    fieldId: FieldId;
    fieldType: BaseFieldType;
    text: string;
    score: number;
}
export interface IBaseTableSearchResult {
    query: string;
    total: number;
    matches: IBaseTableSearchMatch[];
}
export declare function searchBaseTable(request: IBaseTableSearchRequest): IBaseTableSearchResult;
