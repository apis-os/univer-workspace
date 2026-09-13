import type { BaseDataModel, ITableSnapshot, IViewSnapshot } from '@univerjs/core';
export interface IBaseWorkbenchContext {
    base: BaseDataModel;
    table: ITableSnapshot;
    view: IViewSnapshot;
}
export declare function useBaseWorkbenchContext(): IBaseWorkbenchContext | null;
export declare function resolveBaseWorkbenchBase<T>(currentBase: T | null | undefined | void, allBaseUnits: Array<T | null | undefined | void>, fallbackToFirstUnit?: boolean): T | null;
