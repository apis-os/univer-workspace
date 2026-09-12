import type { BaseViewProjection, IBaseConditionalColorRule, IFilterConfig, IGroupConfig, Injector, ISortConfig, IViewFieldSetting, IViewSnapshot, ViewSpecificConfig } from '@univerjs/core';
import type { FBase } from './f-base';
import type { FBaseTable } from './f-table';
import { IBaseProjectionService } from '@univerjs-pro/bases';
import { BaseViewType, ICommandService, IPermissionService } from '@univerjs/core';
import { FBaseObjectPermission } from './f-base-permission';
import { FBaseTableField } from './f-field';
/**
 * Facade API object bound to a Base view.
 *
 * A view stores table projection settings such as filter, sort, group, field visibility, and view-specific config.
 * The facade writes those settings through commands so projections, events, and
 * collaboration invalidations stay in sync.
 *
 * @example Configure a grid projection
 * ```ts
 * const fBase = univerAPI.getActiveBase();
 * const fBaseTable = fBase.getTableById('table-1');
 *
 * const grid = fBaseTable.createView('Main Grid', univerAPI.Enum.BaseViewType.Grid);
 * grid.updateConfig({ frozenFieldCount: 1 });
 * grid.setFilter({
 *   conjunction: univerAPI.Enum.BaseFilterConjunction.AND,
 *   conditions: [
 *     {
 *       fieldId: 'status',
 *       operator: univerAPI.Enum.BaseFilterOperator.IS,
 *       operand: 'done'
 *     }
 *   ],
 * });
 * grid.setSort([
 *   {
 *     fieldId: 'progress',
 *     direction: univerAPI.Enum.BaseSortDirection.DESC
 *   }
 * ]);
 * grid.setFieldVisible('internalNotes', false);
 *
 * const projection = grid.getProjection();
 * console.log(projection);
 * ```
 */
