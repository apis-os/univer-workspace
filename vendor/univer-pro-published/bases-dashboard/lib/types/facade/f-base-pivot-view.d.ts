import type { IBasePivotCalculationResult, IBasePivotViewConfig, IBasePivotViewSnapshot } from '@univerjs-pro/bases-dashboard';
import type { PivotTable } from '@univerjs-pro/engine-pivot';
import type { IFilterConfig } from '@univerjs/core';
import { FBaseObjectPermission } from '@univerjs-pro/bases/facade';
/** Facade API object bound to one Base Pivot View. */
export declare class FBasePivotView {
    private readonly _unitId;
    private readonly _tableId;
    private readonly _viewId;
    private readonly _instanceService;
    private readonly _commandService;
    private readonly _permissionService;
    /**
     * Returns the stable Pivot View id.
     * @returns {string} Stable Pivot View id.
     * @example
     * ```ts
     * const viewId = pivotView.getId();
     * ```
     */
    getId(): string;
    /**
     * Returns the Pivot View object permission facade.
     *
     * `canEdit()` combines the Base unit, parent Table, and Pivot View Edit points. Enabling the
     * Pivot View does not override a read-only Base or Table.
     *
     * @returns {FBaseObjectPermission} Permission facade for this Pivot View.
     * @example Make one Pivot View read-only and restore it
     * ```ts
     * const base = univerAPI.getActiveBase();
     * const table = base?.getTables()[0];
     * const pivot = table ? base?.getPivotViews(table.getId())[0] : undefined;
     * if (!pivot) throw new Error('Pivot View not found.');
     *
     * await pivot.getPermission().setReadOnly();
     * console.log(pivot.getPermission().canEdit()); // false
     * await pivot.getPermission().setEditable();
     * ```
     */
    getPermission(): FBaseObjectPermission;
    /**
     * Returns the stable source table id.
     * @returns {string} Stable source table id.
     * @example
     * ```ts
     * const tableId = pivotView.getTableId();
     * ```
     */
    getTableId(): string;
    /**
     * Returns the human-readable Pivot View name.
     * @returns {string} Pivot View name.
     * @example
     * ```ts
     * const name = pivotView.getName();
     * ```
     */
    getName(): string;
    /**
     * Renames the Pivot View through the command system.
     * @param {string} name New human-readable Pivot View name.
     * @returns {boolean} Whether the command succeeded.
     * @example
     * ```ts
     * pivotView.setName('Revenue by market');
     * ```
     */
    setName(name: string): boolean;
    /**
     * Returns a detached Pivot View snapshot.
     * @returns {IBasePivotViewSnapshot} Snapshot safe for local inspection or editing.
     * @throws {Error} If the Pivot View has been deleted or changed to another view type.
     * @example
     * ```ts
     * const snapshot = pivotView.getSnapshot();
     * ```
     */
    getSnapshot(): IBasePivotViewSnapshot;
    /**
     * Returns a detached Pivot and Chart configuration snapshot.
     * @returns {IBasePivotViewConfig} Current Pivot View configuration.
     * @example
     * ```ts
     * const config = pivotView.getConfig();
     * ```
     */
    getConfig(): IBasePivotViewConfig;
    /**
     * Creates a detached `engine-pivot` model initialized from this Pivot View.
     *
     * Mutating the returned model does not change the Base. After using Engine methods such as
     * `addFieldWithSourceId()`, persist the result with `updateConfig({ pivot: pivotTable.toJSON() })`.
     *
     * @returns {PivotTable} Detached Engine Pivot model backed by the current table fields.
     * @example
     * ```ts
     * import { PivotTableFiledAreaEnum } from '@univerjs-pro/engine-pivot';
     *
     * const pivotTable = pivotView.getPivotTable();
     * pivotTable.addFieldWithSourceId('region', PivotTableFiledAreaEnum.Row);
     * pivotTable.addFieldWithSourceId('revenue', PivotTableFiledAreaEnum.Value);
     * pivotView.updateConfig({ pivot: pivotTable.toJSON() });
     * ```
     */
    getPivotTable(): PivotTable;
    /**
     * Partially updates the Pivot View through the command system, including undo and redo support.
     *
     * Top-level properties are replaced. Merge nested `chart` properties with the current Chart config
     * before passing them when only one Chart property should change.
     *
     * @param {Partial<IBasePivotViewConfig>} patch Top-level Pivot View configuration patch.
     * @returns {boolean} Whether the command succeeded.
     * @example
     * ```ts
     * import { ChartTypeBits } from '@univerjs-pro/engine-chart';
     *
     * const current = pivotView.getConfig();
     * pivotView.updateConfig({
     *   chart: { ...current.chart, type: ChartTypeBits.Line },
     *   displayMode: 'chart',
     * });
     * ```
     */
    updateConfig(patch: Partial<IBasePivotViewConfig>): boolean;
    /**
     * Calculates the Pivot View, optionally applying Dashboard or caller-owned table filters.
     * @param {Array<IFilterConfig | null>} [filters] Additional Base table filters applied before Pivot calculation.
     * @returns {Promise<IBasePivotCalculationResult>} Engine Pivot layout result suitable for rendering or Chart adaptation.
     * @example
     * ```ts
     * const result = await pivotView.calculate();
     * console.log(result.view.dataView);
     * ```
     */
    calculate(filters?: Array<IFilterConfig | null>): Promise<IBasePivotCalculationResult>;
    /**
     * Deletes this Pivot View through the command system.
     * @returns {boolean} Whether the command succeeded.
     * @example
     * ```ts
     * pivotView.delete();
     * ```
     */
    delete(): boolean;
    private _getBase;
    private _getTable;
    private _getView;
}
