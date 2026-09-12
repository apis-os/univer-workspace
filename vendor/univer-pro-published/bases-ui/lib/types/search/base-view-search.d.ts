import type { IBaseTableSearchMatch } from '@univerjs-pro/bases';
import type { BaseViewProjection, FieldId, ITableSnapshot, IViewSnapshot } from '@univerjs/core';
export interface IBaseResolvedViewSearch {
    query: string;
    fieldIds: FieldId[];
    cellMatches: IBaseTableSearchMatch[];
    navigationMatches: IBaseTableSearchMatch[];
    navigationRecordIds: string[];
    activeIndex: number | null;
    activeMatch: IBaseTableSearchMatch | null;
    activeRecordId: string | null;
}
export declare function resolveBaseViewSearch(table: ITableSnapshot, view: IViewSnapshot, projection: BaseViewProjection, query: string, activeIndex: number | null): IBaseResolvedViewSearch;