export declare class FBaseTableView {
    private readonly _base;
    private readonly _table;
    private readonly _viewId;
    private readonly _injector;
    private readonly _commandService;
    private readonly _permissionService;
    private readonly _projectionService;
    constructor(_base: FBase, _table: FBaseTable, _viewId: string, _injector: Injector, _commandService: ICommandService, _permissionService: IPermissionService, _projectionService: IBaseProjectionService);
    /**
     * Get the view id.
     * @returns {string} The view id.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const views = fBaseTable.getViews();
     * console.log(views[0]?.getId());
     * ```
     */
    getId(): string;
    /**
     * Returns the View object permission facade.
     * @returns {FBaseObjectPermission} Permission facade combining the Base, Table, and View Edit points.
     * @example
     * ```ts
     * const table = univerAPI.getActiveBase()?.getTables()[0];
     * const view = table?.getViews()[0];
     * if (!view) throw new Error('View not found.');
     * await view.getPermission().setReadOnly();
     * ```
     */
    getPermission(): FBaseObjectPermission;
    /**
     * Get the view snapshot.
     * @returns {IViewSnapshot} The view snapshot.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const views = fBaseTable.getViews();
     * console.log(views[0]?.getView());
     * ```
     */
    getView(): IViewSnapshot;
    /**
     * Get the view name.
     * @returns {string} The view name.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const views = fBaseTable.getViews();
     * console.log(views[0]?.getName());
     * ```
     */
    getName(): string;
    /**
     * Get the view type.
     * @returns The view type.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const views = fBaseTable.getViews();
     * console.log(views[0]?.getType());
     * ```
     */
    getType(): BaseViewType;
    /**
     * Rename this view.
     * @param {string} name The new view name.
     * @returns {boolean} True if the rename succeeded, false if the name was unchanged.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * if (view) {
     *   const success = view.setName('Release view');
     *   console.log(success ? 'View renamed' : 'Rename failed');
     * }
     * ```
     */
    setName(name: string): boolean;
    /**
     * Get the view-specific config.
     * @returns {ViewSpecificConfig} The view-specific config.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * const config = view.getConfig();
     * console.log(config);
     * ```
     */
    getConfig(): ViewSpecificConfig;
    /**
     * Update the view-specific config.
     * @param {Partial<ViewSpecificConfig>} patch The config fields to update.
     * @returns {boolean} True if the update succeeded, false if the config was unchanged.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     *
     * const view = fBaseTable.getViewByName('Grid');
     * const gridConfig = view.getConfig() as IGridViewConfig;
     * gridConfig.frozenFieldCount = 2;
     * const success = view.updateConfig(gridConfig);
     * console.log(success ? 'Config updated' : 'Update failed');
     * ```
     */
    updateConfig(patch: Partial<ViewSpecificConfig>): boolean;
    /**
     * Get this view's conditional coloring rules in priority order.
     *
     * Rules at the beginning of the array have higher priority. The returned
     * array is a deep copy, so changing it does not mutate the Base. Call
     * {@link setConditionalColorRules} to persist edits or reorder rules.
     *
     * @returns {IBaseConditionalColorRule[]} A copy of the persisted rules. Returns `[]` when no rules are configured.
     * @example Read rules created by either the UI or the Facade
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('Open a Base before running this example.');
     *
     * const table = base.insertTable(`Conditional color read ${Date.now()}`, {
     *   primaryFieldName: 'Task'
     * });
     * const title = table.getPrimaryField();
     * const view = table.getViewByName('Grid');
     * if (!view) throw new Error('The default Grid view was not created.');
     * view.setConditionalColorRules([{
     *   id: 'blocked-task',
     *   color: '#fde9e9',
     *   target: univerAPI.Enum.BaseConditionalColorTarget.CELL,
     *   fieldId: title.getId(),
     *   operator: univerAPI.Enum.BaseConditionalColorOperator.CONTAINS,
     *   operand: 'blocked'
     * }]);
     *
     * const rules = view.getConditionalColorRules();
     * console.log(rules.map((rule, priority) => ({ priority, ...rule })));
     * ```
     */
    getConditionalColorRules(): IBaseConditionalColorRule[];
    /**
     * Replace all conditional coloring rules for this view.
     *
     * The array order is the rule priority: index `0` is evaluated first.
     * Passing `[]` clears conditional coloring. Every rule id must be unique,
     * and every `fieldId` must reference a public field in this table. Invalid
     * targets, field/operator combinations, date modes, CSS colors, ids, or
     * fields throw an actionable error before any mutation is executed. For a
     * `COLUMN` target, the field's entire column is painted unconditionally;
     * `operator`, `operand`, and `dateMode` are retained but ignored.
     *
     * Prefer this typed method and `univerAPI.Enum.BaseConditional*` values to
     * writing `getConfig().conditionalColoring` through {@link updateConfig};
     * the command validates the complete replacement before persisting it.
     *
     * @param {IBaseConditionalColorRule[]} rules Complete replacement rules in descending priority order.
     * @returns {boolean} `true` when the update command succeeds; otherwise `false`.
     * @example Create a runnable risk table and color high-risk rows
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('Open a Base before running this example.');
     *
     * const table = base.insertTable(`Risk tracker ${Date.now()}`, {
     *   primaryFieldName: 'Risk item'
     * });
     * const level = table.addField(
     *   'Risk level',
     *   univerAPI.Enum.BaseFieldType.Number
     * );
     * table.addRecords([
     *   { values: { [table.getPrimaryFieldId()]: 'Stock shortage', [level.getId()]: 90 } },
     *   { values: { [table.getPrimaryFieldId()]: 'Delivery delay', [level.getId()]: 60 } }
     * ]);
     *
     * const view = table.getViewByName('Grid');
     * if (!view) throw new Error('The default Grid view was not created.');
     * const success = view.setConditionalColorRules([{
     *   id: 'high-risk',
     *   color: '#fde9e9',
     *   target: univerAPI.Enum.BaseConditionalColorTarget.ROW,
     *   fieldId: level.getId(),
     *   operator: univerAPI.Enum.BaseConditionalColorOperator.GREATER_THAN,
     *   operand: 80
     * }]);
     *
     * console.log({ success, rules: view.getConditionalColorRules() });
     * ```
     */
    setConditionalColorRules(rules: IBaseConditionalColorRule[]): boolean;
    /**
     * Append one conditional coloring rule at the lowest priority.
     *
     * Use {@link setConditionalColorRules} when inserting at a specific priority
     * or replacing an existing rule. Duplicate ids and invalid rule values throw
     * before the Base is mutated.
     *
     * @param {IBaseConditionalColorRule} rule Rule to append after all existing rules.
     * @returns {boolean} `true` when the update command succeeds; otherwise `false`.
     * @example Add a low-priority warning rule
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('Open a Base before running this example.');
     * const table = base.insertTable(`Conditional color add ${Date.now()}`, {
     *   primaryFieldName: 'Risk item'
     * });
     * const level = table.addField('Risk level', univerAPI.Enum.BaseFieldType.Number);
     * const view = table.getViewByName('Grid');
     * if (!view) throw new Error('The default Grid view was not created.');
     *
     * const success = view.addConditionalColorRule({
     *   id: 'medium-risk',
     *   color: '#fff7df',
     *   target: univerAPI.Enum.BaseConditionalColorTarget.CELL,
     *   fieldId: level.getId(),
     *   operator: univerAPI.Enum.BaseConditionalColorOperator.GREATER_THAN,
     *   operand: 50
     * });
     * console.log({ success, rules: view.getConditionalColorRules() });
     * ```
     */
    addConditionalColorRule(rule: IBaseConditionalColorRule): boolean;
    /**
     * Delete one conditional coloring rule by its stable id.
     *
     * Deleting the last rule clears the persisted conditional coloring config.
     * A missing id is a no-op and returns `false`.
     *
     * @param {string} ruleId Id of the rule to delete.
     * @returns {boolean} `true` when the rule existed and the update command succeeds; otherwise `false`.
     * @example Delete a rule and verify the persisted result
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('Open a Base before running this example.');
     * const table = base.insertTable(`Conditional color delete ${Date.now()}`, {
     *   primaryFieldName: 'Task'
     * });
     * const title = table.getPrimaryField();
     * const view = table.getViewByName('Grid');
     * if (!view) throw new Error('The default Grid view was not created.');
     * view.addConditionalColorRule({
     *   id: 'medium-risk',
     *   color: '#fff7df',
     *   target: univerAPI.Enum.BaseConditionalColorTarget.CELL,
     *   fieldId: title.getId(),
     *   operator: univerAPI.Enum.BaseConditionalColorOperator.CONTAINS,
     *   operand: 'delay'
     * });
     *
     * const deleted = view.deleteConditionalColorRule('medium-risk');
     * console.log({ deleted, rules: view.getConditionalColorRules() });
     * ```
     */
    deleteConditionalColorRule(ruleId: string): boolean;
    /**
     * Clear every conditional coloring rule from this view.
     *
     * @returns {boolean} `true` when rules existed and the clear command succeeds; otherwise `false`.
     * @example Clear conditional coloring without changing filters, sorts, or other view config
     * ```ts
     * const base = univerAPI.getActiveBase();
     * if (!base) throw new Error('Open a Base before running this example.');
     * const table = base.insertTable(`Conditional color clear ${Date.now()}`, {
     *   primaryFieldName: 'Task'
     * });
     * const title = table.getPrimaryField();
     * const view = table.getViewByName('Grid');
     * if (!view) throw new Error('The default Grid view was not created.');
     * view.addConditionalColorRule({
     *   id: 'temporary-rule',
     *   color: '#eef3ff',
     *   target: univerAPI.Enum.BaseConditionalColorTarget.CELL,
     *   fieldId: title.getId(),
     *   operator: univerAPI.Enum.BaseConditionalColorOperator.IS_NOT_EMPTY
     * });
     *
     * const cleared = view.clearConditionalColorRules();
     * console.log({ cleared, rules: view.getConditionalColorRules() });
     * ```
     */
    clearConditionalColorRules(): boolean;
    /**
     * Get the view filter.
     * @returns {IFilterConfig | null} The view filter, or `null` if no filter is set.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * console.log(view.getFilter());
     * ```
     */
    getFilter(): IFilterConfig | null;
    /**
     * Set the view filter.
     * @param {IFilterConfig | null} filter The filter to set, or `null` to clear the filter.
     * @returns {boolean} True if the filter was set, false if the filter was unchanged.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     *
     * const fields = fBaseTable.getFields();
     * const conditions = fields.map((field) => {
     *   if (field.getId() === 'status') {
     *     return {
     *       fieldId: field.getId(),
     *       operator: univerAPI.Enum.BaseFilterOperator.IS,
     *       operand: 'done',
     *     }
     *   }
     *
     *   return {
     *     fieldId: field.getId(),
     *     operator: univerAPI.Enum.BaseFilterOperator.IS_NOT,
     *     operand: 'done',
     *   }
     * });
     *
     * const view = fBaseTable.getViewByName('Grid');
     * const success = view.setFilter({
     *   conjunction: univerAPI.Enum.BaseFilterConjunction.AND,
     *   conditions,
     * });
     * console.log(success ? 'Filter set' : 'Set filter failed');
     * ```
     */
    setFilter(filter: IFilterConfig | null): boolean;
    /**
     * Get the view sort rules.
     * @returns {ISortConfig[]} The sort rules.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * console.log(view.getSort());
     * ```
     */
    getSort(): ISortConfig[];
    /**
     * Set the view sort rules.
     * @param {ISortConfig[]} sort The sort rules.
     * @returns {boolean} True if the sort was set, false if the sort was unchanged.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * const success = view.setSort([
     *   {
     *     fieldId: 'priority',
     *     direction: univerAPI.Enum.BaseSortDirection.ASC
     *   }
     * ]);
     * console.log(success ? 'Sort set' : 'Set sort failed');
     * ```
     */
    setSort(sort: ISortConfig[]): boolean;
    /**
     * Get the view group rules.
     * @returns {IGroupConfig[]} The group rules.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * console.log(view.getGroup());
     * ```
     */
    getGroup(): IGroupConfig[];
    /**
     * Set the view group rules.
     *
     * Group rules are view projection metadata. They do not mutate record
     * values or field definitions.
     *
     * @param group Group rules. Pass `[]` to clear grouping.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * const success = view.setGroup([
     *   {
     *     fieldId: 'status',
     *     direction: univerAPI.Enum.BaseSortDirection.ASC
     *   }
     * ]);
     * console.log(success ? 'Group set' : 'Set group failed');
     * ```
     */
    setGroup(group: IGroupConfig[]): boolean;
    /**
     * Get settings for a field in this view.
     * @param {string} fieldId The field id.
     * @returns {IViewFieldSetting} The field settings, or an empty object if no settings are set.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * const settings = view.getFieldSettings('status');
     * console.log(settings);
     * ```
     */
    getFieldSettings(fieldId: string): IViewFieldSetting;
    /**
     * Get visible fields in this view.
     * @returns {FBaseTableField[]} An array of visible fields in this view.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * console.log(view.getVisibleFields());
     * ```
     */
    getVisibleFields(): FBaseTableField[];
    /**
     * Show or hide a field in this view.
     *
     * This changes only the view-local field setting. The table field remains
     * present and other views are not affected.
     *
     * @param {string} fieldId The field id.
     * @param {boolean} visible True to show the field, false to hide it.
     * @returns {boolean} True if the visibility was changed, false if the visibility was unchanged.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * const success = view.setFieldVisible('progress', false);
     * console.log(success ? 'Field visibility changed' : 'Set field visibility failed');
     * ```
     */
    setFieldVisible(fieldId: string, visible: boolean): boolean;
    /**
     * Set a field width in this view.
     * @param {string} fieldId The field id.
     * @param {number} width The field width in pixels.
     * @returns {boolean} True if the width was set, false if the width was unchanged.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * const success = view.setFieldWidth('title', 240);
     * console.log(success ? 'Field width set' : 'Set field width failed');
     * ```
     */
    setFieldWidth(fieldId: string, width: number): boolean;
    /**
     * Move a field in this view.
     * @param {string} fieldId The field id.
     * @param {object} target Target position descriptor. Pass exactly one of `beforeFieldId` or `afterFieldId`.
     * @param {string} [target.beforeFieldId] Optional field id to move this field before.
     * @param {string} [target.afterFieldId] Optional field id to move this field after.
     * @returns {boolean} True if the field was moved, false if the field was already in the target position.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * const success = view.moveField('status', { afterFieldId: 'title' });
     * console.log(success ? 'Field moved' : 'Move field failed');
     * ```
     */
    moveField(fieldId: string, target: {
        beforeFieldId?: string;
        afterFieldId?: string;
    }): boolean;
    /**
     * Move this view relative to another view.
     * @param {object} target Target position descriptor. Pass exactly one of `beforeViewId` or `afterViewId`.
     * @param {string} [target.beforeViewId] Optional view id to move this view before.
     * @param {string} [target.afterViewId] Optional view id to move this view after.
     * @returns {boolean} True if the view was moved, false if the view was already in the target position.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * const success = view.move({ beforeViewId: 'calendar' });
     * console.log(success ? 'View moved' : 'Move view failed');
     * ```
     */
    move(target: {
        beforeViewId?: string;
        afterViewId?: string;
    }): boolean;
    /**
     * Delete this view.
     * @returns {boolean} True if the view was deleted, false if the view was already deleted.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * const success = view.delete();
     * console.log(success ? 'View deleted' : 'Delete view failed');
     * ```
     */
    delete(): boolean;
    /**
     * Get the projected rows and fields for this view.
     *
     * The projection is computed from the current table snapshot plus this
     * view's filter, sort, group, field order, visibility, and type-specific
     * config.
     *
     * @returns {BaseViewProjection} The projected rows and fields.
     * @example
     * ```ts
     * const fBase = univerAPI.getActiveBase();
     * const fBaseTable = fBase.getTableById('table-1');
     * const view = fBaseTable.getViewByName('Grid');
     * console.log(view.getProjection());
     * ```
     */
    getProjection(): BaseViewProjection;
    private _getView;
}
