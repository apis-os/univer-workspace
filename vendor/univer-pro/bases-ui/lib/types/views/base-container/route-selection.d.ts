import type { BaseDataModel, ITableSnapshot, IViewSnapshot } from '@univerjs/core';
export interface IBaseRouteSelectionParams {
    tableId?: string | null;
    viewId?: string | null;
}
export interface IResolvedBaseRouteSelection {
    table: ITableSnapshot;
    view: IViewSnapshot;
}
export declare function resolveBaseRouteSelection(snapshot: ReturnType<BaseDataModel['getSnapshot']>, selection: IBaseRouteSelectionParams): IResolvedBaseRouteSelection | null;
export declare function readBaseRouteSelection(): IBaseRouteSelectionParams;
export declare function writeBaseRouteSelection(tableId: string, viewId: string, dashboardId?: string | null): void;
