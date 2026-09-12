import type { BasePivotViewDisplayMode, IBasePivotChartConfig } from '@univerjs-pro/bases-dashboard';
import type { IPivotTableSnapshot } from '@univerjs-pro/engine-pivot';
import type { ICreateBaseDashboardOptions } from './f-base-dashboard';
import { FBase } from '@univerjs-pro/bases/facade';
import { FBaseDashboard } from './f-base-dashboard';
import { FBasePivotView } from './f-base-pivot-view';
/** Initial Pivot View configuration overrides. */
export interface IBasePivotViewCreateConfig {
    /** Engine Pivot snapshot. A table-aware default is generated when omitted. */
    pivot?: IPivotTableSnapshot;
    /** Chart configuration merged with the default column Chart. */
    chart?: Partial<IBasePivotChartConfig>;
    /** Initial Pivot View presentation mode. */
    displayMode?: BasePivotViewDisplayMode;
}
/** Options for creating a Pivot View in a Base table. */
export interface ICreateBasePivotViewOptions {
    /** Stable Pivot View id. A random id is generated when omitted. */
    id?: string;
    /** Zero-based insertion index in the table's view order. */
    index?: number;
    /** Initial Pivot and Chart configuration overrides. */
    config?: IBasePivotViewCreateConfig;
}
/** @ignore */
export interface IFBaseDashboardMixin {
    getDashboards(): FBaseDashboard[];
    getDashboardById(dashboardId: string): FBaseDashboard | null;
    createDashboard(name: string, options?: ICreateBaseDashboardOptions): FBaseDashboard;
    getPivotViews(tableId: string): FBasePivotView[];
    getPivotView(tableId: string, viewId: string): FBasePivotView | null;
    createPivotView(name: string, tableId: string, options?: ICreateBasePivotViewOptions): FBasePivotView;
}
/** @ignore */
export declare class FBaseDashboardMixin extends FBase implements IFBaseDashboardMixin {
    /**
     * Returns all Dashboards in persisted order.
     * @returns {FBaseDashboard[]} Dashboard Facades for this Base.
     * @example
     * ```ts
     * const base = univerAPI.getActiveBase();
     * const dashboards = base?.getDashboards() ?? [];
     * ```
     */
    getDashboards(): FBaseDashboard[];
    /**
     * Returns a Dashboard by id.
     * @param {string} dashboardId Stable Dashboard id.
     * @returns {FBaseDashboard | null} The Dashboard Facade, or null when absent.
     * @example
     * ```ts
     * const dashboard = univerAPI.getActiveBase()?.getDashboardById('executive');
     * ```
     */
    getDashboardById(dashboardId: string): FBaseDashboard | null;
    /**
     * Creates an empty Dashboard through the command system, including undo and redo support.
     * @param {string} name Human-readable Dashboard name.
     * @param {ICreateBaseDashboardOptions} [options] Stable id and insertion position.
     * @returns {FBaseDashboard} The created Dashboard Facade.
     * @throws {Error} If the Dashboard cannot be created, for example because its id already exists.
     * @example
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) {
     *   throw new Error('No active Base.');
     * }
     * const dashboard = base.createDashboard('Executive overview', { id: 'executive' });
     * ```
     */
    createDashboard(name: string, options?: ICreateBaseDashboardOptions): FBaseDashboard;
    /**
     * Returns all Pivot Views in a table's persisted view order.
     * @param {string} tableId Stable table id.
     * @returns {FBasePivotView[]} Pivot View Facades, or an empty array when the table does not exist.
     * @example
     * ```ts
     * const pivots = univerAPI.getActiveBase()?.getPivotViews('orders') ?? [];
     * ```
     */
    getPivotViews(tableId: string): FBasePivotView[];
    /**
     * Returns a Pivot View by id.
     * @param {string} tableId Stable table id.
     * @param {string} viewId Stable Pivot View id.
     * @returns {FBasePivotView | null} The Pivot View Facade, or null when absent or not a Pivot View.
     * @example
     * ```ts
     * const pivot = univerAPI.getActiveBase()?.getPivotView('orders', 'revenue-pivot');
     * ```
     */
    getPivotView(tableId: string, viewId: string): FBasePivotView | null;
    /**
     * Creates a Pivot View backed by the target table.
     *
     * The default Pivot snapshot is produced by `engine-pivot`, while the default Chart is a column Chart.
     * Use the returned Facade's `getPivotTable()` to configure rows, columns, filters, values, and aggregation
     * with the Engine API, then persist the resulting snapshot with `updateConfig()`.
     *
     * @param {string} name Human-readable Pivot View name.
     * @param {string} tableId Stable source table id.
     * @param {ICreateBasePivotViewOptions} [options] Stable id, insertion position, and initial configuration.
     * @returns {FBasePivotView} The created Pivot View Facade.
     * @throws {Error} If the table does not exist or the Pivot View cannot be created.
     * @example
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) {
     *   throw new Error('No active Base.');
     * }
     * const pivot = base.createPivotView('Revenue by region', 'orders');
     * ```
     */
    createPivotView(name: string, tableId: string, options?: ICreateBasePivotViewOptions): FBasePivotView;
    private _getDashboardFacadeContext;
}
declare module '@univerjs-pro/bases/facade' {
    interface FBase extends IFBaseDashboardMixin {
    }
}
