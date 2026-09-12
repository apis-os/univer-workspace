import type { IPivotTableSnapshot, IPivotViewJSON } from '@univerjs-pro/engine-pivot';
import type { IFilterConfig, ITableSnapshot } from '@univerjs/core';
import type { IBasePivotViewConfig } from '../types';
import { PivotTable } from '@univerjs-pro/engine-pivot';
export interface IBasePivotCalculationInput {
    table: ITableSnapshot;
    pivot: IPivotTableSnapshot;
    filters?: Array<IFilterConfig | null | undefined>;
}
export declare function createDefaultBasePivotSnapshot(table: ITableSnapshot): IPivotTableSnapshot;
/**
 * Creates the canonical initial Pivot View configuration for a Base table.
 * @param {ITableSnapshot} table Source table snapshot used to derive default Pivot fields.
 * @returns {IBasePivotViewConfig} Default Pivot, Chart, and display configuration.
 */
export declare function createDefaultBasePivotViewConfig(table: ITableSnapshot): IBasePivotViewConfig;
export declare function calculateBasePivot(input: IBasePivotCalculationInput): IPivotViewJSON;
export declare function createBasePivotTable(table: ITableSnapshot, snapshot?: IPivotTableSnapshot): PivotTable;
